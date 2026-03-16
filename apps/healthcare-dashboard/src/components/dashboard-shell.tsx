"use client";

import { Suspense } from "react";

import { AdmissionsChart } from "@/components/admissions-chart";
import { CapacityDial } from "@/components/capacity-dial";
import { ClinicalNoteSummarizer } from "@/components/clinical-note-summarizer";
import { ClinicalPathwayFlow } from "@/components/clinical-pathway-flow";
import { PatientCard } from "@/components/patient-card";
import { Button } from "@/components/ui/button";
import { VitalsTelemetryPlot } from "@/components/vitals-telemetry-plot";
import {
  useDashboardCollections,
  useMockDischargeMutation,
  usePatientsDirectoryQuery,
  usePatientsFeed,
  usePatientsQuery,
} from "@/hooks/use-healthcare-queries";
import { calculatePatientAge } from "@/lib/calculate-patient-age";
import { D3InteractiveBodyMap } from "./D3InteractiveBodyMap";
import { PlotlyECGTelemetry } from "./PlotlyECGTelemetry";
import { RechartsDemographics } from "./RechartsDemographics";

export function DashboardShell() {
  const patientsQuery = usePatientsQuery();
  const [appointmentsQuery, prescriptionsQuery] = useDashboardCollections();
  const directoryQuery = usePatientsDirectoryQuery();
  const patientsFeedQuery = usePatientsFeed();
  const dischargeMutation = useMockDischargeMutation();

  const patients = patientsQuery.data ?? [];
  const appointments = appointmentsQuery.data ?? [];
  const prescriptions = prescriptionsQuery.data ?? [];
  const directory = directoryQuery.data?.patients ?? [];
  const feedItems =
    patientsFeedQuery.data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <main className="flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.12),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-300/30">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
              Healthcare Management & Analytics Dashboard
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight">
              Monitor patients, visualize telemetry, and summarize notes with a
              fully mocked local architecture.
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-slate-300">
              Built with Next.js App Router, strict TypeScript, Zustand,
              TanStack Query, Recharts, Plotly, D3, React Flow, Prisma-typed
              mocks, GraphQL Codegen, and AI SDK streaming.
            </p>
          </div>

          <ClinicalNoteSummarizer />
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          {patients.slice(0, 3).map((patient) => (
            <PatientCard
              condition={patient.condition}
              key={patient.id}
              name={patient.name}
              riskLevel={`${patient.riskLevel} | Age ${calculatePatientAge(patient.birthDate)}`}
              room={patient.room}
            />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Suspense fallback={<div className="h-80 rounded-2xl bg-white" />}>
            <AdmissionsChart />
          </Suspense>
          <CapacityDial />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <VitalsTelemetryPlot />
          <ClinicalPathwayFlow />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              GraphQL Patient Directory
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              Generated Hasura-style query types consumed from `/api/graphql`
            </p>
            <div className="space-y-3">
              {directory.map((patient) => (
                <div
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                  key={patient.id}
                >
                  <div>
                    <p className="font-medium text-slate-900">{patient.name}</p>
                    <p className="text-sm text-slate-500">
                      {patient.condition} | {patient.gender} | {patient.age} yrs
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    {patient.riskLevel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Scheduling & Medications
            </h3>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <p className="mb-2 font-medium text-slate-900">
                  Appointments ({appointments.length})
                </p>
                {appointments.map((appointment) => (
                  <p key={appointment.id}>
                    {appointment.doctorName} | {appointment.department} |{" "}
                    {appointment.status}
                  </p>
                ))}
              </div>
              <div>
                <p className="mb-2 font-medium text-slate-900">
                  Prescriptions ({prescriptions.length})
                </p>
                {prescriptions.map((prescription) => (
                  <p key={prescription.id}>
                    {prescription.medication} {prescription.dosage} |{" "}
                    {prescription.frequency}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Infinite Patient Feed
              </h3>
              <p className="text-sm text-slate-500">
                Demonstrates `useInfiniteQuery` against paged local API data
              </p>
            </div>
            <Button
              disabled={
                !patientsFeedQuery.hasNextPage ||
                patientsFeedQuery.isFetchingNextPage
              }
              onClick={() => patientsFeedQuery.fetchNextPage()}
              type="button"
              variant="outline"
            >
              {patientsFeedQuery.isFetchingNextPage
                ? "Loading..."
                : "Load More"}
            </Button>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {feedItems.map((patient) => (
              <div
                className="rounded-xl border border-slate-200 p-4"
                key={`${patient.id}-${patient.room}`}
              >
                <p className="font-medium text-slate-900">{patient.name}</p>
                <p className="text-sm text-slate-500">{patient.condition}</p>
                <Button
                  className="mt-3"
                  onClick={() => dischargeMutation.mutate(patient.id)}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  Mock Discharge
                </Button>
              </div>
            ))}
          </div>
        </section>

        <RechartsDemographics />
        <PlotlyECGTelemetry />
        <D3InteractiveBodyMap />
      </div>
    </main>
  );
}
