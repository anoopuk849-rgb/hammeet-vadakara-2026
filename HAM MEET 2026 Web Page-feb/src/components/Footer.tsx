import { Radio, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Radio className="w-6 h-6 text-blue-400" />
              <span className="text-white">HAM MEET 2026</span>
            </div>
            <p className="text-sm">
              Annual Amateur Radio Operators Convention bringing together ham radio enthusiasts from across the region.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7356119854</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@hammeet.org</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Venue</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <p>Sargalaya Heritage Center</p>
                <p>Iringal, Vadakara</p>
                <p>Kerala 673104</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2026 HAM MEET Vadakara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
