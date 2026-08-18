# Movie Browser

A simple React single-page app for browsing movies. It includes movie cards, search, loading states, and reducer-based state management.

## Live Demo

https://wizardly-ritchie-138df8.netlify.app/

## Tech Stack

* React
* JavaScript
* Create React App
* Reducer-based state management
* Movie API

## Project Structure

```text
src/
├── apis/
│   └── apis.js
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Logo.jsx
│   ├── loader/
│   │   └── Loader.jsx
│   └── movies/
│       ├── Movies.jsx
│       ├── MovieCard.jsx
│       └── SearchBar.jsx
├── data/
│   └── initialState.js
├── reducers/
│   ├── reducer.js
│   └── eventReducer.js
├── App.js
├── index.js
└── index.css
```

## Features

* Browse movies
* Search and filter movies
* Movie card UI
* Loading state
* API-based movie data
* Reducer-based state management
* Responsive interface

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm start
```

Open `http://localhost:3000`.

### Tests

```bash
npm test
```

### Production Build

```bash
npm run build
```

## How It Works

`index.js` starts the React application and mounts `App.js`.

`App.js` composes the main UI. `Movies.jsx` fetches movie data through the API module and renders individual `MovieCard` components.

Application state is managed using reducers, with the initial state defined in `src/data/initialState.js`.
