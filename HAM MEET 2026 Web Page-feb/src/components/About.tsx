import { Radio, Users, Antenna, Waves } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">About HAM MEET 2026</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join amateur radio enthusiasts from across the region for a celebration of 
            radio communication, technology, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1708794757501-43676c636420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMGFudGVubmElMjB0b3dlcnxlbnwxfHx8fDE3NjEwNjMyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Radio Antenna"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl">Connect. Learn. Transmit.</h3>
            <p className="text-gray-600">
              HAM MEET Vadakara 2026 brings together amateur radio operators, enthusiasts, 
              and technology innovators for an unforgettable gathering at the historic 
              Sargalaya Heritage Center.
            </p>
            <p className="text-gray-600">
              Experience hands-on demonstrations, technical workshops, equipment exhibitions, 
              and networking opportunities with fellow operators from across India.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Radio className="w-8 h-8 text-blue-600" />
            </div>
            <h4>Equipment Display</h4>
            <p className="text-gray-600 mt-2">Latest ham radio gear and technology</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4>Networking</h4>
            <p className="text-gray-600 mt-2">Meet fellow radio operators</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Antenna className="w-8 h-8 text-blue-600" />
            </div>
            <h4>Workshops</h4>
            <p className="text-gray-600 mt-2">Technical sessions and training</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Waves className="w-8 h-8 text-blue-600" />
            </div>
            <h4>Live Demos</h4>
            <p className="text-gray-600 mt-2">On-air operations and contests</p>
          </div>
        </div>
      </div>
    </section>
  );
}
