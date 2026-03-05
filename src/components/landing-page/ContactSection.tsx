import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Entre em Contato
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Preencha o formulário abaixo para gerarmos uma mensagem
              personalizada. Você será redirecionado para o WhatsApp para
              iniciar a conversa.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
