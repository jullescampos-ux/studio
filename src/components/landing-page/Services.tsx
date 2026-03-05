import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Activity,
  Bone,
  Move3d,
  Scissors,
  SmilePlus,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: 'Dores na ATM',
    description: 'Tratamento especializado para disfunções da articulação temporomandibular.',
  },
  {
    icon: <Bone className="h-8 w-8 text-primary" />,
    title: 'Implantes Dentários',
    description: 'Soluções modernas e seguras para a reabilitação oral com implantes.',
  },
  {
    icon: <Move3d className="h-8 w-8 text-primary" />,
    title: 'Cirurgia Ortognática',
    description: 'Correção de deformidades dentofaciais para harmonizar a estética e função.',
  },
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: 'Extração de Sisos',
    description: 'Procedimentos seguros e confortáveis para extração de dentes do siso.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Harmonização Facial',
    description: 'Técnicas avançadas para realçar sua beleza natural e rejuvenescer a face.',
  },
  {
    icon: <SmilePlus className="h-8 w-8 text-primary" />,
    title: 'Bichectomia',
    description: 'Procedimento para afinar o rosto, removendo o excesso de gordura das bochechas.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nossos Serviços
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma gama completa de tratamentos bucomaxilofaciais para
              atender às suas necessidades com excelência e segurança.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
