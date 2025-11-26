"use client";

import { motion } from "framer-motion";
import {
  Play,
  Palette,
  Share2,
  RefreshCw,
  GraduationCap,
  Film,
  Users,
  Building2,
  Globe,
  Smartphone,
  ArrowRight,
  Check,
  Star,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const mainServices = [
  {
    id: "motion-graphics",
    title: "Motion Graphics & Video Creation",
    description:
      "Bring brands, events, and communities to life through motion visuals.",
    icon: Play,
    features: [
      "Brand explainer videos",
      "Animated ads & promos",
      "Community awareness videos",
      "Product or service demo videos",
      "Animated intro's/outro's",
      "Event highlight videos",
    ],
    targetClients: "Businesses, NGOs, Communities and Personal brands",
    gradient: "from-accent-blue to-accent-blue-light",
    video: "/videos/motion-graphics-demo.mp4",
  },
  {
    id: "brand-identity",
    title: "Brand Visual Identity Design",
    description:
      "Helping brands look professional and consistent across all platforms.",
    icon: Palette,
    features: [
      "Logo design",
      "Brand color palette & fonts",
      "Social media kits",
      "Flyer and poster design",
      "Brand templates for posts",
    ],
    targetClients: "Start-ups, Small businesses, and Entrepreneurs",
    gradient: "from-accent-blue-light to-accent-blue-lighter",
    video: "/videos/branding-showcase.mp4",
  },
  {
    id: "social-media",
    title: "Social Media Marketing & Strategy",
    description:
      "Boosting your online presence and helping your audience connect with your brand.",
    icon: Share2,
    features: [
      "Page setup & optimization",
      "Social media content planning",
      "Ad creatives & campaigns",
      "Engagement management",
    ],
    targetClients:
      "Business owners, Content creators, Coaches, and Communities",
    gradient: "from-accent-blue-lighter to-primary",
    video: "/videos/social-media-strategy.mp4",
  },
  {
    id: "rebranding",
    title: "Rebranding for Companies & Brands",
    description:
      "Transforming existing brands into something fresh, modern, and more appealing.",
    icon: RefreshCw,
    features: [
      "Brand audit & redesign",
      "Logo refresh",
      "New brand voice and identity guide",
      "Updated color palette and visual style",
      "Rebranded motion intro & social templates",
      "Announcement video for the rebrand",
    ],
    targetClients:
      "Established businesses, Agencies, and Organizations that want to modernize or reposition their brand",
    gradient: "from-primary to-accent-blue",
    video: "/videos/rebranding-process.mp4",
  },
  {
    id: "training",
    title: "Training & Skills Development",
    description:
      "Empowering creatives and entrepreneurs with the skills to design & market themselves.",
    icon: GraduationCap,
    features: [
      "Motion graphics training",
      "Graphics design training",
      "Social media management classes",
      "Digital marketing & content strategy workshop",
    ],
    targetClients:
      "Young professionals, Students, Freelancers, and Business owners",
    gradient: "from-accent-blue to-secondary",
    video: "/videos/training-programs.mp4",
  },
  {
    id: "video-editing",
    title: "Video Editing & Reels Creation",
    description: "Turning raw clips into eye-catching, viral-quality videos.",
    icon: Film,
    features: [
      "Professional video editing",
      "Viral reel creation",
      "Color correction & grading",
      "Sound design & music integration",
      "Motion graphics integration",
      "Multi-platform optimization",
    ],
    targetClients: "Content creators, Coaches, Influencers, and Entrepreneurs",
    gradient: "from-secondary to-accent-blue-light",
    video: "/videos/video-editing-reel.mp4",
  },
  {
    id: "community-campaigns",
    title: "Community & Campaign Videos",
    description:
      "Creating visuals that give voice to social impact and community stories.",
    icon: Users,
    features: [
      "Awareness videos (e.g., women empowerment, youth campaigns)",
      "Storytelling for NGOs & community leaders",
      "Motion design for events and advocacy",
      "Social impact documentaries",
    ],
    targetClients: "NGOs, Churches, Social enterprises, and Advocacy groups",
    gradient: "from-accent-blue-light to-primary",
    video: "/videos/community-impact.mp4",
  },
  {
    id: "business-branding",
    title: "Business Branding Packages",
    description: "Complete digital presence setup for growing businesses.",
    icon: Building2,
    features: [
      "Google My Business setup",
      "Logo + brand identity kit",
      "Motion graphics intro video",
      "Social media content plan",
      "Business card design",
      "Professional email setup",
    ],
    targetClients: "Small businesses, Startups, and New entrepreneurs",
    gradient: "from-primary to-accent-blue-lighter",
    video: "/videos/business-branding.mp4",
  },
];

const digitalServices = [
  {
    id: "website-development",
    title: "Website Creation",
    description:
      "We design and develop beautiful, functional websites that build credibility and attract customers.",
    icon: Globe,
    features: [
      "Business & personal websites",
      "Landing pages",
      "E-commerce websites",
      "Portfolio or booking sites",
      "Website maintenance",
      "SEO optimization",
    ],
    gradient: "from-accent-blue to-accent-blue-light",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "We create interactive, high-performing apps that bring your brand closer to your audience.",
    icon: Smartphone,
    features: [
      "Mobile app design (Android & iOS)",
      "UI/UX improvement",
      "Basic app management & updates",
      "App store optimization",
      "Cross-platform development",
    ],
    gradient: "from-accent-blue-light to-accent-blue-lighter",
  },
];

const addOnServices = [
  "Website landing page design",
  "Voice-over integration",
  "Presentation slides (animated)",
  "Digital flyers & ad banners",
  "SEO content writing",
  "E-commerce integration",
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We listen, research, and understand your goals.",
    icon: Target,
  },
  {
    step: "02",
    title: "Design",
    description: "We craft creative concepts, tailored to your vision.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Develop",
    description: "We bring your ideas to life with precision and passion.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Deliver",
    description: "We deliver excellence, on time, every time.",
    icon: Sparkles,
  },
];

