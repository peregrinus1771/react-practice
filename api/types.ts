export type Blog = {
    title?: string
    body?: string
    synopsis?: string
    updatedAt?: string
    category?: Category
    tag?: Tag[]
}

export type Category = {
    name?: string
}

export type Tag = {
    name?: string
}