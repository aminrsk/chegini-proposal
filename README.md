# Chegini Mortgage AI Platform - Partnership Proposal

An interactive React-based partnership proposal presentation with dynamic calculations and beautiful UI.

## Prerequisites

Docker installed on your system.

## Quick Start with Docker (Recommended)

```bash
# Navigate to project directory
cd /home/amin/dev/chegini-proposal

# Build and start the container
docker-compose up --build
```

The application will be available at: **http://localhost:3007**

To stop the container:
```bash
docker-compose down
```

## Alternative: Local Installation

If you prefer to run without Docker:

### Step 1: Install Node.js in WSL (Ubuntu)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Install and Run

```bash
npm install
npm run dev
```

## Project Structure

```
chegini-proposal/
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind CSS imports
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration (port 3007)
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Features

- **Executive Summary**: Business objectives, revenue targets, and competitive advantages
- **Partnership Options**: Interactive equity split calculator with 2 models
- **Revenue Model**: Detailed financial projections and scenarios
- **System Workflow**: Complete process flow and responsibilities
- **Timeline & Milestones**: Implementation roadmap with KPIs

## Technology Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Available Scripts

- `npm run dev`: Start development server on port 3007
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Interactive Features

The proposal includes interactive sliders that allow you to:
- Adjust partnership equity splits (Option 1)
- Configure phased revenue splits (Option 2)
- See real-time calculations of per-deal revenue distribution

## Customization

To edit the proposal content, modify `src/App.jsx`. The component is organized into sections:
- `ExecutiveSummary`
- `PartnershipStructure`
- `RevenueModel`
- `SystemWorkflow`
- `Timeline`

---

**Prepared by**: Amin Rastikerdar  
**Date**: November 10, 2025

