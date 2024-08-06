import React from 'react';
import Section from './Section';
import ImageTextSection from './ImageTextSection';

function About() {
  return (
    <Section id="about" title="About me">
      <div>
        <ImageTextSection
          imageSrc="/jess-bailey-q10VITrVYUM-unsplash.jpg"
          title=""
          text="I am a Software Engineer with extensive experience in full-stack development and game programming.
         My expertise spans several technologies and tools, including React, TypeScript, Node.js, C#, and Unity.
        I excel at delivering high-quality solutions both independently and collaboratively."
        />
      </div>

      <div>
        <ImageTextSection
          imageSrc="/XAMK.jpg"
          title=""
          text="I hold a Bachelor's Degree in Information Technology from South-Eastern Finland University of Applied Sciences,
         where I graduated with a GPA of 4.08. My educational background,
        combined with hands-on experience, 
        has provided me with a strong foundation in software engineering."
          imagePosition="left"
        />
      </div>
    </Section>
  );
}

export default About;
