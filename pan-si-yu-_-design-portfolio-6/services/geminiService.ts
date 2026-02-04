import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Pan Si Yu, a high-end graphic and UI/UX designer.
Your goal is to answer visitor questions professionally, concisely, and elegantly.
You speak in a tone that is polite, sophisticated, and helpful.

Pan Si Yu's Key Information:
- Expertise: Branding, UI/UX, Graphic Design, Art Direction.
- Location: Taipei, Taiwan.
- Style: Minimalist, Bold, Story-driven.
- Contact: pansiyu.design@example.com
- Behance: behance.net/pansiyu

If a user asks about pricing, suggest they contact via email for a bespoke quote.
If a user asks about availability, say Pan Si Yu is currently open for select projects for Q3/Q4.
Keep answers under 50 words unless asked for details.
You can reply in Traditional Chinese (繁體中文) or English depending on the user's input language.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response = await chat.sendMessage({ message });
    
    // Ensure we handle potential null/undefined gracefully, though .text should be present on success
    return response.text || "Sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am currently experiencing a connection issue. Please contact Pan Si Yu directly via email.";
  }
};