export default function ServicesPageContent() {
  return (
    <div className="bg-primary text-white">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="hero-video opacity-20"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-blue-light/10"></div>
          </video>

          {/* Subtle atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/80"></div>
        </div>

        <div className="container-padding relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero-sm lg:text-hero font-bold mb-6">
              Our <span className="text-accent-blue">Creative Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary leading-relaxed mb-8">
              From visuals to strategy, we create brands that move people.
              Comprehensive creative solutions for every stage of your business
              journey.
            </p>
            <motion.button
              className="bg-accent-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-blue-light transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
              Core Creative <span className="text-accent-blue">Services</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Our comprehensive range of creative services designed to elevate
              your brand
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="bg-secondary/5 rounded-2xl p-8 border border-secondary/20 hover:border-accent-blue/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-secondary mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-2"
                          >
                            <Check className="w-4 h-4 text-accent-blue mt-1 flex-shrink-0" />
                            <span className="text-sm text-secondary">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Target Clients */}
                      <div className="bg-secondary/5 rounded-lg p-3 border border-secondary/10">
                        <p className="text-xs text-accent-blue font-medium mb-1">
                          Target Clients:
                        </p>
                        <p className="text-sm text-secondary">
                          {service.targetClients}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="section-padding bg-secondary/5">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
              Website & App{" "}
              <span className="text-accent-blue">Development</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              We help brands go digital with user-friendly, mobile-optimized
              platforms that reflect their identity and goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {digitalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="bg-primary/50 rounded-2xl p-8 border border-secondary/20 hover:border-accent-blue/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-accent-blue mt-6">
                    <strong>Target:</strong> Startups, businesses, and
                    organizations ready to expand.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
                Optional <span className="text-accent-blue">Add-ons</span>
              </h2>
              <p className="text-secondary text-lg">
                Enhance your project with these additional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary/5 rounded-lg p-6 border border-secondary/20 hover:border-accent-blue/30 transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <Star className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                  <p className="text-white font-medium">{addon}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-secondary/5">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
              Our Creative <span className="text-accent-blue">Process</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              We don't just deliver projects, we create experiences that move
              people
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-6 relative">
                      <IconComponent className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-accent-blue rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent-blue/20"></div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-secondary">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-6 text-white">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              At Daniekeys Studios, your brand's success is our mission. Let's
              create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-accent-blue px-8 py-4 rounded-lg font-semibold hover:bg-off-white transition-all duration-300"
                onClick={() =>
                  window.open(
                    "mailto:hello@daniekeys.studio?subject=Service Inquiry&body=Hi! I'm interested in your creative services. Please send me more information.",
                    "_blank"
                  )
                }
              >
                Get Started Now
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent-blue transition-all duration-300"
                onClick={() => (window.location.href = "/pricing")}
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
