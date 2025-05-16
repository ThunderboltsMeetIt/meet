export default function Quote({quote}) {
    return (
        <>
            <h3 className="text-xl font-medium mb-2">{quote.title}</h3>
            <p>{quote.text}</p>
        </>
    );
}
