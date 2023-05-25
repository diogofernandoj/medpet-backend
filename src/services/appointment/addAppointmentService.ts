import prismaClient from "../../prisma";

type AppointmentRequest = {
  service: string;
  animal: string;
  client_name: string;
  client_phone_number?: string;
  client_address?: string;
  date: Date;
  status: boolean;
  user_id: string;
};

export class AddAppointmentService {
  async execute({
    service,
    animal,
    client_name,
    client_phone_number,
    client_address,
    date,
    status,
    user_id,
  }: AppointmentRequest) {
    const appointment = await prismaClient.appointment.create({
      data: {
        service,
        animal,
        client_name,
        client_phone_number,
        client_address,
        date,
        status,
        user_id,
      },
    });

    return appointment;
  }
}
