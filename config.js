import dotenv from 'dotenv';

dotenv.config();
const config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.mongoURI || 'mongodb://localhost:27017/booksdb',
    jwtSecret: process.env.JWT_SECRET,
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        bucketName: process.env.AWS_BUCKET_NAME
    }
};

export default config;