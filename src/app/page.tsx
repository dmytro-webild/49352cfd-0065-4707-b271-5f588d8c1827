"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

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

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Más que una inmobiliaria, tu equipo de confianza en Córdoba"
      description="Convertimos operaciones inmobiliarias en sueños cumplidos. Acompañamiento personalizado en cada paso hacia tu nuevo hogar."
      buttons={[
        {
          text: "Hablemos de tu próximo paso",
          href: "/contacto",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/city-view-road-buildings_417767-340.jpg",
          imageAlt: "Córdoba",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-beautiful-buildings-skyscrapers-captured-blue-sky-calgary_181624-19351.jpg",
          imageAlt: "Córdoba",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/residential-district-night-valencia-spain_1398-2379.jpg",
          imageAlt: "Córdoba",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/red-flowers-with-city-background_1136-151.jpg",
          imageAlt: "Córdoba",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/new-york-city-central-park-autumn_649448-5213.jpg",
          imageAlt: "Córdoba",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="search" data-section="search">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Venta",
          tags: [
            "Departamentos",
            "Casas",
            "Lotes",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-st-petersburg_1398-526.jpg",
        },
        {
          id: "f2",
          title: "Alquiler",
          tags: [
            "Estudiantes",
            "Familia",
            "Temporal",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/creative-aerial-view-cityscape_23-2148975292.jpg",
        },
        {
          id: "f3",
          title: "Administración",
          tags: [
            "Trasparencia",
            "Gestión",
            "Ética",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/city_1127-4095.jpg",
        },
      ]}
      title="Buscador Inteligente"
      description="Encuentra la propiedad que mejor se adapta a tus necesidades en Nueva Córdoba, Carlos Paz y el interior."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      members={[
        {
          id: "m1",
          name: "Martín",
          role: "Asesor",
          description: "Compromiso absoluto en cada medida.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
        },
        {
          id: "m2",
          name: "María Laura",
          role: "Administración",
          description: "Ética y transparencia en tu gestión.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-working-as-real-estate-agent_23-2151064878.jpg",
        },
        {
          id: "m3",
          name: "Marcos",
          role: "Ventas",
          description: "Resolución de problemas con precisión.",
          imageSrc: "http://img.b2bpic.net/free-photo/realtor-man-sitting-office_23-2147737926.jpg",
        },
      ]}
      title="Nuestro Equipo"
      description="Un grupo humano comprometido con tu historia. Especialistas en resolución de imposibles."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Juan Franco Santini",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-looking-wine_23-2147894652.jpg",
        },
        {
          id: "2",
          name: "Heraldo Diaz",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-laughing-young-homosexual_23-2148163335.jpg",
        },
        {
          id: "3",
          name: "Valeria Bevione",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-backpack_23-2149915916.jpg",
        },
        {
          id: "4",
          name: "Ale Rial",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-with-thumb-up_1368-6347.jpg",
        },
        {
          id: "5",
          name: "Cliente Anónimo",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-looks-points-camera-isolated-olive-green-background-with-copy-space_141793-67059.jpg",
        },
      ]}
      cardTitle="Lo que dicen nuestros amigos"
      cardTag="Experiencias reales"
      cardAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Confían en nuestra gestión"
      description="Trabajamos con las principales instituciones y desarrolladores de la provincia."
      names={[
        "Constructora del Centro",
        "Inversiones CBA",
        "Desarrollos Serranos",
        "Red de Alquileres",
        "Administración Premium",
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
