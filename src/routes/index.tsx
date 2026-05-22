import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gym.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import {
  Dumbbell,
  MapPin,
  Clock,
  Mail,
  Instagram,
  Phone,
  Check,
  Flame,
  Coffee,
  Trophy,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_LINK = "https://wa.me/62896740901212";
const IG_LINK = "https://instagram.com/satriogymsmg";

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-9 grid place-items-center bg-primary text-primary-foreground">
            <Dumbbell className="size-5" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl tracking-wider">SATRIO<span className="text-primary">.</span>GYM</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#about" className="hover:text-primary transition">Tentang</a>
          <a href="#gallery" className="hover:text-primary transition">Galeri</a>
          <a href="#pricing" className="hover:text-primary transition">Harga</a>
          <a href="#coach" className="hover:text-primary transition">Coach</a>
          <a href="#contact" className="hover:text-primary transition">Kontak</a>
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition"
        >
          Daftar
          <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pt-24 pb-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Atlet mengangkat barbell di Satrio Gym"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Pedurungan · Semarang Timur
          </span>
        </div>
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-[0.85] uppercase max-w-5xl">
          Mulai Langkah <br />
          <span className="text-primary">Sehatmu</span> <br />
          <span className="text-stroke">Hari Ini.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground">
          Gym lokal dengan alat lengkap kelas pro, suasana intens, dan harga yang ramah di kantong. Tidak ada drama membership, hanya hasil.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-display text-xl tracking-wider uppercase hover:bg-primary/90 transition"
          >
            <Flame className="size-5" />
            Daftar via WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 border-2 border-foreground/80 text-foreground px-7 py-4 font-display text-xl tracking-wider uppercase hover:bg-foreground hover:text-background transition"
          >
            <MapPin className="size-5" />
            Tanya Lokasi
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border max-w-3xl">
          {[
            { k: "08–21", v: "Jam Buka" },
            { k: "5K", v: "Per Visit" },
            { k: "80K", v: "Bulanan" },
            { k: "100+", v: "Member Aktif" },
          ].map((s) => (
            <div key={s.v} className="bg-background/90 px-5 py-4">
              <div className="font-display text-3xl text-primary">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    { icon: Dumbbell, t: "Alat Lengkap", d: "Free weights, cable machine, rack, bench, hingga cardio — semua tersedia." },
    { icon: Clock, t: "Buka 13 Jam", d: "Setiap hari pukul 08.00 – 21.00 WIB. Latihan kapan saja sesuai jadwalmu." },
    { icon: Users, t: "Komunitas Suportif", d: "Member lokal yang ramah, saling spot, saling dorong. Bukan tempat sombong." },
    { icon: Zap, t: "Harga Jujur", d: "Mulai Rp 5.000 per visit. Tanpa biaya tersembunyi, tanpa kontrak panjang." },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Tentang Kami</span>
            <h2 className="font-display text-5xl sm:text-6xl uppercase mt-4 leading-[0.9]">
              Gym yang <br /> Mengerti <br /> <span className="text-primary">Niatmu.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Satrio Gym</span> hadir di tengah Pedurungan, Semarang Timur sebagai tempat latihan yang menggabungkan
              kualitas alat kelas pro dengan harga yang masuk akal. Kami percaya kebugaran bukan barang mewah —
              jadi kami buat semua orang bisa masuk dan mulai berlatih.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {features.map((f) => (
                <div key={f.t} className="bg-background p-6 border-border">
                  <f.icon className="size-7 text-primary" strokeWidth={2} />
                  <h3 className="font-display text-2xl uppercase mt-4">{f.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: g1, h: "Dumbbell Rack", cls: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto" },
    { src: g3, h: "Bench Area", cls: "aspect-square" },
    { src: g2, h: "Cable Station", cls: "aspect-square" },
    { src: g4, h: "Squat Rack", cls: "md:col-span-2 aspect-[2/1]" },
  ];
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Galeri Mitra</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase mt-3 leading-[0.9]">
              Lihat <span className="text-primary">Ruang</span> <br /> Latihanmu.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Suasana intens, alat terawat, dan lighting yang bikin sesi latihanmu makin terasa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <div key={i} className={`relative group overflow-hidden ${it.cls}`}>
              <img
                src={it.src}
                alt={it.h}
                loading="lazy"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-display text-xl uppercase tracking-wider">
                {it.h}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Member Biasa",
      tag: "Aktivasi sekali",
      price: "50.000",
      sub: "Aktivasi · Berlaku selamanya",
      visit: "+ Rp 5.000 per visit",
      features: ["Aktivasi 1x seumur hidup", "Akses semua alat", "Bayar per kunjungan", "Cocok untuk yang fleksibel"],
      cta: "Daftar Member",
      highlight: false,
    },
    {
      name: "Member Bulanan",
      tag: "Paling Hemat",
      price: "80.000",
      sub: "Per bulan · Datang sepuasnya",
      visit: "Unlimited 30 hari",
      features: ["Akses tanpa batas 1 bulan", "Hemat untuk yang rutin", "Semua alat & fasilitas", "Hemat hingga 60%"],
      cta: "Ambil Bulanan",
      highlight: true,
    },
  ];
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-primary opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Pricing</span>
          <h2 className="font-display text-5xl sm:text-7xl uppercase mt-3 leading-[0.9]">
            Pilih Paket. <br /> <span className="text-primary">Mulai Sekarang.</span>
          </h2>
          <p className="text-muted-foreground mt-6">
            Tidak ada biaya tersembunyi, tidak ada kontrak ribet. Cukup datang dan latihan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative border ${
                p.highlight
                  ? "border-primary bg-card shadow-[0_0_60px_-20px_var(--color-primary)]"
                  : "border-border bg-card"
              } p-8 sm:p-10 flex flex-col`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">
                  {p.tag}
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-3xl uppercase">{p.name}</h3>
                {!p.highlight && (
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{p.sub}</p>
              <div className="my-6 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-muted-foreground">Rp</span>
                <span className="font-display text-7xl text-foreground leading-none">{p.price}</span>
              </div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">{p.visit}</div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 font-display text-lg uppercase tracking-wider transition ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-2 border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {p.cta}
                <ArrowRight className="size-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coaches() {
  const coaches = [
    {
      name: "Coach Rangga",
      role: "Strength & Hypertrophy",
      img: coach1,
      sessions: "8 sesi / bulan",
      price: "750.000",
    },
    {
      name: "Coach Nadia",
      role: "Fat Loss & Conditioning",
      img: coach2,
      sessions: "8 sesi / bulan",
      price: "750.000",
    },
    {
      name: "Paket Intensif",
      role: "Personal Program 1-on-1",
      img: null,
      sessions: "12 sesi / bulan",
      price: "1.100.000",
    },
  ];
  return (
    <section id="coach" className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Personal Trainer</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase mt-3 leading-[0.9]">
              Latihan <span className="text-primary">Terarah</span> <br /> Bareng Coach.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Mau hasil lebih cepat dan terukur? Pilih coach dan paket sesi yang pas untukmu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coaches.map((c) => (
            <div key={c.name} className="group border border-border bg-card overflow-hidden flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-primary/30 to-background">
                    <Trophy className="size-24 text-primary" strokeWidth={1.5} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs uppercase tracking-widest text-primary font-bold">{c.role}</div>
                <h3 className="font-display text-3xl uppercase mt-2">{c.name}</h3>
                <div className="mt-4 flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-muted-foreground">{c.sessions}</span>
                  <span className="font-display text-2xl">Rp {c.price}</span>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 border border-foreground/30 hover:bg-primary hover:border-primary hover:text-primary-foreground px-4 py-3 text-sm font-bold uppercase tracking-widest transition"
                >
                  Pilih Coach
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Retail() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="border border-border bg-card relative overflow-hidden grid md:grid-cols-2 gap-8 p-8 sm:p-12">
          <div className="absolute -top-20 -right-20 size-72 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Retail Corner</span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase mt-3 leading-[0.9]">
              Snack & Minum <br /> <span className="text-primary">Tersedia</span> di Tempat.
            </h2>
          </div>
          <div className="relative space-y-5">
            <p className="text-muted-foreground text-lg">
              Lupa bawa minum? Tenang. Satrio Gym menyediakan aneka <span className="text-foreground font-semibold">minuman dingin</span> dan
              <span className="text-foreground font-semibold"> snack ringan</span> langsung di tempat —
              jadi kamu bisa fokus latihan tanpa repot mampir minimarket.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Air Mineral", "Isotonik", "Susu Protein", "Snack", "Energy Drink"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
                  <Coffee className="size-3.5 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-primary text-primary-foreground p-10 sm:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.9]">
              Siap Angkat <br /> Beban Pertamamu?
            </h2>
            <p className="mt-4 max-w-md opacity-80">Daftar sekarang via WhatsApp. Kami balas cepat dan ramah.</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 font-display text-xl uppercase tracking-wider hover:bg-foreground hover:text-background transition"
          >
            <Phone className="size-5" />
            0896 7409 01212
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-secondary/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-10 grid place-items-center bg-primary text-primary-foreground">
                <Dumbbell className="size-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-3xl tracking-wider">SATRIO<span className="text-primary">.</span>GYM</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8">
              Gym lokal di Pedurungan Semarang Timur. Tempat kamu mulai, konsisten, dan jadi versi terbaik dari dirimu.
            </p>
            <div className="space-y-4">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="size-11 grid place-items-center border border-border group-hover:border-primary group-hover:text-primary transition">
                  <Phone className="size-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">0896 7409 01212</div>
                </div>
              </a>
              <a href="mailto:satriogym@email.com" className="flex items-center gap-4 group">
                <div className="size-11 grid place-items-center border border-border group-hover:border-primary group-hover:text-primary transition">
                  <Mail className="size-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-semibold">satriogym@email.com</div>
                </div>
              </a>
              <a href={IG_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="size-11 grid place-items-center border border-border group-hover:border-primary group-hover:text-primary transition">
                  <Instagram className="size-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                  <div className="font-semibold">@satriogymsmg</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="size-11 grid place-items-center border border-border">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Alamat</div>
                  <div className="font-semibold">Pedurungan, Semarang Timur</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-11 grid place-items-center border border-border">
                  <Clock className="size-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Jam Buka</div>
                  <div className="font-semibold">08.00 – 21.00 WIB · Setiap Hari</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">// Lokasi</div>
            <div className="aspect-video border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.623113351641!2d110.43915708696574!3d-6.983480299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ccf72359b7b%3A0x6599f51a22f8c56!2sSatrio%20Fitness%20Club!5e1!3m2!1sid!2sid!4v1778149032478!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Satrio Gym"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Satrio Gym. All rights reserved.</div>
          <div className="font-display uppercase tracking-wider">Train Hard · Stay Humble</div>
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
        <About />
        <Gallery />
        <Pricing />
        <Coaches />
        <Retail />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
