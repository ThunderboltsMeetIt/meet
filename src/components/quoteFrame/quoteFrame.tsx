import * as React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import UpvoteBtn from "@/components/btns/upvote.tsx";
import StarBtn from "@/components/btns/star.tsx";
import Quote from "@/components/quote/quote.tsx";
import './quoteFrame.css';
import {useContext} from "react";
import {DatabaseContext} from "@/lib/database.ts";

export default function QuoteFrame({quoteId, upvoted, starred, onUpvote, onStar,}) {
    const {database, setDatabase} = useContext(DatabaseContext);
    const quote = database.quotes[quoteId];
    const source = database.sources[quote.sourceId];
    const category = database.categories[quote.categoryId];

    return (
            <Card className="quote-frame">
                <CardContent>
                    <div className="flex flex-row gap-x-4">
                        <div className="flex flex-col gap-y-1">
                            <UpvoteBtn filled={upvoted} onClick={onUpvote} />
                            <StarBtn filled={starred} onClick={onStar} />
                        </div>
                        <div>
                            <div className="quote-component">
                                <Quote quote={quote} />
                            </div>
                            <div className="quote-info">
                                <p>Source: {source ? source.name : "Unknown source"}</p>
                                <p>Tags: {quote.tagIds.map(id => database.tags[id].name).join(", ")}</p>
                                <p>Category: {category ? category.name : "Unknown source"}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
    );
}
