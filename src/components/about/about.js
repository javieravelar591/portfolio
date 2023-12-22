import React from 'react';
import './about.css';
import { Element } from 'react-scroll';

export const About = () => {
    return (
      <Element name='aboutme'>
          <section id='aboutme'>
              <div className='intro-content'>
                  <h1 className='about-header'>A little bit about me!</h1>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod ligula a porta varius. 
                    Ut dictum consequat dolor ac euismod. Nam volutpat, felis et pretium vehicula, ante nisi consequat ex, 
                  </span>
              </div>
          </section>
      </Element>
      );
}

export default About;