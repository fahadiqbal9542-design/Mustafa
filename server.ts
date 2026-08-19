import express from 'express';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import AdmZip from 'adm-zip';

async function startServer() {
  const app = express();
  const PORT = 3000;
  const LEADS_FILE = path.join(process.cwd(), 'leads.json');

  app.use(express.json());

  // Ensure leads.json exists
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.get('/api/leads', (req, res) => {
    try {
      if (!fs.existsSync(LEADS_FILE)) {
        return res.json([]);
      }
      const data = fs.readFileSync(LEADS_FILE, 'utf-8');
      const leads = JSON.parse(data || '[]');
      res.json(leads);
    } catch (error) {
      console.error('Error reading leads:', error);
      res.status(500).json({ error: 'Failed to read leads database' });
    }
  });

  app.post('/api/leads', (req, res) => {
    try {
      const newLead = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...req.body,
      };

      let leads = [];
      if (fs.existsSync(LEADS_FILE)) {
        const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
        leads = JSON.parse(raw || '[]');
      }

      leads.unshift(newLead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
      res.json({ success: true, lead: newLead });
    } catch (error) {
      console.error('Error saving lead:', error);
      res.status(500).json({ error: 'Failed to save intelligence lead' });
    }
  });

  app.delete('/api/leads', (req, res) => {
    try {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
      res.json({ success: true, message: 'All intelligence records purged' });
    } catch (error) {
      console.error('Error purging leads:', error);
      res.status(500).json({ error: 'Failed to purge records' });
    }
  });

  app.get('/api/download-app', (req, res) => {
    try {
      const zip = new AdmZip();
      const distPath = path.join(process.cwd(), 'dist');
      
      if (fs.existsSync(distPath)) {
        zip.addLocalFolder(distPath);
      } else {
        zip.addLocalFolder(process.cwd(), '', (filePath) => {
          return !filePath.includes('node_modules') && !filePath.includes('.git') && !filePath.includes('dist');
        });
      }

      const zipBuffer = zip.toBuffer();
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="Mustafa-Portfolio-App.zip"');
      res.send(zipBuffer);
    } catch (error) {
      console.error('Error packaging app:', error);
      res.status(500).send('Failed to package application ZIP');
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mustafa Develops Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
