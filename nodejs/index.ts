import { Ollama } from 'ollama';

async function main(): Promise<void> {
    const ollama = new Ollama({ host: "http://127.0.0.1:5001" });

    console.log("Starting Ollama inference...");
    const response = await ollama.chat({
        model: 'mistral:7b',
        messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    });
    
    console.log(response);
}

main().catch(error => {
    console.error('Error:', error);
    process.exit(1);
}); 