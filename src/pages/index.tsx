import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "../data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/rio-logo-bg.jpg"
            alt="Fresh brewed coffee"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
            </h1>
            <p className="mb-8 text-xl">
              Premium Brazilian Coffee, Crafted with Passion Since 2020
            </p>
            <Link
              href="/products"
              className="rounded-full bg-brown-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-brown-700"
            >
              Explore Our Coffee
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Featured Coffee Selection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedProducts().map((product) => (
              <div
                key={product.id}
                className="bg-zinc-50 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brown-600 dark:text-brown-400">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-brown-600 text-white px-4 py-2 rounded-md hover:bg-brown-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quality Testing */}
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Rigorous Quality Testing</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Every batch undergoes comprehensive testing to ensure consistent excellence in taste, 
                aroma, and overall quality.
              </p>
            </div>

            {/* Sustainable Practices */}
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Sustainable Sourcing</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                We partner with farms that prioritize sustainable practices and fair labor conditions, 
                ensuring a positive impact on communities.
              </p>
            </div>

            {/* Expert Roasting */}
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Expert Roasting</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Our master roasters bring decades of experience to craft the perfect roast profile 
                for each variety of bean.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/process"
              className="inline-flex items-center text-brown-600 hover:text-brown-700 dark:text-brown-400 dark:hover:text-brown-300"
            >
              Learn more about our process
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}