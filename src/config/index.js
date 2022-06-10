import 'dotenv/config'
export const config = {
    PORT: parseInt(process.env.API_PORT, 10) || 5000,
};
