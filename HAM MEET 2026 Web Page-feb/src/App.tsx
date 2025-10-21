import { Hero } from './components/Hero';
import { About } from './components/About';
import { Venue } from './components/Venue';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Venue />
      <Registration />
      <Footer />
      <Toaster />
    </div>
  );
}
