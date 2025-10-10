"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const photos = [
    {
      url: "/clean-tile-floor-before-and-after.jpg",
      alt: "Clean tile floor transformation",
    },
    {
      url: "/grout-cleaning-before-and-after.jpg",
      alt: "Grout cleaning results",
    },
    {
      url: "/carpet-cleaning-professional-service.jpg",
      alt: "Professional carpet cleaning",
    },
    {
      url: "/bathroom-tile-and-grout-cleaning.jpg",
      alt: "Bathroom tile cleaning",
    },
    {
      url: "/kitchen-floor-tile-cleaning.jpg",
      alt: "Kitchen floor cleaning",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <section id="photos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Work</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={photos[currentIndex].url || "/placeholder.svg"}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
