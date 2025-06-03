import { Card, CardContent } from "@/components/ui/card";

export function PhotoSkeleton() {
  return (
    <Card className="cursor-none overflow-hidden py-0 rounded-none">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted animate-pulse">
          <div className="w-full h-full bg-muted-foreground/10" />
        </div>
        <div className="p-4 space-y-3 lg:hidden">
          <div className="h-6 bg-muted animate-pulse rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded w-full" />
            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-3 bg-muted animate-pulse rounded w-20" />
            <div className="h-5 bg-muted animate-pulse rounded w-16" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
