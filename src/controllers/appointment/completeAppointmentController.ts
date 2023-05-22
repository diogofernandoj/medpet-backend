import { Request, Response } from "express";

import { CompleteAppointmentService } from "../../services/appointment/completeAppointmentService";

export class CompleteAppointmentController {
  async handle(req: Request, res: Response) {
    const { appointment_id } = req.body;

    const completeAppointment = new CompleteAppointmentService();

    const appointment = await completeAppointment.execute(appointment_id);

    return res.json(appointment);
  }
}
