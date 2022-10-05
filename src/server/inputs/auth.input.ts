import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});
