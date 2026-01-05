import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, MapPin, Truck, Calendar } from "lucide-react";
import { PlantCard, SectionTitle } from "@/components/UI";

export default function Home() {
  const featuredPlants = [
    { name: "Avenues", image: "/images/hero-bg.jpg" },
    { name: "Bamboos", image: "/images/bamboo.jpg" },
    { name: "Bonsai", image: "/images/bonsai.jpg" },
    { name: "Olives", image: "/images/olives.jpg" },
    { name: "Palms", image: "/images/palm.jpg" },
    { name: "Topiaries", image: "/images/about-side.png" },
  ];

  const testimonials = [
    { name: "Kamala Devi", text: "Highly recommended nursery for plant lovers. This is the place to go when you want to buy plants and get advice about growing them. The choice is fantastic and really good value for money." },
    { name: "Ajay Govind", text: "Since May 2018 I met the owner of this nursery I am getting the regular descriptions of products ready for delivery online. The variety of plants are beyond imagination." },
    { name: "Ravi Kumar", text: "Gowthami nursery is famous for a wide range of plant variations with affordable prices. The quality of each and every plant is remarkable." },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/images/hero-bg.jpg"
          alt="Nursery Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            You plant hope in <br />
            <span className="text-primary-light">Gowthami nursery</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light italic">
            "In every walk with nature, one receives far more than they seek!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plants" className="bg-primary hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold transition-all text-lg">
              View All Plants
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-bold transition-all text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Plants Are Earth’s Poetry</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Exquisite & Decorative Plants
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Gowthami Nursery was established with the purest of intentions to support our livelihood but it eventually became our salvation. It didn’t take us too long to realize that gardening is the purest form of human pleasures.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We offer an impressive collection of plants, gardening tools and accessories. From beginners to seasoned gardeners, we’ll help to grow your space greener.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-gray-500 text-sm">Prioritizing quality over quantity and dedicated to growing an excellent assortment of superior plants.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-gray-500 text-sm">Over 25 years of expertise, laser-focused on providing plants with the best possible quality.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-side.png"
                alt="Gardening"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Featured Plants" 
            subtitle="Over the years, we’ve handled a diverse range of plant varieties that have catered to the curiosity of naturalists."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredPlants.map((plant) => (
              <PlantCard 
                key={plant.name} 
                name={plant.name} 
                image={plant.image}
                description="Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/plants" className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-green-800 transition-colors shadow-lg">
              HAVE A LOOK AT OUR COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px]">
              <Image
                src="/images/bamboo.jpg"
                alt="Why Gowthami"
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
            <div>
              <span className="text-primary font-bold uppercase text-sm mb-4 block">Best in the business</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Why Gowthami Nursery?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our excellent quality, healthy plants are freshly handpicked and are packed with the utmost care and foster. Our plants can adapt really fast to your garden and are resistant to pests and diseases.
              </p>
              <ul className="space-y-6">
                {[
                  "SUPERIOR-QUALITY PLANTS & SAPLINGS",
                  "WE VALUE YOUR SATISFACTION AS OUR PRIORITY",
                  "PLANTING ADVICE AND ASSISTANCE"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={28} />
                    <span className="text-gray-800 font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/about" className="text-primary font-extrabold text-lg hover:underline decoration-2 underline-offset-8">
                  LEARN MORE ABOUT US →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold uppercase text-sm mb-4 block">As Best As It Can Get</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-16">Our Working Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative pt-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <p className="text-gray-600">Contact us in advance before you make your journey here so we can make sure your preferred plant is available.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative pt-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visit</h3>
              <p className="text-gray-600">This is the fun part. Visit us in person to have a look at our exquisite and diverse range of plants and saplings.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative pt-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <Truck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transport</h3>
              <p className="text-gray-600">We guarantee safe-packaging that’s easy to shift and doesn’t affect the quality of the plants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What Our Clients Say" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                <div className="text-primary opacity-20 absolute top-4 right-8 text-6xl font-serif">“</div>
                <p className="text-gray-600 italic mb-6 relative z-10">{t.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {t.name[0]}
                  </div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to green up your space?</h2>
          <p className="text-xl mb-10 opacity-90">Visit us today or contact us for any assistance in choosing the right plant saplings for your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="tel:+919494499499" className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <Phone size={20} /> Call Now
            </Link>
            <Link href="/contact" className="bg-green-800 text-white border border-green-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-900 transition-colors">
              <Calendar size={20} /> Book a Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
