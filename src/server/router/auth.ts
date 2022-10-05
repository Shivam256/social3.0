import { createRouter } from "./context";
import * as Inputs from "../inputs/auth.input";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authRouter = createRouter().mutation("signup", {
  input: Inputs.signupInput,
  async resolve({ ctx, input }) {
    const { username, password, email } = input;

    const userExist = await ctx.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      return {
        error: true,
        message: "User already exists!",
      };
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await ctx.prisma.user.create({
      data: {
        username,
        email,
        password: hash,
      },
    });

    const token = jwt.sign(
      {
        id: user.id,
      },
      "thisissecret",
      { expiresIn: "100000m" }
    );

    return {
      error: false,
      message: "User created",
      user,
      token,
    };
  },
});
