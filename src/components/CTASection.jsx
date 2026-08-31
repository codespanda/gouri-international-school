import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="admissions" className="bg-navy">
      <div className="container-page flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Admissions Open for 2025-26
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Give your child the best start to a bright future.
          </p>
        </div>
        <Button variant="gold" size="lg">
          Enquire Now <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
