import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/createUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email, password });

    return res.json(user);
  }
}
