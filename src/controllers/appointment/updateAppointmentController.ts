import { Request, Response } from "express";

import { UpdateAppointmentService } from "../../services/appointment/updateAppointmentService";

export class UpdateAppointmentController {
  async handle(req: Request, res: Response) {
    const {
      appointment_id,
      service,
      animal,
      client_name,
      client_phone_number,
      client_address,
      date,
    } = req.body;

    const updateAppointment = new UpdateAppointmentService();

    const appointment = await updateAppointment.execute({
      appointment_id,
      service,
      animal,
      client_name,
      client_phone_number,
      client_address,
      date,
    });

    return res.json(appointment);
  }
}
