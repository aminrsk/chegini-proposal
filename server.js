import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3008;
const CONTENT_FILE = path.join(__dirname, 'proposal-content.json');

app.use(express.json({ limit: '10mb' }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Initialize content file if it doesn't exist
if (!fs.existsSync(CONTENT_FILE)) {
  const defaultContent = {
    lastUpdated: new Date().toISOString(),
    content: {}
  };
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(defaultContent, null, 2));
  console.log('Created default proposal-content.json');
}

// Get content
app.get('/api/content', (req, res) => {
  try {
    const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'));
    res.json(content);
  } catch (error) {
    console.error('Error reading content:', error);
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// Save content
app.post('/api/content', (req, res) => {
  try {
    const newContent = {
      lastUpdated: new Date().toISOString(),
      content: req.body
    };
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(newContent, null, 2));
    console.log('Content saved successfully at', newContent.lastUpdated);
    res.json({ success: true, lastUpdated: newContent.lastUpdated });
  } catch (error) {
    console.error('Error saving content:', error);
    res.status(500).json({ error: 'Failed to save content' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Content API server running on port ${PORT}`);
});

