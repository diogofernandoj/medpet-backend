import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import prismaClient from "../../prisma";

type UserRequest = {
  email: string;
  password: string;
};

export class AuthUserService {
  async execute({ email, password }: UserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email e/ou senha incorreto(s)!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email e/ou senha incorreto(s)!");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}
