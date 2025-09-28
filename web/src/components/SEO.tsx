"use client";
import { DefaultSeo } from "next-seo";

export default function SEO() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return (
    <DefaultSeo
      titleTemplate="%s | El Rincón del Dev"
      defaultTitle="El Rincón del Dev"
      description="Blog y portafolio técnico. Artículos, proyectos y CV."
      openGraph={{
        type: "website",
        locale: "es_CO",
        url: siteUrl,
        site_name: "El Rincón del Dev",
      }}
      twitter={{ cardType: "summary_large_image" }}
    />
  );
}
