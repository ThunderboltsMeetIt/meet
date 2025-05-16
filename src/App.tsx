import './App.css'
import Quote from "@/components/quote/quote.tsx";
import GetDate from "@/components/date/date.tsx";
import InterpretationEditor from "@/components/interpretationEditor/interpretationEditor.tsx"

function App() {
    const date = GetDate('');
    return (
        <>
            <h1>Today's Date: {date}</h1>
            <Quote quote={{title: "Abc", text: "afldjlfasjl"}}/>
            <InterpretationEditor/>
        </>
    )
}

export default App
