import { Skeleton } from "@/components/ui/skeleton";

export default function LikedLoading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8">
        <Skeleton className="h-10 w-48 mb-8" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-[300px] w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}