import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <main className="flex-1 ml-64 bg-black min-h-screen">
        <Menu />
      </main>
    </div>
  );
}
