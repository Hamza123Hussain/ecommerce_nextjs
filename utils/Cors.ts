// lib/cors.js

import Cors from 'cors'
// Initialize CORS middleware
export const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: true, // Adjust this to your frontend URL in production
})

// Helper function to run middleware
export function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}
