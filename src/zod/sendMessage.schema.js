import z from "zod";

export const sendMessageSchema = z.object({
  message: z.string().max(1000, "Message is too long"),
});
