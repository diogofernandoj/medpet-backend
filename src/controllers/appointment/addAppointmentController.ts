import { Request, Response } from "express";

import { AddAppointmentService } from "../../services/appointment/addAppointmentService";

export class AddAppointmentController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const {
      service,
      animal,
      client_name,
      client_phone_number,
      client_address,
      date,
      status,
    } = req.body;

    const addAppointment = new AddAppointmentService();

    const appointment = await addAppointment.execute({
      service,
      animal,
      client_name,
      client_phone_number,
      client_address,
      date,
      status,
      user_id,
    });

    return res.json(appointment);
  }
}
