export const noRedirectURLs = ["/signup", "/passwordReset"]

export const possibleVideoLinks = [
    "https://res.cloudinary.com/dcp3h85ie/video/upload/v1719765588/18749462-uhd_2160_3840_60fps_xngqt8.mp4", 
    "https://res.cloudinary.com/dcp3h85ie/video/upload/v1719765568/18749457-hd_1080_1920_60fps_my6wnc.mp4", 
    "https://res.cloudinary.com/dcp3h85ie/video/upload/v1719765582/4427479-hd_1080_1920_30fps_vyufj3.mp4"
  ]

export const sleep = (ms:number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const parseErrorMessage = (error: typeof Error | string)=>{
  if(error instanceof Error) return error.message
  return error
}