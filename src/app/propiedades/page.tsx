"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardTen from '@/components/sections/team/TeamCardTen';

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

  <div id="metric" data-section="metric">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Nuestra presencia en mercado"
      tag="Datos en tiempo real"
      metrics={[
        {
          id: "m1",
          value: "500+",
          description: "Propiedades gestionadas",
        },
        {
          id: "m2",
          value: "98%",
          description: "Satisfacción de clientes",
        },
        {
          id: "m3",
          value: "15",
          description: "Años de experiencia",
        },
        {
          id: "m4",
          value: "24/7",
          description: "Disponibilidad total",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={false}
      title="Especialistas por área"
      tag="Equipo técnico"
      memberVariant="card"
      membersAnimation="slide-up"
      members={[
        {
          id: "s1",
          name: "Lucía",
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-lady-wearing-formal-suit-glasses-standing-with-arms-folded-smiling_74855-9932.jpg",
        },
        {
          id: "s2",
          name: "Federico",
          imageSrc: "http://img.b2bpic.net/free-photo/my-big-dream-is-working-big-company_329181-11421.jpg",
        },
        {
          id: "s3",
          name: "Elena",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",
        },
        {
          id: "s4",
          name: "Carlos",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-with-smartphone-smiling-camera_23-2148112961.jpg",
        },
        {
          id: "s5",
          name: "Ana",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064888.jpg",
        },
      ]}
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
