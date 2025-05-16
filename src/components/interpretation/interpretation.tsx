import './interpretation.css'
import type { Interpretation } from "@/lib/interpretation.ts";

interface Props {
    interpretation: Interpretation;
    // onStarClick?: () => void;
    onFlagClick?: () => void;
    onUpvoteClick?: () => void;
}

export default function Interpretation({ interpretation, onStarClick, onFlagClick, onUpvoteClick }: Props) {
    return (
            <div className="interpretation-container">
                <div className="interpretation-actions">
                    <button onClick={onUpvoteClick} title="Upvote">⬆️</button>
                    <button onClick={onFlagClick} title="Flag">🚩</button>
                </div>
                <div className="interpretation-text">
                    {interpretation.content}
                </div>
            </div>
    );
}
