"use client";

import { useState } from "react";
import { PlantCard, SectionTitle } from "@/components/UI";
import { Search, Filter } from "lucide-react";

export default function PlantsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Avenues", "Bamboos", "Bonsai", "Olives", "Palms", "Topiaries"];

  const plants = [
    { name: "Royal Palm", category: "Palms", image: "/images/palm.jpg" },
    { name: "Japanese Maple", category: "Bonsai", image: "/images/bonsai.jpg" },
    { name: "Golden Bamboo", category: "Bamboos", image: "/images/bamboo.jpg" },
    { name: "Ancient Olive", category: "Olives", image: "/images/olives.jpg" },
    { name: "Boulevard Avenue", category: "Avenues", image: "/images/avenues.png" },
    { name: "Foxtail Palm", category: "Palms", image: "/images/palm.jpg" },
    { name: "Ficus Bonsai", category: "Bonsai", image: "/images/bonsai.jpg" },
    { name: "Black Bamboo", category: "Bamboos", image: "/images/bamboo.jpg" },
    { name: "Syzygium Topiary", category: "Topiaries", image: "/images/topiaries.jpg" },
  ];

  const filteredPlants = activeCategory === "All" 
    ? plants 
    : plants.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plant Collection</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Explore our diverse range of high-quality plants, handpicked and nurtured for your garden.</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search plants..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plant Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlants.map((plant, i) => (
              <PlantCard 
                key={i} 
                name={plant.name} 
                image={plant.image} 
                description={`${plant.category} variety. Healthy and robust plant ready for your landscape.`}
              />
            ))}
          </div>
          
          {filteredPlants.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No plants found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

