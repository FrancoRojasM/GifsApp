export const getGifs=async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=VKD5rLd5qEfsONYQ6b43wFVhJGGc2Sju&q=${category}&limit=10`
    const resp= await fetch(url);
    // console.log(resp);
    // desestructuramos "data"(es el nombre que tiene toda la info y está definido así por la API(puede cambiar de nombre en otros casos))
    const {data} = await resp.json()
    const gifs= data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    // console.log(gifs);
    return gifs;
}