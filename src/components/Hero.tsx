import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Lezzetli köfte"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Geleneksel Lezzetin Adresi
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            1960&apos;dan beri aynı lezzet, aynı kalite
          </p>
          <a
            href="#menu"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Menüyü İncele
          </a>
        </div>
      </div>
    </section>
  );
} 