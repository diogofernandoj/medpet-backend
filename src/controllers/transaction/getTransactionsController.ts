import { Request, Response } from "express";

import { GetTransactionsService } from "../../services/transaction/getTransactionsService";

export class GetTransactionsController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const getTransactions = new GetTransactionsService();

    const transactions = await getTransactions.execute(user_id);

    return res.json(transactions);
  }
}
