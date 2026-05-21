"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  DoorOpen,
  BookOpen,
  UsersRound,
  Clock,
  CalendarDays,
  Building2,
  CalendarRange,
} from "lucide-react";

const navGroups = [
  {
    title: "General",
    items: [{ href: "/", label: "Panel principal", icon: LayoutDashboard }],
  },
  {
    title: "Horarios",
    items: [
      { href: "/horarios/semanal", label: "Vista semanal", icon: CalendarDays },
      { href: "/horarios/profesor", label: "Por profesor", icon: Users },
      { href: "/horarios/aula", label: "Por aula", icon: DoorOpen },
      { href: "/horarios/grupo", label: "Por grupo", icon: UsersRound },
      { href: "/asignaciones", label: "Asignaciones", icon: CalendarRange },
    ],
  },
  {
    title: "Catálogos",
    items: [
      { href: "/profesores", label: "Profesores", icon: Users },
      { href: "/aulas", label: "Aulas", icon: DoorOpen },
      { href: "/asignaturas", label: "Asignaturas", icon: BookOpen },
      { href: "/grupos", label: "Grupos", icon: UsersRound },
      { href: "/franjas", label: "Franjas horarias", icon: Clock },
      { href: "/centros", label: "Centros", icon: Building2 },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="no-print hidden w-64 shrink-0 border-r bg-card md:flex md:flex-col">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <CalendarDays className="h-5 w-5 text-primary" />
        <span className="font-semibold">Horarios UF3</span>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto p-4">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {group.title}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
