import { Star, Shield, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      petName: "Charlie",
      petType: "Golden Retriever",
      service: "Dog Grooming Premium",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      petImage: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400",
      review: "Luar biasa! Saya bisa melihat Charlie selama proses grooming melalui CCTV. Sangat menenangkan bisa memantau kesayangan saya. Hasilnya juga perfect, Charlie terlihat sangat senang dan rileks. Tim Royal Pet Care sangat profesional dan penuh kasih sayang pada hewan.",
      date: "2 hari yang lalu",
    },
    {
      id: 2,
      name: "Michael Chen",
      petName: "Luna",
      petType: "Persian Cat",
      service: "Cat Grooming Deluxe",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
      review: "Luna sangat pemilih dan mudah stress, tapi tim Royal Pet Care tahu cara menangani kucing dengan lembut. Fitur live monitoring benar-benar game changer! Saya bisa lihat Luna tetap tenang sepanjang proses. Bulu Luna sekarang super halus dan wangi. Highly recommended!",
      date: "5 hari yang lalu",
    },
    {
      id: 3,
      name: "Aisha Rahman",
      petName: "Max",
      petType: "German Shepherd",
      service: "Dog Vaccination",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      petImage: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400",
      review: "Dokter hewannya sangat berpengalaman dan penjelasannya detail. Max yang biasanya takut dengan dokter hewan, kali ini terlihat lebih calm. Live CCTV membuat saya lebih yakin dan percaya dengan prosesnya. Sertifikat vaksin juga lengkap. Puas banget!",
      date: "1 minggu yang lalu",
    },
    {
      id: 4,
      name: "David Thompson",
      petName: "Bella",
      petType: "Pomeranian",
      service: "Dog Bathing & Spa",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      petImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
      review: "Bella mendapat perawatan spa yang luar biasa! Dari shampo premium, massage, sampai blow dry-nya semua perfect. Yang paling saya suka adalah bisa screenshot momen lucu Bella saat lagi dimandiin melalui live cam. Wanginya tahan lama, dan Bella terlihat lebih happy!",
      date: "1 minggu yang lalu",
    },
    {
      id: 5,
      name: "Priya Sharma",
      petName: "Mochi",
      petType: "Scottish Fold",
      service: "Cat Health Check",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      petImage: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400",
      review: "Pemeriksaan kesehatan yang sangat thorough! Dokternya cek dari mata, telinga, gigi, sampai perut Mochi dengan detail. Medical reportnya juga lengkap dan mudah dipahami. Live monitoring memberikan peace of mind saat Mochi diperiksa. Akan rutin kesini untuk check-up.",
      date: "2 minggu yang lalu",
    },
    {
      id: 6,
      name: "James Wilson",
      petName: "Rocky",
      petType: "Bulldog",
      service: "Dog Grooming Premium",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      petImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
      review: "Rocky punya kulit sensitif dan saya selalu khawatir saat grooming. Tapi Royal Pet Care pakai produk yang aman dan cocok untuk Rocky. Bisa pantau real-time jadi saya bisa langsung kasih feedback kalau ada yang kurang. Hasilnya memuaskan, Rocky jadi lebih ganteng!",
      date: "2 minggu yang lalu",
    },
    {
      id: 7,
      name: "Emma Rodriguez",
      petName: "Whiskers",
      petType: "Maine Coon",
      service: "Cat Bathing & Spa",
      rating: 5,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
      petImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
      review: "Whiskers benci mandi, tapi groomer di Royal Pet Care punya teknik khusus yang bikin dia tetap tenang. Shamponya hypoallergenic dan wanginya natural. Saya suka banget bisa lihat prosesnya lewat HP. Whiskers sekarang bulunya lebih fluffy dan sehat. Worth every penny!",
      date: "3 minggu yang lalu",
    },
    {
      id: 8,
      name: "Ryan Lee",
      petName: "Duke",
      petType: "Husky",
      service: "Dog Health Check",
      rating: 5,
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
      petImage: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400",
      review: "Comprehensive health check dengan harga yang reasonable. Dokternya sangat teliti dan ramah, Duke yang biasanya galak sama orang asing jadi jinak. Live CCTV feature ini brilliant idea! Bisa liat Duke di-check tanpa saya ada disana dan dia tetap behave. A+ service!",
      date: "3 minggu yang lalu",
    },
    {
      id: 9,
      name: "Sophia Martinez",
      petName: "Oliver",
      petType: "British Shorthair",
      service: "Cat Vaccination",
      rating: 5,
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400",
      petImage: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
      review: "First time vaksin Oliver dan saya nervous, tapi Royal Pet Care buat semuanya jadi mudah. Prosesnya cepat, dokternya gentle, dan Oliver gak nangis sama sekali! Live cam membuat saya bisa lihat sendiri kalau Oliver aman. Plus dapat buku vaksin dan reminder untuk vaksin berikutnya.",
      date: "1 bulan yang lalu",
    },
    {
      id: 10,
      name: "Daniel Park",
      petName: "Buddy",
      petType: "Beagle",
      service: "Dog Bathing & Spa",
      rating: 5,
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400",
      petImage: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400",
      review: "Buddy loves his spa day at Royal Pet Care! Treatment massage-nya bikin dia super rileks sampai ketiduran. Saya senang bisa record video Buddy yang lagi happy lewat live stream. Groomer-nya juga kasih tips cara rawat bulu Buddy di rumah. Definitely akan balik lagi!",
      date: "1 bulan yang lalu",
    },
  ];

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.service.toLowerCase().includes(filter));

  const filters = [
    { value: "all", label: "All Reviews" },
    { value: "grooming", label: "Grooming" },
    { value: "bathing", label: "Bathing & Spa" },
    { value: "vaccination", label: "Vaccination" },
    { value: "health", label: "Health Check" },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-gradient-royal flex items-center gap-2 justify-center">
              <Shield className="w-4 h-4" />
              Verified Customer Reviews
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Real Stories</span>
            <br />
            <span className="text-foreground">From Happy Pet Owners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            500+ pet owners mempercayai Royal Pet Care untuk kesayangan mereka
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gradient-royal">5.0</span>
            <span className="text-muted-foreground">dari 500+ reviews</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={filter === f.value ? "default" : "outline"}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-6 ${
                filter === f.value
                  ? "hover-glow"
                  : "glass border-white/20"
              }`}
              style={
                filter === f.value
                  ? {
                      background: "var(--gradient-gold)",
                      color: "hsl(var(--background))",
                    }
                  : {}
              }
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-strong p-6 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover-glow"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.petName} • {testimonial.petType}
                      </p>
                    </div>
                    <div className="glass px-3 py-1 rounded-full flex items-center gap-1">
                      <Shield className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400 font-medium">Verified</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Pet Image */}
              <div className="relative mb-4 rounded-2xl overflow-hidden">
                <img
                  src={testimonial.petImage}
                  alt={testimonial.petName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full">
                  <span className="text-xs font-medium">{testimonial.service}</span>
                </div>
              </div>

              {/* Review */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {testimonial.review}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                <Heart className="w-4 h-4 text-pink-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 glass-strong p-10 rounded-3xl border-2 border-primary/30">
          <h3 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan <span className="text-gradient-royal">500+ Pet Owner</span> Bahagia?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Berikan pengalaman perawatan terbaik untuk kesayangan Anda dengan Royal Pet Care
          </p>
          <Button
            size="lg"
            className="rounded-xl px-8"
            style={{
              background: "var(--gradient-gold)",
              color: "hsl(var(--background))",
            }}
          >
            Book Sekarang - Rp 100.000
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
