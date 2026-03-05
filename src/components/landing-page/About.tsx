import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function About() {
  const doctorImage = PlaceHolderImages.find(
    (image) => image.id === 'doctor-portrait'
  );

  return (
    <section
      id="about"
      className="w-full bg-muted/40 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex items-center justify-center">
            {doctorImage && (
              <Image
                src={doctorImage.imageUrl}
                alt={doctorImage.description}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl"
                data-ai-hint={doctorImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Sobre o Doutor
              </h2>
              <p className="max-w-prose text-muted-foreground md:text-xl/relaxed">
                Com anos de experiência e dedicação à cirurgia bucomaxilofacial,
                nosso especialista é referência em tratamentos complexos e
                estéticos. Comprometido com a excelência, busca constantemente
                as técnicas mais avançadas para garantir resultados
                excepcionais e o bem-estar de seus pacientes.
              </p>
              <p className="max-w-prose text-muted-foreground md:text-xl/relaxed">
                Sua abordagem é centrada no paciente, oferecendo um atendimento
                humanizado e personalizado, desde o diagnóstico até a completa
                recuperação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
