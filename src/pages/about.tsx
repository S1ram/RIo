import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-zinc-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Coffee roasting process"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Coffee Journey
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Where Passion Meets Perfection</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            At Rio Coffee, we believe in delivering an exceptional coffee experience through our commitment to quality, 
            sustainability, and the art of coffee crafting. Each cup tells a story of carefully selected beans, 
            expert roasting, and our passion for coffee excellence.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sourcing */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Thoughtful Sourcing</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We partner directly with farmers across Brazil and beyond, ensuring fair practices 
                and selecting only the finest beans for our blends.
              </p>
            </div>

            {/* Roasting */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Expert Roasting</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Our master roasters bring out the unique characteristics of each bean through 
                carefully crafted roasting profiles and meticulous attention to detail.
              </p>
            </div>

            {/* Quality Control */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Quality Assurance</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Every batch undergoes rigorous quality testing to ensure consistency and excellence 
                in every cup we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Sustainability</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We're committed to environmentally conscious practices throughout our supply chain, 
                from farm to cup. Our packaging is eco-friendly, and we support sustainable farming methods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Community</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We believe in building strong relationships with our farmers, customers, and local 
                communities. Your coffee experience is part of a larger story of connection and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-brown-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Rio Coffee Difference</h2>
          <p className="text-lg mb-8">
            Visit our locations or shop our selection of premium coffees online.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-brown-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-100 transition"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;