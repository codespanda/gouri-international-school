import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NEWS = [
  {
    day: "15",
    month: "MAY",
    title: "Annual Science Exhibition 2025",
    desc: "Our young innovators showcased amazing projects and experiments.",
    img: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=700&auto=format&fit=crop",
  },
  {
    day: "07",
    month: "MAY",
    title: "Sports Day Celebration",
    desc: "Cheering, teamwork and unforgettable moments at our Annual Sports Day.",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=700&auto=format&fit=crop",
  },
  {
    day: "30",
    month: "APR",
    title: "World Book Day",
    desc: "Encouraging the joy of reading and celebrating stories.",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=700&auto=format&fit=crop",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-muted py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange">
              News & Events
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Stay Updated with School Happenings
            </h2>
          </div>
          <Button variant="outline" size="default">
            View All News
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex w-12 flex-col items-center rounded-md bg-white py-1.5 shadow">
                  <span className="text-lg font-bold leading-none text-navy">
                    {item.day}
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-orange">
                    {item.month}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <a
                  href="#news"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-orange"
                >
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
