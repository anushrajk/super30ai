import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const PMHeroSectionSkeleton = () => {
  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-background to-background dark:from-blue-950/30 dark:via-background dark:to-background" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left Column - Content Skeleton */}
          <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
            {/* Badge Skeleton */}
            <Skeleton className="h-8 w-56 rounded-full" />

            {/* H1 and Description Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-10 md:h-14 lg:h-16 w-full max-w-lg" />
              <Skeleton className="h-10 md:h-14 lg:h-16 w-3/4" />
              <Skeleton className="h-5 w-full max-w-xl mt-4" />
              <Skeleton className="h-5 w-4/5 max-w-lg" />
            </div>

            {/* Trust Signals Skeleton */}
            <div className="flex flex-col gap-3 py-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="w-7 h-7 rounded-full" />
                  <Skeleton className="h-4 w-44" />
                </div>
              ))}
            </div>

            {/* Credentials Skeleton - Mobile */}
            <div className="lg:hidden flex flex-wrap gap-2 pt-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-7 w-36 rounded-full" />
              ))}
            </div>
          </div>

          {/* Right Column - Form Skeleton */}
          <div className="md:col-span-1 lg:col-span-5">
            <Card className="p-6 space-y-4 border-border/50 shadow-lg">
              {/* Form Header */}
              <div className="space-y-2">
                <Skeleton className="h-6 w-44 mx-auto" />
                <Skeleton className="h-4 w-56 mx-auto" />
              </div>

              {/* Progress Bar */}
              <Skeleton className="h-2 w-full rounded-full" />

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Skeleton className="h-12 w-full rounded-md" />

              {/* Trust Indicators */}
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-4 w-16" />
                ))}
              </div>
            </Card>

            {/* Credentials Skeleton - Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-7 w-40 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
