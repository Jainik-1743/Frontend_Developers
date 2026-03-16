import { Patient, Appointment, Prescription } from "@prisma/client";
import patientsData from "../../data/patients.json";
import appointmentsData from "../../data/appointments.json";
import prescriptionsData from "../../data/prescriptions.json";

// Cast the static arrays to the generated Prisma types
const patients = patientsData as unknown as Patient[];
const appointments = appointmentsData as unknown as Appointment[];
const prescriptions = prescriptionsData as unknown as Prescription[];

export const prismaMock = {
  patient: {
    findMany: async () => patients,
    findUnique: async ({ where }: { where: { id: string } }) =>
      patients.find((p) => p.id === where.id) || null,
  },
  appointment: {
    findMany: async () => appointments,
    findFirst: async ({ where }: { where: { patientId: string } }) =>
      appointments.find((a) => a.patientId === where.patientId) || null,
  },
  prescription: {
    findMany: async () => prescriptions,
  },
};
