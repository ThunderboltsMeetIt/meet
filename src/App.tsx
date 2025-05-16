import './App.css'
import Quote from "@/components/quote/quote.tsx";
import GetDate from "@/components/date/date.tsx";
import InterpretationEditor from "@/components/interpretationEditor/interpretationEditor.tsx"
import HamburgerMenu from "@/components/hamburger-menu/hamburgerMenu.tsx";
import StarBtn from "@/components/btns/star.tsx";
import UpvoteBtn from "@/components/btns/upvote.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import TopBar from "@/components/topBar/topBar.tsx";
import {useState} from "react";
import {getAllInterpretations} from "@/lib/interpretation.ts";
import Interpretation from "@/components/interpretation/interpretation.tsx";
import DailyQuotePage from "@/components/dailyquotepage/dailyquotepage.tsx";
import {getRandomQuote, quotes} from "@/lib/qoute.ts";

function App() {
    const date = GetDate('/');
    const [isStarFilled, setStarFilled] = useState(true);
    const [isUpvoteFilled, setUpvoteFilled] = useState(true);
    const [interpretations, setInterpretations] = useState(getAllInterpretations());

    const [database, setDatabase] = useState({
        quotes: {
            "q-2.1": {
                title: "2.1",
                sourceId: "s-1",
                text: "Begin the morning by saying to yourself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.\n" + "\n" + "But I who have seen the nature of the good that is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.\n" + "\n" + "For we are made for cooperation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to Nature, and it is acting against one another to be vexed and to turn away.",
                categoryId: "cat-1",
                tagIds: ["tag-1", "tag-2"],
            },
            "q-2.1": {
                title: "2.2",
                sourceId: "s-1",
                text: "Whatever this is that I am, it is a little flesh and breath, and the ruling part.\n" + "\n" + "Throw away your books. No longer distract yourself, for it is not allowed, but as if you were now dying, despise the flesh. It is blood and bones and a network, a contexture of nerves, veins, and arteries. See the breath also, what kind of a thing it is, air, and not always the same, but every moment sent out and again sucked in.\n" + "\n" + "The third, then, is the ruling part. Consider this: you are an old man, no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer either be dissatisfied with your present lot, or shrink from the future.",
                categoryId: "",
                tagIds: [3, 7],
            },
        },
        interpretations: {},
        sources: {}
    });

    // @ts-ignore
    return (
        <>
            <SidebarProvider defaultOpen={false} className="w-full flex flex-col">
                <main>
                    <HamburgerMenu />
                    <TopBar />
                    <h1>Today's Date: {date}</h1>
                    <DailyQuotePage />
                </main>
            </SidebarProvider>
        </>
    )
}

export default App
