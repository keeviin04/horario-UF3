import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Si se pasa, muestra un botón "Nuevo" que enlaza a esta URL. */
  newHref?: string;
  newLabel?: string;
}

export function PageHeader({ title, description, newHref, newLabel = "Nuevo" }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {newHref && (
        <Button asChild>
          <Link href={newHref}>
            <Plus className="mr-2 h-4 w-4" />
            {newLabel}
          </Link>
        </Button>
      )}
    </div>
  );
}
