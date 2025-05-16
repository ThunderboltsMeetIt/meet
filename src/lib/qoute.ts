export interface QuoteData {
    title: string,
    sourceId: number,
    text: string,
    categoryId: number,
    tagIds: number[],
}

export const quotes: QuoteData[] = [
    {
        title: "2.1",
        sourceId: 1,
        text: "Begin the morning by saying to yourself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.\n" + "\n" + "But I who have seen the nature of the good that is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.\n" + "\n" + "For we are made for cooperation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to Nature, and it is acting against one another to be vexed and to turn away.",
        categoryId: 2,
        tagIds: [5, 9],
    },
    {
        title: "2.2",
        sourceId: 1,
        text: "Whatever this is that I am, it is a little flesh and breath, and the ruling part.\n" + "\n" + "Throw away your books. No longer distract yourself, for it is not allowed, but as if you were now dying, despise the flesh. It is blood and bones and a network, a contexture of nerves, veins, and arteries. See the breath also, what kind of a thing it is, air, and not always the same, but every moment sent out and again sucked in.\n" + "\n" + "The third, then, is the ruling part. Consider this: you are an old man, no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer either be dissatisfied with your present lot, or shrink from the future.",
        categoryId: 1,
        tagIds: [3, 7],
    },
    {
        title: "2.3",
        sourceId: 1,
        text: "All that is from the gods is full of Providence. That which is from Fortune is not separated from Nature, or without an interweaving and involvement with the things that are ordered by Providence.\n" + "\n" + "From there all things flow, and there is besides also necessity, and that which is for the advantage of the whole Universe, of which you are a part.\n" + "\n" + "But that is good for every part of Nature that the Nature of the whole brings, and what serves to maintain this Nature. Now the universe is preserved, as by the changes of the elements, so by the changes of things compounded of the elements.\n" + "\n" + "Let these principles be enough for you, and let them always be fixed opinions. But cast away the thirst after books, so that you may not die murmuring, but cheerfully, truly, and from your heart be thankful to the gods.",
        categoryId: 2,
        tagIds: [2, 4, 8],
    },
    {
        title: "6.19",
        sourceId: 1,
        text: "If a thing is difficult to be accomplished by yourself, do not think that it is impossible for man.\n" + "\n" + "But if anything is possible for man and conformable to his nature, think that this can be attained by yourself as well.",
        categoryId: 3,
        tagIds: [1],
    },
    {
        title: "12.1",
        sourceId: 1,
        text: "It is not death that a man should fear, but he should fear never beginning to live.",
        categoryId: 4,
        tagIds: [6, 10],
    }
];

export function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
