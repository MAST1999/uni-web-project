import { sign } from "jsonwebtoken";

export const generateAccessToken = (params: Record<string, string>) => {
  if (!process.env.TOKEN_SECRET) throw new Error("TOKEN_SECRET is not defined");
  return sign(params, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};
