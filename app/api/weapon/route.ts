// const { Configuration, OpenAIApi } = require("openai");

import { NextResponse } from "next/server";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const prompt = (promptText) => `
// Input: A magical sword that does radiant damage
// Output:
// Name: Sword of Light
// Type: Shortsword
// Rarity: Rare
// Description: A sword imbued with magical radiance. The blade seems to gleam, even when in low light. You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, an attack made with this weapon deals an additional 1d8 radiant damage.

// Input: A magical longsword that allows the use to cast invisibility
// Output: 
// Name: Shadownail
// Type: Longsword
// Rarity: Legendary
// Description: A sword shrouded in shadows. It's hard to follow where the sword starts and the shadows begin. Once per long rest, you can use the sword to cast Invisibility as a bonus action.

// Input: ${promptText}
// Output:

// `;

// export default async function handler(req, res) {
//     const { promptText } = req.query;
//     if (!promptText) {
//         res.status(500).json(new Error("No prompt"));
//     } else {
//         const response = await openai.createCompletion("text-davinci-002", {
//             prompt: prompt(promptText),
//             temperature: 0.8,
//             max_tokens: 200,
//             top_p: 1,
//             frequency_penalty: 1,
//             presence_penalty: 1,
//         });
//         res.status(200).json(response.data);
//     }
// }

export async function GET() { 
    return NextResponse.json({ weapon: 'hello' })
}