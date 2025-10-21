import { MapPin, Clock, Navigation } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Venue() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Venue</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of heritage and modern facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <ImageWithFallback
              src="https://sargaalaya.in/wp-content/uploads/2018/10/b2-1.jpg"
              alt="Sargalaya Heritage Center"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"
            />
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl mb-4">Sargalaya Heritage Center</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p>Sargalaya Arts and Crafts Village</p>
                    <p className="text-gray-600">Irinave, Vadakara, Kerala 673104</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p>Event Duration</p>
                    <p className="text-gray-600">Full Day Event - 9:00 AM to 6:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Navigation className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p>Getting There</p>
                    <p className="text-gray-600">15 km from Kozhikode, easily accessible by road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blue-50 p-8 rounded-xl mb-6">
              <h3 className="text-2xl mb-4">About the Venue</h3>
              <p className="text-gray-700 mb-4">
                Sargalaya Heritage Center is a renowned cultural hub that celebrates 
                Kerala's rich artistic traditions. The center provides state-of-the-art 
                facilities while maintaining its historical charm.
              </p>
              <p className="text-gray-700">
                With spacious halls, modern amenities, and beautiful surroundings, it's 
                the perfect location for HAM MEET 2026.
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.5547366894646!2d75.59176!3d11.5967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzQ4LjEiTiA3NcKwMzUnMzAuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sargalaya Heritage Center Location"
              ></iframe>
            </div>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir//Sargalaya+Vadakara+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
