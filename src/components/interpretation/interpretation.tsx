import './interpretation.css'
import type { Interpretation } from "@/lib/interpretation.ts";
import '../btns/upvote.tsx'
import '../btns/star.tsx'
import StarBtn from "@/components/btns/star.tsx";
import FlagBtn from "@/components/btns/flag.tsx";
import UpvoteBtn from "@/components/btns/upvote.tsx";
import * as React from "react";
import {useContext, useState} from "react";
import {DatabaseContext} from "@/lib/database.ts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
    interpretation: Interpretation;
    onFlagClick?: () => void;
    onUpvoteClick?: () => void;
}

export default function Interpretation({ interpretationId, onStarClick, onFlagClick, onUpvoteClick }: Props) {
    const [flagged, setFlagged] = useState(false);
    const [starred, setStarred] = useState(false);
    const [upvoted, setUpvoted] = useState(false);
    const {database, setDatabase} = useContext(DatabaseContext);
    const interpretation = database.interpretations[interpretationId];
    return (
            <Card className="interpretation-container rounded-xl">
                <CardContent className="flex flex-col gap-y-2">
                    <div>
                        {interpretation.text}
                    </div>
                    <div className="flex flex-row gap-x-2">
                        <StarBtn filled={starred} onClick={() => setStarred(!starred)} />
                        <UpvoteBtn filled={upvoted} onClick={() => setUpvoted(!upvoted)} />
                        <span className="ml-auto">
                            <FlagBtn filled={flagged} onClick={() => setFlagged(!flagged)} />
                        </span>
                    </div>
                </CardContent>
            </Card>
    );
}
