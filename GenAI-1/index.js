import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

 const chat = ai.chats.create({
    model: "gemini-3.6-flash",
    history:[],
})


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
    const response = await chat.sendMessage({
    message: userProblem,
   });
   
   console.log(response.text);
   main();
}


main();