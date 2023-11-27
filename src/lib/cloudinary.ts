// import { v2 as cloudinary } from 'cloudinary';


// cloudinary.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   })

// export default cloudinary

import cloudinaryLib from 'cloudinary'

const cloudinary = cloudinaryLib.v2

cloudinary.config({
    cloud_name: 'dqojz5vft',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default cloudinary