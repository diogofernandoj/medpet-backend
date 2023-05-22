import { Request, Response } from "express";

import { DeleteTransactionService } from "../../services/transaction/deleteTransactionService";

export class DeleteTransactionController {
  async handle(req: Request, res: Response) {
    const transaction_id = req.query.transaction_id as string;

    const deleteTransaction = new DeleteTransactionService();

    const transaction = await deleteTransaction.execute(transaction_id);

    return res.json(transaction);
  }
}
