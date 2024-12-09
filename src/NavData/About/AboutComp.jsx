import React from 'react'
import { HeaderComp } from '../Header/HeaderComp'
import './About.css';


export function AboutComp() {
  return (
    <div className="about-page">
      <HeaderComp />
      <h1 className="about-header">About Page</h1>
      <p className="about-text">
        This is the about page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, enim vitae faucibus convallis, lectus ex fermentum ipsum, at faucibus arcu ex ac ipsum. Integer vel justo et neque faucibus varius. Sed id enim ac nulla ultricies sagittis. Duis vel libero at velit dignissim hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vel justo id libero finibus maximus.
      </p>
    </div>
  );
}
