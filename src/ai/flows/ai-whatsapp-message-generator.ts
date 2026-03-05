'use server';
/**
 * @fileOverview This file contains a Genkit flow for generating a personalized WhatsApp message
 * based on a potential patient's form submission for a maxillofacial doctor.
 *
 * - generateWhatsappMessage - A function that generates the WhatsApp message.
 * - AiWhatsappMessageGeneratorInput - The input type for the generateWhatsappMessage function.
 * - AiWhatsappMessageGeneratorOutput - The return type for the generateWhatsappMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiWhatsappMessageGeneratorInputSchema = z.object({
  fullName: z.string().describe('The full name of the potential patient.'),
  phoneNumber: z.string().describe('The phone number of the potential patient.'),
  email: z.string().email().describe('The email address of the potential patient.'),
  selectedChecks: z
    .array(z.string())
    .describe('A list of interests or symptoms selected by the patient.'),
});
export type AiWhatsappMessageGeneratorInput = z.infer<
  typeof AiWhatsappMessageGeneratorInputSchema
>;

const AiWhatsappMessageGeneratorOutputSchema = z.object({
  whatsappMessage: z
    .string()
    .describe('A concise, personalized opening message for WhatsApp chat.'),
});
export type AiWhatsappMessageGeneratorOutput = z.infer<
  typeof AiWhatsappMessageGeneratorOutputSchema
>;

export async function generateWhatsappMessage(
  input: AiWhatsappMessageGeneratorInput
): Promise<AiWhatsappMessageGeneratorOutput> {
  return aiWhatsappMessageGeneratorFlow(input);
}

const aiWhatsappMessageGeneratorPrompt = ai.definePrompt({
  name: 'aiWhatsappMessageGeneratorPrompt',
  input: {schema: AiWhatsappMessageGeneratorInputSchema},
  output: {schema: AiWhatsappMessageGeneratorOutputSchema},
  prompt: `Você é um assistente útil que gera mensagens de WhatsApp concisas e profissionais para pacientes que desejam entrar em contato com um médico bucomaxilofacial.

O paciente preencheu o seguinte formulário na landing page MaxilloConnect:
Nome Completo: {{{fullName}}}
Telefone: {{{phoneNumber}}}
Email: {{{email}}}
Interesses/Sintomas selecionados:
{{#each selectedChecks}}- {{this}}
{{/each}}

Sua tarefa é criar uma mensagem de WhatsApp curta e profissional que o paciente possa enviar ao médico. A mensagem deve:
1. Começar com uma saudação formal.
2. Apresentar o nome completo do paciente.
3. Mencionar que o paciente está entrando em contato através da landing page MaxilloConnect.
4. Listar os principais motivos de contato/interesses do paciente de forma clara e concisa.
5. Expressar o desejo de agendar uma consulta ou obter mais informações.
6. Incluir o telefone e email do paciente para facilitar o contato.
7. Ser em português do Brasil.

Gere apenas a mensagem de WhatsApp, sem qualquer introdução ou conclusão adicional.`,
});

const aiWhatsappMessageGeneratorFlow = ai.defineFlow(
  {
    name: 'aiWhatsappMessageGeneratorFlow',
    inputSchema: AiWhatsappMessageGeneratorInputSchema,
    outputSchema: AiWhatsappMessageGeneratorOutputSchema,
  },
  async input => {
    const {output} = await aiWhatsappMessageGeneratorPrompt(input);
    return output!;
  }
);
