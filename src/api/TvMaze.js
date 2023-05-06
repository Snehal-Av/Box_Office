const BASE_URL="https://api.tvmaze.com"
const getApi=async(QueryString)=>{
    const response=await fetch(`${BASE_URL}${QueryString}`)
    const body=await response.json()
    return body
}

export const SearchForShows=(query)=>(getApi(`/search/shows?q=${query}`))

export const SearchForPeople=(query)=>(getApi(`/search/people?q=${query}`))