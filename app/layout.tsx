import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: 'LükusMesser - Premium Messerrestauration & Schärfservice in Thun, Schweiz',
    template: '%s | LükusMesser'
  },
  description: 'Professionelle Messerrestauration, Damastmuster-Restauration und extreme Präzisionsschärfung in Thun, Schweiz. 30+ Jahre Erfahrung in hochwertiger Klingenpflege.',
  keywords: [
    'Messerrestauration',
    'Messer schärfen',
    'Damastmesser',
    'Küchenmesser',
    'Thun',
    'Schweiz',
    'Messerpflege',
    'Damastmuster',
    'Präzisionsschärfung',
    'Messerreinigung',
    'knife restoration',
    'knife sharpening',
    'Damascus knives',
    'Switzerland',
    'Thun'
  ],
  authors: [{ name: 'LükusMesser' }],
  creator: 'LükusMesser',
  publisher: 'LükusMesser',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://loucrash-messer.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://loucrash-messer.ch',
    title: 'LükusMesser - Premium Messerrestauration & Schärfservice in Thun',
    description: 'Professionelle Messerrestauration, Damastmuster-Restauration und extreme Präzisionsschärfung in Thun, Schweiz.',
    siteName: 'LükusMesser',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LükusMesser - Premium Messerrestauration in Thun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LükusMesser - Premium Messerrestauration & Schärfservice',
    description: 'Professionelle Messerrestauration und extreme Präzisionsschärfung in Thun, Schweiz.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Business',
  classification: 'Knife Restoration Services',
  other: {
    'geo.region': 'CH-BE',
    'geo.placename': 'Thun',
    'geo.position': '46.7590;7.6280',
    'ICBM': '46.7590, 7.6280',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LükusMesser",
              "description": "Professionelle Messerrestauration, Damastmuster-Restauration und extreme Präzisionsschärfung in Thun, Schweiz.",
              "url": "https://loucrashknives.com",
              "telephone": "+41-XX-XXX-XXXX",
              "email": "info@codechefs.ch",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thun",
                "addressLocality": "Thun",
                "addressRegion": "Bern",
                "postalCode": "3600",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.7590,
                "longitude": 7.6280
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "currenciesAccepted": "CHF",
              "paymentAccepted": "Cash, Credit Card",
              "areaServed": {
                "@type": "Country",
                "name": "Switzerland"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 46.7590,
                  "longitude": 7.6280
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Messerrestauration Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Messerrestauration",
                      "description": "Komplette Klingenrestauration für beschädigte oder abgenutzte Messer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Messer Schärfen",
                      "description": "Extreme Präzisionsschärfung bis zur Rasiermesserschärfe"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Messerreinigung",
                      "description": "Professionelle Reinigung für alle Messertypen"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/loucrashknives",
                "https://www.instagram.com/loucrashknives"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
