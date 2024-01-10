// Results.js

import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="results-container">
      {results.map((result) => (
        <div key={result.data[0].nasa_id} className="result-item">
          <a
            href={result.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {result.data[0].media_type === 'image' ? (
              <img
                src={result.links[0].href}
                alt={result.data[0].title}
                className="result-image"
              />
            ) : (
              <video
                controls
                width="100%"
                height="100%"
                className="result-video"
              >
                <source src={result.links[0].href} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </a>
          <p>{result.data[0].title}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;