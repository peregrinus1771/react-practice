export type CategoryTypes = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
}

export type TagTypes = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
}

export type ArticleTypes = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
    synopsis: string
    category: CategoryTypes
    tag: TagTypes[]
}
