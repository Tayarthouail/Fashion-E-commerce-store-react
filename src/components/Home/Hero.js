import React from 'react'
import {useGlobalContext} from '../Globalcontext';
import Button from '../Button/Button';

import './Hero.css';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <article className="hero-info">
                    <h1>
                    Any Variation That <br /> 
                    Fits Your <br />
                    Imagination
                    </h1>
                    <p>
                    Our extensive selection of gems feature ten different shapes as well as 
                    a range of carat sizes to suit every preference
                    </p>
                    <Button color="black" backgroundColor="#fff" text="SHOW NOW" />
                
                </article>
            </div>
        </section> 
    )
}

export default Hero;
