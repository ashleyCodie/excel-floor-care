"use client";
import GradientText from "./GradientText";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const handleDemoRequest = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-blue-600 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <GradientText
            colors={["#6b7280", "#FFFF", "#000", "#FFFF", "#6b7280"]}
            animationSpeed={3}
            showBorder={false}
            className="text-7xl md:text-6xl font-bold mb-6"
          >
            Excel Floor Care
          </GradientText>
          
          {/* Image added here */}
      <img 
  src="/logo2.png" 
  alt="Excel Floor Care Services" 
  className="mx-auto mb-8 rounded-lg shadow-xl w-48"
/>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Professional Grout, Tile & Carpet Cleaning Services
          </p>
          <p className="text-lg mb-10 text-blue-100">
            Transform your floors with our expert cleaning services. We bring
            back the shine and freshness to your home or business.
          </p>
          <Button
            size="lg"
            onClick={handleDemoRequest}
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
          >
            Request a Free Grout Demo
          </Button>
        </div>
      </div>
    </section>
  );
}