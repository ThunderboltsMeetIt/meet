'use client';

import { type JSX, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {saveInterpretation} from "@/lib/interpretation.ts";
import getRandomUUID from "@/lib/uuid.ts";

export default function UploadInput({onSubmit}) {
    const [inputText, setInputText] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleSend = () => {
        onSubmit(inputText);
        setIsReadOnly(true);
    };

    const handleEdit = () => {
        setIsReadOnly(false);
    };

    return (

            <div className="space-y-4 mt-6">

                <Textarea
                        placeholder="Type your interpretation here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        readOnly={isReadOnly}
                        className=" mx-auto min-h-[120px]"
                />
                <div className="w-full flex justify-end gap-4">
                    {isReadOnly ? (
                            <Button variant="outline" onClick={handleEdit} className="w-[120px]">
                                Edit
                            </Button>
                    ) : (
                            <Button onClick={handleSend} className="w-[120px]">
                                Save
                            </Button>
                    )}
                </div>
            </div>
    );
}
