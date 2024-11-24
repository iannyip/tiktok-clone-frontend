# Tiktok Clone

This is the frontend accompanying the [frontend](https://github.com/iannyip/tiktok-clone-frontend)

## Features

- Endless scrolling home page ("For You")
- You can upload videos. Since this was primarily a web app, uploading was really just a typical file upload
- You can like and unlike videos
- Implementation of user auth and user profiles where you can view their videos

## Technologies

- Frontend: React, CSS
- Backend: PostgreSQL, Firebase Storage, Node, Express
- Deployment: Heroku, Netlify
- Version Control: Git

## Thoughts

- Collaborative app development with Git and Github. Project management with daily scrums, trello, and careful documentation played a big part.
- Second project using React; implemented new React concepts such as state management with store.js to pass and manage data within the app.
- Uploading feature was a blocker - thinking about where to store uploaded videos (Mux vs Uppy libraries)
- Interesting takeaway was implementing the 'endless scroll' feature as a queue for efficient and smooth loading of videos.
- Key Concepts: Advanced State with store.js; useContext; useReducer; CORS
- Business Focus: Project Management

## Getting started

Get both the frontend and backend running.

Note that backend server runs on http://localhost:3004

## Development

```
nvm use 16
npm install
npm start
```

View the project at http://localhost:3000.
