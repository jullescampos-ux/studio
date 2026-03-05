'use server';

import {
  generateWhatsappMessage,
  type AiWhatsappMessageGeneratorInput,
} from '@/ai/flows/ai-whatsapp-message-generator';

export async function generateWhatsappLinkAction(
  input: AiWhatsappMessageGeneratorInput
) {
  try {
    const result = await generateWhatsappMessage(input);
    return result;
  } catch (error) {
    console.error('Error generating WhatsApp message:', error);
    throw new Error('Failed to generate WhatsApp message.');
  }
}
