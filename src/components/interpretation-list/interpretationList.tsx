import { DatabaseContext } from "@/lib/database.ts";
import { useContext, useState } from "react";
import Interpretation from "@/components/interpretation/interpretation.tsx";
import { Button } from "@/components/ui/button";

export default function InterpretationList({ ids = ["q-2.1"] }) {
    const { database } = useContext(DatabaseContext);
    const [showAll, setShowAll] = useState(false);

    const matchingInterpretations = Object.entries(database.interpretations)
            .filter(([_, interp]) => ids.includes(interp.quoteId));

    const visibleInterpretations = showAll
            ? matchingInterpretations.slice(0, 5)
            : matchingInterpretations.slice(0, 2);

    return (
            <div className="space-y-4">
                <h1>Most popular interpretations</h1>
                {visibleInterpretations.map(([id]) => (
                        <Interpretation key={id} interpretationId={id} />
                ))}

                {matchingInterpretations.length > 2 && (
                        <Button
                                variant="outline"
                                onClick={() => setShowAll(prev => !prev)}
                        >
                            {showAll ? "View Less" : "View More"}
                        </Button>
                )}
            </div>
    );
}
