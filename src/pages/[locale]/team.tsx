import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { locales } from "@/i18n/config";
import { useTranslations } from "next-intl";
import { Linkedin, Github } from "lucide-react";

// Team members data - roleKey references translation keys
const teamMembers = [
  {
    name: "Quan Tran",
    roleKey: "coDirector",
    linkedin: "https://www.linkedin.com/in/benhoangquan/",
    github: "https://github.com/benhoangquan",
  },
  {
    name: "Anas Elghoudane",
    roleKey: "director",
    inkedin: "https://www.linkedin.com/in/anas-elghoudane-a1240b2b6/",
    github: "https://github.com/Nas01010101",
  },
  {
    name: "Josué Mongan",
    roleKey: "coDirector",
    linkedin: "https://www.linkedin.com/in/josué-mongan-a7b6242b8/",
    github: "https://github.com/Josh012006",
  },
];

// Core Members data
const coreMembers = [
  {
    name: "Cassandre Hamel",
    linkedin: "https://www.linkedin.com/in/cassandre-hamel-9848b3190/",
    github: "https://github.com/Kraft-Cheese",
  },
  {
    name: "Ariel Embeya Shongo",
    linkedin: "https://www.linkedin.com/in/ariel-embeya-shongo-005b68380/",
    github: "https://github.com/arielembeya223",
  },
  {
    name: "Pierre Duhoux",
    linkedin: "https://www.linkedin.com/in/pierre-duhoux/",
    github: "https://github.com/pierreduh",
  },
];

// Advisors data
const advisors = [
  {
    name: "Arnaud Denis-Remillard",
    linkedin: "https://www.linkedin.com/in/arnaud-denis-remillard-25b3a8296/",
  },
  {
    name: "Jaydan Aladro Hawe",
    linkedin: "https://www.linkedin.com/in/jaydanaladro/",
  },
];

const TeamPage: React.FC = () => {
  const t = useTranslations("members");

  return (
    <>
      <Head>
        <title>{t("title")} | Dirobots</title>
        <meta name="description" content="Meet the team behind Dirobots" />
      </Head>

      <main className="min-h-screen bg-cream pt-24">
        <div className="container mx-auto px-6 max-w-4xl py-16">
          <h1 className="text-5xl font-bold mb-4 text-seth-coral">
            {t("title")}
          </h1>
          <p className="text-xl text-seth-coral/80 mb-12">{t("subtitle")}</p>

          <ul className="space-y-6">
            {teamMembers.map((member) => (
              <li
                key={member.name}
                className="flex items-start gap-3 text-seth-coral"
              >
                <span className="text-2xl">•</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xl font-semibold">{member.name}</span>
                    <span className="text-lg text-seth-coral/70">
                      — {t(member.roleKey)}
                    </span>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-seth-coral hover:text-seth-coral/70 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-seth-coral hover:text-seth-coral/70 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Core Members Section */}
          <h2 className="text-3xl font-bold mt-16 mb-4 text-seth-coral">
            {t("coreMembersTitle")}
          </h2>
          <ul className="space-y-6">
            {coreMembers.map((member) => (
              <li
                key={member.name}
                className="flex items-start gap-3 text-seth-coral"
              >
                <span className="text-2xl">•</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xl font-semibold">{member.name}</span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-seth-coral hover:text-seth-coral/70 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-seth-coral hover:text-seth-coral/70 transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Advisors Section */}
          <h2 className="text-3xl font-bold mt-16 mb-4 text-seth-coral">
            {t("advisorsTitle")}
          </h2>
          <p className="text-lg text-seth-coral/80 mb-8">
            {t("advisorsSubtitle")}
          </p>

          <ul className="space-y-6">
            {advisors.map((advisor) => (
              <li
                key={advisor.name}
                className="flex items-start gap-3 text-seth-coral"
              >
                <span className="text-2xl">•</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xl font-semibold">
                      {advisor.name}
                    </span>
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-seth-coral hover:text-seth-coral/70 transition-colors"
                      aria-label={`${advisor.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};

export default TeamPage;
