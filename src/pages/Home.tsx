import { benefitOne, benefitTwo } from '@/assets/data'
import  {Benefits}  from '@/componets/home/Benefits'
import Cta from '@/componets/home/Cta'
import Faq from '@/componets/home/Faq'
import Hero from '@/componets/home/Hero'
import Testimonials from '@/componets/home/Testimonials'
import Video from '@/componets/home/Video'
import { SectionTitle } from '@/componets/share/main/SectionTitle'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    document.title = "Home | React Tailwind"
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto">

      {/* Hero */}
      <Hero />

      {/* SectionTitle */}
      <SectionTitle
          preTitle="WindReact"
          title="Modern Web Design for startups"
          align="center"
      >
        WindReact is a modern web design & marketing website
        for startups and indie projects. Its built with
        React & Tailwind CSS 4.0
      </SectionTitle>

      {/* Benefits */}
      <Benefits imgPos="left" data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* SectionTitle */}
      <SectionTitle
          preTitle="Watch a video"
          title="Learn how to fullfil your needs"
        >
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
        </SectionTitle>

        {/* Video */}
        <Video videoId="CLkxRnRQtDE" />

        {/* SectionTitle */}
        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>

        {/* Testimonials */}
        <Testimonials />

        {/* SectionTitle */}
        <SectionTitle 
          preTitle="FAQ" 
          title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>

        {/* FAQ */}
        <Faq />

        {/* CTA */}
        <Cta />

    </div>
  )
}