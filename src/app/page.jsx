'use client';
import Image from 'next/image';
import Hero from '../components/Hero';
import Middle from '../components/Middle';
import './globals.css';

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Middle />
      </div>
    </div>
  );
}
