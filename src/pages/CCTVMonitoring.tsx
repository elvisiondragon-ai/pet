import { useState } from "react";
import { Camera, Lock, Shield, Play, Eye, Maximize, Download, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CCTVMonitoring = () => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAccessCamera = () => {
    if (!token.trim()) {
      toast.error("Silakan masukkan token akses Anda");
      return;
    }

    // Simulate token validation
    if (token.length < 6) {
      toast.error("Token tidak valid. Periksa kembali token Anda.");
      return;
    }

    setIsAuthenticated(true);
    toast.success("Berhasil terhubung ke kamera! 🎥");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-gradient-royal flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-glow"></div>
              Live CCTV Monitoring System
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Pantau Kesayangan Anda</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Akses real-time video streaming dengan keamanan enkripsi tingkat tinggi
          </p>
        </div>

        {/* Token Input Section */}
        {!isAuthenticated && (
          <div className="glass-strong p-10 rounded-3xl border-2 border-primary/30 mb-8 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="p-4 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.2), hsl(var(--pink-start) / 0.2))",
                }}
              >
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Masukkan Token Akses</h2>
                <p className="text-sm text-muted-foreground">
                  Token akan Anda terima setelah konfirmasi booking
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Contoh: RPC-A1B2C3D4E5F6"
                value={token}
                onChange={(e) => setToken(e.target.value.toUpperCase())}
                className="h-14 text-lg glass border-primary/30 focus:border-primary rounded-xl"
              />
              
              <Button
                onClick={handleAccessCamera}
                size="lg"
                className="w-full h-14 rounded-xl text-lg"
                style={{
                  background: "var(--gradient-gold)",
                  color: "hsl(var(--background))",
                }}
              >
                <Eye className="mr-2" />
                Akses Kamera
              </Button>
            </div>

            {/* Info */}
            <div className="flex items-start gap-3 glass p-4 rounded-xl border border-blue-500/30">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong className="text-foreground">Belum punya token?</strong>
                </p>
                <p>
                  Token akses akan dikirimkan melalui WhatsApp setelah Anda melakukan booking dan konfirmasi pembayaran. Token bersifat unik dan personal untuk setiap sesi perawatan.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Section */}
        {isAuthenticated ? (
          <div className="space-y-6">
            {/* Main Video Player */}
            <div className="glass-strong rounded-3xl overflow-hidden border-2 border-primary/30">
              {/* Video Header */}
              <div className="bg-background/50 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-glow"></div>
                  <span className="font-semibold">LIVE - Grooming Room A</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date().toLocaleTimeString('id-ID')}
                </div>
              </div>

              {/* Video Display */}
              <div className="relative aspect-video bg-black/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Camera className="w-20 h-20 mx-auto text-primary/50 animate-pulse" />
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Live Stream Active</p>
                      <p className="text-sm text-muted-foreground">
                        Token: {token}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Pet: Charlie (Golden Retriever) • Owner: Sarah Anderson
                      </p>
                    </div>
                    <Button 
                      size="lg"
                      className="rounded-full"
                      style={{
                        background: "var(--gradient-royal)",
                      }}
                    >
                      <Play className="mr-2" />
                      Start Streaming
                    </Button>
                  </div>
                </div>

                {/* Video overlay with demo placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000"
                  alt="Pet in grooming session"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>

              {/* Controls */}
              <div className="bg-background/50 px-6 py-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass rounded-xl"
                    >
                      <Maximize className="w-4 h-4 mr-2" />
                      Fullscreen
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass rounded-xl"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Screenshot
                    </Button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="glass rounded-xl border-red-500/30 text-red-400"
                    onClick={() => setIsAuthenticated(false)}
                  >
                    Disconnect
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-strong p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Room Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room:</span>
                    <span className="font-medium">Grooming Room A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-medium">Dog Grooming Premium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Time:</span>
                    <span className="font-medium">09:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Est. Finish:</span>
                    <span className="font-medium">11:30 WIB</span>
                  </div>
                </div>
              </div>

              <div className="glass-strong p-6 rounded-2xl border border-green-500/30">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Security Features
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Encrypted connection (AES-256)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Private streaming (token-based)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>No data stored externally</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Auto-disconnect after session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block glass-strong p-12 rounded-3xl">
              <Camera className="w-24 h-24 mx-auto mb-6 text-muted-foreground/50" />
              <h3 className="text-2xl font-bold mb-4">Masukkan Token untuk Mulai</h3>
              <p className="text-muted-foreground max-w-md">
                Anda akan dapat mengawasi kesayangan Anda secara real-time dengan video berkualitas HD
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CCTVMonitoring;
