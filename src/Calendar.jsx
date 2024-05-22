import React, { useEffect } from 'react';
import './Calendar.css'

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendar">
        <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/rohandemerde/haircut?text_color=362b27&primary_color=9a7b5f"
        ></div>
    </section>
  );
};

export default CalendlyWidget;
