
import { GoogleGenAI, Type } from "@google/genai";
import { Song } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const recommendationSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: {
        type: Type.STRING,
        description: "The title of the recommended song.",
      },
      artist: {
        type: Type.STRING,
        description: "The artist of the recommended song.",
      },
      album: {
        type: Type.STRING,
        description: "The album the recommended song is on.",
      },
      reason: {
        type: Type.STRING,
        description: "A short, compelling reason why this song fits the user's request and listening history."
      }
    },
    required: ["title", "artist", "album", "reason"],
  },
};

export const getRecommendations = async (likedSongs: string, userPrompt: string): Promise<Song[]> => {
  const systemInstruction = `You are a world-class music expert and DJ. Your goal is to create a personalized playlist based on a user's liked songs and their specific request.

  RULES:
  1. Analyze the provided list of liked songs to understand the user's taste profile (genres, artists, era, vibe).
  2. Carefully consider the user's prompt for the new playlist.
  3. Generate a list of 10-15 songs that perfectly match the request, while also aligning with their underlying taste profile.
  4. Prioritize songs the user might not know but would love. Avoid being too obvious.
  5. For each song, provide a short, compelling reason why it's a great fit.
  6. ALWAYS respond in the requested JSON format. Do not include any other text or markdown.`;

  const prompt = `Here is my list of liked songs:
  ---
  ${likedSongs}
  ---
  
  Here is my request for a new playlist: "${userPrompt}"
  
  Please generate the playlist recommendations.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: recommendationSchema,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText) as Song[];
    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes('JSON')) {
        throw new Error("The AI returned an invalid response. Let's try a different prompt.");
    }
    throw new Error("Failed to get recommendations from the AI. Please check your connection and try again.");
  }
};
