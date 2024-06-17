export interface UserObj {
    nickname: string,
    slug?: string
}

export interface DataObj {
    title: string,
    desc: string,
    slug: string,
    amount: number,
    user: UserObj,
    likes_count: number,
    views_count: number,
    comments_count: number,
}