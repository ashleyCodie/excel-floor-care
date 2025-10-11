import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export default function Reviews() {
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
      date: "December 2024",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The team was courteous and efficient. They transformed our dirty grout lines into something beautiful. Worth every penny!",
      date: "November 2024",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Excellent service from start to finish. They explained the process clearly and delivered exceptional results. Very satisfied!",
      date: "October 2024",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
