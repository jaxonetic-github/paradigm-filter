export type YoutubeResponse = {
  kind: string,
  etag: string,
  items: 
    {
      kind: string,
      etag: string,
      id: {
        kind: string,
        videoId: string,
      },
      snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
          default: {
            url: string,
            width: number,
            height: number,
          },
        },
        channelTitle: string,
        liveBroadcastContent: string,
      },
    }[],
  
};
 
export type VideoArrayType = { displayHeading:string,youtubeUrl:string, pathName:string, subject:string, comments:string[]};
export type ProfileType = { key: number, name: string, lifespan:string, thumbnail:string, sources:number[], videoArray:any };


 export type NjingaArrayType={displayHeading:string, pathName:string, subject:string, comments:string[]};
export type NzingaProfileType = { key: number, name: string, lifespan:string, thumbnail:string, sources:number[], videoArray:NjingaArrayType };
