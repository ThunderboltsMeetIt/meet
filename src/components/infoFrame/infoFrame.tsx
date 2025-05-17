import { useContext, useState } from "react";
import { DatabaseContext } from "@/lib/database.ts";
import './infoFrame.css'
import {PageContext} from "@/lib/currentPage.ts";
export default function InfoFrameCategory({ categoryName }) {
    const { database } = useContext(DatabaseContext);
    const {currentPage, setCurrentPage} = useContext(PageContext);

    console.log(categoryName);
    const categoryId = Object.keys(database.categories).find(
            (id) => database.categories[id].name === categoryName
    );

    if (!categoryId) {
        return <p>Category not found.</p>;
    }

    const matchingQuotes = Object.entries(database.quotes)
            .filter(([_, quote]) => quote.categoryId === categoryId);

    return (
            <div className="space-y-4">
                <h1>Quotes in Category: {categoryName}</h1>

                {matchingQuotes.map(([id, quote]) => (
                        <div key={id} className="infoFrame-container">
                            <div className="infoFrame-text">{quote.title}</div>
                            <p className="source">Source: {database.sources[quote.sourceId]?.name}</p>
                        </div>
                ))}
            </div>
    );
}
