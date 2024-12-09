import React, { useState, useEffect } from 'react';
import './Error.css';

export function ErrorComp() {

  return (
    <div className="error-page">
      <div className="error-overlay"></div>
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-heading">Oops!! Page Not Found😭😢</h2>
        <p className="error-description">
          Oops! It looks like the page you're trying to reach doesn't exist anymore,<br />
          or the URL might be incorrect.
        </p>

        <ul className="error-tips">
          <li>
            <p>👋</p>
            Need help? Visit our: <a href="/" className="error-support-link">Support Page:</a>.
          </li>
        </ul>

        <a href="/" className="error-link">
          <p>Better luck next time🤞</p>
          Go Back to Homepage⬅️
        </a>
      </div>
    </div>
  );
}
