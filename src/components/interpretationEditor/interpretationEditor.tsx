'use client';

import { type JSX, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {saveInterpretation} from "@/lib/interpretation.ts";
import getRandomUUID from "@/lib/uuid.ts";

interface Props {
    onSubmit: () => void;
}

export default function UploadInput({onSubmit}: Props): JSX.Element {
    const [inputText, setInputText] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleSend = () => {
        console.log('Sending:', inputText);


        saveInterpretation({uuid: getRandomUUID(),content: inputText, category: "" })
        setIsReadOnly(true);
    };

    const handleEdit = () => {
        setIsReadOnly(false);
    };

    return (
            <div className="space-y-4 p-6">
                <Textarea
                        placeholder="Type your interpretation here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        readOnly={isReadOnly}
                        className=" mx-auto min-h-[120px]"
                />
                <div className="w-full flex justify-end gap-4">
                    {isReadOnly ? (
                            <Button onClick={handleEdit} className="w-[120px]">
                                Edit
                            </Button>
                    ) : (
                            <Button onClick={handleSend} className="w-[120px]">
                                Send
                            </Button>
                    )}
                </div>
            </div>
    );
}
