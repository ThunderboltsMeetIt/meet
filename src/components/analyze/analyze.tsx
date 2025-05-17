'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    onSubmit: (result: string) => void;
}
const simpleBotReply = (input: string): string => {
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

    const lower = input.toLowerCase();

    const tagMatches = Object.entries(tagKeywords).map(([key, { keywords }]) => {
        const count = keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0);
        return { key, count };
    });

    const bestMatch = tagMatches.reduce(
            (prev, curr) => (curr.count > prev.count ? curr : prev),
            { key: '', count: 0 }
    );

    if (bestMatch.count > 0) {
        return bestMatch.key;
    }

    return "no-match";
};


export default function Analyze({ onSubmit }: Props) {
    const [inputText, setInputText] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleClick = () => {
        if (!inputText.trim()) return;

        setIsReadOnly(true);

        const aiResponse = simpleBotReply(inputText.trim());

        onSubmit(aiResponse);

        setIsReadOnly(false);
    };

    return (
            <div>
                <Textarea
                        placeholder="How do you feel today?"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        readOnly={isReadOnly}
                        className="mx-auto min-h-[120px]"
                />
                <div className="w-full flex justify-end gap-4">
                    {!isReadOnly && (
                            <Button onClick={handleClick} className="w-[120px] mt-5">
                                Find a quote
                            </Button>
                    )}
                </div>
            </div>
    );
}
