export interface PatientsDirectoryQuery {
  patients: Array<{
    id: string;
    name: string;
    age: number;
    gender: string;
    condition: string;
    riskLevel: string;
  }>;
}
