import { Play, ChevronRight, ShieldCheck, Star, Trophy, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Quality Education",
    desc: "that inspires lifelong learning",
  },
  {
    icon: Star,
    title: "Values & Character",
    desc: "building strong moral values",
  },
  {
    icon: Trophy,
    title: "Future Ready",
    desc: "preparing students for tomorrow",
  },
  {
    icon: Users2,
    title: "Global Perspective",
    desc: "encouraging empathy & leadership",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1fr_0.85fr] lg:gap-6">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop"
              alt="Gouri International School campus building"
              className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[380px]"
            />
          </div>
          <button className="absolute left-5 top-5 flex flex-col items-center gap-1 rounded-xl bg-white/95 px-4 py-3 text-center shadow-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
              <Play className="h-4 w-4 fill-white" />
            </span>
            <span className="text-[11px] font-semibold leading-tight text-navy">
              Watch Our
              <br />
              Campus Tour
            </span>
          </button>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange">
            Welcome to Gouri International
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            More Than a School,
            <br />A Community.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            At Gouri International School, we believe in nurturing
            the mind, body and heart. Our student-centric approach,
            world-class facilities and values-based education prepare young
            learners to become confident, compassionate and responsible
            global citizens.
          </p>
          <div>
            <Button variant="outline" size="default" className="mt-6 w-fit">
              About Us <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-col justify-center gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-navy">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
