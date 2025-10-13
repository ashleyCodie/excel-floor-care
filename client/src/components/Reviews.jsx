import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import SplitText from "./SplitText";

export default function Reviews() {
  const [key, setKey] = useState(0);
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excel Floor Care did an amazing job on our tile and grout! The floors look brand new. Highly recommend their services!",
      date: "January 2025",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional, punctual, and the results were outstanding. Our carpets have never looked better. Will definitely use them again.",
      date: "July 2025",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The team was courteous and efficient. They transformed our dirty grout lines into something beautiful. Worth every penny!",
      date: "November 2025",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Excellent service from start to finish. They explained the process clearly and delivered exceptional results. Very satisfied!",
      date: "October 2025",
    },
  ];

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000);
  };

  return (
   <section id="reviews" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <img
      src="/logo2.png"
      alt="Excel Floor Care Services"
      className="mx-auto mb-8 rounded-lg shadow-xl w-42"
    />
    
    <div className="max-w-5xl mx-auto">
      {/* Wrap SplitText in flex container */}
      <div className="flex justify-center mb-8">
        <SplitText
          text="What Our Customers Say"
          className="text-4xl font-bold text-blue-600"
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
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-gray-900">
                  {review.name}
                </span>
                <span className="text-gray-500">{review.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
