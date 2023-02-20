exports.getFileMinio = async (bucker, filename) => {
    var Minio = require('minio')

    var s3Client = new Minio.Client({
        // endPoint: '192.168.2.29',
        // port: 9001,
        // accessKey: 'XNTYE7HIMF6KK4BVEIXA',
        // secretKey: 'naD+esQ+uV7+xwfF3bPfAn5iC7C1XUyXeM8HkBlO',
        // useSSL: false

        endPoint: process.env.MinIO_EndPoint,
        port: Number(process.env.MinIO_Port),
        accessKey: process.env.MinIO_AccessKey,
        secretKey: process.env.MinIO_SecretKey,
        useSSL: (process.env.MinIO_UseSSL === 'true') 
    });

    // console.log(s3Client)
    // console.log('bucker', bucker)
    // console.log('bucker', filename)
    // console.log('process.env.MinIO_UseSSL', process.env.MinIO_UseSSL === 'true')

    var presignedUrl = await s3Client.presignedGetObject(bucker, filename, 1000)

    console.log('presignedUrl', presignedUrl)

    return presignedUrl;
};