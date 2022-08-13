export interface MovieItem {
    id? : string,
    title: string,
    releaseDate?: string | undefined,
    release?: string| undefined,
    openingText: string
}


export interface GetMovieItem {
    episode_id: string;
    title: string;
    opening_crawl: string;
    release_date: Date;
}