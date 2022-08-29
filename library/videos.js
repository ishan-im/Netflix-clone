import videoData from '../data/videos.json';


const fetchVideos = async (url) => {

    const YOUTUBE_API_KEY =  process.env.YOUTUBE_API_KEY_NEW;
    const BASE_URL = `youtube.googleapis.com/youtube/v3`
    
    const response = await fetch(`https://${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);

    console.log('response: ',response);
  
    return await response.json();
  };


export const getCommonVideos = async (url) => {

   

    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=disney&key=[YOUR_API_KEY] 


    //GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=[YOUR_API_KEY] HTTP/1.1




   
    try{ 

        const isDev = process.env.DEVELOPMENT;
  
        const YOUTUBE_API_KEY =  process.env.YOUTUBE_API_KEY_NEW;
       const BASE_URL = `youtube.googleapis.com/youtube/v3`
    
      const response = await fetch(`https://${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);

    console.log('response: ',response);
  
    const data =  await response.json();

    console.log('====================================');
    console.log(data);
    console.log('====================================');
        
   if(data?.error){

    console.error('Youtube API Error', data.error.message);
    return [];

   }

    return data?.items.map(item=>{

        const id = item?.id?.videoId || item.id

        return{
            title: item.snippet.title,
            imageUrl: item.snippet.thumbnails.high.url,
            id: id || Math.random(),
            description: item.snippet.description,
            publishTime: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            statistics: item.statistics ? item.statistics : {viewCount: 0},
        }

    });
}
catch(error){
    console.log('something wrong with videolibrary ', error);
    return [];
}
}


export const getVideos = (searchQuery) =>{

    const URL = `search?part=snippet&maxResults=50&q=${searchQuery}`
    
    return getCommonVideos(URL);

}

export const getPopularVideos = () =>{

const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN`

  return getCommonVideos(URL);

}



export const getYoutubeVideosById= (videoId) =>{

    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
    
      return getCommonVideos(URL);
    
    }