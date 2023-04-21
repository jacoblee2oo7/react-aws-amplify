import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Get the parallax container element
const parallax = document.querySelector(".parallax");

// Add an event listener to scroll the parallax layers
parallax.addEventListener("scroll", function () {
  // Get the scroll position of the parallax container
  const scrollTop = parallax.scrollTop;

  // Get the parallax layer elements
  const layers = parallax.querySelectorAll(".layer");

  // Loop through each layer and update its position
  for (let i = 0; i < layers.length; i++) {
    // Get the current layer element
    const layer = layers[i];

    // Get the depth of the layer (the z-index value)
    const depth = layer.getAttribute("data-depth");

    // Calculate the movement of the layer based on the depth and scroll position
    const movement = -(scrollTop * depth);

    // Apply a CSS transform to translate the layer vertically
    layer.style.transform = `translate3d(0, ${movement}px, 0)`;
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
