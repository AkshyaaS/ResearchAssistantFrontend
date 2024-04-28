// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


function Root() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      ReactDOM.hydrate( // Use ReactDOM.hydrate for initial rendering
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
  }, []);

  return null; // Return nothing to avoid rendering on the server
}

export default Root;
