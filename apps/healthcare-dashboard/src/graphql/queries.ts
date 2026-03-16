export const PATIENTS_DIRECTORY_QUERY = `
  query PatientsDirectory {
    patients {
      id
      name
      age
      gender
      condition
      riskLevel
    }
  }
`;
