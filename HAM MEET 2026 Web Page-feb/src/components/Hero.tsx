import { Radio, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673260839682-87746c4d28d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW0lMjByYWRpbyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjEwNjIwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ham Radio Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Radio Wave Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-blue-400/20 animate-ping" style={{ animationDuration: '2.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Radio className="w-20 h-20 text-blue-400" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-4 tracking-tight">HAM MEET</h1>
        <div className="text-3xl md:text-4xl mb-6 text-blue-400">VADAKARA - 2026</div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Annual Amateur Radio Operators Convention
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span>2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Sargalaya Heritage Center, Vadakara</span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#register"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
