import React, { useState, useEffect } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { useTranslations } from "next-intl";
import Navbar from "@/components/common/Navbar";
import ContactSection from "@/components/main/ContactSection";
import { locales } from "@/i18n/config";

interface Presentation {
  id: string;
  title: string;
  date: string;
  pdfUrl: string;
}

interface Semester {
  id: string;
  name: string;
  presentations: Presentation[];
}

const PresentationsPage = () => {
  const t = useTranslations("nav");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Mock data - in a real app this might come from a CMS or JSON file
  const semesters: Semester[] = [
    {
      id: "w26",
      name: "Winter 2026",
      presentations: [
        {
          id: "lec1",
          title: "Week 1: Introduction to Robotics",
          date: "2026-01-10",
          pdfUrl: "/presentations/w26/IntroRoboticsEN.pdf",
        },
      ],
    },
  ];

  // Set default selected PDF on first load
  useEffect(() => {
    if (
      !selectedPdf &&
      semesters.length > 0 &&
      semesters[0].presentations.length > 0
    ) {
      setSelectedPdf(semesters[0].presentations[0].pdfUrl);
    }
  }, [selectedPdf]);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Head>
        <title>Dirobots - Presentations</title>
        <meta
          name="description"
          content="Dirobots Club Presentations and Lectures"
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-32 px-5 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-seth-coral mb-8 font-heading">
          {t("presentations")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[80vh] mb-12">
          {/* Sidebar - List of Presentations */}
          <div className="bg-white rounded-lg shadow-md p-6 overflow-y-auto lg:col-span-1 border border-gray-200">
            {semesters.map((semester) => (
              <div key={semester.id} className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                  {semester.name}
                </h2>
                <ul className="space-y-2">
                  {semester.presentations.map((presentation) => (
                    <li key={presentation.id}>
                      <button
                        onClick={() => setSelectedPdf(presentation.pdfUrl)}
                        className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${
                          selectedPdf === presentation.pdfUrl
                            ? "bg-seth-coral text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <div className="font-medium">{presentation.title}</div>
                        <div
                          className={`text-sm ${selectedPdf === presentation.pdfUrl ? "text-white/80" : "text-gray-500"}`}
                        >
                          {presentation.date}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Content - PDF Preview */}
          <div className="lg:col-span-2 bg-gray-100 rounded-lg shadow-md overflow-hidden border border-gray-200 relative">
            {selectedPdf ? (
              <iframe
                src={selectedPdf}
                className="w-full h-full absolute inset-0"
                title="Presentation Preview"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p>Select a presentation to preview</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <ContactSection />
    </div>
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

export default PresentationsPage;
