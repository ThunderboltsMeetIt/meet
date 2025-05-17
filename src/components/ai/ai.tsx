import React, { useState } from 'react';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const OpenAIChat: React.FC = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const callOpenAI = async (prompt: string) => {
        setLoading(true);
        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPENAI_API_KEY}`,


                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: prompt }],
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText);
            }

            const data = await res.json();
            setResponse(data.choices[0].message.content);
        } catch (error: any) {
            setResponse(`Error: ${error.message}`);
        }
        setLoading(false);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            callOpenAI(input.trim());
        }
    };

    return (
            <div style={{ maxWidth: 600, margin: 'auto' }}>
                <h1>OpenAI Chat (Frontend Only)</h1>
                <form onSubmit={onSubmit}>
        <textarea
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                style={{ width: '100%', fontSize: 16 }}
                disabled={loading}
        />
                    <button type="submit" disabled={loading || !input.trim()}>
                        {loading ? 'Loading...' : 'Send'}
                    </button>
                </form>

                {response && (
                        <div
                                style={{
                                    marginTop: 20,
                                    whiteSpace: 'pre-wrap',
                                    background: '#f0f0f0',
                                    padding: 10,
                                    borderRadius: 5,
                                }}
                        >
                            {response}
                        </div>
                )}
            </div>
    );
};

export default OpenAIChat;
