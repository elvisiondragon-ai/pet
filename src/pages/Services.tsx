import { Dog, Cat, Scissors, Bath, Syringe, Stethoscope, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      category: "For Dogs",
      icon: Dog,
      items: [
        {
          name: "Dog Grooming Premium",
          description: "Full grooming dengan styling sesuai ras anjing Anda",
          icon: Scissors,
          duration: "2-3 jam",
          features: ["Potong kuku", "Pembersihan telinga", "Styling bulu", "Aromaterapi"],
        },
        {
          name: "Dog Bathing & Spa",
          description: "Mandi dengan shampo premium dan treatment khusus",
          icon: Bath,
          duration: "1-2 jam",
          features: ["Shampo premium", "Blow dry", "Parfum", "Massage relaksasi"],
        },
        {
          name: "Dog Vaccination",
          description: "Vaksinasi lengkap oleh dokter hewan bersertifikat",
          icon: Syringe,
          duration: "30 menit",
          features: ["Rabies", "Distemper", "Parvovirus", "Sertifikat vaksin"],
        },
        {
          name: "Dog Health Check",
          description: "Pemeriksaan kesehatan menyeluruh untuk anjing Anda",
          icon: Stethoscope,
          duration: "45 menit",
          features: ["Cek fisik", "Cek gigi", "Konsultasi", "Laporan kesehatan"],
        },
      ],
    },
    {
      category: "For Cats",
      icon: Cat,
      items: [
        {
          name: "Cat Grooming Deluxe",
          description: "Grooming lembut khusus untuk kucing kesayangan",
          icon: Scissors,
          duration: "1.5-2 jam",
          features: ["Potong kuku", "Pembersihan mata", "Styling bulu", "Face grooming"],
        },
        {
          name: "Cat Bathing & Spa",
          description: "Mandi dengan teknik khusus anti-stress untuk kucing",
          icon: Bath,
          duration: "1 jam",
          features: ["Shampo anti-alergi", "Blow dry lembut", "Parfum hypoallergenic", "Calming music"],
        },
        {
          name: "Cat Vaccination",
          description: "Program vaksinasi lengkap untuk kucing",
          icon: Syringe,
          duration: "30 menit",
          features: ["Rabies", "Panleukopenia", "Calicivirus", "Buku vaksin"],
        },
        {
          name: "Cat Health Check",
          description: "Pemeriksaan kesehatan menyeluruh khusus kucing",
          icon: Stethoscope,
          duration: "45 menit",
          features: ["Cek organ", "Cek parasit", "Konsultasi diet", "Medical report"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block glass px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-gradient-royal">
              ✨ Semua Layanan Hanya Rp 100.000
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Premium Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perawatan berkualitas dengan pengawasan LIVE CCTV untuk kesayangan Anda
          </p>
        </div>

        {/* Services by Category */}
        {services.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.category} className="mb-20">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="glass-strong p-4 rounded-2xl"
                  style={{
                    background: categoryIndex === 0 
                      ? "linear-gradient(135deg, hsl(var(--gold-start) / 0.1), hsl(var(--gold-end) / 0.1))"
                      : "linear-gradient(135deg, hsl(var(--pink-start) / 0.1), hsl(var(--pink-end) / 0.1))",
                  }}
                >
                  <CategoryIcon className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gradient-royal">{category.category}</h2>
              </div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <div 
                      key={service.name}
                      className="glass-strong p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover-glow group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.2), hsl(var(--pink-start) / 0.2))",
                          }}
                        >
                          <ServiceIcon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-gradient-gold">
                            Rp 100K
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/booking" className="block">
                        <Button 
                          className="w-full rounded-xl group-hover:scale-105 transition-transform"
                          style={{
                            background: "var(--gradient-royal)",
                          }}
                        >
                          Book Sekarang
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>

                      {/* Live CCTV Badge */}
                      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-primary">
                        <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                        <span>Include Live CCTV Monitoring</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bottom CTA */}
        <div className="text-center mt-16 glass-strong p-10 rounded-3xl border-2 border-primary/30">
          <h3 className="text-3xl font-bold mb-4">
            Belum Yakin? <span className="text-gradient-royal">Lihat Review Kami!</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            500+ pet owner telah mempercayai Royal Pet Care dengan rating 5 bintang
          </p>
          <Link to="/testimonials">
            <Button 
              size="lg"
              className="rounded-xl px-8"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(var(--background))",
              }}
            >
              Baca Testimonial
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
