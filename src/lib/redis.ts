import { createClient } from 'redis'

const url = process.env.REDIS_URL
const redis = createClient({
    url
});

export default redis