import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Sparkles, Heart, Leaf } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Retiro() {
  const [interestForm, setInterestForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleInterestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Interés en Retiro de Mujeres");
      const body = encodeURIComponent(
        `Nombre: ${interestForm.name}\nEmail: ${interestForm.email}\nTeléfono: ${interestForm.phone}\n\nMensaje:\n${interestForm.message}`
      );
      
      window.location.href = `mailto:retiroessenciafemenina@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("¡Gracias! Tu correo se está abriendo para enviar tu interés.");
      setInterestForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Hubo un error. Por favor intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const subject = encodeURIComponent("Suscripción al Newsletter - Retiro de Mujeres");
      const body = encodeURIComponent(`Email para newsletter: ${newsletterEmail}`);
      
      window.location.href = `mailto:retiroessenciafemenina@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("¡Gracias por suscribirte! Tu correo se está abriendo.");
      setNewsletterEmail("");
    } catch (error) {
      toast.error("Hubo un error. Por favor intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900/90 to-orange-900/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-amber-50 hover:text-white hover:bg-amber-800/50 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Anni Aguilar Coach
            </Button>
          </Link>
          <div className="text-amber-50 font-heading text-xl font-semibold tracking-wide">
            Retiro de Mujeres
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src="/retiro-1.jpeg"
          alt="Retiro de Mujeres"
          className="w-full h-[500px] md:h-[600px] object-cover"
        />
      </section>

      {/* Title and Special Offer Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-amber-900">
            Retiro de Mujeres
          </h1>
          <div className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 rounded-full shadow-xl">
            <p className="text-xl md:text-2xl font-bold text-white">¡ESPECIAL TEMPRANO!</p>
            <p className="text-base md:text-lg text-white">Para las primeras 10 mujeres que reserven</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-amber-200">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Esta es tu invitación a hacer una pausa, respirar y volver a casa contigo misma. 
              Nuestro refugio regenerativo para mujeres es un espacio sagrado para la curación profunda, 
              el autodescubrimiento y la renovación, donde serás nutrida, inspirada y apoyada por una 
              hermandad de mujeres fuertes y compasivas que caminan este viaje a tu lado.
            </p>
          </Card>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-amber-100/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-amber-900 mb-12">
            Experiencias Transformadoras
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-amber-900 text-center mb-4">
                Talleres Mindfulness
              </h3>
              <p className="text-gray-700 text-center">
                Conecta con el momento presente y descubre la paz interior a través de prácticas guiadas de atención plena.
              </p>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-amber-900 text-center mb-4">
                Rito de Sanación
              </h3>
              <p className="text-gray-700 text-center">
                Libera lo que ya no te sirve y abraza tu poder femenino en ceremonias sagradas de transformación.
              </p>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-amber-900 text-center mb-4">
                Yoga Gentil
              </h3>
              <p className="text-gray-700 text-center">
                Honra tu cuerpo con movimientos suaves que nutren tu espíritu y fortalecen tu conexión interior.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <img
            src="/retiro-2.jpeg"
            alt="Actividades del Retiro"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-100/50 to-orange-100/50">
        <div className="container max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-amber-300">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-amber-900 mb-6">
              Reserva Tu Lugar Hoy
            </h2>
            <p className="text-center text-lg text-gray-700 mb-8">
              ¡Tu alma te lo agradecerá! Cupo limitado.
            </p>
            
            <form onSubmit={handleInterestSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={interestForm.name}
                  onChange={(e) => setInterestForm({ ...interestForm, name: e.target.value })}
                  className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={interestForm.email}
                  onChange={(e) => setInterestForm({ ...interestForm, email: e.target.value })}
                  className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={interestForm.phone}
                  onChange={(e) => setInterestForm({ ...interestForm, phone: e.target.value })}
                  className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                  placeholder="(000) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje (opcional)
                </label>
                <Textarea
                  id="message"
                  value={interestForm.message}
                  onChange={(e) => setInterestForm({ ...interestForm, message: e.target.value })}
                  className="border-amber-300 focus:border-amber-500 focus:ring-amber-500 min-h-[120px]"
                  placeholder="Cuéntanos por qué quieres unirte a este retiro..."
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {submitting ? "Enviando..." : "Reserva Contigo Misma Hoy"}
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Para reservar o más información escribe a:{" "}
                <a
                  href="mailto:retiroessenciafemenina@gmail.com"
                  className="text-amber-700 hover:text-amber-900 font-semibold underline"
                >
                  retiroessenciafemenina@gmail.com
                </a>
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-900 to-orange-900 text-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Mantente Conectada
          </h2>
          <p className="text-lg mb-8 text-amber-100">
            Recibe inspiración, fechas de próximos retiros y contenido exclusivo para tu viaje de transformación.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-amber-200 focus:border-white focus:ring-white"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-8 py-6 rounded-full shadow-lg"
            >
              {submitting ? "Enviando..." : "Suscribirme"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            Descuento Temprano Disponible - ¡Reserva ahora y recupera tu alma!
          </p>
          <Link href="/">
            <Button variant="link" className="text-amber-300 hover:text-white">
              Conoce más sobre Anni Aguilar Coach →
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
