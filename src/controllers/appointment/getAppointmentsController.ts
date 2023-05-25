import { Request, Response } from "express";

import { GetAppointmentsService } from "../../services/appointment/getAppointmentsService";

export class GetAppointmentsController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const getAppointments = new GetAppointmentsService();

    const appointments = await getAppointments.execute(user_id);

    return res.json(appointments);
  }
}
