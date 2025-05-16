export interface Source
{
    id: string;
    name: string;
}

export function getSourceById(id: string)
{
    return sources.find(source => source.id === id) || null;
}

export function getSourceByName(name: string)
{
    return sources.find(source => source.name === name) || null;
}

export function addSource(name: string): Source
{
    const existingSource = getSourceByName(name);
    if (existingSource)
    {
        return existingSource;
    }

    const newId = sources.length > 0 ? Math.max(...sources.map(source => source.id)) + 1 : 1;

    const newSource: Source = {id: newId, name};
    sources.push(newSource);
    return newSource;
}

export const sources:  Source[] = [
    {
        id: 's-1',
        name: 'Medytacje - Marka Aureliusza',
    }
]