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

interface Props {
    interpretation: Interpretation;
    // onStarClick?: () => void;
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
            <div className="interpretation-container">
                <div className="interpretation-actions">
                    <FlagBtn filled={flagged} onClick={() => setFlagged(!flagged)} />
                    <StarBtn filled={starred} onClick={() => setStarred(!starred)} />
                    <UpvoteBtn filled={upvoted} onClick={() => setUpvoted(!upvoted)} />
                </div>
                <div className="interpretation-text">
                    {interpretation.text}
                </div>
            </div>
    );
}
