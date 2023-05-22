import { Request, Response } from "express";

import { UpdateTransactionService } from "../../services/transaction/updateTransactionService";

export class UpdateTransactionController {
  async handle(req: Request, res: Response) {
    const { transaction_id, date, type, title, value, status } = req.body;

    const updateTransaction = new UpdateTransactionService();

    const transaction = await updateTransaction.execute({
      transaction_id,
      date,
      type,
      title,
      value,
      status,
    });

    return res.json(transaction);
  }
}
