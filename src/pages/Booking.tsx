import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, Dog, Phone, Mail, MessageSquare, CreditCard, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    whatsapp: "",
    email: "",
    petName: "",
    petType: "",
    breed: "",
    weight: "",
    specialCondition: "",
    service: "",
    date: "",
    time: "",
  });

  const services = [
    "Dog Grooming Premium",
    "Dog Bathing & Spa",
    "Dog Vaccination",
    "Dog Health Check",
    "Cat Grooming Deluxe",
    "Cat Bathing & Spa",
    "Cat Vaccination",
    "Cat Health Check",
  ];

  const timeSlots = ["09:00", "11:00", "13:00", "15:00", "17:00"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.ownerName || !formData.whatsapp || !formData.petName || !formData.service || !formData.date || !formData.time) {
      toast.error("Mohon lengkapi semua field yang wajib diisi");
      return;
    }

    // Format WhatsApp message
    const message = `Halo Royal Pet Care!

Saya ingin booking:

📋 *CUSTOMER INFO*
Nama: ${formData.ownerName}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email || "-"}

🐾 *PET INFO*
Nama Pet: ${formData.petName}
Jenis: ${formData.petType}
Ras/Breed: ${formData.breed || "-"}
Berat: ${formData.weight || "-"}
Kondisi Khusus: ${formData.specialCondition || "-"}

💼 *SERVICE*
Layanan: ${formData.service}
Tanggal: ${formData.date}
Waktu: ${formData.time} WIB

💰 *TOTAL: Rp 100.000*

Mohon konfirmasi dan kirimkan token akses CCTV. Terima kasih! 🙏`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "6281234567890"; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    toast.success("Membuka WhatsApp...");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-gradient-royal">
              ✨ Harga Fixed: Rp 100.000
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Book Your Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lengkapi form di bawah dan konfirmasi via WhatsApp
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Customer Info */}
          <div className="glass-strong p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.2), hsl(var(--pink-start) / 0.2))",
                }}
              >
                <User className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Customer Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ownerName" className="text-foreground">
                  Nama Pemilik <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  className="glass border-white/20 h-12 rounded-xl"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground">
                  No. WhatsApp <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="glass border-white/20 h-12 rounded-xl pl-11"
                    placeholder="08123456789"
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email" className="text-foreground">Email (Optional)</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass border-white/20 h-12 rounded-xl pl-11"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pet Info */}
          <div className="glass-strong p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--pink-start) / 0.2), hsl(var(--pink-end) / 0.2))",
                }}
              >
                <Dog className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Pet Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="petName" className="text-foreground">
                  Nama Pet <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="petName"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  className="glass border-white/20 h-12 rounded-xl"
                  placeholder="Charlie"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="petType" className="text-foreground">
                  Jenis <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.petType} onValueChange={(value) => setFormData({ ...formData, petType: value })}>
                  <SelectTrigger className="glass border-white/20 h-12 rounded-xl">
                    <SelectValue placeholder="Pilih jenis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dog">Dog</SelectItem>
                    <SelectItem value="Cat">Cat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="breed" className="text-foreground">Ras/Breed (Optional)</Label>
                <Input
                  id="breed"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  className="glass border-white/20 h-12 rounded-xl"
                  placeholder="Golden Retriever"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight" className="text-foreground">Berat Badan (Optional)</Label>
                <Input
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="glass border-white/20 h-12 rounded-xl"
                  placeholder="15 kg"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="specialCondition" className="text-foreground">Kondisi Khusus (Optional)</Label>
                <Textarea
                  id="specialCondition"
                  value={formData.specialCondition}
                  onChange={(e) => setFormData({ ...formData, specialCondition: e.target.value })}
                  className="glass border-white/20 rounded-xl min-h-24"
                  placeholder="Contoh: Kulit sensitif, alergi, takut dengan suara keras, dll."
                />
              </div>
            </div>
          </div>

          {/* Service & Schedule */}
          <div className="glass-strong p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.2), hsl(var(--gold-end) / 0.2))",
                }}
              >
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Service & Schedule</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground">
                  Pilih Layanan <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="glass border-white/20 h-12 rounded-xl">
                    <SelectValue placeholder="Pilih layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">
                    Tanggal <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="glass border-white/20 h-12 rounded-xl"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground">
                    Waktu <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="glass border-white/20 h-12 rounded-xl">
                      <SelectValue placeholder="Pilih waktu" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {slot} WIB
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="glass-strong p-8 rounded-3xl border-2 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.2), hsl(var(--pink-start) / 0.2))",
                }}
              >
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Payment Summary</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-muted-foreground">Layanan</span>
                <span className="font-medium">{formData.service || "-"}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-muted-foreground">Tanggal & Waktu</span>
                <span className="font-medium">
                  {formData.date && formData.time ? `${formData.date} • ${formData.time} WIB` : "-"}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-4xl font-bold text-gradient-gold">Rp 100.000</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="glass p-6 rounded-2xl border border-blue-500/30 flex items-start gap-4">
            <Camera className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Live CCTV Access Token</h3>
              <p className="text-sm text-muted-foreground">
                Setelah konfirmasi booking via WhatsApp, Anda akan menerima <strong>TOKEN AKSES</strong> unik untuk mengawasi pet Anda secara LIVE di halaman CCTV Monitoring. Token akan dikirim melalui WhatsApp.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full h-16 text-xl rounded-2xl"
            style={{
              background: "var(--gradient-royal)",
            }}
          >
            <MessageSquare className="mr-2 w-6 h-6" />
            Konfirmasi via WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
