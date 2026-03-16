export interface PrismaPatient {
  id: string;
  name: string;
  birthDate: string;
  gender: "Male" | "Female" | "Other";
  condition: string;
  riskLevel: "Low" | "Moderate" | "High";
  room: string;
  status: string;
}

export interface PrismaAppointment {
  id: string;
  patientId: string;
  doctorName: string;
  department: string;
  scheduledAt: string;
  status: string;
}

export interface PrismaPrescription {
  id: string;
  patientId: string;
  medication: string;
  dosage: string;
  frequency: string;
}
