// 'use client';
//
// import { type JSX, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
//
// interface Props {
//     onSubmit: () => void;
// }
//
// export default function Analyze({onSubmit}: Props): JSX.Element {
//     const [database, setDatabase] = useState({
//         quotes: {
//             "q-2.1": {
//                 title: "Meditations 2.1",
//                 sourceId: "s-1",
//                 text: "Begin the morning by saying to yourself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.\n" + "\n" + "But I who have seen the nature of the good that is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.\n" + "\n" + "For we are made for cooperation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to Nature, and it is acting against one another to be vexed and to turn away.",
//                 categoryId: "cat-1",
//                 tagIds: ["tag-1", "tag-4"],
//             },
//             "q-2.2": {
//                 title: "Meditations 2.2",
//                 sourceId: "s-1",
//                 text: "Whatever this is that I am, it is a little flesh and breath, and the ruling part.\n" + "\n" + "Throw away your books. No longer distract yourself, for it is not allowed, but as if you were now dying, despise the flesh. It is blood and bones and a network, a contexture of nerves, veins, and arteries. See the breath also, what kind of a thing it is, air, and not always the same, but every moment sent out and again sucked in.\n" + "\n" + "The third, then, is the ruling part. Consider this: you are an old man, no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer either be dissatisfied with your present lot, or shrink from the future.",
//                 categoryId: "cat-1",
//                 tagIds: ["tag-2"],
//             },
//             "q-2.3": {
//                 title: "Meditations 2.3",
//                 sourceId: "s-1",
//                 text: "All that is from the gods is full of Providence. That which is from Fortune is not separated from Nature, or without an interweaving and involvement with the things that are ordered by Providence.\n" + "\n" + "From there all things flow, and there is besides also necessity, and that which is for the advantage of the whole Universe, of which you are a part.\n" + "\n" + "But that is good for every part of Nature that the Nature of the whole brings, and what serves to maintain this Nature. Now the universe is preserved, as by the changes of the elements, so by the changes of things compounded of the elements.\n" + "\n" + "Let these principles be enough for you, and let them always be fixed opinions. But cast away the thirst after books, so that you may not die murmuring, but cheerfully, truly, and from your heart be thankful to the gods.",
//                 categoryId: "cat-1",
//                 tagIds: ["tag-3"],
//             },
//             "q-6.19": {
//                 title: "Meditations 6.19",
//                 sourceId: "s-1",
//                 text: "If a thing is difficult to be accomplished by yourself, do not think that it is impossible for man.\n" + "\n" + "But if anything is possible for man and conformable to his nature, think that this can be attained by yourself as well.",
//                 categoryId: "cat-1",
//                 tagIds: ["tag-3"],
//             },
//             "q-12.1": {
//                 title: "Meditations 12.1",
//                 sourceId: "s-1",
//                 text: "It is not death that a man should fear, but he should fear never beginning to live.",
//                 categoryId: "cat-1",
//                 tagIds: ["tag-2"],
//             }
//         },
//         interpretations: {
//             "i-1": {
//                 quoteId: "q-2.1",
//                 text: "Pomidor rzekł szymon krupa",
//             },
//             "i-2": {
//                 quoteId: "q-2.1",
//                 text: "Pomidor rzekł szymon krupa2",
//             },
//             "i-3": {
//                 quoteId: "q-2.1",
//                 text: "Pomidor rzekł szymon krupa3",
//             }
//         },
//         sources: {
//             "s-1": {
//                 name: 'Medytacje - Marka Aureliusza'
//             }
//         },
//         categories: {
//             "cat-1": {
//                 name: 'Stoicyzm'
//             }},
//         tags: {
//             "tag-1": {
//                 name: 'Acceptance'
//             },
//             "tag-2": {
//                 name: 'LiveFully'
//             },
//             "tag-3": {
//                 name: 'SelfReflection'
//             },
//             "tag-4": {
//                 name: 'InnerPeace'
//             }
//         },
//     });
//
//     const [inputText, setInputText] = useState('');
//     const [isReadOnly, setIsReadOnly] = useState(false);
//
//     const handleSend = () => {
//         console.log('Sending:', inputText);
//
//         setIsReadOnly(true);
//     };
//
//     const handleEdit = () => {
//         setIsReadOnly(false);
//     };
//
//     return (
//             <div className="">
//                 <Textarea
//                         placeholder="How do you feel today?"
//                         value={inputText}
//                         onChange={(e) => setInputText(e.target.value)}
//                         readOnly={isReadOnly}
//                         className=" mx-auto min-h-[120px]"
//                 />
//                 <div className="w-full flex justify-end gap-4">
//                     {!isReadOnly && (
//                             <Button onClick={handleSend} className="w-[120px] mt-5">
//                                 Find a quote
//                             </Button>
//                     ) }
//                 </div>
//             </div>
//     );
// }

