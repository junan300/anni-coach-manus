import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { asset } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      {(lang) => (
        <div className="flex flex-col gap-20 pb-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-10 pb-20 lg:pt-20">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-secondary/10 blur-3xl" />

            <div className="container grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {lang === "en" ? "ICC London Certified Coach" : "Coach Certificada por ICC Londres"}
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                  {lang === "en" 
                    ? "Transform Your Life Through Professional Coaching" 
                    : "Transforma Tu Vida a Través del Coaching Profesional"}
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {lang === "en"
                    ? "With over 7 years of experience, I help you find clarity, healing, and purpose through personalized coaching and therapy."
                    : "Con más de 7 años de experiencia, te ayudo a encontrar claridad, sanación y propósito a través de coaching y terapia personalizada."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/booking">
                    <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      {lang === "en" ? "Book Free Consultation" : "Reserva Consulta Gratis"}
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-secondary/10">
                      {lang === "en" ? "View Services" : "Ver Servicios"}
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>7+ Years Exp.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Bilingual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>100+ Clients</span>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto lg:ml-auto max-w-md lg:max-w-full">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={asset("images/hero_coaching_session.jpg")}
                    alt="Anni Aguilar Coaching Session" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-2xl shadow-xl border border-border/50 max-w-[200px] hidden md:block animate-bounce-slow">
                  <div className="flex gap-1 text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {lang === "en" ? "\"Anni changed my life completely.\"" : "\"Anni cambió mi vida por completo.\""}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                {lang === "en" ? "How Can I Help You?" : "¿Cómo Puedo Ayudarte?"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {lang === "en" 
                  ? "Discover the path to your best self with my specialized coaching services."
                  : "Descubre el camino hacia tu mejor versión con mis servicios especializados."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: lang === "en" ? "Life Coaching" : "Coaching de Vida",
                  desc: lang === "en" ? "Achieve your personal and professional goals." : "Logra tus metas personales y profesionales.",
                  icon: "🎯"
                },
                {
                  title: lang === "en" ? "Family Therapy" : "Terapia Familiar",
                  desc: lang === "en" ? "Heal relationships and build stronger bonds." : "Sana relaciones y construye lazos más fuertes.",
                  icon: "👨‍👩‍👧‍👦"
                },
                {
                  title: lang === "en" ? "Relationship Coaching" : "Coaching de Pareja",
                  desc: lang === "en" ? "Navigate challenges and deepen intimacy." : "Navega desafíos y profundiza la intimidad.",
                  icon: "❤️"
                },
                {
                  title: lang === "en" ? "Inner Child Healing" : "Sanación Niño Interior",
                  desc: lang === "en" ? "Reconnect with your true self and heal past wounds." : "Reconecta con tu ser y sana heridas del pasado.",
                  icon: "✨"
                }
              ].map((service, idx) => (
                <div key={idx} className="group relative p-8 bg-card rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <Link href="/services">
                    <span className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all cursor-pointer">
                      {lang === "en" ? "Learn More" : "Ver Más"} <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* About Preview */}
          <section className="container">
            <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full border-8 border-background shadow-2xl">
                    <img 
                      src={asset("images/avatar_anni_aguilar.jpg")}
                      alt="Anni Aguilar Portrait" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                    {lang === "en" ? "Meet Anni Aguilar" : "Conoce a Anni Aguilar"}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {lang === "en"
                      ? "I am a certified life coach with a passion for helping people unlock their potential. My approach combines professional techniques with deep empathy to guide you through life's challenges."
                      : "Soy una coach de vida certificada con pasión por ayudar a las personas a desbloquear su potencial. Mi enfoque combina técnicas profesionales con profunda empatía para guiarte a través de los desafíos de la vida."}
                  </p>
                  <Link href="/about">
                    <Button variant="default" size="lg" className="rounded-full mt-4">
                      {lang === "en" ? "Read My Story" : "Leer Mi Historia"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
}
