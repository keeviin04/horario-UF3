import { prisma } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DoorOpen, BookOpen, UsersRound, CalendarRange } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [profesores, aulas, asignaturas, grupos, asignaciones] = await Promise.all([
    prisma.profesor.count({ where: { activo: true } }),
    prisma.aula.count({ where: { activo: true } }),
    prisma.asignatura.count({ where: { activo: true } }),
    prisma.grupo.count({ where: { activo: true } }),
    prisma.asignacion.count(),
  ]);

  const stats = [
    { label: "Profesores", value: profesores, icon: Users, href: "/profesores" },
    { label: "Aulas", value: aulas, icon: DoorOpen, href: "/aulas" },
    { label: "Asignaturas", value: asignaturas, icon: BookOpen, href: "/asignaturas" },
    { label: "Grupos", value: grupos, icon: UsersRound, href: "/grupos" },
    { label: "Asignaciones", value: asignaciones, icon: CalendarRange, href: "/asignaciones" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Panel principal</h1>
        <p className="text-muted-foreground">
          Resumen del estado actual del sistema de horarios
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{s.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{s.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estado del proyecto</CardTitle>
          <CardDescription>Sprint 3 completado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
            <li>✅ Sprint 1 — CRUD de profesores, aulas, asignaturas, grupos, franjas y centros</li>
            <li>✅ Sprint 2 — Alta/edición de asignaciones con detección de solapamientos</li>
            <li>✅ Sprint 3 — Vistas semanal, por profesor, por aula y por grupo + impresión PDF</li>
            <li>⏳ Sprint 4 — Pulido final y documentación</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
