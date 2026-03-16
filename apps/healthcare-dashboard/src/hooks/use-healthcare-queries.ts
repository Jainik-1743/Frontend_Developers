"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

import type { PatientsDirectoryQuery } from "@/graphql/generated/graphql-types";
import { PATIENTS_DIRECTORY_QUERY } from "@/graphql/queries";
import type {
  AdmissionPoint,
  AppointmentRecord,
  CapacitySnapshot,
  PatientRecord,
  PrescriptionRecord,
} from "@/types/healthcare";

async function fetchJson<T>(input: string, init?: RequestInit): Promise<T> {
  const url =
    typeof window === "undefined" && input.startsWith("/")
      ? `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}${input}`
      : input;
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`Request failed for ${input}`);
  }

  return response.json() as Promise<T>;
}

export function usePatientsQuery() {
  return useQuery({
    queryKey: ["patients"],
    queryFn: () => fetchJson<PatientRecord[]>("/api/patients"),
  });
}

export function useDashboardCollections() {
  return useQueries({
    queries: [
      {
        queryKey: ["appointments"],
        queryFn: () => fetchJson<AppointmentRecord[]>("/api/appointments"),
      },
      {
        queryKey: ["prescriptions"],
        queryFn: () => fetchJson<PrescriptionRecord[]>("/api/prescriptions"),
      },
    ],
  });
}

export function usePatientsDirectoryQuery() {
  return useQuery({
    queryKey: ["graphql", "patients-directory"],
    queryFn: () =>
      fetchJson<{ data: PatientsDirectoryQuery }>("/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: PATIENTS_DIRECTORY_QUERY }),
      }).then((payload) => payload.data),
  });
}

export function useAdmissionsAnalytics() {
  return useSuspenseQuery({
    queryKey: ["cube", "admissions"],
    queryFn: () =>
      fetchJson<{ resultSet: { series: AdmissionPoint[] } }>(
        "/api/cube?metric=admissions",
      ),
  });
}

export function useVitalsAnalytics() {
  return useQuery({
    queryKey: ["cube", "telemetry"],
    queryFn: () =>
      fetchJson<{ resultSet: { telemetry: PatientRecord["telemetry"] } }>(
        "/api/cube?metric=telemetry",
      ),
  });
}

export function useCapacitySnapshot() {
  return useQuery({
    queryKey: ["capacity"],
    queryFn: () => fetchJson<CapacitySnapshot>("/api/capacity"),
  });
}

export function usePatientsFeed() {
  return useInfiniteQuery({
    queryKey: ["patients-feed"],
    initialPageParam: 0,
    queryFn: async ({ pageParam }: { pageParam: number }) =>
      fetchJson<{ items: PatientRecord[]; nextCursor: number | null }>(
        `/api/patients?cursor=${pageParam}`,
      ),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

export function useMockDischargeMutation() {
  return useMutation({
    mutationFn: async (patientId: string) =>
      fetchJson<{ status: string; patientId: string }>(
        "/api/patients/discharge",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ patientId }),
        },
      ),
  });
}
