import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-logo.png";
import gym1 from "@/assets/gym-1.jpg";
import gym2 from "@/assets/gym-2.jpg";
import gym3 from "@/assets/gym-3.jpg";
import gym4 from "@/assets/gym-4.jpg";
import retailImg from "@/assets/retail.jpg";
import {
  Dumbbell,
  MapPin,
  Phone,
  Check,
  TrendingUp,
  ShoppingCart,
  Coffee,
  Utensils,
  Mail,
  Instagram,
  ExternalLink,
  MessageCircle,
  X,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_NUMBER = "6281326619143";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;
const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
const IG_LINK = "https://instagram.com/satriogymsmg";
const MAPS_LINK = "https://maps.google.com/?q=Satrio+Fitness+Club+Pedurungan";

function Nav() {
  const links = [
    { label: "Home", href: "#top" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "PT", href: "#pt" },
    { label: "Retail", href: "#retail" },
    { label: "Location", href: "#location" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#top" className="font-display text-2xl tracking-wider text-primary">
          SATRIO GYM
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`hover:text-primary transition ${i === 0 ? "text-primary underline underline-offset-8" : "text-foreground"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink("Halo Admin Satrio Gym, saya tertarik untuk daftar member. Bisa info lebih lanjut?")}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-primary-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest hover:bg-primary/90 transition"
        >
          Daftar Member
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-16 bg-background">
      <div className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Satrio Gym training floor"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-4 w-1 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Premium Fitness Club
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-[0.9] uppercase max-w-4xl">
            Mulai Langkah <br />
            <span className="text-primary">Sehatmu</span> Di <br />
            Satrio Gym
          </h1>
          <p className="mt-8 max-w-md text-base sm:text-lg text-muted-foreground">
            Gym ramah di kantong dengan alat lengkap & berkualitas di kelasnya.
            Transformasi dimulai di sini dengan intensitas tanpa kompromi.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={waLink("Halo Admin, saya ingin daftar member Satrio Gym. Mohon info paket & lokasinya.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition"
            >
              Daftar Member via WhatsApp
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition"
            >
              Lihat Fasilitas
            </a>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-y border-border bg-card overflow-hidden py-6">
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-16 shrink-0 pr-16">
              {["Iron-Strength", "Raw-Power", "Elite-Level", "Urban-Train", "Max-Perform"].map((t) => (
                <span key={t} className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-muted-foreground/50">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { k: "2016", v: "Berdiri Sejak" },
            { k: "1000+", v: "Member Aktif" },
            { k: "MODERN", v: "Alat Lengkap & Modern" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl text-primary">{s.k}</div>
              <div className="flex items-center gap-2 mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-primary">|</span> {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [selected, setSelected] = useState<"basic" | "monthly">("monthly");
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-wide">
            Investasi Kesehatan
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mt-6" />
          <p className="text-sm text-muted-foreground mt-6">
            Pilih paketmu — klik kartu untuk melihat detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Member Biasa */}
          <button
            type="button"
            onClick={() => setSelected("basic")}
            className={`text-left relative border bg-card p-10 transition-all duration-300 cursor-pointer ${
              selected === "basic"
                ? "border-primary glow-primary -translate-y-1"
                : "border-border hover:border-primary/50 hover:-translate-y-0.5"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className={`font-display text-3xl uppercase ${selected === "basic" ? "text-foreground" : "text-muted-foreground"}`}>Member Biasa</h3>
                <p className="text-sm font-semibold text-muted-foreground mt-1">(Aktivasi)</p>
              </div>
              <Dumbbell className={`size-8 ${selected === "basic" ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <div className="my-8 flex items-baseline gap-2">
              <span className="font-display text-6xl text-primary leading-none">Rp 50.000</span>
              <span className="text-sm text-muted-foreground">/selamanya</span>
            </div>
            <ul className="space-y-3 mb-10">
              {["Visit cuma Rp 5.000 per sesi", "Masa aktif selamanya", "Akses alat standard lengkap"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="size-5 text-primary shrink-0" strokeWidth={3} />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink("Halo Admin, saya ingin daftar Member Biasa (aktivasi Rp 50.000). Bagaimana caranya?")}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block text-center border-2 border-primary text-primary py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition"
            >
              Pilih Paket
            </a>
          </button>

          {/* Member Bulanan */}
          <button
            type="button"
            onClick={() => setSelected("monthly")}
            className={`text-left relative border-2 bg-card p-10 transition-all duration-300 cursor-pointer ${
              selected === "monthly"
                ? "border-primary glow-primary -translate-y-1"
                : "border-border hover:border-primary/50 hover:-translate-y-0.5"
            }`}
          >
            <div className="absolute -top-px right-0 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">
              Paling Populer
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-3xl uppercase">Member Bulanan</h3>
                <p className="text-sm font-semibold text-primary mt-1">Full Access</p>
              </div>
              <TrendingUp className="size-8 text-primary" />
            </div>
            <div className="my-8 flex items-baseline gap-2">
              <span className="font-display text-6xl leading-none">Rp 80.000</span>
              <span className="text-sm text-muted-foreground">/bulan</span>
            </div>
            <ul className="space-y-3 mb-10">
              {[
                "Latihan sepuasnya 1 bulan penuh",
                "Tanpa biaya visit tambahan",
                "Free konsultasi awal Coach",
                "Locker & Shower Access",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="size-5 text-primary shrink-0" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink("Halo Admin, saya ingin daftar Member Bulanan (Rp 80.000/bulan). Mohon info cara aktivasinya.")}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block text-center bg-primary text-primary-foreground py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition"
            >
              Daftar Sekarang
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

function PersonalTrainer() {
  const [tab, setTab] = useState<10 | 20>(10);
  const packages10 = [
    { name: "Paket PT 1", coach: "Coach Rangga", price: "500.000", icon: Dumbbell, highlight: false },
    { name: "Paket PT 2", coach: "Coach Nadia", price: "650.000", icon: Dumbbell, highlight: true },
    { name: "Paket PT 3", coach: "Coach Bima", price: "500.000", icon: TrendingUp, highlight: false },
  ];
  const packages20 = [
    { name: "Paket PT 1", coach: "Coach Rangga", price: "950.000", icon: Dumbbell, highlight: false },
    { name: "Paket PT 2", coach: "Coach Nadia", price: "1.200.000", icon: Dumbbell, highlight: true },
    { name: "Paket PT 3", coach: "Coach Bima", price: "950.000", icon: TrendingUp, highlight: false },
  ];
  const packages = tab === 10 ? packages10 : packages20;

  return (
    <section id="pt" className="relative py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <h2 className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]">
              Berlatih Dengan <br />
              <span className="text-primary">Profesional</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-lg">
              Dapatkan bimbingan intensif dari tim pelatih berpengalaman kami untuk mencapai target fisik impianmu lebih cepat dan aman.
            </p>
          </div>
          <div className="grid grid-cols-2 border border-border">
            <button
              onClick={() => setTab(10)}
              className={`px-6 py-3 text-center transition ${tab === 10 ? "bg-card" : "bg-transparent"}`}
            >
              <div className={`font-display text-3xl ${tab === 10 ? "text-primary" : "text-muted-foreground"}`}>10</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Sessions</div>
            </button>
            <button
              onClick={() => setTab(20)}
              className={`px-6 py-3 text-center border-l border-border transition ${tab === 20 ? "bg-card" : "bg-transparent"}`}
            >
              <div className={`font-display text-3xl ${tab === 20 ? "text-primary" : "text-muted-foreground"}`}>20</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Sessions</div>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative border ${p.highlight ? "border-primary bg-card glow-primary" : "border-border bg-card"} p-8`}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                <p.icon className={`size-7 ${p.highlight ? "text-primary" : "text-muted-foreground/40"}`} />
              </div>
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{p.coach}</div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-4xl">Rp {p.price}</span>
                <span className="text-xs text-muted-foreground">/{tab} Sesi</span>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className={`block text-center py-3 text-xs font-bold uppercase tracking-widest transition ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Retail() {
  return (
    <section id="retail" className="relative py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={retailImg}
              alt="Retail corner Satrio Gym"
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:right-auto sm:left-8 bg-primary text-primary-foreground p-6 max-w-[200px]">
              <div className="font-display text-2xl uppercase leading-none">
                Freshly <br /> Stocked <br /> Daily
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="size-6 text-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Retail Corner</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl uppercase leading-[0.9]">
              Sedia Snack & <br />
              <span className="text-primary">Minuman Dingin.</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Gak perlu repot bawa dari luar, energi tambahan tersedia langsung di area gym. Kami menyediakan
              berbagai pilihan suplemen, minuman isotonik, dan camilan sehat untuk mendukung performa latihanmu.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4 border border-border bg-card p-4">
                <Coffee className="size-5 text-primary shrink-0" />
                <span className="text-sm font-bold uppercase tracking-widest">Pre-Workout & Energy Drinks</span>
              </div>
              <div className="flex items-center gap-4 border border-border bg-card p-4">
                <Utensils className="size-5 text-primary shrink-0" />
                <span className="text-sm font-bold uppercase tracking-widest">Healthy Snacks & Protein Bars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]">
              Kunjungi <span className="text-primary">Kami</span>
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">
                  Jam Operasional
                </div>
                <div className="font-display text-3xl">08.00 - 21.00 WIB</div>
                <div className="text-sm text-muted-foreground mt-1">Setiap Hari (Senin - Minggu)</div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">Lokasi</div>
                <div className="font-display text-2xl uppercase">Pedurungan, Semarang Timur</div>
                <div className="text-sm text-muted-foreground mt-1">Fasilitas parkir luas & aman</div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="size-12 grid place-items-center border border-border hover:border-primary hover:text-primary transition"
                  aria-label="Maps"
                >
                  <MapPin className="size-5" />
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="size-12 grid place-items-center border border-border hover:border-primary hover:text-primary transition"
                  aria-label="Phone"
                >
                  <Phone className="size-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.623113351641!2d110.43915708696574!3d-6.983480299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ccf72359b7b%3A0x6599f51a22f8c56!2sSatrio%20Fitness%20Club!5e1!3m2!1sid!2sid!4v1778149032478!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Satrio Gym"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <div className="font-display text-3xl tracking-wider text-primary mb-4">SATRIO GYM</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menciptakan standar baru dalam fitness dengan harga yang kompetitif tanpa mengurangi kualitas
              pengalaman berlatih Anda.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Jam Buka 08.00 - 21.00 WIB (Setiap Hari)
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">Menu</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#top" className="text-primary hover:underline">Home</a></li>
              <li><a href="#pricing" className="text-primary hover:underline">Pricing</a></li>
              <li><a href="#pt" className="text-primary hover:underline">Personal Trainer</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">Socials</div>
            <ul className="space-y-3 text-sm">
              <li><a href={IG_LINK} target="_blank" rel="noreferrer" className="text-primary hover:underline">Instagram</a></li>
              <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="text-primary hover:underline">WhatsApp</a></li>
              <li><a href={MAPS_LINK} target="_blank" rel="noreferrer" className="text-primary hover:underline">Google Maps</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary">
                <Mail className="size-4" /> <a href="mailto:satriogym@email.com" className="hover:underline">Email</a>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Phone className="size-4" /> <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Instagram className="size-4" /> <a href={IG_LINK} target="_blank" rel="noreferrer" className="hover:underline">@satriogymsmg</a>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <ExternalLink className="size-4" /> <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="hover:underline">Lihat di Maps</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-sm text-muted-foreground text-center sm:text-right">
          © {new Date().getFullYear()} Satrio Gym Pedurungan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Pricing />
        <PersonalTrainer />
        <Retail />
        <Location />
      </main>
      <Footer />
    </div>
  );
}