"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import LegalSection from '@/components/legal/LegalSection';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

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
          name: "Inicio",          id: "/"},
        {
          name: "Propiedades",          id: "/propiedades"},
        {
          name: "Nosotros",          id: "/nosotros"},
        {
          name: "Contacto",          id: "/contacto"},
      ]}
      brandName="HDH Inmobiliaria"
    />
  </div>

  <div id="contact-page" data-section="contact-page">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="Tu próximo paso empieza aquí. Hablemos de cómo podemos ayudarte."
      buttons={[
        {
          text: "WhatsApp Inmediato",          href: "https://wa.me/5493510000000"},
      ]}
    />
  </div>

  <div id="legal" data-section="legal">
      <LegalSection
      layout="section"
      title="Términos y condiciones"
      sections={[
        {
          heading: "Uso de datos",          content: {
            type: "paragraph",            text: "Protegemos tu información personal de acuerdo con la ley vigente."},
        },
        {
          heading: "Política de Privacidad",          content: {
            type: "list",            items: [
              "No compartimos datos con terceros.",              "Uso exclusivo para fines inmobiliarios."],
          },
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="HDH Inmobiliaria"
      columns={[
        {
          title: "HDH",          items: [
            {
              label: "Nosotros",              href: "/nosotros"},
            {
              label: "Contacto",              href: "/contacto"},
          ],
        },
        {
          title: "Servicios",          items: [
            {
              label: "Ventas",              href: "/propiedades"},
            {
              label: "Administración",              href: "/propiedades"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacidad",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
