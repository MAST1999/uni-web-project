import { Prisma } from "@prisma/client";
import express from "express";
import { prisma } from "../app";
import { generateAccessToken } from "../utilities/generateAccessToken";
export const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", async (req, res, next) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

usersRouter.post("/user", async (req, res, next) => {
  const {
    name,
    username,
    email,
    password,
    phoneNumber,
  }: Prisma.UserCreateInput = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      username,
      phoneNumber,
    },
  });

  const token = generateAccessToken({ username: user.username });

  res.send({ user, token });
});

usersRouter.post("/user/login", async (req, res, next) => {
  const { username, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      username,
      password,
    },
  });

  if (!user) {
    res.send({ result: false, message: "Invalid username or password" });
    return;
  }

  const token = generateAccessToken({ username: user.username });

  res.send({ user, token });
});
