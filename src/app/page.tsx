import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="h-24" /> {/* Header için boşluk */}
      <Menu />
    </main>
  );
}
