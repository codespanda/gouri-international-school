import { useState } from "react";
import { CheckCircle2, Quote } from "lucide-react";

const REASONS = [
  "Student-focused learning approach",
  "Experienced and caring teachers",
  "Safe, inclusive and supportive environment",
  "Modern infrastructure and resources",
  "Strong communication with parents",
];

const TESTIMONIALS = [
  {
    quote:
      "Gouri International has been a wonderful experience for our child. The teachers are supportive, and the school focuses on overall development, not just academics.",
    name: "Priya Sharma",
    role: "Parent of Grade 5 Student",
  },
  {
    quote:
      "The teachers genuinely care about every child. My daughter looks forward to school every single day - that says it all.",
    name: "Arjun Mehta",
    role: "Parent of Grade 2 Student",
  },
  {
    quote:
      "A perfect balance of academics, values and extracurriculars. We couldn't have asked for a better school for our son.",
    name: "Nisha Kapoor",
    role: "Parent of Grade 8 Student",
  },
];

export default function WhyChooseSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1fr_0.9fr]">
        {/* Reasons list */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange">
            Why Parents Choose Us
          </p>
          <ul className="mt-5 flex flex-col gap-4">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                <span className="text-sm text-navy/90">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=900&auto=format&fit=crop"
            alt="Student writing in a notebook"
            className="h-[280px] w-full object-cover sm:h-[340px]"
          />
        </div>

        {/* Testimonial */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange">
            What Parents & Students Say
          </p>
          <div className="mt-5 rounded-xl border border-border bg-muted/50 p-6">
            <Quote className="h-6 w-6 text-gold" />
            <p className="mt-3 text-sm leading-relaxed text-navy/90">
              “{TESTIMONIALS[active].quote}”
            </p>
            <p className="mt-4 text-sm font-semibold text-navy">
              — {TESTIMONIALS[active].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {TESTIMONIALS[active].role}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === active ? "bg-navy" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
