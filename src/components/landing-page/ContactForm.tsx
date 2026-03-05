'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const services = [
  { id: 'atm', label: 'Dores na ATM' },
  { id: 'implantes', label: 'Implantes Dentários' },
  { id: 'ortognatica', label: 'Cirurgia Ortognática' },
  { id: 'sisos', label: 'Extração de Sisos' },
  { id: 'harmonizacao', label: 'Harmonização Facial' },
  { id: 'bichectomia', label: 'Bichectomia' },
  { id: 'outros', label: 'Outros' },
];

const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Nome completo é obrigatório.' }),
  phoneNumber: z.string().min(10, { message: 'Telefone inválido.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  selectedChecks: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'Selecione ao menos uma opção.',
    }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      selectedChecks: [],
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    try {
      // NOTE: Replace with the actual doctor's phone number
      const doctorPhoneNumber = '5511999999999';

      const interests = values.selectedChecks.join('\n- ');

      const message = `Olá!
Meu nome é ${values.fullName}.
Estou entrando em contato através do site MaxilloConnect.
Tenho interesse nos seguintes serviços/sintomas:
- ${interests}

Gostaria de agendar uma consulta ou obter mais informações.
Meu telefone para contato é ${values.phoneNumber}.`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${doctorPhoneNumber}?text=${encodedMessage}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro',
        description:
          'Não foi possível abrir o WhatsApp. Por favor, tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-2xl shadow-2xl">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone (com DDD)</FormLabel>
                    <FormControl>
                      <Input placeholder="(11) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="selectedChecks"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Qual o seu interesse?
                    </FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {services.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="selectedChecks"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.label)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.label,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.label
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Abrindo WhatsApp...
                </>
              ) : (
                <>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Iniciar conversa no WhatsApp
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
