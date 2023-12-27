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
                        I am a recent graduate from the University of Minnesota with a Bachelor's degree
                        in Computer Science.
                    </span>
                    <h2 className='xp-header'>My experience</h2>
                    <span>
                        I am a recent graduate from the University of Minnesota with a Bachelor's degree
                        in Computer Science.
                    </span>
                    <h2>Skills</h2>
                    <span>
                        I am a recent graduate from the University of Minnesota with a Bachelor's degree
                        in Computer Science.
                    </span>
                    <h2>Some of my interests</h2>
                    <span>
                        I am a recent graduate from the University of Minnesota with a Bachelor's degree
                        in Computer Science.
                    </span>
              </div>
          </section>
      </Element>
    );
}

export default About;