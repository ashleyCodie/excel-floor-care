import { useState } from "react";
import { CheckCircle } from "lucide-react";
import SplitText from "./SplitText";

export default function CarpetCleaning() {
  const [key, setKey] = useState(0);

  const benefits = [
    "Removes deep-seated dirt and allergens",
    "Eliminates odors and stains",
    "Fast drying time",
    "Safe for pets and children",
    "Improves indoor air quality",
    "Extends carpet lifespan",
    "Zero Residue",
    "Safe for kids, pets, and the whole family",
  ];

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000);
  };

  return (
    <section id="carpet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SplitText
            text=" Carpet Cleaning"
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
            <div className="order-2 md:order-1 rounded-lg overflow-hidden">
              <img
                src="/carpet4.jpg"
                alt="Carpet cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our professional carpet cleaning service goes beyond surface
                cleaning to extract embedded dirt, allergens, odors, and
                bacteria. Using powerful, eco-friendly carpet cleaning
                solutions, we restore your carpets to a fresh, clean state while
                protecting the fibers. Leaving your carpet looking brand new.
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
          </div>
        </div>
      </div>
    </section>
  );
}
