import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageJsonLd, type SeoPageContent } from "@/lib/seo-content";

export function SeoLandingPage({ page }: { page: SeoPageContent }) {
  return (
    <>
      <Header />
      <main className="bg-white pt-24 text-brand-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd(page)) }}
        />
        <section className="bg-brand-dark py-16 text-white md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {page.lead}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contacto"
                className="rounded-full bg-brand-blue px-8 py-4 text-center font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-lg"
              >
                {page.primaryCta}
              </Link>
              {page.secondaryCta ? (
                <Link
                  href="#detalles"
                  className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition-all hover:border-brand-blue hover:text-brand-blue"
                >
                  {page.secondaryCta}
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        <section className="py-14" id="detalles">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[2fr_1fr]">
            <article className="space-y-10">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-brand-mid-gray">
                    {section.body}
                  </p>
                  {section.bullets ? (
                    <ul className="mt-4 space-y-3 text-brand-mid-gray">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-dark">Preguntas frecuentes</h2>
                <div className="mt-6 space-y-6">
                  {page.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="font-semibold text-brand-dark">{faq.question}</h3>
                      <p className="mt-2 text-brand-mid-gray">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-brand-dark">Enlaces recomendados</h2>
                <ul className="mt-4 space-y-3">
                  {page.supportLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-medium text-brand-blue transition-colors hover:text-brand-dark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-brand-dark p-6 text-white">
                <h2 className="text-xl font-bold">¿Necesitas una evaluación?</h2>
                <p className="mt-3 text-white/75">
                  Cuéntanos medidas, tipo de carga y objetivo de la bodega. Te orientamos con una solución técnica y comercial.
                </p>
                <Link
                  href="/#contacto"
                  className="mt-5 inline-flex rounded-full bg-brand-blue px-6 py-3 font-semibold text-white transition hover:bg-brand-blue/90"
                >
                  Ir a contacto
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
