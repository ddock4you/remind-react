export interface ConvertMovieItem {
    id?: string,
    title: string,
    openingText: string,
    releaseDate?:string,
    release?: string
}

export interface GetMovieData {
    id: string,
    title: string,
    openingText: string,
    releaseDate:string    
}