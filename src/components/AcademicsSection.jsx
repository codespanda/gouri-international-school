import { BookOpen, GraduationCap, Book, Trophy, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PROGRAMS = [
  {
    icon: BookOpen,
    title: "Early Years",
    sub: "(Pre Nursery - KG)",
    desc: "Play, explore and learn in a safe and joyful environment.",
  },
  {
    icon: GraduationCap,
    title: "Primary School",
    sub: "(Grades 1 - 5)",
    desc: "Strong foundation in core subjects and life skills.",
  },
  {
    icon: Book,
    title: "Middle School",
    sub: "(Grades 6 - 8)",
    desc: "Encouraging curiosity, critical thinking and growth.",
  },
  {
    icon: Trophy,
    title: "Senior School",
    sub: "(Grades 9 - 12)",
    desc: "Academic rigor with diverse opportunities and guidance.",
  },
  {
    icon: Award,
    title: "Co-Curricular Programs",
    sub: "",
    desc: "Sports, arts, clubs and more for all-round development.",
  },
];

export default function AcademicsSection() {
  return (
    <section id="academics" className="bg-muted py-16 sm:py-20">
      <div className="container-page">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange">
            Academics
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">
            Nurturing Potential. Achieving Excellence.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PROGRAMS.map(({ icon: Icon, title, sub, desc }) => (
            <Card
              key={title}
              className="flex flex-col items-center gap-3 border-border/70 px-5 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-navy">{title}</h3>
                {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="default" size="lg">
            View Academics <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
