import Redis from "ioredis";
require("dotenv").config();

// Function to create and return a Redis client
const redisClient = () => {
  if (process.env.RADIS_URL) {
    console.log("Connecting to Redis...");
    return new Redis(process.env.RADIS_URL); // Pass the Redis URL directly
  }
  throw new Error(
    "Redis Connection Failed: REDIS_URL is not defined in the environment variables"
  );
};

// Export the Redis client
export const redis = redisClient();
