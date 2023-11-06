import PokeDeck from './components/PokeDeck';
import dynamic from 'next/dynamic';

export default function Page() {
  return (
    <div className="h-full w-full p-5 my-10 text-center">
      <h1 className="b-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl mb-10">
        Kanto Region Pokemon
      </h1>
      <PokeDeck num={151} />
    </div>
  );
}
