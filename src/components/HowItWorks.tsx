import { Globe, FileText, Phone, CreditCard, Laptop } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Globe,
      number: "1",
      title: "Visit Website",
      description: "Explore the program details",
    },
    {
      icon: FileText,
      number: "2",
      title: "Fill Form",
      description: "Complete a quick 2-min application",
    },
    {
      icon: Phone,
      number: "3",
      title: "Approval Call",
      description: "Get a confirmation call",
    },
    {
      icon: CreditCard,
      number: "4",
      title: "Payment",
      description: "Secure your spot with ₹499",
    },
    {
      icon: Laptop,
      number: "5",
      title: "Attend with Laptop",
      description: "Join us and build your startup",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            How It Works
          </h2>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 max-w-[200px]">
                {/* Icon with Number Badge */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                    <step.icon className="w-10 h-10 text-[#FF6B00]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-md text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <div className="text-center">
                  <div className="text-lg text-black mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              {/* Icon with Number */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#FF6B00]" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs">
                  {step.number}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-lg text-black mb-1">{step.title}</div>
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}