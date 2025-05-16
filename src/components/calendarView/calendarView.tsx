import React, { useState } from "react";
import QuoteFrame from "@/components/quoteFrame/quoteFrame.tsx";
import DailyQuotePage from "@/components/dailyquotepage/dailyquotepage.tsx";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const startDay = firstDay.getDay();
    const calendar: (number | null)[] = [];

    for (let i = 0; i < startDay; i++) {
        calendar.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendar.push(day);
    }

    return calendar;
}

export default function CalendarView() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    const [database, setDatabase] = useState({
        quotes: {
            "q-2.1": {
                title: "2.1",
                sourceId: "s-1",
                text: "Begin the morning by saying to yourself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.\n" + "\n" + "But I who have seen the nature of the good that is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.\n" + "\n" + "For we are made for cooperation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to Nature, and it is acting against one another to be vexed and to turn away.",
                categoryId: "cat-1",
                tagIds: ["tag-1"],
            },
            "q-2.2": {
                title: "2.2",
                sourceId: "s-1",
                text: "Whatever this is that I am, it is a little flesh and breath, and the ruling part.\n" + "\n" + "Throw away your books. No longer distract yourself, for it is not allowed, but as if you were now dying, despise the flesh. It is blood and bones and a network, a contexture of nerves, veins, and arteries. See the breath also, what kind of a thing it is, air, and not always the same, but every moment sent out and again sucked in.\n" + "\n" + "The third, then, is the ruling part. Consider this: you are an old man, no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer either be dissatisfied with your present lot, or shrink from the future.",
                categoryId: "cat-1",
                tagIds: ["tag-2"],
            },
            "q-2.3": {
                title: "2.3",
                sourceId: "s-1",
                text: "All that is from the gods is full of Providence. That which is from Fortune is not separated from Nature, or without an interweaving and involvement with the things that are ordered by Providence.\n" + "\n" + "From there all things flow, and there is besides also necessity, and that which is for the advantage of the whole Universe, of which you are a part.\n" + "\n" + "But that is good for every part of Nature that the Nature of the whole brings, and what serves to maintain this Nature. Now the universe is preserved, as by the changes of the elements, so by the changes of things compounded of the elements.\n" + "\n" + "Let these principles be enough for you, and let them always be fixed opinions. But cast away the thirst after books, so that you may not die murmuring, but cheerfully, truly, and from your heart be thankful to the gods.",
                categoryId: "cat-1",
                tagIds: ["tag-3"],
            },
            "q-6.19": {
                title: "6.19",
                sourceId: "s-1",
                text: "If a thing is difficult to be accomplished by yourself, do not think that it is impossible for man.\n" + "\n" + "But if anything is possible for man and conformable to his nature, think that this can be attained by yourself as well.",
                categoryId: "cat-1",
                tagIds: ["tag-3"],
            },
            "q-12.1": {
                title: "12.1",
                sourceId: "s-1",
                text: "It is not death that a man should fear, but he should fear never beginning to live.",
                categoryId: "cat-1",
                tagIds: ["tag-2"],
            }
        },
        interpretations: {
            "i-1": {
                quoteId: "q-2.1",
                text: "Pomidor rzekł szymon krupa",
            },
            "i-2": {
                quoteId: "q-2.1",
                text: "Pomidor rzekł szymon krupa2",
            },
            "i-3": {
                quoteId: "q-2.1",
                text: "Pomidor rzekł szymon krupa3",
            }
        },
        sources: {
            "s-1": {
                name: 'Medytacje - Marka Aureliusza'
            }
        },
        categories: {
            "cat-1": {
                name: 'Stoicyzm'
            }},
        tags: {
            "tag-1": {
                name: 'Acceptance'
            },
            "tag-2": {
                name: 'LiveFully'
            },
            "tag-3": {
                name: 'SelfReflection'
            }
        },
    });


    const days = generateDays(currentYear, currentMonth);


    const handleDayClick = (day: number) => {
        setSelectedDay(day);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedDay(null);
    };

    return (
            <div className="p-4 max-w-xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">
                    {new Date(currentYear, currentMonth).toLocaleString("default", {
                        month: "long",
                    })}{" "}
                    {currentYear}
                </h1>

                <div className="grid grid-cols-7 gap-2 text-center font-semibold">
                    {daysOfWeek.map((day) => (
                            <div key={day}>{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2 mt-2">
                    {days.map((day, index) =>
                            day ? (
                                    <button
                                            key={index}
                                            className="p-2 border rounded hover:bg-blue-200"
                                            onClick={() => handleDayClick(day)}
                                    >
                                        {day}
                                    </button>
                            ) : (
                                    <div key={index}></div>
                            )
                    )}
                </div>

                {/* Modal with QuoteFrame */}
                {showModal && selectedDay !== null && (
                        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                <h2 className="text-xl font-bold mb-2">
                                    Day {selectedDay} Info
                                </h2>

                                {/* Render QuoteFrame */}
                                <DailyQuotePage quoteId={"q-2.1"} />


                                <button
                                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                )}
            </div>
    );
}