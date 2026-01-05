import Image from "next/image";
import { SectionTitle } from "@/components/UI";

export default function GalleryPage() {
  const images = [
    { src: "/images/hero-bg.jpg", title: "Nursery Overview" },
    { src: "/images/about-side.png", title: "Gardening Tools" },
    { src: "/images/bamboo.jpg", title: "Bamboo Grove" },
    { src: "/images/bonsai.jpg", title: "Bonsai Collection" },
    { src: "/images/olives.jpg", title: "Olive Trees" },
    { src: "/images/palm.jpg", title: "Palm Varieties" },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Take a virtual tour of our nursery and witness the beauty of nature we preserve.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Want to see it in person?</h2>
          <p className="text-lg text-gray-600 mb-10">We invite you to visit our nursery in Kadiam to experience our vast collection firsthand.</p>
          <div className="flex justify-center">
            <a 
              href="https://goo.gl/maps/placeholder" 
              target="_blank" 
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-green-800 transition-colors shadow-lg"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

