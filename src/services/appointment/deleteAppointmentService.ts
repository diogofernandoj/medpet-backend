import prismaClient from "../../prisma";

export class DeleteAppointmentService {
  async execute(id: string) {
    const appointment = await prismaClient.appointment.delete({
      where: {
        id,
      },
    });

    return appointment;
  }
}
