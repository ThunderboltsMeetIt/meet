'use client';

import { type JSX, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {saveInterpretation} from "@/lib/interpretation.ts";
import getRandomUUID from "@/lib/uuid.ts";

interface Props {
    onSubmit: () => void;
}

export default function Analyze({onSubmit}: Props): JSX.Element {
    const [inputText, setInputText] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleSend = () => {
        console.log('Sending:', inputText);

        setIsReadOnly(true);
    };

    const handleEdit = () => {
        setIsReadOnly(false);
    };

    return (
            <div className="">
                <Textarea
                        placeholder="How do you feel today?"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        readOnly={isReadOnly}
                        className=" mx-auto min-h-[120px]"
                />
                <div className="w-full flex justify-end gap-4">
                    {!isReadOnly && (
                            <Button onClick={handleSend} className="w-[120px] mt-5">
                                Find a quote
                            </Button>
                    ) }
                </div>
            </div>
    );
}
