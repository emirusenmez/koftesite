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
    image: '/images/kofte.png',
    description: 'AÇIKLAMA',
    weight: '180g',
    price: '350₺',
  },
  {
    title: 'KUZU YÜREK',
    image: '/images/kuzuyurek.png',
    description: 'AÇIKLAMA',
    weight: '200g',
    price: '350₺',
  },
  {
    title: 'KUZU BÖBREK',
    image: '/images/kuzubobrek.png',
    description: 'AÇIKLAMA',
    weight: '200g',
    price: '350₺',
  },
];

const kebapItems: MenuItem[] = [
  {
    title: 'KUZU CİĞER',
    image: '/images/kuzuciger.png',
    description: 'AÇIKLAMA',
    weight: '180g',
    price: '400₺',
  },
  {
    title: 'KUZU ÇÖPŞİŞ',
    image: '/images/kuzucopsis.png',
    description: 'AÇIKLAMA',
    weight: '180g',
    price: '400₺',
  },
];

const ekmekArasiItems: MenuItem[] = [
  {
    title: 'EKMEK ARASI KÖFTE',
    image: '/images/ekmekarasikofte.png',
    description: 'AÇIKLAMA',
    weight: '150g',
    price: '160₺',
  },
  {
    title: 'EKMEK ARASI BÖBREK',
    image: '/images/ekmekarasibobrek.png',
    description: 'AÇIKLAMA',
    weight: '150g',
    price: '160₺',
  },
  {
    title: 'EKMEK ARASI ÇÖPŞİŞ',
    image: '/images/ekmekarasicopsis.png',
    description: 'AÇIKLAMA',
    weight: '150g',
    price: '160₺',
  },
  {
    title: 'EKMEK ARASI CİĞER',
    image: '/images/ekmekarasikuzuciger.png',
    description: 'AÇIKLAMA',
    weight: '150g',
    price: '160₺',
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
      <div className="max-w-4xl mx-auto px-4">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
      <MenuSection title="EKMEK ARASI" items={ekmekArasiItems} id="sandwiches" />
    </div>
  );
} 