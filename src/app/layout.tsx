import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flexifund.co.zw"),
  title: {
    default:
      "FlexiFund (Private) Limited | Trusted Microfinance Loans in Zimbabwe",
    template: "%s | FlexiFund Zimbabwe",
  },
  description:
    "FlexiFund is Zimbabwe's trusted RBZ-licensed microfinance institution offering salary loans, school fees loans, collateral-based loans, product financing, SSB government loans, and foreign currency lending. Fast approvals, flexible repayment, and transparent terms for individuals, salaried employees, entrepreneurs, and government workers across Zimbabwe.",
  keywords: [
    "FlexiFund",
    "FlexiFund Zimbabwe",
    "microfinance Zimbabwe",
    "microfinance loans Zimbabwe",
    "salary loans Zimbabwe",
    "school fees loans Zimbabwe",
    "collateral loans Zimbabwe",
    "product financing Zimbabwe",
    "SSB government loans Zimbabwe",
    "foreign currency loans Zimbabwe",
    "RBZ licensed microfinance",
    "quick loans Harare",
    "personal loans Zimbabwe",
    "financial inclusion Zimbabwe",
    "micro lending Zimbabwe",
    "small loans Zimbabwe",
    "payday loans Zimbabwe",
    "emergency loans Zimbabwe",
    "affordable loans Zimbabwe",
    "trusted microfinance Zimbabwe",
    "best microfinance Zimbabwe",
    "licensed money lender Zimbabwe",
    "forex loans Zimbabwe",
    "government employee loans Zimbabwe",
    "education loans Zimbabwe",
    "FlexiFund Private Limited",
    "Reserve Bank of Zimbabwe licensed",
    "Harare microfinance",
    "Zimbabwe financial services",
    "loan application Zimbabwe",
  ],
  authors: [{ name: "FlexiFund (Private) Limited" }],
  creator: "FlexiFund (Private) Limited",
  publisher: "FlexiFund (Private) Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "FlexiFund (Private) Limited | Trusted Microfinance Loans in Zimbabwe",
    description:
      "Zimbabwe's trusted RBZ-licensed microfinance institution. Salary loans, school fees loans, collateral-based loans, product financing, SSB government loans & foreign currency lending. Fast approvals, flexible terms.",
    url: "https://www.flexifund.co.zw",
    siteName: "FlexiFund (Private) Limited",
    locale: "en_ZW",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "FlexiFund (Private) Limited - Trusted Microfinance in Zimbabwe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexiFund | Trusted Microfinance Loans in Zimbabwe",
    description:
      "RBZ-licensed microfinance offering salary loans, school fees loans, collateral loans & more. Fast approvals, flexible repayment across Zimbabwe.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.flexifund.co.zw",
  },
  category: "Financial Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://www.flexifund.co.zw/#organization",
      name: "FlexiFund (Private) Limited",
      alternateName: "FlexiFund",
      url: "https://www.flexifund.co.zw",
      logo: "https://www.flexifund.co.zw/logo.jpeg",
      image: "https://www.flexifund.co.zw/logo.jpeg",
      description:
        "FlexiFund is Zimbabwe's trusted RBZ-licensed microfinance institution providing accessible, flexible, and sustainable financial solutions including salary loans, school fees loans, collateral-based loans, product financing, SSB government loans, and foreign currency lending.",
      telephone: ["+263788089061", "+263787543916"],
      email: "info@flexifund.co.zw",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 9, Suite 4, Centre Wing, Number 1 Union Avenue",
        addressLocality: "Harare",
        addressCountry: "ZW",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -17.8292,
        longitude: 31.0522,
      },
      areaServed: {
        "@type": "Country",
        name: "Zimbabwe",
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      sameAs: [],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        recognizedBy: {
          "@type": "Organization",
          name: "Reserve Bank of Zimbabwe",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.flexifund.co.zw/#website",
      url: "https://www.flexifund.co.zw",
      name: "FlexiFund (Private) Limited",
      description: "Trusted Microfinance Loans in Zimbabwe",
      publisher: {
        "@id": "https://www.flexifund.co.zw/#organization",
      },
      inLanguage: "en-ZW",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.flexifund.co.zw/#webpage",
      url: "https://www.flexifund.co.zw",
      name: "FlexiFund (Private) Limited | Trusted Microfinance Loans in Zimbabwe",
      isPartOf: {
        "@id": "https://www.flexifund.co.zw/#website",
      },
      about: {
        "@id": "https://www.flexifund.co.zw/#organization",
      },
      description:
        "Apply for salary loans, school fees loans, collateral-based loans, product financing, SSB government loans, and foreign currency lending from Zimbabwe's trusted RBZ-licensed microfinance institution.",
      inLanguage: "en-ZW",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.flexifund.co.zw/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is FlexiFund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FlexiFund (Private) Limited is a registered and RBZ-licensed microfinance institution in Zimbabwe (Licence No. 000994) that provides accessible, flexible, and sustainable financial solutions including salary loans, school fees loans, collateral-based loans, product financing, SSB government loans, and foreign currency lending.",
          },
        },
        {
          "@type": "Question",
          name: "Is FlexiFund licensed by the Reserve Bank of Zimbabwe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, FlexiFund is fully licensed by the Reserve Bank of Zimbabwe under Licence Number 000994 to provide lending services in foreign currency. We are fully compliant with all RBZ regulations.",
          },
        },
        {
          "@type": "Question",
          name: "What types of loans does FlexiFund offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FlexiFund offers six main loan products: Salary-Based Loans for salaried employees, Collateral-Based Loans secured against assets, School Fees Loans for education expenses, Product Financing for asset purchases, SSB Government Loans for government employees, and Foreign Currency Lending in forex.",
          },
        },
        {
          "@type": "Question",
          name: "How do I apply for a loan at FlexiFund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can apply for a loan by visiting our office at No. 1 Union Avenue, Harare, calling us at +263 788 089 061 or +263 787 543 916, or emailing info@flexifund.co.zw. Our team will guide you through the fast and simple application process.",
          },
        },
        {
          "@type": "Question",
          name: "Where is FlexiFund located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FlexiFund's head office is located at Office 9, Suite 4, Centre Wing, Number 1 Union Avenue, Harare, Zimbabwe. We are open Monday to Friday 8:00 AM – 5:00 PM and Saturday 8:00 AM – 1:00 PM.",
          },
        },
        {
          "@type": "Question",
          name: "Does FlexiFund offer loans in foreign currency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, FlexiFund is licensed by the Reserve Bank of Zimbabwe to provide lending services in foreign currency. Our Foreign Currency Lending product is fully compliant with RBZ regulations.",
          },
        },
        {
          "@type": "Question",
          name: "Can government employees get loans from FlexiFund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, FlexiFund offers SSB Government Loans specifically tailored for government employees with special terms and streamlined processing through SSB (Salary Service Bureau) deductions.",
          },
        },
        {
          "@type": "Question",
          name: "What makes FlexiFund different from other microfinance institutions in Zimbabwe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FlexiFund stands out through its RBZ licensing, fast loan processing, transparent terms, flexible repayment options, foreign currency lending capability, and commitment to financial inclusion. Our core values of integrity, accessibility, accountability, and customer-centricity guide every interaction.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
