import prismaClient from "../../prisma";

export class UserInfoService {
  async execute(user_id: string) {
    const userInfo = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return userInfo;
  }
}
