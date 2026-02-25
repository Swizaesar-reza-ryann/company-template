import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { services } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata(
  'Services - Digital Solutions for Your Business',
  'Comprehensive digital services including web development, mobile apps, cloud solutions, and digital marketing.',
  '/services'
);

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern
              world
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={service.id} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let&apos;s discuss how our services can help transform your business
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
