import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className="flex items-center gap-2"
        >
          {item.href ? (
            <Link
              href={item.href}
              className="font-medium text-zinc-500 transition hover:text-orange-500"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-zinc-900">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <ChevronRight
              size={16}
              className="text-zinc-400"
            />
          )}
        </div>
      ))}
    </nav>
  );
}