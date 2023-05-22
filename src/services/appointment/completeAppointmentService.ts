import prismaClient from "../../prisma";

export class CompleteAppointmentService {
  async execute(appointment_id: string) {
    const appointment = await prismaClient.appointment.update({
      where: {
        id: appointment_id,
      },
      data: {
        status: true,
      },
    });

    return appointment;
  }
}
