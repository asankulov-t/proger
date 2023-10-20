import axios from "axios";


const instance = axios.create({
    baseURL: 'https://dev.to/api/articles',
    // headers: {
    //     'X-Custom-Header': 'foobar',
    //     "api-key":'mYM7roJxuDBmWfv56Cs9o2N8',
    // }
})

//'?tag=redux&&top=50'
export const API = {
    getArticles(per_page:number,tag:string='') {
        return instance.get(`?per_page=${per_page}&tag=${tag}`)
    },
    resultOfSearch(per_page:number,title:string=''){
        return instance.get('/')
    },
    getCurrentArticle(id:number){
        return instance.get(id+'')
    },
    getVideos(){
        return instance.get('/videos')
    }
}



