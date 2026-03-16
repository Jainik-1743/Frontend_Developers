export function calculatePatientAge(dob: string | Date): number {
  const birthDate = new Date(dob);
  const diff_ms = Date.now() - birthDate.getTime();
  const age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
