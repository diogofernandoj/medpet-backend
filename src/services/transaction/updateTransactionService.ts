import prismaClient from "../../prisma";

type TransactionRequest = {
  transaction_id: string;
  date: Date;
  type: boolean;
  title: string;
  value: number;
  status: boolean;
};

export class UpdateTransactionService {
  async execute({
    transaction_id,
    date,
    type,
    title,
    value,
    status,
  }: TransactionRequest) {
    const transaction = await prismaClient.transaction.update({
      where: {
        id: transaction_id,
      },
      data: {
        date,
        type,
        title,
        value,
        status,
      },
    });

    return transaction;
  }
}
