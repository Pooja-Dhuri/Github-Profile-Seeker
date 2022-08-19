import axios from "axios"

function Fetchusers(query,page){
    if(!query){
        return Promise.reject("Query Not Found")
    }
        return axios.get(`https://api.github.com/search/users?page=${page}&perpage`,{
            params:{
                q:query,
                per_page:10,
                // pages:page
            }
        })

    
}
export {Fetchusers}