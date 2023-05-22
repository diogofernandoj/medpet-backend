import { Request, Response } from "express";

import { AddTransactionService } from "../../services/transaction/addTransactionService";

export class AddTransactionController {
  async handle(req: Request, res: Response) {
    const { date, type, title, value, status } = req.body;
    const user_id = req.user_id;

    const addTransaction = new AddTransactionService();

    const transaction = await addTransaction.execute({
      date,
      type,
      title,
      value,
      status,
      user_id,
    });

    return res.json(transaction);
  }
}
