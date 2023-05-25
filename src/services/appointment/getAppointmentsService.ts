import prismaClient from "../../prisma";

export class GetAppointmentsService {
  async execute(user_id: string) {
    const appointments = await prismaClient.appointment.findMany({
      where: {
        user_id,
      },
      select: {
        id: true,
        service: true,
        animal: true,
        client_name: true,
        client_phone_number: true,
        client_address: true,
        date: true,
        status: true,
      },
    });

    return appointments;
  }
}
