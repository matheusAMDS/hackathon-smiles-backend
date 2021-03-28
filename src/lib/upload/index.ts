import { v2 as cloudinary } from "cloudinary"
import multer from "multer"
import { CloudinaryStorage } from "multer-storage-cloudinary"

import { CLOUDINARY_CONFIG, CLOUDINARY_FOLDER } from "../../config"

cloudinary.config(CLOUDINARY_CONFIG)

export default multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: CLOUDINARY_FOLDER,
    }
  })
})