import Quote from "@/components/quote/quote.tsx";
import InterpretationEditor from "@/components/interpretationEditor/interpretationEditor.tsx"
import {getAllInterpretations, saveInterpretation} from "@/lib/interpretation.ts";
import Interpretation from "@/components/interpretation/interpretation.tsx";
import {getRandomQuote} from "@/lib/qoute.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import getRandomUUID from "@/lib/uuid.ts";
import Analyze from "@/components/analyze/analyze.tsx";
import GetDate from "@/components/date/date.tsx";
import QuoteFrame from "@/components/quoteFrame/quoteFrame.tsx";

export default function DailyQuotePage({quoteId}) {
    const [upvoted, setUpvoted] = useState(false);
    const [starred, setStarred] = useState(false);
    const date = GetDate('/');

    return (
            <div className="m-5 flex flex-row">
                <div className="mx-auto w-[600px] flex flex-col">
                    <p className="text-2xl mb-2">{date}</p>
                    <h2 className="mb-5 text-3xl font-bold">Daily Quote</h2>
                    <QuoteFrame
                            quoteId={quoteId}
                            upvoted={upvoted}
                            starred={starred}
                            onUpvote={() => setUpvoted(!upvoted)}
                            onStar={() => setStarred(!starred)}
                    />
                    <InterpretationEditor onSubmit={() => {
                        setInterpretations(getAllInterpretations());
                    }}/>
                    {/*<Interpretation*/}
                    {/*        interpretation={{ content: "This is a deep insight." }}*/}
                    {/*        // onStarClick={() => console.log('Star clicked')}*/}
                    {/*        onFlagClick={() => console.log('Flag clicked')}*/}
                    {/*        onUpvoteClick={() => console.log('Upvote clicked')}*/}
                    {/*/>*/}
                </div>
            </div>
    );
}
