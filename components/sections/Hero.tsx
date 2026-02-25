import Image from 'next/image';
import Link from 'next/link';
import { heroSection } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroSection.backgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8 animate-in">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
            Welcome to the Future of Business
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 text-balance animate-up">
            <span className="text-gradient">{heroSection.title}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance animate-in"
            style={{ animationDelay: '0.2s' }}
          >
            {heroSection.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {heroSection.cta.primary}
            </Link>
            <Link
              href="/projects"
              className="btn-secondary w-full sm:w-auto hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {heroSection.cta.secondary}
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