//

// 'use client';
//
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
//
// interface Props {
//     onSubmit: () => void;
// }
//
// export default function Analyze({ onSubmit }: Props) {
//     const [inputText, setInputText] = useState('');
//     const [isReadOnly, setIsReadOnly] = useState(false);
//
//     const quotes = {
//         "q-2.1": {
//             title: "Meditations 2.1",
//             text: "Begin the morning by saying to yourself: I shall meet with the busybody...",
//         },
//         "q-2.2": {
//             title: "Meditations 2.2",
//             text: "Whatever this is that I am, it is a little flesh and breath...",
//         },
//         "q-2.3": {
//             title: "Meditations 2.3",
//             text: "All that is from the gods is full of Providence...",
//         },
//         "q-6.19": {
//             title: "Meditations 6.19",
//             text: "If a thing is difficult to be accomplished by yourself...",
//         },
//         "q-12.1": {
//             title: "Meditations 12.1",
//             text: "It is not death that a man should fear...",
//         }
//     };
//
//     const handleSend = async () => {
//         setIsReadOnly(true);
//
//         try {
//             const { default: OpenAI } = await import('openai');
//
//             const openai = new OpenAI({
//                 apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
//                 dangerouslyAllowBrowser: true,
//             });
//
//             const quoteList = Object.entries(quotes).map(
//                 ([id, quote]) => `(${id}) ${quote.text}`
//             ).join('\n\n');
//
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-4',
//                 messages: [
//                     {
//                         role: 'system',
//                         content: 'Your task is to ...'
//                     },
//                     {
//                         role: 'user',
//                         content: inputText
//                     }
//                 ],
//                 temperature: 0.7
//             });
//
//
//             const quoteId = quotes[quoteId as keyof typeof quotes];
//
//             if (quoteId && quotes[quoteId]) {
//                 const quote = quotes[quoteId];
//                 alert(`Suggested quote: ${quote.title}\n\n${quote.text}`);
//             } else {
//                 alert("No matching quote found.");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("OpenAI request failed.");
//         }
//     };
//
//     return (
//         <div>
//             <Textarea
//                 placeholder="How do you feel today?"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//                 readOnly={isReadOnly}
//                 className="mx-auto min-h-[120px]"
//             />
//             <div className="w-full flex justify-end gap-4">
//                 {!isReadOnly && (
//                     <Button onClick={handleSend} className="w-[120px] mt-5">
//                         Find a quote
//                     </Button>
//                 )}
//             </div>
//         </div>
//     );
// }
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    onSubmit: () => void;
}

type Quote = {
    title: string;
    text: string;
};

export default function Analyze({ onSubmit }: Props) {
    const [inputText, setInputText] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const quotes: Record<string, Quote> = {
        'q-2.1': {
            title: 'Meditations 2.1',
            text: 'Begin the morning by saying to yourself: I shall meet with the busybody...',
        },
        'q-2.2': {
            title: 'Meditations 2.2',
            text: 'Whatever this is that I am, it is a little flesh and breath...',
        },
        'q-2.3': {
            title: 'Meditations 2.3',
            text: 'All that is from the gods is full of Providence...',
        },
        'q-6.19': {
            title: 'Meditations 6.19',
            text: 'If a thing is difficult to be accomplished by yourself...',
        },
        'q-12.1': {
            title: 'Meditations 12.1',
            text: 'It is not death that a man should fear...',
        },
    };
    
    const OPENAI_API_KEY = ''
    const handleSend = async () => {
        setIsReadOnly(true);

        try {
            const quoteList = Object.entries(quotes)
                    .map(([id, quote]) => `(${id}) ${quote.text}`)
                    .join('\n\n');

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content:
                                    `You're a philosophical assistant. Return ONLY the ID (e.g., "q-2.1") of the most relevant quote based on the user's mood.\n\nQuotes:\n${quoteList}`,
                        },
                        {
                            role: 'user',
                            content: inputText,
                        },
                    ],
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            const quoteId = data.choices[0].message.content.trim();

            if (quoteId && quoteId in quotes) {
                const quote = quotes[quoteId];
                alert(`Suggested quote: ${quote.title}\n\n${quote.text}`);
            } else {
                alert('No matching quote found.');
            }
        } catch (err) {
            console.error('OpenAI error:', err);
            alert('OpenAI request failed.');
        }
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
                            <Button onClick={handleSend} className="w-[120px] mt-5">
                                Find a quote
                            </Button>
                    )}
                </div>
            </div>
    );
}