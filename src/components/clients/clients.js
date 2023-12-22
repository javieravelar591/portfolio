import React from 'react'
import './clients.css';
import { Element } from 'react-scroll';

export const Clients = () => {
  return (
    <Element name='clients'>
        <section id='clients'>
            <div className='intro-content'>
                <h4 className='clients-header'>Clients</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod ligula a porta varius. 
                  Ut dictum consequat dolor ac euismod. Nam volutpat, felis et pretium vehicula, ante nisi consequat ex,
                </span>
            </div>
        </section>
    </Element>
  )
}

export default Clients;
