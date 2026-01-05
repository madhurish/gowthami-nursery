import Image from "next/image";

interface PlantCardProps {
  name: string;
  image: string;
  description?: string;
}

export const PlantCard = ({ name, image, description }: PlantCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        {description && <p className="text-gray-600 text-sm line-clamp-3">{description}</p>}
        <button className="mt-4 text-primary font-semibold hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export const SectionTitle = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-primary mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

