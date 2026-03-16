export interface TelemetryPoint {
  timestamp: string;
  heartRate: number;
  bloodOxygen: number;
}

export interface PatientRecord {
  id: string;
  name: string;
  birthDate: string;
  gender: "Male" | "Female" | "Other";
  condition: string;
  riskLevel: "Low" | "Moderate" | "High";
  room: string;
  status: string;
  telemetry: TelemetryPoint[];
}

export interface AppointmentRecord {
  id: string;
  patientId: string;
  doctorName: string;
  department: string;
  scheduledAt: string;
  status: string;
}

export interface PrescriptionRecord {
  id: string;
  patientId: string;
  medication: string;
  dosage: string;
  frequency: string;
}

export interface AdmissionPoint {
  day: string;
  admissions: number;
}

export interface CapacitySnapshot {
  totalBeds: number;
  occupiedBeds: number;
  capacityPercentage: number;
}
