import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from "next";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { prompt } = req.body


        // Create completion
        const response = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4o-mini",
            max_tokens: 1024,
            temperature: 0.6,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        })


        // レスポンスを返す
        const text = response.choices[0].message.content
        res.status(200).json({ text })
    } catch (error) {
        console.error(error)
        res.status(500).send("Something went wrong")
    }
}