import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page requested does not exist.
        <Link to="/"> Go back to homepage </Link>
      </p>
    </div>
  );
};

export default NotFound;
