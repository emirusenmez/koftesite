'use client';

import Image from 'next/image';

interface MenuItem {
  title: string;
  image: string;
  description?: string;
  price?: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'KÖFTE',
    image: '/images/kofte.jpg',
    description: 'Özel baharatlarla marine edilmiş el yapımı köfte',
  },
  {
    title: 'KUZU YÜREK',
    image: '/images/kuzu-yurek.jpg',
    description: 'Özenle hazırlanmış ızgara kuzu yürek',
  },
  {
    title: 'KUZU BÖBREK',
    image: '/images/kuzu-bobrek.jpg',
    description: 'Özel marine edilmiş ızgara kuzu böbrek',
  },
];

export default function Menu() {
  return (
    <section id="grills" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif text-center mb-16 text-yellow-500">IZGARALAR</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden aspect-square mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-serif text-center text-yellow-500 mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-gray-300 text-center">{item.description}</p>
              )}
              {item.price && (
                <p className="text-yellow-500 text-center mt-2 text-xl">{item.price}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 