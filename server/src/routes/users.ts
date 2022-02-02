import express from "express";
import { prisma } from "../app";
export const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", async (req, res, next) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

usersRouter.post("/user", async (req, res, next) => {
  const { name, username, email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      username,
    },
  });

  res.send(user);
});
