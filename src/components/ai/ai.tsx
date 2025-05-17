import React, { useState } from 'react';

const tagKeywords: Record<string, { name: string; keywords: string[] }> = {
    "tag-1": {
        name: 'Acceptance',
        keywords: ['accept', 'acceptance', 'embrace', 'tolerance', 'allow', 'forgive', 'peace with'],
    },
    "tag-2": {
        name: 'LiveFully',
        keywords: ['live fully', 'enjoy', 'experience', 'present', 'life', 'joy', 'excited', 'happy', 'fun'],
    },
    "tag-3": {
        name: 'SelfReflection',
        keywords: ['reflect', 'introspect', 'self-reflect', 'evaluate', 'ponder', 'think', 'question', 'doubt'],
    },
    "tag-4": {
        name: 'InnerPeace',
        keywords: ['peace', 'calm', 'tranquil', 'serene', 'quiet', 'mindfulness', 'relax', 'still'],
    },
};

const simpleBotReply = (input: string) => {
    const lower = input.toLowerCase();

    // Count matches per tag
    const tagMatches = Object.values(tagKeywords).map(({ name, keywords }) => {
        // Count how many keywords appear in input
        const count = keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0);
        return { name, count };
    });

    // Find the tag with the highest count
    const bestMatch = tagMatches.reduce(
            (prev, curr) => (curr.count > prev.count ? curr : prev),
            { name: '', count: 0 }
    );

    if (bestMatch.count > 0) {
        return `Your mood relates most to: ${bestMatch.name}`;
    }

    return "Sorry, I can't quite match your feelings to a known tag. Try describing your mood differently.";
};

const LocalChatBot: React.FC = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            const reply = simpleBotReply(input.trim());
            setResponse(reply);
        }
    };

    return (
            <div style={{ maxWidth: 600, margin: 'auto' }}>
                <h1>Local React Chatbot (No API Key)</h1>
                <form onSubmit={onSubmit}>
        <textarea
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How are you feeling?"
                style={{ width: '100%', fontSize: 16 }}
        />
                    <button type="submit" disabled={!input.trim()}>
                        Send
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

export default LocalChatBot;
