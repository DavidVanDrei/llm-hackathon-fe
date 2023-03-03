// bulk make embeddings for all notes without one.
import prisma from "../src/lib/prisma";
import redis from "../src/lib/redis";
import { Configuration, OpenAIApi } from "openai";
import { createClient, SchemaFieldTypes, VectorAlgorithms } from 'redis';
import CreateEmbeddings from '../src/lib/redis'

const embed = Promise.resolve(CreateEmbeddings)

Promise.all([embed]).then((values) => {
  console.log(values[0].CreateEmbeddings());
});




