
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main className="min-h-screen pt-24 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-9xl font-bold text-gradient mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-night-300 mb-8">
            The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
          </p>
          <Link to="/">
            <Button variant="primary" icon={<Home size={18} />}>
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
