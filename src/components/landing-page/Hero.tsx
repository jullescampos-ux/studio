import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(
    (image) => image.id === 'hero-background'
  );

  return (
    <section className="relative w-full pt-20 md:pt-32 pb-16 md:pb-24 lg:pb-32">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
              Cuidado especializado em cirurgia bucomaxilofacial
            </h1>
            <p className="text-lg text-destructive-foreground md:text-xl">
              Agende sua consulta e transforme seu sorriso e bem-estar. Estamos
              prontos para oferecer o melhor tratamento para você.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">
                Agendar Consulta via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
