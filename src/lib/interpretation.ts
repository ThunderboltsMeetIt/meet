
export interface Interpretation {
    uuid: string;
    content: string;
    category: string;
}

const interpretations: Map<string, Interpretation> = new Map();


export function getInterpretationByUUID(id: string): Interpretation | null {
    return interpretations.get(id) || null;
}

export function saveInterpretation(interpretation: Interpretation) {
    const entity = getInterpretationByUUID(interpretation.uuid);
    if(entity) {
        return;
    }
    interpretations.set(interpretation.uuid, interpretation);
}

export function getAllInterpretations() : Interpretation[] {
    return Array.from(interpretations.values());
}


