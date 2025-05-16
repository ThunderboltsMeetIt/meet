import quotes, {type QuoteData} from "@/lib/qoute.ts";
import StarBtn from "@/components/btns/star.tsx"
import UpvoteBtn from "@/components/btns/upvote.tsx"
import Quote from "@/components/quote/quote.tsx";
import './quoteFrame.css'
import {useState} from "react";

export default function QuoteFrame({quote}: {quote: Partial<QuoteData>}) {
        const [upvoted, setUpvoted] = useState(false);
        const [starred, setStarred] = useState(false);

        const handleUpvote = () => {
            setUpvoted(!upvoted);
        };

        const handleStar = () => {
            setStarred(!starred);
        };

        return (
                <div className="quote-frame">
                    <div className="quote-buttons">
                        <UpvoteBtn filled={upvoted} onClick={handleUpvote} />
                        <div className="quote-component">
                            <Quote quote={quote} />
                        </div>
                        <StarBtn filled={starred} onClick={handleStar} />
                    </div>
                    <div className="quote-info">
                        <p>Source ID: {quote.sourceId}</p>
                        <p>Tags ID: {quote.tagIds?.join(', ')}</p>
                        <p>Category ID: {quote.categoryId}</p>
                    </div>
                </div>
        );
    }
}
