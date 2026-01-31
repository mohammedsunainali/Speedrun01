import { Calendar, MapPin, Clock, Tag, Laptop } from "lucide-react";

export function EventDetails() {
  const details = [
    { icon: Calendar, label: "Date", value: "25th October 2025" },
    { icon: MapPin, label: "Location", value: "Bangalore" },
    { icon: Clock, label: "Duration", value: "1 Day (11 AM – 7 PM)" },
    { icon: Tag, label: "Price", value: "₹4999 → ₹499 (Intro Offer)" },
  ];

  return (
    <section id="event-details" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            Workshop Details
          </h2>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                  <detail.icon className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">{detail.label}</div>
                  <div className="text-xl text-black">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="bg-[#FF6B00]/5 border border-[#FF6B00]/20 rounded-xl p-6 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
              <Laptop className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div className="text-gray-700">
              <span className="text-black">💻 Bring your laptop</span> — you'll build, launch, and grow your startup during the workshop.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}