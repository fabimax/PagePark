"use client";

import LandingPageGenerator from '../components/LandingPageGenerator';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="min-h-screen py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          PagePark.it
        </h1>
        <LandingPageGenerator />
      </div>
    </main>
  );
}