import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Vision from '../components/sections/Vision';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';
import Reviews from '../components/sections/Reviews';
import Contract from '../components/sections/Contract';
import Team from '../components/sections/Team';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import SuccessStories from '../components/sections/SuccessStories';
import BlogSection from '../components/sections/BlogSection';
import Footer from '../components/sections/Footer';
import OfficeMap from '../components/sections/OfficeMap';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>DataDecode - Data Science & Analytics Agency</title>
        <meta name="description" content="Transform your business with AI-powered analytics and data-driven insights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-dark-400">
        <Header />
        <main>
          <Hero />
          <section id="about">
            <Vision />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="case-studies">
            <CaseStudies />
          </section>
          <section id="team">
            <Team />
          </section>
          <section id="process">
            <Process />
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="success-stories">
            <SuccessStories />
          </section>
          <section id="blog">
            <BlogSection />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="contact">
            <Contract />
          </section>
          <OfficeMap />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;