# Portret Duszy

## Overview
A Flask web application with a clean, modern interface. This project provides a foundation for building web applications with Python and Flask.

## Project Structure
```
backend/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── templates/
│   └── index.html     # Main HTML template
└── static/
    ├── css/
    │   └── style.css  # Styling
    └── js/
        └── app.js     # Frontend JavaScript
```

## Technology Stack
- **Backend**: Flask 3.0.0 (Python web framework)
- **Server**: Gunicorn 21.2.0 (WSGI HTTP Server)
- **Frontend**: HTML5, CSS3, JavaScript
- **Language**: Python 3.11

## Running Locally
The Flask development server runs automatically via the "Start Flask App" workflow:
```bash
cd backend && python app.py
```

The application will be available at `http://0.0.0.0:5000`

## API Endpoints
- `GET /` - Main application page
- `GET /api/health` - Health check endpoint (returns JSON status)

## Deployment
This application is configured for autoscale deployment using Gunicorn:
```bash
cd backend && gunicorn --bind=0.0.0.0:5000 --reuse-port app:app
```

## Recent Changes
- **2024-12-07**: Initial project setup with Flask backend and basic frontend
- Configured deployment settings for production
- Set up workflow for development server

## Development Notes
- The app binds to `0.0.0.0:5000` for Replit compatibility
- Uses Jinja2 templating for HTML rendering
- Static assets served from `backend/static/`
