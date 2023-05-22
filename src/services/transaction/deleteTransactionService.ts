import prismaClient from "../../prisma";

export class DeleteTransactionService {
  async execute(id: string) {
    const transaction = await prismaClient.transaction.delete({
      where: {
        id,
      },
    });

    return transaction;
  }
}
