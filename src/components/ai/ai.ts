
export const callAI = async (inputText: string): Promise<string> => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`,
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [{ role: 'user', content: inputText }],
        }),
    });

    if (!response.ok) {
        throw new Error('OpenAI API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
};
