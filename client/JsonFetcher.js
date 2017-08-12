export default class JsonFetcher {
    static fetchJsonFromURL(url,fallbackUrl,callback) {
        fetch(url).then((res)=>res.json()).then((json)=>{
            console.log(json)
            if(json.response_code == 0) {
                callback(json.results)
            }
            else {
                JsonFetcher.fetchJsonFromURL(fallbackUrl,fallbackUrl,callback)
            }
        }).catch((err)=>{
            console.log(err)
            alert(err)
        })
    }
}
