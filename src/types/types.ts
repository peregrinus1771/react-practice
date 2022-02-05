

export type CategoryTypes = {
    id: string
    name: string
}

export type TagTypes = {
    id: string
    name: string
}

export type PostTypes = {
    id: string
    title: string
    body: string
    synopsis: string
    updatedAt: string
    category: CategoryTypes
    tag: TagTypes[]
}