export default class JsonFetcher {
    static fetchJsonFromURL(url,callback) {
        fetch(url).then((res)=>res.json()).then((json)=>{
            console.log(json)
            if(json.response_code == 0) {
                callback(json.results)
            }
        }).catch((err)=>{
            console.log(err)
            alert(err)
        })
    }
}
