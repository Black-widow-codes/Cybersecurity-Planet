import Link from "next/link";

export const metadata = {
  title: "Resource Library | Cybersecurity Planet",
  description:
    "Explore practical Cybersecurity Planet guides, checklists, and trusted external resources for digital safety, privacy, AI literacy, media literacy, digital citizenship, and digital health.",
};

const resources = [
  {
    title: "Digital Citizenship Checklist",
    description:
      "Review practical habits for responsible communication, information sharing, digital footprints, and healthier technology use.",
    href: "/resources/digital-citizenship-checklist",
    category: "Digital Citizenship",
  },
  {
    title: "Digital Safety Guide",
    description:
      "Use practical steps to protect accounts, recognize phishing and scams, download files safely, and respond to suspicious activity.",
    href: "/resources/digital-safety-guide",
    category: "Digital Safety",
  },
  {
    title: "AI Literacy Starter Guide",
    description:
      "Build a practical understanding of AI limitations, verification, bias, deepfakes, and responsible AI use.",
    href: "/resources/ai-literacy-starter-guide",
    category: "AI Literacy",
  },
  {
    title: "Media Literacy Guide",
    description:
      "Learn how to examine sources, evidence, context, emotional manipulation, and AI-generated content before sharing information.",
    href: "/resources/media-literacy-guide",
    category: "Media Literacy",
  },
  {
    title: "Privacy Protection Checklist",
    description:
      "Review privacy settings, app permissions, account security, personal information sharing, and digital consent.",
    href: "/resources/privacy-protection-checklist",
    category: "Privacy & Digital Rights",
  },
  {
    title: "Digital Health Guide",
    description:
      "Make more informed choices about online health information, health data, telehealth, wearable devices, and AI-supported healthcare.",
    href: "/resources/digital-health-guide",
    category: "Digital Health",
  },
];

