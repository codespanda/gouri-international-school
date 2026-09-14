import { useEffect, useState } from "react";
import { ChevronRight, Monitor, FlaskConical, Library, Trophy, Palette, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPORTS_GALLERY = [
  "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=600&auto=format&fit=crop",
];

const FACILITIES = [
  {
    icon: Monitor,
    label: "Smart Classrooms",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: FlaskConical,
    label: "Science Laboratories",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Library,
    label: "Library & Resource Center",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Trophy,
    label: "Sports & Playgrounds",
    gallery: SPORTS_GALLERY,
  },
  {
    icon: Palette,
    label: "Art & Music Rooms",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Bus,
    label: "Transport Facilities",
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600&auto=format&fit=crop",
  },
];

function FacilityTile({ icon: Icon, label, img }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
      <img
        src={img}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
      <div className="absolute bottom-0 left-0 flex w-full items-center gap-2 p-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold text-navy">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-[11px] font-semibold leading-tight text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

function SportsGalleryTile({ icon: Icon, label, gallery }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [gallery.length]);

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
      {gallery.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${label} ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:scale-105 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-1.5 p-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold text-navy">
            <Icon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[11px] font-semibold leading-tight text-white">
            {label}
          </span>
        </div>
        <div className="flex gap-1 pl-9">
          {gallery.map((_, i) => (
            <button
              key={i}
              aria-label={`Show photo ${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-4 bg-gold" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CampusSection() {
  return (
    <section id="campus" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange">
            Our Campus
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">
            World-Class Facilities for a Better Tomorrow
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FACILITIES.map((facility) =>
            facility.gallery ? (
              <SportsGalleryTile key={facility.label} {...facility} />
            ) : (
              <FacilityTile key={facility.label} {...facility} />
            )
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            Explore Campus <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
