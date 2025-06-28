"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Scissors, Sparkles, RefreshCw, Star, Swords } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LukusKnivesLanding() {
  const [lang, setLang] = useState<'de' | 'en'>("de")
  const t = {
    de: {
      title: "LouCrash'd Messer",
      location: "Thun, Schweiz",
      badge: "Premium Messerservice in Thun",
      heroTitle1: "Meisterhafte Messer",
      heroTitle2: "Restauration & Schärfen",
      heroDesc: "Spezialisiert auf Damast- und hochwertige Messerrestauration, professionelle Reinigung und extreme Präzisionsschärfung. Wir bringen Ihre Klingen zurück zur Perfektion.",
      getQuote: "Angebot einholen",
      viewWork: "Unsere Arbeiten",
      servicesTitle: "Experten-Messerservice",
      servicesDesc: "Drei Jahrzehnte Erfahrung in präziser Klingenpflege und Restauration",
      restoration: "Restauration",
      restorationDesc: "Komplette Klingenrestauration für beschädigte oder abgenutzte Messer",
      restorationList: ["• Damastmuster-Restauration", "• Griffreparatur & -ersatz", "• Rost- & Korrosionsentfernung", "• Schneidengeometrie-Korrektur"],
      cleaning: "Tiefenreinigung",
      cleaningDesc: "Professionelle Reinigung für alle Messertypen",
      cleaningList: ["• Patina-Erhaltung", "• Lebensmittelsichere Desinfektion", "• Schutzbeschichtung für den Griff"],
      sharpening: "Extremes Schärfen",
      sharpeningDesc: "Präzisionsschärfen bis zur Rasiermesserschärfe",
      sharpeningList: ["• Diamantschärfen", "• Individuelle Winkeloptimierung", "• Spiegelpolitur der Schneide"],
      galleryTitle: "Premium Klingen Spezialisten",
      galleryDesc: "Wir arbeiten mit feinstem Damaststahl und hochwertigen Küchenmessern",
      contactTitle: "Bereit, Ihre Klingen zu restaurieren?",
      contactDesc: "Kontaktieren Sie uns für eine professionelle Beratung und ein Angebot. Im Herzen von Thun, Schweiz.",
      emailUs: "Schreiben Sie uns an",
      locatedIn: "Standort",
      sendInquiry: "Anfrage senden",
      footerTitle: "LükusMesser",
      footerDesc: "Premium Messerrestauration, Reinigung & Schärfservice in Thun, Schweiz",
      copyright: () => `© ${new Date().getFullYear()} LükusMesser. Alle Rechte vorbehalten.`
    },
    en: {
      title: "LouCrash'd Knives",
      location: "Thun, Switzerland",
      badge: "Premium Knife Services in Thun",
      heroTitle1: "Master Knife",
      heroTitle2: "Restoration & Sharpening",
      heroDesc: "Specialized in Damascus and high-end knife restoration, professional cleaning, and extreme precision sharpening. Bringing your blades back to perfection.",
      getQuote: "Get Quote",
      viewWork: "View Our Work",
      servicesTitle: "Expert Knife Services",
      servicesDesc: "Three decades of experience in precision blade care and restoration",
      restoration: "Restoration",
      restorationDesc: "Complete blade restoration for damaged or worn knives",
      restorationList: ["• Damascus pattern restoration", "• Handle repair & replacement", "• Rust & corrosion removal", "• Edge geometry correction"],
      cleaning: "Deep Cleaning",
      cleaningDesc: "Professional cleaning for all knife types",
      cleaningList: ["• Patina preservation", "• Food-safe sanitization", "• Protective coating for the handle"],
      sharpening: "Extreme Sharpening",
      sharpeningDesc: "Precision sharpening to razor-sharp perfection",
      sharpeningList: ["• Diamond sharpening", "• Custom angle optimization", "• Mirror polish edges"],
      galleryTitle: "Premium Blade Specialists",
      galleryDesc: "We work with the finest Damascus steel and high-end kitchen knives",
      contactTitle: "Ready to Restore Your Blades?",
      contactDesc: "Contact us today for a professional consultation and quote. Located in the heart of Thun, Switzerland.",
      emailUs: "Email us at",
      locatedIn: "Located in",
      sendInquiry: "Send Inquiry",
      footerTitle: "LükusKnives",
      footerDesc: "Premium knife restoration, cleaning & sharpening services in Thun, Switzerland",
      copyright: () => `© ${new Date().getFullYear()} LükusKnives. All rights reserved.`
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-light-silver to-honed-white">
      {/* Header */}
      <header className="border-b border-steel-gray/20 bg-honed-white/80 backdrop-blur-sm sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <Swords className="h-8 w-8 text-steel-gray flex-shrink-0" aria-hidden="true" />
            <h1 className="text-xl sm:text-2xl font-bold text-steel-gray truncate">{t[lang].title}</h1>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-steel-gray/70 flex-shrink-0">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{t[lang].location}</span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              className="text-xs border border-steel-gray/30 rounded px-2 py-1 hover:bg-light-silver bg-honed-white shadow-sm text-steel-gray"
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              aria-label={lang === 'de' ? 'Switch to English' : 'Wechseln Sie zu Deutsch'}
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </div>
        {/* Mobile location display */}
        <div className="sm:hidden px-4 pb-2">
          <div className="flex items-center space-x-2 text-sm text-steel-gray/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{t[lang].location}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" role="banner" aria-labelledby="hero-title">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-knife.jpg"
            alt="Premium knife background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-steel-gray/60"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge variant="outline" className="mb-6 text-honed-white border-honed-white/30 bg-sharp-blue/20 backdrop-blur-sm">
            {t[lang].badge}
          </Badge>
          <h2 id="hero-title" className="text-5xl md:text-6xl font-bold text-honed-white mb-6 leading-tight">
            {t[lang].heroTitle1}
            <span className="text-light-silver block">{t[lang].heroTitle2}</span>
          </h2>
          <p className="text-xl text-light-silver mb-8 max-w-2xl mx-auto leading-relaxed">
            {t[lang].heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sharp-blue text-honed-white hover:bg-sharp-blue/90 px-10 py-4 text-lg font-semibold" asChild>
              <Link href="mailto:info@codechefs.ch">
                <Mail className="mr-3 h-6 w-6" aria-hidden="true" />
                {t[lang].getQuote}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-light-silver" role="region" aria-labelledby="services-title">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 id="services-title" className="text-3xl font-bold text-steel-gray mb-4">{t[lang].servicesTitle}</h3>
            <p className="text-steel-gray/70 max-w-2xl mx-auto">{t[lang].servicesDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="card border-steel-gray/20 hover:shadow-lg transition-shadow bg-honed-white">
              <CardHeader className="text-center">
                <RefreshCw className="h-12 w-12 text-sharp-blue mx-auto mb-4" aria-hidden="true" />
                <CardTitle className="text-steel-gray">{t[lang].restoration}</CardTitle>
                <CardDescription>{t[lang].restorationDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-steel-gray/70">
                  {t[lang].restorationList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </article>

            <article className="card border-steel-gray/20 hover:shadow-lg transition-shadow bg-honed-white">
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-sharp-blue mx-auto mb-4" aria-hidden="true" />
                <CardTitle className="text-steel-gray">{t[lang].cleaning}</CardTitle>
                <CardDescription>{t[lang].cleaningDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-steel-gray/70">
                  {t[lang].cleaningList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </article>

            <article className="card border-steel-gray/20 hover:shadow-lg transition-shadow bg-honed-white">
              <CardHeader className="text-center">
                <Scissors className="h-12 w-12 text-sharp-blue mx-auto mb-4" aria-hidden="true" />
                <CardTitle className="text-steel-gray">{t[lang].sharpening}</CardTitle>
                <CardDescription>{t[lang].sharpeningDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-steel-gray/70">
                  {t[lang].sharpeningList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </article>
          </div>
        </div>
      </section>

      {/* Knife Gallery */}
      <section id="gallery" className="py-16 px-4" role="region" aria-labelledby="gallery-title">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 id="gallery-title" className="text-3xl font-bold text-steel-gray mb-4">{t[lang].galleryTitle}</h3>
            <p className="text-steel-gray/70 max-w-2xl mx-auto">{t[lang].galleryDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <figure className="relative group overflow-hidden rounded-lg">
              <Image
                src="/knife1.jpg"
                alt="Damascus chef knife with intricate folded steel pattern"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-steel-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-honed-white">
                  <h4 className="font-semibold">Damascus Chef Knife</h4>
                  <p className="text-sm opacity-90">Folded steel restoration</p>
                </div>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-lg">
              <Image
                src="/knife2.jpg"
                alt="Japanese santoku knife with premium steel finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-steel-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-honed-white">
                  <h4 className="font-semibold">Japanese Santoku</h4>
                  <p className="text-sm opacity-90">Precision sharpening</p>
                </div>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-lg">
              <Image
                src="/knife3.jpg"
                alt="High-end German knife with custom handle"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-steel-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-honed-white">
                  <h4 className="font-semibold">German Steel Blade</h4>
                  <p className="text-sm opacity-90">Complete restoration</p>
                </div>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-lg">
              <Image
                src="/knife4.jpg"
                alt="Vintage Damascus hunting knife with bone handle"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-steel-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-honed-white">
                  <h4 className="font-semibold">Vintage Damascus</h4>
                  <p className="text-sm opacity-90">Pattern restoration</p>
                </div>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-lg">
              <Image
                src="/knife5.jpg"
                alt="Professional chef knife set with mirror finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-steel-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-honed-white">
                  <h4 className="font-semibold">Professional Set</h4>
                  <p className="text-sm opacity-90">Mirror polish finish</p>
                </div>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-lg">
              <Image
                src="/knife6.jpg"
                alt="Custom forged Damascus blade with unique pattern"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-steel-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-honed-white">
                  <h4 className="font-semibold">Custom Damascus</h4>
                  <p className="text-sm opacity-90">Unique pattern work</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-light-silver" role="region" aria-labelledby="testimonials-title">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 id="testimonials-title" className="text-3xl font-bold text-steel-gray mb-4">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="card border-steel-gray/20 bg-honed-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rust-brown text-rust-brown" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-steel-gray/70 mb-4">
                  "Incredible work on my Damascus chef knife. The pattern restoration was flawless, and the edge is
                  sharper than when I first bought it."
                </p>
                <cite className="font-semibold text-steel-gray">— Chef Marcus, Bern</cite>
              </CardContent>
            </blockquote>

            <blockquote className="card border-steel-gray/20 bg-honed-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rust-brown text-rust-brown" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-steel-gray/70 mb-4">
                  "Professional service and attention to detail. My vintage knife collection has never looked better.
                  Highly recommended!"
                </p>
                <cite className="font-semibold text-steel-gray">— Andreas K., Interlaken</cite>
              </CardContent>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-steel-gray text-honed-white" role="region" aria-labelledby="contact-title">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 id="contact-title" className="text-4xl font-bold mb-6">{t[lang].contactTitle}</h3>
          <p className="text-xl text-light-silver mb-8">{t[lang].contactDesc}</p>

          <Button size="lg" className="bg-sharp-blue text-honed-white hover:bg-sharp-blue/90 px-8 py-3" asChild>
            <Link href="mailto:info@codechefs.ch">
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              {t[lang].sendInquiry}
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-gray/90 text-light-silver py-8 px-4" role="contentinfo">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Swords className="h-6 w-6 text-sharp-blue" aria-hidden="true" />
            <span className="text-xl font-bold text-honed-white">{t[lang].footerTitle}</span>
          </div>
          <p className="text-sm">{t[lang].footerDesc}</p>
          <p className="text-xs text-steel-gray/60 mt-2">{t[lang].copyright()}</p>
        </div>
      </footer>
    </main>
  )
}
