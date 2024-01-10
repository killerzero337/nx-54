'use server'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    folder: 'galeria'
});

export async function uploadFile(formData) {
    const file = formData.get('file')

    const buffer = await file.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    try {
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream((error, result) => {
                    if (error) return reject(error)
                    else return resolve(result)
                })
                .end(bytes);
        })

        const result = await cloudinary.uploader
            .rename(uploadResult.public_id, `galeria/${file.name}`, { overwrite: true })

        return { type: 'success', message: 'Archivo subido' }

    } catch (error) {
        return { type: 'error', message: error.message }
    }
}