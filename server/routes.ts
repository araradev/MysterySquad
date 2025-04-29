import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to serve video if it exists
  app.get('/api/video', (req, res) => {
    const videoPath = path.join(process.cwd(), 'public', 'video', 'couple-background.mp4');
    
    // Check if the video file exists
    if (fs.existsSync(videoPath)) {
      res.sendFile(videoPath);
    } else {
      res.status(404).json({ message: 'Video not found' });
    }
  });

  // Create public directory for serving static assets if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  const videoDir = path.join(publicDir, 'video');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
  }

  const httpServer = createServer(app);

  return httpServer;
}
