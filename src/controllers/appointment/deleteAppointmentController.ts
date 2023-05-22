import { Request, Response } from "express";

import { DeleteAppointmentService } from "../../services/appointment/deleteAppointmentService";

export class DeleteAppointmentController {
  async handle(req: Request, res: Response) {
    const appointment_id = req.query.appointment_id as string;

    const deleteAppointment = new DeleteAppointmentService();

    const appointment = await deleteAppointment.execute(appointment_id);

    return res.json(appointment);
  }
}
