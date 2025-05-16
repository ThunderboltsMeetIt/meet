import type {QuoteData} from "@/lib/qoute.ts";

export default function Quote({quote}: {quote: Partial<QuoteData>}) {
    return (
        <>
            <p>{quote.title}</p>
            <p>{quote.text}</p>
        </>
    );
}
