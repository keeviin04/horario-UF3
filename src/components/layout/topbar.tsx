"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut, UserCircle2 } from "lucide-react";

export function Topbar() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="no-print sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex flex-col">
        <span className="text-sm text-muted-foreground">Bienvenido/a</span>
        <span className="text-sm font-medium">{user?.name ?? "—"}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 text-sm md:flex">
          <UserCircle2 className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">{user?.email}</span>
          {user?.rol && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {user.rol}
            </span>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </header>
  );
}
