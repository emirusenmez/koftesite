'use client';

import Image from 'next/image';

interface MenuItem {
  title: string;
  image: string;
  description: string;
  weight: string;
  price: string;
}

const izgaraItems: MenuItem[] = [
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
];

const kebapItems: MenuItem[] = [
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

const corbaItems: MenuItem[] = [
  {
    title: 'MERCİMEK ÇORBASI',
    image: '/images/mercimek.jpg',
    description: 'AÇIKLAMA',
    weight: '300ml',
    price: '80₺',
  },
  {
    title: 'PAÇA ÇORBASI',
    image: '/images/paca.jpg',
    description: 'AÇIKLAMA',
    weight: '300ml',
    price: '100₺',
  },
];

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  id: string;
}

function MenuSection({ title, items, id }: MenuSectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-serif text-center text-yellow-500 mb-16">{title}</h2>
        <div className="mb-8 flex justify-center">
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
          {items.map((item, index) => (
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

export default function Menu() {
  return (
    <div className="bg-black text-white">
      <MenuSection title="IZGARALAR" items={izgaraItems} id="grills" />
      <MenuSection title="KEBAPLAR" items={kebapItems} id="kebabs" />
      <MenuSection title="ÇORBALAR" items={corbaItems} id="soups" />
    </div>
  );
} 