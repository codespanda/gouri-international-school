import { ChevronRight, CalendarCheck, Sparkles, Users, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  { icon: Sparkles, label: "Holistic Development" },
  { icon: Users, label: "Experienced Faculty" },
  { icon: ShieldCheck, label: "Safe & Nurturing Environment" },
  { icon: Building2, label: "Modern Infrastructure" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:py-16">
        {/* Left copy */}
        <div>
          <h1 className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl xl:text-[3.4rem]">
            Inspiring Excellence.
            <br />
            <span className="text-gold-dark">Building Futures.</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            A place where curiosity leads to discovery, character inspires
            greatness, and every child is empowered to shine.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button variant="default" size="lg">
              Discover Our School <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Admissions Open <CalendarCheck className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-2">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                <span className="text-xs font-medium leading-snug text-navy/90">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Images/2.png"
              alt="Classroom at Gouri International School"
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container-page pb-10 sm:pb-14">
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-navy px-6 py-8 text-white sm:grid-cols-4 sm:gap-4 sm:px-10">
          {[
            { value: "20+", label: "Years of Excellence" },
            { value: "2500+", label: "Happy Students" },
            { value: "150+", label: "Expert Teachers" },
            { value: "15+", label: "Awards & Recognitions" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-3 ${
                i !== 0 ? "sm:border-l sm:border-white/15 sm:pl-4" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold sm:text-2xl">{stat.value}</p>
                <p className="text-[11px] text-white/70 sm:text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
