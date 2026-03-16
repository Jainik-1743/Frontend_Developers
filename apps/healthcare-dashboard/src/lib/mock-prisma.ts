import appointments from "../../data/appointments.json";
import patients from "../../data/patients.json";
import prescriptions from "../../data/prescriptions.json";

import type {
  PrismaAppointment,
  PrismaPatient,
  PrismaPrescription,
} from "@/generated/prisma-types";

const patientRows = patients as PrismaPatient[];
const appointmentRows = appointments as PrismaAppointment[];
const prescriptionRows = prescriptions as PrismaPrescription[];

export const mockPrisma = {
  patient: {
    findMany: async () => patientRows,
  },
  appointment: {
    findMany: async () => appointmentRows,
  },
  prescription: {
    findMany: async () => prescriptionRows,
  },
};
