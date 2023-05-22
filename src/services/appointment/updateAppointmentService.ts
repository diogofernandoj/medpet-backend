import prismaClient from "../../prisma";

type AppointmentRequest = {
  appointment_id: string;
  service: string;
  animal: string;
  client_name: string;
  client_phone_number: string;
  client_address: string;
  date: string;
};

export class UpdateAppointmentService {
  async execute({
    appointment_id,
    service,
    animal,
    client_name,
    client_phone_number,
    client_address,
    date,
  }: AppointmentRequest) {
    const appointment = await prismaClient.appointment.update({
      where: {
        id: appointment_id,
      },
      data: {
        service,
        animal,
        client_name,
        client_phone_number,
        client_address,
        date,
      },
    });

    return appointment;
  }
}
