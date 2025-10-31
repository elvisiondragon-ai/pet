import { Home, Package, Cctv, Star, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Package, label: "Services", path: "/services" },
    { icon: Cctv, label: "CCTV", path: "/cctv" },
    { icon: Star, label: "Reviews", path: "/testimonials" },
    { icon: Calendar, label: "Booking", path: "/booking" },
  ];

  return (
    <div className="min-h-screen pb-20">
      {children}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-white/20">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={
                  isActive
                    ? {
                        boxShadow: "0 0 20px hsl(var(--gold-start) / 0.4)",
                        background: "linear-gradient(135deg, hsl(var(--gold-start) / 0.1), hsl(var(--pink-start) / 0.1))",
                      }
                    : {}
                }
              >
                <Icon className={`w-6 h-6 ${isActive ? "animate-glow" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
