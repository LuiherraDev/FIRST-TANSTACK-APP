import { z } from 'zod'

export const analysisSchema = z.object({
  message: z
    .string()
    .trim()
    .min(5, 'El mensaje debe tener al menos 5 caracteres')
    .max(2000, 'El mensaje no puede superar los 2000 caracteres'),
})