const trustedResources = [
  {
    name: "Canadian Centre for Cyber Security",
    description:
      "Official Government of Canada cybersecurity advice, guidance, alerts, and resources for individuals and organizations.",
    href: "https://www.cyber.gc.ca/en/",
    topics: "Digital Safety",
    scope: "Canada",
  },
  {
    name: "Get Cyber Safe",
    description:
      "Government of Canada public-awareness resources that help Canadians protect their accounts, devices, connections, and personal information online.",
    href: "https://www.getcybersafe.gc.ca/en",
    topics: "Digital Safety",
    scope: "Canada",
  },
  {
    name: "Office of the Privacy Commissioner of Canada",
    description:
      "Information about privacy rights, protecting personal information, privacy laws, and filing privacy complaints in Canada.",
    href: "https://www.priv.gc.ca/en/",
    topics: "Privacy & Digital Rights",
    scope: "Canada",
  },
  {
    name: "MediaSmarts",
    description:
      "Canadian digital and media literacy education covering misinformation, online safety, digital citizenship, privacy, and responsible technology use.",
    href: "https://mediasmarts.ca/",
    topics: "Media Literacy · Digital Citizenship",
    scope: "Canada",
  },
  {
    name: "Canadian Institutes of Health Research",
    description:
      "Canada's federal health research funding agency, supporting evidence and research across health and healthcare.",
    href: "https://cihr-irsc.gc.ca/",
    topics: "Digital Health",
    scope: "Canada",
  },
  {
    name: "National Cybersecurity Alliance",
    description:
      "Cybersecurity, data privacy, and online-safety education designed to help people and organizations stay safer online.",
    href: "https://www.staysafeonline.org/",
    topics: "Digital Safety · Privacy",
    scope: "International",
  },
  {
    name: "National Institute of Standards and Technology",
    description:
      "Authoritative cybersecurity, privacy, and artificial-intelligence risk-management frameworks and guidance.",
    href: "https://www.nist.gov/frameworks",
    topics: "Digital Safety · AI Literacy · Privacy",
    scope: "United States",
  },
  {
    name: "Cybersecurity and Infrastructure Security Agency",
    description:
      "U.S. government cybersecurity guidance and educational resources for improving online and organizational security.",
    href: "https://www.cisa.gov/",
    topics: "Digital Safety",
    scope: "United States",
  },
  {
    name: "Electronic Frontier Foundation — Surveillance Self-Defense",
    description:
      "Practical guidance for protecting communications, personal information, accounts, and privacy against digital surveillance.",
    href: "https://ssd.eff.org/",
    topics: "Privacy & Digital Rights · Digital Safety",
    scope: "International",
  },
  {
    name: "Privacy International",
    description:
      "Practical guides for protecting personal data, controlling online tracking, improving account privacy, and understanding digital surveillance.",
    href: "https://www.privacyinternational.org/guides",
    topics: "Privacy & Digital Rights",
    scope: "International",
  },
  {
    name: "UNESCO Media and Information Literacy",
    description:
      "Global educational resources for critically evaluating information, understanding misinformation and disinformation, and navigating digital environments responsibly.",
    href: "https://www.unesco.org/en/media-information-literacy",
    topics: "Media Literacy · Digital Citizenship · AI Literacy",
    scope: "Global",
  },
  {
    name: "World Health Organization",
    description:
      "Public-health information and resources addressing digital health, health misinformation, infodemics, and responsible use of technology in healthcare.",
    href: "https://www.who.int/health-topics/infodemic",
    topics: "Digital Health",
    scope: "Global",
  },
  {
    name: "National Institutes of Health",
    description:
      "Evidence-based biomedical and health research information from the United States' major public health research agency.",
    href: "https://www.nih.gov/",
    topics: "Digital Health",
    scope: "United States",
  },
  {
    name: "National Library of Medicine",
    description:
      "Trusted health and biomedical information resources supporting patients, researchers, healthcare professionals, and the public.",
    href: "https://www.nlm.nih.gov/",
    topics: "Digital Health",
    scope: "United States",
  },
  {
    name: "Centers for Disease Control and Prevention",
    description:
      "Public-health information, health guidance, data, and educational resources for individuals and communities.",
    href: "https://www.cdc.gov/",
    topics: "Digital Health",
    scope: "United States",
  },
  {
    name: "Agency for Healthcare Research and Quality",
    description:
      "Evidence and resources focused on healthcare quality, patient safety, health services research, and better healthcare decisions.",
    href: "https://www.ahrq.gov/",
    topics: "Digital Health",
    scope: "United States",
  },
  {
    name: "American Medical Informatics Association",
    description:
      "Health informatics resources covering the responsible use of information and technology to improve healthcare and health decision-making.",
    href: "https://amia.org/",
    topics: "Digital Health",
    scope: "International",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200">
          Resource Library
        </h1>

        <p className="mt-6 text-lg text-gray-700 dark:text-slate-300">
          Explore practical guides and checklists designed to help you apply
          what you learn across Cybersecurity Planet.
        </p>

        <p className="mt-3 text-gray-600 dark:text-slate-400">
          These resources provide practical steps you can return to when
          checking your online safety, privacy, information, technology habits,
          or digital health decisions.
        </p>
      </div>

      <section className="mt-12" aria-labelledby="planet-resources-heading">
        <h2
          id="planet-resources-heading"
          className="text-3xl font-bold text-blue-900 dark:text-blue-200"
        >
          Cybersecurity Planet Resources
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600 dark:text-slate-400">
          Start with our practical guides and checklists covering the six main
          learning areas of Cybersecurity Planet.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.href}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                {resource.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-blue-900 dark:text-blue-200">
                {resource.title}
              </h3>

              <p className="mt-3 flex-1 text-gray-600 dark:text-slate-300">
                {resource.description}
              </p>

              <Link
                href={resource.href}
                className="mt-6 inline-block self-start rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-800"
              >
                View Resource
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="trusted-resources-heading">
        <div className="max-w-3xl">
          <h2
            id="trusted-resources-heading"
            className="text-3xl font-bold text-blue-900 dark:text-blue-200"
          >
            Trusted External Resources
          </h2>

          <p className="mt-4 text-gray-700 dark:text-slate-300">
            Explore selected resources from government agencies, international
            organizations, research institutions, and established nonprofit
            organizations working in cybersecurity, privacy, digital literacy,
            artificial intelligence, and health.
          </p>

          <p className="mt-3 text-sm text-gray-600 dark:text-slate-400">
            These external websites are provided for additional education and
            reference. Cybersecurity Planet does not control or endorse every
            piece of content published on external websites.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {trustedResources.map((resource) => (
            <article
              key={resource.name}
              className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-900 dark:bg-slate-900 dark:text-blue-200">
                  {resource.scope}
                </span>

                <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  {resource.topics}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-blue-900 dark:text-blue-200">
                {resource.name}
              </h3>

              <p className="mt-3 flex-1 text-gray-600 dark:text-slate-300">
                {resource.description}
              </p>

              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block self-start font-semibold text-cyan-700 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 dark:text-cyan-400 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-800"
              >
                Visit Official Resource ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-8 transition-colors dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
          Looking for Deeper Learning?
        </h2>

        <p className="mt-3 text-gray-700 dark:text-slate-300">
          The Resource Library is designed for practical reference. For
          step-by-step explanations and educational articles, explore the
          Cybersecurity Planet learning library.
        </p>

        <Link
          href="/learn"
          className="mt-5 inline-block font-semibold text-cyan-700 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 dark:text-cyan-400 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-800"
        >
          Explore the Learning Library
        </Link>
      </section>
    </div>
  );
}