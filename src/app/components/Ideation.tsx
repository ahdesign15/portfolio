import React from 'react';

export function Ideation() {
  const principles = [
    'Simplify first-time discovery flows',
    'Reorganize content for progressive learning',
    'Create a scalable visual identity',
    'Balance beginner friendliness with expert utility'
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-8">Ideation & Design Principles</h2>
        <p className="text-base md:text-lg text-black/70 mb-12">
          Our approach was guided by these strategic priorities:
        </p>
        
        <ul className="space-y-4">
          {principles.map((principle, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-black/30 flex-shrink-0">•</span>
              <span className="text-base md:text-lg text-black/70">{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
