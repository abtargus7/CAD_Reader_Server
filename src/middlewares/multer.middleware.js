import multer from "multer"
import fs from 'fs'
import path from "path"

const storage =  multer.diskStorage({
    destination: function(req, file, cb) {
        cd(null, './public')
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

