import { useState } from "react"
import { CheckCircle } from "lucide-react";
import SplitText from "./SplitText";

export default function GroutTileCleaning() {
  const [key, setKey] = useState(0);

  const benefits = [
    "Deep cleaning removes dirt, mold, and mildew",
    "Restores original color and brightness",
    "Extends the life of your tile and grout",
    "Eco-friendly cleaning solutions",
    "Professional-grade equipment",
    "Sealing services available",
  ];

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000);
  };

  const hoverIntensity = 0.1;
  const enableHover = true;

  return (
    <section id="grout-tile" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SplitText
            text=" Grout & Tile Cleaning"
            className="text-4xl font-bold text-center mb-8 text-blue-600"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over time, tile and grout accumulate dirt, grime, and bacteria
                that regular mopping can't remove. Our professional grout and
                tile cleaning service uses specialized equipment and techniques
                to deep clean and restore your floors to their original beauty.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/grout1.jpg"
                alt="Grout and tile cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
