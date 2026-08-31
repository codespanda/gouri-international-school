import { MapPin, Phone, Mail, Clock } from "lucide-react";

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    path: "M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35c-.26-.03-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77V10.5H8v3h2.63V21h2.87Z",
  },
  {
    label: "Instagram",
    path: "M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0 6.27a2.47 2.47 0 1 1 0-4.94 2.47 2.47 0 0 1 0 4.94Zm4.85-6.42a.89.89 0 1 1-1.77 0 .89.89 0 0 1 1.77 0ZM20 8.3c-.05-1.13-.3-2.13-1.1-2.93-.8-.8-1.8-1.05-2.93-1.1C14.7 4.2 9.3 4.2 8.03 4.27c-1.13.05-2.13.3-2.93 1.1-.8.8-1.05 1.8-1.1 2.93C3.9 9.55 3.9 14.45 4 15.7c.05 1.13.3 2.13 1.1 2.93.8.8 1.8 1.05 2.93 1.1 1.27.07 6.67.07 7.94 0 1.13-.05 2.13-.3 2.93-1.1.8-.8 1.05-1.8 1.1-2.93.07-1.25.07-6.15 0-7.4ZM18.4 17a2.78 2.78 0 0 1-1.57 1.57c-1.08.43-3.65.33-4.83.33s-3.76.1-4.83-.33A2.78 2.78 0 0 1 5.6 17c-.43-1.08-.33-3.65-.33-4.83s-.1-3.76.33-4.83A2.78 2.78 0 0 1 7.17 5.77c1.08-.43 3.65-.33 4.83-.33s3.76-.1 4.83.33A2.78 2.78 0 0 1 18.4 7.34c.43 1.08.33 3.65.33 4.83s.1 3.76-.33 4.83Z",
  },
  {
    label: "YouTube",
    path: "M21.6 7.7a2.5 2.5 0 0 0-1.76-1.77C18.25 5.5 12 5.5 12 5.5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.7 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.3 2.5 2.5 0 0 0 1.76 1.77c1.59.43 7.84.43 7.84.43s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.3ZM10 14.87V9.13L15 12l-5 2.87Z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.1 10.2h3.68V19H5.1v-8.8Zm6.06 0h3.53v1.2h.05c.49-.93 1.7-1.9 3.5-1.9 3.75 0 4.44 2.47 4.44 5.67V19h-3.68v-4.37c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V19h-3.68v-8.8Z",
  },
];

const QUICK_LINKS = ["Home", "About Us", "Academics", "Admissions", "Campus Life", "News & Events", "Contact Us"];
const ACADEMICS_LINKS = ["Early Years", "Primary School", "Middle School", "Senior School", "Co-Curricular"];
const USEFUL_LINKS = ["Parents Portal", "School Calendar", "Fee Structure", "Transport", "Careers", "Alumni"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white/80">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Zm0 7.5L4.5 8 12 5l7.5 3-7.5 2.5Z" />
                <path d="M5 10.18v4.32c0 2 3.13 4 7 4s7-2 7-4v-4.32l-7 3.18-7-3.18Z" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-base font-bold text-white">GOURI</p>
              <p className="text-[10px] uppercase tracking-wide text-white/60">
                International School
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            We are committed to providing a nurturing environment that
            empowers children to become lifelong learners and responsible
            global citizens.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL_ICONS.map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold hover:text-navy"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <FooterLinks title="Quick Links" links={QUICK_LINKS} />
        <FooterLinks title="Academics" links={ACADEMICS_LINKS} />

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="h-4.5 w-4.5 shrink-0 text-gold" />
              <span>123, Education Road, Knowledge City, New Delhi - 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 shrink-0 text-gold" />
              <span>+91 xxxxxxx23</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 shrink-0 text-gold" />
              <span>info@gouriinternational.edu.in</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4.5 w-4.5 shrink-0 text-gold" />
              <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2025 Gouri International School. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wide text-white">{title}</h4>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition-colors hover:text-gold">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
