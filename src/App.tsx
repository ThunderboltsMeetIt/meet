import './App.css'
import HamburgerMenu from "@/components/hamburger-menu/hamburgerMenu.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import TopBar from "@/components/topBar/topBar.tsx";
import {useState, type SetStateAction} from "react";
import DailyQuotePage from "@/components/dailyquotepage/dailyquotepage.tsx";
import IntroPage from "@/components/intro-page/IntroPage.tsx";
// import CalendarView from "@/components/calendarView/calendarView.tsx";
import {DatabaseContext} from "@/lib/database.ts";
import {PageContext} from "@/lib/currentPage.ts";
import {UserContext} from "@/lib/currentUser.ts";
import InterpretationList from "@/components/interpretation-list/interpretationList.tsx";
import CalendarView from "@/components/calendarView/calendarView.tsx";
import InfoFrameCategory from "@/components/infoFrame/infoFrame.tsx";
import ReintroPage from "@/components/reintro-page/reintroPage.tsx";

function App()
{
    const [database, setDatabase] = useState({
        quotes: {
            "q-2.1": {
                title: "Meditations 2.1",
                sourceId: "s-1",
                text: "Begin the morning by saying to yourself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.\n" + "\n" + "But I who have seen the nature of the good that is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.\n" + "\n" + "For we are made for cooperation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to Nature, and it is acting against one another to be vexed and to turn away.",
                categoryId: "cat-1",
                tagIds: ["tag-1", "tag-4"],
            }, "q-2.2": {
                title: "Meditations 2.2",
                sourceId: "s-1",
                text: "Whatever this is that I am, it is a little flesh and breath, and the ruling part.\n" + "\n" + "Throw away your books. No longer distract yourself, for it is not allowed, but as if you were now dying, despise the flesh. It is blood and bones and a network, a contexture of nerves, veins, and arteries. See the breath also, what kind of a thing it is, air, and not always the same, but every moment sent out and again sucked in.\n" + "\n" + "The third, then, is the ruling part. Consider this: you are an old man, no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer either be dissatisfied with your present lot, or shrink from the future.",
                categoryId: "cat-1",
                tagIds: ["tag-2"],
            }, "q-2.3": {
                title: "Meditations 2.3",
                sourceId: "s-1",
                text: "All that is from the gods is full of Providence. That which is from Fortune is not separated from Nature, or without an interweaving and involvement with the things that are ordered by Providence.\n" + "\n" + "From there all things flow, and there is besides also necessity, and that which is for the advantage of the whole Universe, of which you are a part.\n" + "\n" + "But that is good for every part of Nature that the Nature of the whole brings, and what serves to maintain this Nature. Now the universe is preserved, as by the changes of the elements, so by the changes of things compounded of the elements.\n" + "\n" + "Let these principles be enough for you, and let them always be fixed opinions. But cast away the thirst after books, so that you may not die murmuring, but cheerfully, truly, and from your heart be thankful to the gods.",
                categoryId: "cat-1",
                tagIds: ["tag-3"],
            }, "q-6.19": {
                title: "Meditations 6.19",
                sourceId: "s-1",
                text: "If a thing is difficult to be accomplished by yourself, do not think that it is impossible for man.\n" + "\n" + "But if anything is possible for man and conformable to his nature, think that this can be attained by yourself as well.",
                categoryId: "cat-1",
                tagIds: ["tag-3"],
            }, "q-12.1": {
                title: "Meditations 12.1",
                sourceId: "s-1",
                text: "It is not death that a man should fear, but he should fear never beginning to live.",
                categoryId: "cat-1",
                tagIds: ["tag-2"],
            }
        }, interpretations: {
            "i-1": {
                quoteId: "q-2.1", text: "This passage, drawn from Marcus Aurelius’ Meditations, exemplifies a Stoic exercise in mental preparedness. By anticipating encounters with difficult individuals, the speaker steels himself emotionally, acknowledging that such behavior stems from ignorance rather than malice.", author: "u-2",
            }, "i-2": {
                quoteId: "q-2.1", text: "The text underscores a belief in universal brotherhood and shared divinity among humans. The speaker identifies a profound connection with even those who behave poorly, viewing them not as adversaries but as misguided kin. Knowing what is truly good (virtue) and evil (vice), he refuses to let others' actions define or defile him, choosing instead to respond with understanding and cooperation, not hostility.", author: "u-1", published: false,
            }, "i-3": {
                quoteId: "q-2.1", text: "This passage reflects the Stoic view that true harm comes not from others’ actions, but from one’s own moral failure. By recognizing that his own virtue is invulnerable to insult or injury, the speaker immunizes himself against offense. Even when confronted with selfish or negative people, he holds fast to his own values and dignity, grounded in the conviction that turning against others contradicts both reason and nature.", author: "u-2",
            }, "i-4": {
                quoteId: "q-2.2", text: "Here, the metaphor of body parts working together illustrates the Stoic principle that humans are designed for harmony, not conflict. Just as disjointed limbs impair the body, discord among people disrupts the social order.", author: "u-1", published: true
            },
            "i-5": {
                quoteId: "q-2.3", text: "This passage, drawn from Marcus Aurelius’ Meditations, exemplifies a Stoic exercise in mental preparedness. By anticipating encounters with difficult individuals, the speaker steels himself emotionally, acknowledging that such behavior stems from ignorance rather than malice.", author: "u-2",
            }, "i-6": {
                quoteId: "q-6.19", text: "The text underscores a belief in universal brotherhood and shared divinity among humans. The speaker identifies a profound connection with even those who behave poorly, viewing them not as adversaries but as misguided kin. Knowing what is truly good (virtue) and evil (vice), he refuses to let others' actions define or defile him, choosing instead to respond with understanding and cooperation, not hostility.", author: "u-1", published: false,
            }, "i-7": {
                quoteId: "q-12.1", text: "This passage reflects the Stoic view that true harm comes not from others’ actions, but from one’s own moral failure. By recognizing that his own virtue is invulnerable to insult or injury, the speaker immunizes himself against offense. Even when confronted with selfish or negative people, he holds fast to his own values and dignity, grounded in the conviction that turning against others contradicts both reason and nature.", author: "u-2",
            }, "i-8": {
                quoteId: "q-2.2", text: "Here, the metaphor of body parts working together illustrates the Stoic principle that humans are designed for harmony, not conflict. Just as disjointed limbs impair the body, discord among people disrupts the social order.", author: "u-1", published: true
            }
        }, sources: {
            "s-1": {
                name: 'Meditations, Marcus Aurelius'
            }
        }, categories: {
            "cat-1": {
                name: 'Stoicism'
            }
        }, tags: {
            "tag-1": {
                name: 'Acceptance'
            }, "tag-2": {
                name: 'LiveFully'
            }, "tag-3": {
                name: 'SelfReflection'
            }, "tag-4": {
                name: 'InnerPeace'
            }
        }, users: {
            "u-1": {
                seenQuoteIds: ["q-2.1", "q-2.2"]
            }
        }
    });

    const [currentPage, setCurrentPage] = useState("intro");
    const showAllPages = false;
    console.log("currentPage " + currentPage);

    const [dailyQuote, setDailyQuote] = useState("q-2.1");
    const [currentUser, setCurrentUser] = useState("u-1");

    const navigateToDailyQuote = (quoteId: SetStateAction<string>) => {
        setDailyQuote(quoteId);
        setCurrentPage("daily");
    }

    // @ts-ignore
    return (
        <>
            <SidebarProvider defaultOpen={false} className="w-full flex flex-col">
                <DatabaseContext.Provider value={{database, setDatabase}}>
                    <PageContext.Provider value={{currentPage, setCurrentPage}}>
                        <UserContext.Provider value={{currentUser, setCurrentUser}}>
                            <HamburgerMenu />
                            <TopBar />
                            <main>
                                {(currentPage == "intro" || showAllPages) && <IntroPage onQuoteSelected={navigateToDailyQuote} />}
                                { showAllPages && <hr />}
                                {(currentPage == "reintro" || showAllPages) && <ReintroPage />}
                                { showAllPages && <hr />}
                                {(currentPage == "daily" || showAllPages) && <DailyQuotePage quoteId={dailyQuote} />}
                                { showAllPages && <hr />}
                                {(currentPage == "calendar" || showAllPages) && <CalendarView />}
                                { showAllPages && <hr />}
                                {(currentPage == "Stoicism" || showAllPages) && <InfoFrameCategory categoryName= 'Stoicism'/>}

                                { showAllPages && <>
                                    <hr />


                                    <h1 className="text-5xl">Tu są losowe testy poniżej</h1>
                                    <InterpretationList />
                                </>}
                            </main>
                        </UserContext.Provider>
                    </PageContext.Provider>
                </DatabaseContext.Provider>
            </SidebarProvider>
        </>
    )
}

export default App
