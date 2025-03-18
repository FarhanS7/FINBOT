import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#01257D] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#01257D]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#01257D]">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                className="p-6 border border-[#00FFFF]/20 shadow-md hover:shadow-lg transition-shadow"
                key={index}
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="text-[#00FFFF]">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#01257D]">
                    {feature.title}
                  </h3>
                  <p className="text-[#01257D]/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#01257D]">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00FFFF]/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-[#00FFFF]/30">
                  <div className="text-[#01257D]">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#01257D]">
                  {step.title}
                </h3>
                <p className="text-[#01257D]/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#01257D]">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 border-[#f0f8ff] hover:shadow-[0_10px_30px_-15px_rgba(0,255,255,0.3)] transition-all"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-[#00FFFF]/40"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-[#01257D]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#01257D]/70">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#01257D]/70">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01257D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-[#00FFFF]/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-[#01257D] hover:bg-[#f8fbff] shadow-lg hover:shadow-[0_5px_20px_rgba(0,255,255,0.4)] border border-[#00FFFF]/30 transition-all"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
