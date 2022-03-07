export interface Note {
    id: number;
    createdAt: Date | null;
    title: string;
    tag: string;
    specificTag: string;
    author: string;
    source: string;
    action: string;
}

export interface GraphQLNotes {
    attributes: {
        author: { data: { attributes: { title: string } } };
        createdAt: Date | null;
        source: { data: { attributes: { title: string } } };
        specific_tag: { data: { attributes: { title: string } } };
        tag: { data: { attributes: { title: string } } };
        title: string;
        action: { data: { attributes: { action: string } } };
    };
    id: number;
}
