"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Inicio",
          id: "/",
        },
        {
          name: "Propiedades",
          id: "/propiedades",
        },
        {
          name: "Nosotros",
          id: "/nosotros",
        },
        {
          name: "Contacto",
          id: "/contacto",
        },
      ]}
      brandName="HDH Inmobiliaria"
    />
  </div>

  <div id="about-page" data-section="about-page">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Tu hijo estudia en Córdoba, nosotros lo cuidamos"
      description="En HDH, no sos un número de legajo, sos parte de nuestra historia. Desde Carlos Paz hasta el corazón de Nueva Córdoba, te acompañamos."
      metrics={[
        {
          value: "100%",
          title: "Confianza",
        },
        {
          value: "24/7",
          title: "Atención",
        },
      ]}
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/barcelona-from-helicopter-sants-district_1398-4642.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Compromiso Humano"
      title="Una inmobiliaria diferente"
      description="Entendemos que detrás de cada transacción hay un proyecto de vida."
      subdescription="Más de una década facilitando mudanzas y nuevas inversiones en Córdoba."
      icon={Heart}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-woman-holding-car-charger-electric-vehicle-charging-station_107420-94914.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="HDH Inmobiliaria"
      columns={[
        {
          title: "HDH",
          items: [
            {
              label: "Nosotros",
              href: "/nosotros",
            },
            {
              label: "Contacto",
              href: "/contacto",
            },
          ],
        },
        {
          title: "Servicios",
          items: [
            {
              label: "Ventas",
              href: "/propiedades",
            },
            {
              label: "Administración",
              href: "/propiedades",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacidad",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
