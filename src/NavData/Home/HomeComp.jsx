import React from 'react'
import { HeaderComp } from '../Header/HeaderComp'
import './Home.css';

export function HomeComp() {
  return (
    <div className="home-comp">
      <HeaderComp />
      <h1>Welcome to Home Component</h1>
      <p>This is the Home Component.</p>
      <p>You can add your own content here.</p>
      <button className="cta-btn">Click Me</button>
    </div>
  );
}
