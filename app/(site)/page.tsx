import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = generatePageMetadata(
  'Home - Transform Your Business with Digital Innovation',
  'Leading digital transformation company providing innovative solutions for modern businesses. Web development, mobile apps, cloud solutions, and digital marketing services.',
  '/'
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </main>
  );
}
