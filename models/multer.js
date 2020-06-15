/*const multer = require('multer')
const cryto = require('crypto')
const {resolve,extname} = require('path')


module.exports = {
    storage: multer.diskStorage({
        destination:(req,res,cb)=>{
            cb (null,resolve('/uploads'))
    },
    filename:(req,file,cb)=>{
        cryto.randomBytes(16,(err,res)=>{
            if(err)
                return cb(err);
            
            return cb(null, res.toString('hex') + extname(file.originalname))
        })
    }
    })
} */
