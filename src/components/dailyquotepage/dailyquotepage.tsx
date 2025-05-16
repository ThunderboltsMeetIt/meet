import Quote from "@/components/quote/quote.tsx";
import InterpretationEditor from "@/components/interpretationEditor/interpretationEditor.tsx"
import {getAllInterpretations, saveInterpretation} from "@/lib/interpretation.ts";
import Interpretation from "@/components/interpretation/interpretation.tsx";
import {getRandomQuote} from "@/lib/qoute.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import getRandomUUID from "@/lib/uuid.ts";

export default function DailyQuotePage() {
    const [inputText, setInputText] = useState('');
    const handleSend = () => {
        console.log('Sending:', inputText);


        saveInterpretation({uuid: getRandomUUID(),content: inputText, category: "" })

    };
    return (

            <div>
                <div className="space-y-4 p-6">
                    <Textarea
                            placeholder="How do you feel today?"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            //readOnly={isReadOnly}
                            className=" mx-auto min-h-[60px]"
                    />
                    <div className="w-full flex justify-end gap-4">
                        {
                                <Button onClick={handleSend} className="w-[120px]">
                                    Send
                                </Button>
                        }
                    </div>
                </div>
                <h1>Quotes for you:</h1>
                <Quote quote={getRandomQuote()}/>
                <InterpretationEditor onSubmit={() => {
                    setInterpretations(getAllInterpretations());
                }}/>
                <Interpretation
                        interpretation={{ content: "This is a deep insight." }}
                        // onStarClick={() => console.log('Star clicked')}
                        onFlagClick={() => console.log('Flag clicked')}
                        onUpvoteClick={() => console.log('Upvote clicked')}
                />

            </div>
    );
}
