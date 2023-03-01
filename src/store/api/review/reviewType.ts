export interface AddReviewType {
    review: {
        stars: number
    },
    comment: {
        comment: string,
        created_date: string
    }
}