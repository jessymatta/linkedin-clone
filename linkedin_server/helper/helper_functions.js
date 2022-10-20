var fs = require('fs');
const saveLogo = (base64_img, email) => {
    const base64 = base64_img;
    const buff = Buffer.from(base64, 'base64');
    filePath =  email+".png"
    fs.writeFileSync( filePath, buff);
    return filePath;
}

module.exports = {saveLogo};