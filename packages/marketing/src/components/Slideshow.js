import React, { useState } from 'react';

// Slide component
const Slide = ({ content }) => (
    <div style={{ width: '100%', height: '100%' }}>
        {content}
    </div>
);

// Slideshow component
const Slideshow = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slideshow">
            <button onClick={prevSlide}>Previous Slide</button>
            <button onClick={nextSlide}>Next Slide</button>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && <Slide content={slide} />}
                    </div>
                );
            })}
        </section>
    );
};

export default Slideshow;
