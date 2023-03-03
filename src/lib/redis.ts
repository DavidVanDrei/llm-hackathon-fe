import { createClient, SchemaFieldTypes, VectorAlgorithms } from 'redis';
import prisma from './prisma'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);


// helper
function float32Buffer(arr) {
    return Buffer.from(new Float32Array(arr).buffer);
  }


const RedisClient = async function RedisClient(){
    const client = createClient({
      password: process.env.REDIS_PWD,
      socket: {
          host: process.env.REIDS_HOST,
          port: process.env.REIDS_PORT
      }
  })
        return client
    }
// create and refresh all embeddings
    const CreateEmbeddings = async function CreateEmbeddings(){
        const notes = await prisma.note.findMany({select: {
            id: true,
            body:true,
          }})
    const redis = await RedisClient()
    redis.connect();
    // Create Index
    try {
        // Documentation: https://redis.io/docs/stack/search/reference/vectors/
        await redis.ft.create('notes', {
        id:{type: SchemaFieldTypes.NUMERIC},
    
          v: {
            type: SchemaFieldTypes.VECTOR,
            ALGORITHM: VectorAlgorithms.FLAT,
            TYPE: 'FLOAT32',
            DIM: 1536,
            DISTANCE_METRIC: 'COSINE',
            INITIAL_CAP: 511
          }
        }, {
          ON: 'HASH',
          PREFIX: 'notes'
        });
      } catch (e) {
        if (e.message === 'Index already exists') {
          console.log('Index exists already, skipped creation.');
        } else {
          // Something went wrong, perhaps RediSearch isn't installed...
          console.error(e);
          process.exit(1);
        }
    
    for (let i = 0; i < notes.length; i++){
        let id = notes[i].id.toString()
        let body = notes[i].body.toString()
        const embed = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input: body,
          });
        const res = await Promise.all([
          redis.hSet(id, { v: float32Buffer(embed['data']['object']) }),
        ]);
        console.log(res)

    
    }
    redis.quit();
    
    }
  }

  
    

export default {RedisClient, CreateEmbeddings}