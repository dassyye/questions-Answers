import { z } from "zod";

export const userBodySchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string()
})

export const replyBodySchema = z.object({
  id: z.string().optional(),
  reply: z.string(),
  question_id: z.string()
})