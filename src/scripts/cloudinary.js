import axios from "axios";

const CLOUD_NAME = "richy-jones";
const CLOUD_METHOD = "upload";
const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/${CLOUD_METHOD}`;
const CLOUDINARY_PRESET = "pr_richyjones";

const CLOUDINARY_UPLOAD = (file) => {

    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET)
    formData.append('folder', 'samples')

    axios({
        url: CLOUDINARY_API,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(res => {
        console.log(res.data.secure_url);
        return res.data.secure_url
    }).catch(err => console.log(err))
}

export {
    CLOUDINARY_UPLOAD
}
