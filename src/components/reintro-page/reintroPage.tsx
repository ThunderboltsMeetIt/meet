import Analyze from "@/components/analyze/analyze.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dices} from "lucide-react";
import {useContext} from "react";
import {DatabaseContext} from "@/lib/database.ts";
import {PageContext} from "@/lib/currentPage.ts";

export default function ReintroPage() {
    const {database, setDatabase} = useContext(DatabaseContext);
    const {currentPage, setCurrentPage} = useContext(PageContext);

    const getRandomQuote = () => {
        const keys = Object.keys(database.quotes);
        return keys[Math.floor((Math.random()*keys.length))];
    }

    return (
            <div className="m-5 flex flex-row">
                <div className="mx-auto w-[600px] flex flex-col">
                    <h2 className="mt-5 text-2xl">Welcome again!</h2>
                    <p className="mt-2 mb-5">You've already seen your daily quote today.</p>
                    <Button variant="outline" className="py-5 mb-2 text-lg" onClick={() => setCurrentPage("calendar")}>
                        See the calendar
                    </Button>
                    <Button variant="outline" className="py-5 mb-2 text-lg" onClick={() => setCurrentPage("Stoicism")}>
                        Explore available sources
                    </Button>
                    <Button variant="outline" className="py-5 mb-2 text-lg" onClick={() => {}}>
                        See your favorites
                    </Button>
                </div>
            </div>
    )
}