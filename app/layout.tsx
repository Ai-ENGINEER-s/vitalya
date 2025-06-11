import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuration des polices optimisées
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap', // Optimisation du chargement
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

// Métadonnées complètes pour le SEO
export const metadata: Metadata = {
  title: {
    default: "Clinique Dentaire Vitalya | Excellence à Casablanca",
    template: "%s | Vitalya Dentaire Premium"
  },
  description: "Clinique dentaire VIP à Casablanca. Soins haut de gamme, implants dentaires, orthodontie invisible et esthétique dentaire avec technologies de pointe.",
  keywords: [
    "dentiste Casablanca",
    "clinique dentaire premium",
    "implant dentaire Maroc",
    "orthodontie invisible",
    "blanchiment dentaire",
    "dentisterie esthétique",
    "urgence dentaire 24/7"
  ],
  authors: [{ name: "Clinique Vitalya", url: "https://vitalya.ma" }],
  creator: "Vitalya Dental Group",
  publisher: "Vitalya Holdings",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://vitalya.ma'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-MA': '/fr',
      'ar-MA': '/ar',
    },
  },
  openGraph: {
    title: "Clinique Dentaire Vitalya | Excellence à Casablanca",
    description: "Première clinique dentaire VIP au Maroc avec technologies de pointe et approche luxueuse",
    url: "https://vitalya.ma",
    siteName: "Vitalya Dentaire",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinique Vitalya - Intérieur luxueux',
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clinique Dentaire Vitalya | Excellence à Casablanca",
    description: "Première clinique dentaire VIP au Maroc",
    images: ['/images/twitter-image.jpg'],
    site: '@VitalyaDental',
    creator: '@VitalyaCEO',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'vitalya-touch-icon',
      url: '/vitalya-icon.png',
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
  },
};

// Données structurées pour le référencement
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Clinique Dentaire Vitalya",
  "image": "/images/logo-vitalya.png",
  "@id": "https://vitalya.ma",
  "url": "https://vitalya.ma",
  "telephone": "+212666397279",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Avenue des Nations Unies",
    "addressLocality": "Casablanca",
    "postalCode": "20000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.5731",
    "longitude": "-7.5898"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/VitalyaDental",
    "https://www.instagram.com/VitalyaDental",
    "https://www.linkedin.com/company/VitalyaDental"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        {/* Préchargement des ressources critiques */}
        <link rel="preload" href="/fonts/GeistVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GeistMonoVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        
        {/* Données structurées */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Balises meta supplémentaires */}
        <meta name="geo.region" content="MA-CAS" />
        <meta name="geo.placename" content="Casablanca" />
        <meta name="geo.position" content="33.5731;-7.5898" />
        <meta name="ICBM" content="33.5731, -7.5898" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900 min-h-screen`}>
        {children}
        
        {/* Scripts d'analyse optimisés */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}