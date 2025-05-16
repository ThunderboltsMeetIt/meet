export interface QuoteData {
    title: string,
    sourceId: number,
    text: string,
    categoryId: number,
    tagIds: number[],
}

export const quotes: QuoteData[] = [
    {
        title: "Inspiration from the Mountains",
        sourceId: 1,
        text: "The best view comes after the hardest climb.",
        categoryId: 2,
        tagIds: [5, 9],
    },
    {
        title: "Wisdom of the Ages",
        sourceId: 2,
        text: "Knowing yourself is the beginning of all wisdom.",
        categoryId: 1,
        tagIds: [3, 7],
    },
    {
        title: "Modern Motivation",
        sourceId: 3,
        text: "Push yourself, because no one else is going to do it for you.",
        categoryId: 2,
        tagIds: [2, 4, 8],
    },
    {
        title: "Patience and Time",
        sourceId: 4,
        text: "Time is the wisest counselor of all.",
        categoryId: 3,
        tagIds: [1],
    },
    {
        title: "Leadership Thought",
        sourceId: 5,
        text: "A leader is one who knows the way, goes the way, and shows the way.",
        categoryId: 4,
        tagIds: [6, 10],
    }
];

export function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
