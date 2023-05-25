import prismaClient from "../../prisma";

type TransactionRequest = {
  date: Date;
  type: boolean;
  title: string;
  value: number;
  status: boolean;
  user_id: string;
};

export class AddTransactionService {
  async execute({
    date,
    type,
    title,
    value,
    status,
    user_id,
  }: TransactionRequest) {
    if (!date || !title || !value || !user_id) {
      throw new Error("Preencha todos os campos!");
    }

    const transaction = await prismaClient.transaction.create({
      data: {
        date,
        type,
        title,
        value,
        status,
        user_id,
      },
    });

    return transaction;
  }
}
