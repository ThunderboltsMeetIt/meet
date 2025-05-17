import Analyze from "@/components/analyze/analyze.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dices} from "lucide-react";
import {useContext} from "react";
import {DatabaseContext} from "@/lib/database.ts";

export default function IntroPage({onQuoteSelected}) {
    const {database, setDatabase} = useContext(DatabaseContext);

    const getRandomQuote = () => {
        const keys = Object.keys(database.quotes);
        return keys[Math.floor((Math.random()*keys.length))];
    }

    return (
            <div className="m-5 flex flex-row">
                <div className="mx-auto w-[600px] flex flex-col">
                    <h2 className="my-5 text-2xl">Hello!</h2>
                    <Button variant="outline" className="py-5 text-lg" onClick={() => onQuoteSelected(getRandomQuote())}>
                        <Dices />
                        Select a random quote
                    </Button>
                    <div className="my-5 mt-7 opacity-80">
                        <hr />
                        <p className="text-center mt-[-0.5lh] w-max ml-auto mr-auto px-5" style={{"backgroundColor": "oklch(0.99 0.05 140)"}}>
                            Or get a more personalised choice
                        </p>
                    </div>
                    <Analyze/>
                </div>
            </div>
    )
}