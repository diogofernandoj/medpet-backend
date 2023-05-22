import { hash } from "bcryptjs";

import prismaClient from "../../prisma";

type UserRequest = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos!");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("Email já cadastrado!");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}
