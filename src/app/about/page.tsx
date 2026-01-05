import Image from "next/image";
import { SectionTitle } from "@/components/UI";
import { CheckCircle2, Award, Users, Sprout, Calendar } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: <Calendar className="w-8 h-8" />, label: "Years of Experience", value: "25+" },
    { icon: <Sprout className="w-8 h-8" />, label: "Plant Varieties", value: "500+" },
    { icon: <Users className="w-8 h-8" />, label: "Happy Clients", value: "10,000+" },
    { icon: <Award className="w-8 h-8" />, label: "Awards Received", value: "50+" },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Rooted in Passion, Growing with Excellence Since 1992</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-side.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionTitle title="Our Journey" subtitle="Gowthami Nursery has grown from humble beginnings with a mission to let the world know about how trees save those who protect them with genuine intentions." />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Gowthami Nursery was established with the purest of intentions to support our livelihood but it eventually became our salvation. It didn’t take us too long to realize that gardening is the purest form of human pleasures and we owe all our name and fame to our plants.
                </p>
                <p>
                  We offer an impressive collection of plants, gardening tools and accessories. Our nursery believes that everyone should give gardening a try, and we’re here to help make that happen. From beginners to seasoned gardeners, we’ll help to grow your space greener.
                </p>
                <p>
                  We’ve managed to put together a diverse inventory of plants to best serve our clients, offering inspiration and helping them transform their landscapes along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Sprout size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gowthami Nursery prioritizes quality over quantity. Having realized the virtue and honour that plants add to our lives, we’ve dedicated to growing an excellent assortment of superior plants and providing our customers with the best service possible. To create a stimulating, safe and rewarding environment for the future generations through plants.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 25 years of expertise, we’re laser-focused on providing plants with the best possible quality to show our devotion to mother nature and to enrich and transform our clients’ environment, health and well being with plants. We love giving back to the communities in which we live and work.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Stats Section - Replaced Calendar with Sprout or similar if not found */}
       <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">25+</p>
              <p className="text-lg opacity-80 uppercase tracking-widest">Years</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-80 uppercase tracking-widest">Varieties</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">10k+</p>
              <p className="text-lg opacity-80 uppercase tracking-widest">Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-lg opacity-80 uppercase tracking-widest">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dignitaries section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="With Legendary Dignitaries" 
            subtitle="Over the years, Gowthami Nursery has received numerous recognitions and acclaims from several eminent personalities for the good work we’ve been doing." 
            centered 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all">
             <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl font-bold text-gray-400 border border-dashed border-gray-200 uppercase">Partner 1</div>
             <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl font-bold text-gray-400 border border-dashed border-gray-200 uppercase">Partner 2</div>
             <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl font-bold text-gray-400 border border-dashed border-gray-200 uppercase">Partner 3</div>
             <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl font-bold text-gray-400 border border-dashed border-gray-200 uppercase">Partner 4</div>
          </div>
        </div>
      </section>
    </main>
  );
}

