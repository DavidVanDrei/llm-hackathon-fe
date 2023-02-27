export interface Note {
    id: number
    title: string
    tags: string[]
    body: string
    links: string[]
    references: string[]
    createdAt: Date
    updatedAt: Date
    topicId?: number | null
}

export interface Topic {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    subTopics?: Topic[]
    superTopicId?: number
    notes: Note[]
}
