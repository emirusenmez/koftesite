'use client';

import Image from 'next/image';

interface MenuItem {
  title: string;
  image: string;
  description: string;
  weight: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'KÖFTE',
    image: '/images/kofte.jpg',
    description: 'AÇIKLAMA',
    weight: '180g',
    price: '350₺',
  },
  {
    title: 'KUZU YÜREK',
    image: '/images/kuzu-yurek.jpg',
    description: 'AÇIKLAMA',
    weight: '200g',
    price: '350₺',
  },
  {
    title: 'KUZU BÖBREK',
    image: '/images/kuzu-bobrek.jpg',
    description: 'AÇIKLAMA',
    weight: '200g',
    price: '350₺',
  },
  {
    title: 'KUZU CİĞER',
    image: '/images/kuzu-ciger.jpg',
    description: 'AÇIKLAMA',
    weight: '180g',
    price: '400₺',
  },
  {
    title: 'DANA BİFTEK',
    image: '/images/dana-biftek.jpg',
    description: 'AÇIKLAMA',
    weight: '150g',
    price: '400₺',
  },
  {
    title: 'KUZU ÇÖPŞİŞ',
    image: '/images/kuzu-copses.jpg',
    description: 'AÇIKLAMA',
    weight: '180g',
    price: '400₺',
  },
];

export default function Menu() {
  return (
    <section id="grills" className="bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-center">
          <div className="w-16">
            <Image
              src="/images/leaf-decoration.png"
              alt="Dekoratif yaprak"
              width={64}
              height={24}
              className="opacity-70"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {menuItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-[4/3] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 font-serif">{item.title}</h3>
              <p className="text-gray-400 mb-2">{item.description}</p>
              <p className="text-gray-400 mb-3">{item.weight}</p>
              <p className="text-red-500 text-2xl font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 