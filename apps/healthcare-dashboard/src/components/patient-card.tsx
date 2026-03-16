import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PatientCardProps {
  name: string;
  condition: string;
  riskLevel: string;
  room: string;
}

export function PatientCard({
  name,
  condition,
  riskLevel,
  room,
}: PatientCardProps) {
  return (
    <Card className="border-slate-200/70 bg-white/80 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-slate-900">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-slate-600">
        <p>Condition: {condition}</p>
        <p>Risk: {riskLevel}</p>
        <p>Room: {room}</p>
      </CardContent>
    </Card>
  );
}
