import { useState } from "react";
import SplitText from "./SplitText";

export default function About() {
  const [key, setKey] = useState(0);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
           <SplitText
            text="About Excel Floor Care"
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
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At Excel Floor Care, we specialize in professional floor cleaning
              services that restore the beauty and cleanliness of your floors.
              With years of experience in the industry, we've built a reputation
              for excellence and customer satisfaction.
            </p>
            <p>
              Our team of trained professionals uses state-of-the-art equipment
              and eco-friendly cleaning solutions to deliver outstanding
              results. Whether it's grout and tile cleaning or carpet
              restoration, we treat every project with the same level of care
              and attention to detail.
            </p>
            <p>
              We understand that your floors are a significant investment, and
              we're committed to helping you maintain them in pristine
              condition. Our services are designed to extend the life of your
              flooring while creating a healthier, cleaner environment for you
              and your family.
            </p>
            <p>
              Excel Floor Care, was founded in 1995. Over the years, we have
              built a reputation for reliability, professionalism, and
              outstanding customer service. We are proud to be a family owned
              and operated business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
