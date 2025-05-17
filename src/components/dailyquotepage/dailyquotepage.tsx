import InterpretationEditor from "@/components/interpretationEditor/interpretationEditor.tsx"
import {useContext, useState} from "react";
import GetDate from "@/components/date/date.tsx";
import QuoteFrame from "@/components/quoteFrame/quoteFrame.tsx";
import InterpretationList from "@/components/interpretation-list/interpretationList.tsx";
import {DatabaseContext} from "@/lib/database.ts";

export default function DailyQuotePage({quoteId , date = GetDate('/')}) {
    const [upvoted, setUpvoted] = useState(false);
    const [starred, setStarred] = useState(false);
    const [loading, setLoading] = useState(false);
    const {database, setDatabase} = useContext(DatabaseContext);

    return (
            <div className="m-5 flex flex-row">
                <div className="mx-auto w-[600px] flex flex-col">
                    <p className="text-2xl mb-2 mt-5">{date}</p>
                    <h2 className="mb-5 text-3xl font-bold">Daily Quote</h2>
                    <QuoteFrame
                            quoteId={quoteId}
                            upvoted={upvoted}
                            starred={starred}
                            onUpvote={() => setUpvoted(!upvoted)}
                            onStar={() => setStarred(!starred)}
                    />
                    <InterpretationEditor quoteId={quoteId} onSubmit={() => {setLoading(true)}}/>
                    {loading && <InterpretationList ids={[quoteId]}/>}
                </div>
            </div>
    );
}
