import React, { useState } from 'react';
import Image from 'next/image';
import { products, Product } from '../data/products';

const categories: Product['category'][] = ['coffee', 'equipment', 'accessories'];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Product['category']>('coffee');

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/products-hero.jpg"
          alt="Coffee products showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Products
          </h1>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-brown-600 text-white'
                  : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200'
              } transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                  <button className="bg-brown-600 text-white px-4 py-2 rounded hover:bg-brown-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Assurance */}
      <section className="bg-zinc-50 dark:bg-black py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Our Quality Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Premium Selection</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Each product carefully selected and tested for quality
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Fresh Roasting</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Coffee roasted in small batches for maximum freshness
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Secure Packaging</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Specially designed packaging to preserve freshness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                How fresh is your coffee?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Our coffee is roasted in small batches weekly to ensure maximum freshness. Each bag is stamped with the roasting date.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Do you offer international shipping?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Yes, we ship internationally to select countries. Shipping rates vary by location.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                What's your return policy?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                We offer a 30-day satisfaction guarantee on all equipment purchases. Coffee products cannot be returned once opened.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;