import { CheckCircle } from "lucide-react"

export default function GroutTileCleaning() {
  const benefits = [
    "Deep cleaning removes dirt, mold, and mildew",
    "Restores original color and brightness",
    "Extends the life of your tile and grout",
    "Eco-friendly cleaning solutions",
    "Professional-grade equipment",
    "Sealing services available",
  ]

  return (
    <section id="grout-tile" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Grout & Tile Cleaning</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over time, tile and grout accumulate dirt, grime, and bacteria that regular mopping can't remove. Our
                professional grout and tile cleaning service uses specialized equipment and techniques to deep clean and
                restore your floors to their original beauty.
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
                src="/professional-grout-and-tile-cleaning-service.jpg"
                alt="Grout and tile cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
