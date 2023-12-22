import React from 'react';
import './portfolio.css';
import { Element } from 'react-scroll';

export const Portfolio = () => {
  return (
    <Element name='portfolio'>
      <section id='portfolio'>
        <div className='intro-content'> {/* comeback and change content name */}
          <h1 className='project-header'>Projects</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod ligula a porta varius. 
            Ut dictum consequat dolor ac euismod. Nam volutpat, felis et pretium vehicula, ante nisi consequat ex, 
          </span>
        </div>
      </section>
    </Element> 
  )
}

export default Portfolio;