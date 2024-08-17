import { NextResponse } from 'next/server'
import OpenAI from "openai";



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})



export async function POST(req: Request) {
    try {
        const { prompt } = await req.json()

        const response = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4",
            max_tokens: 1024,
            temperature: 0.6,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        })

        const text = response.choices[0].message.content
        return NextResponse.json({ text })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}