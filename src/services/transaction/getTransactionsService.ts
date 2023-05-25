import prismaClient from "../../prisma";

export class GetTransactionsService {
  async execute(user_id: string) {
    console.log(user_id);
    const transactions = await prismaClient.transaction.findMany({
      where: {
        user_id,
      },
      select: {
        id: true,
        date: true,
        type: true,
        title: true,
        value: true,
        status: true,
      },
    });

    return transactions;
  }
}
