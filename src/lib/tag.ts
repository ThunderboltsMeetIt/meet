const tags: Tag[] = [];

export interface Tag
{
    id: number;
    name: string;
}

export function getTagById(id: number)
{
    return tags.find(tag => tag.id === id) || null;
}

export function getTagByName(name: string)
{
    return tags.find(tag => tag.name === name) || null;
}

export function addTag(name: string): Tag
{

    const existingTag = getTagByName(name);
    if (existingTag)
    {
        return existingTag;
    }

    const newId = tags.length > 0 ? Math.max(...tags.map(tag => tag.id)) + 1 : 1;

    const newTag: Tag = {id: newId, name};
    tags.push(newTag);
    return newTag;
}