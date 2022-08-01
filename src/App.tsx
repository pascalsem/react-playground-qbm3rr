import React from 'react';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>Catalog</h1>
      <h2>Available products</h2>
      <div>
        <div className="row">
          <span>Product #1 = pen (blue ink)</span>
          <button className="action" value="1">
            Select
          </button>
        </div>
        <div className="row">
          <span>Product #2 = paper (recycled)</span>
          <button className="action" value="2">
            Select
          </button>
        </div>
        <div className="row">
          <span>Product #3 = ruler (metric units)</span>
          <button className="action" value="3">
            Select
          </button>
        </div>
      </div>
      <h2>Selected product</h2>
      <div>No product</div>
    </div>
  );
};

export default App;
