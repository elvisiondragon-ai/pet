import { ArrowRight, Shield, Eye, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const benefits = [
    { icon: Shield, label: "100% Safe", value: "Certified Care" },
    { icon: Eye, label: "Live Monitoring", value: "24/7 Access" },
    { icon: Heart, label: "Happy Pets", value: "500+ Clients" },
  ];

  const problems = [
    "Banyak hewan peliharaan mengalami stres atau cidera saat perawatan di petshop tanpa pengawasan owner",
    "Kasus pet tersiksa atau sakit setelah pulang dari grooming/perawatan",
    "Kurangnya transparansi dalam proses perawatan hewan kesayangan",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2000')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.2), hsl(var(--pink-start) / 0.2))",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center space-y-8 animate-slide-up">
          <div className="inline-block glass px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-gradient-royal">
              ✨ Premium Pet Care with Live Monitoring
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient-gold">Royal Pet Care</span>
            <br />
            <span className="text-foreground">Luxury Meets Safety</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perawatan premium dengan pengawasan LIVE CCTV. Lihat langsung kesayangan Anda dalam perawatan profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/services">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl hover-glow"
                style={{
                  background: "var(--gradient-gold)",
                  color: "hsl(var(--background))",
                }}
              >
                Lihat Layanan
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/cctv">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-2xl glass border-primary/50 hover-pink-glow"
              >
                <Eye className="mr-2" />
                Live Monitoring
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-12">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.label} className="glass-strong p-6 rounded-3xl hover-glow">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary animate-float" />
                  <div className="text-3xl font-bold text-gradient-royal mb-1">
                    {benefit.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{benefit.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-royal">Kenapa</span> Royal Pet Care?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kami memahami kekhawatiran Anda sebagai pet owner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-destructive mb-6">❌ Masalah yang Sering Terjadi</h3>
              {problems.map((problem, index) => (
                <div key={index} className="glass p-6 rounded-2xl border border-destructive/30">
                  <p className="text-muted-foreground leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>

            {/* Solution */}
            <div className="glass-strong p-8 rounded-3xl border-2 border-primary/30 hover-glow">
              <h3 className="text-2xl font-bold text-primary mb-6">✅ Solusi Kami</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Live CCTV Monitoring</h4>
                    <p className="text-muted-foreground">
                      Pantau hewan kesayangan Anda secara real-time dari smartphone. Token akses pribadi untuk setiap sesi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Profesional Bersertifikat</h4>
                    <p className="text-muted-foreground">
                      Tim groomer dan dokter hewan berpengalaman yang mencintai hewan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Transparansi Total</h4>
                    <p className="text-muted-foreground">
                      Lihat setiap detik proses perawatan. Screenshot & rekam kapan saja.
                    </p>
                  </div>
                </div>

                <Link to="/booking" className="block mt-8">
                  <Button 
                    size="lg" 
                    className="w-full rounded-xl"
                    style={{
                      background: "var(--gradient-royal)",
                    }}
                  >
                    Book Sekarang - Rp 100.000
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="glass-strong p-12 rounded-3xl text-center space-y-6 border-2 border-primary/30"
            style={{
              boxShadow: "0 0 60px hsl(var(--pink-start) / 0.3)",
            }}
          >
            <h2 className="text-4xl font-bold">
              Siap Memberikan <span className="text-gradient-royal">Perawatan Terbaik</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bergabunglah dengan 500+ pet owner yang mempercayai Royal Pet Care untuk kesayangan mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/services">
                <Button 
                  size="lg"
                  className="rounded-xl px-8"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "hsl(var(--background))",
                  }}
                >
                  Pilih Layanan
                </Button>
              </Link>
              <Link to="/testimonials">
                <Button 
                  size="lg"
                  variant="outline"
                  className="glass rounded-xl px-8 border-primary/50"
                >
                  Baca Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
