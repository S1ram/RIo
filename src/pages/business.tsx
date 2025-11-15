import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BusinessSolutionsPage = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/business-hero.jpg"
          alt="Office coffee setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business Solutions
            </h1>
            <p className="text-xl text-white">
              Premium Coffee Solutions for Your Workplace
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Office Coffee Solutions */}
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/office-coffee.jpg"
                  alt="Office coffee station"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Office Coffee Solutions</h2>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-300 mb-6">
                  <li>• Premium coffee machines for any office size</li>
                  <li>• Regular maintenance and support</li>
                  <li>• Customizable coffee selection</li>
                  <li>• Employee training programs</li>
                  <li>• Flexible subscription plans</li>
                </ul>
                <Link
                  href="/contact?type=office"
                  className="inline-block bg-brown-600 text-white px-6 py-3 rounded-md hover:bg-brown-700 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Food Service Partnerships */}
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/food-service.jpg"
                  alt="Restaurant coffee service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Food Service Partnerships</h2>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-300 mb-6">
                  <li>• Wholesale pricing for restaurants</li>
                  <li>• Custom blend development</li>
                  <li>• Staff training and certification</li>
                  <li>• Equipment leasing options</li>
                  <li>• Marketing support</li>
                </ul>
                <Link
                  href="/contact?type=food-service"
                  className="inline-block bg-brown-600 text-white px-6 py-3 rounded-md hover:bg-brown-700 transition"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Why Choose Rio Coffee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Reliable Service</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                24/7 support and maintenance with quick response times
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Quality Products</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Premium coffee beans and state-of-the-art equipment
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Flexible Pricing</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Customizable plans to fit your budget and needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-brown-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Coffee Service?</h2>
          <p className="text-lg mb-8">
            Let's discuss how we can create the perfect coffee solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brown-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-100 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutionsPage;