import multer from "multer";
const checkExcel  = multer({
    storage:multer.diskStorage({}),
    limits:{
        fileSize:500*1024*1024
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(xls|xlsx)$/)){
            return cb(new Error("please upload valid excel sheet "))
            
        }
        cb(null,true)
    }
})

export default checkExcel;