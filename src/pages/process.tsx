import React from 'react';
import Image from 'next/image';

const ProcessPage = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/process-hero.jpg"
          alt="Coffee roasting process"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Process
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Crafting the Perfect Cup
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            At Rio Coffee, we believe that exceptional coffee is a result of meticulous attention 
            to detail at every step of the process. From sourcing to serving, we maintain the 
            highest standards of quality and craftsmanship.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {/* Sourcing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/images/coffee-sourcing.jpg"
                  alt="Coffee bean sourcing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">1. Thoughtful Sourcing</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  We partner with sustainable farms across Brazil and beyond, carefully selecting 
                  beans that meet our rigorous quality standards. Our direct relationships with 
                  farmers ensure fair practices and exceptional coffee quality.
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>• Direct farm relationships</li>
                  <li>• Sustainable farming practices</li>
                  <li>• Careful bean selection</li>
                  <li>• Fair trade partnerships</li>
                </ul>
              </div>
            </div>

            {/* Roasting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="relative h-[400px] md:order-2">
                <Image
                  src="/images/coffee-roasting.jpg"
                  alt="Coffee roasting process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">2. Expert Roasting</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Our master roasters bring decades of experience to craft the perfect roast 
                  for each variety of bean. Using state-of-the-art equipment and time-honored 
                  techniques, we ensure consistency and excellence in every batch.
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>• Small batch roasting</li>
                  <li>• Precise temperature control</li>
                  <li>• Custom roast profiles</li>
                  <li>• Regular quality testing</li>
                </ul>
              </div>
            </div>

            {/* Quality Control */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/images/quality-control.jpg"
                  alt="Quality control process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">3. Quality Control</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Every batch undergoes rigorous testing to ensure it meets our high standards. 
                  Our quality control process includes multiple taste tests, aroma evaluation, 
                  and detailed documentation of each roast.
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>• Professional cupping sessions</li>
                  <li>• Moisture content analysis</li>
                  <li>• Density measurements</li>
                  <li>• Detailed batch documentation</li>
                </ul>
              </div>
            </div>

            {/* Packaging */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="relative h-[400px] md:order-2">
                <Image
                  src="/images/packaging.jpg"
                  alt="Coffee packaging process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">4. Careful Packaging</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  We use specially designed packaging that preserves the freshness and flavor 
                  of our coffee. Each bag is equipped with a one-way valve to release CO2 
                  while preventing oxygen from entering.
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>• One-way degassing valves</li>
                  <li>• Airtight sealing</li>
                  <li>• UV protection</li>
                  <li>• Eco-friendly materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Quality Commitment</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            We believe that great coffee is a result of unwavering commitment to quality at 
            every step. From farm to cup, we maintain the highest standards to ensure you 
            experience the best coffee possible.
          </p>
          <div className="inline-flex space-x-4">
            <div className="flex items-center text-brown-600">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quality Certified</span>
            </div>
            <div className="flex items-center text-brown-600">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sustainably Sourced</span>
            </div>
            <div className="flex items-center text-brown-600">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fresh Roasted</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;