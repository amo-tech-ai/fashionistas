import Hero from '@/components/Hero'
import EventHighlights from '@/components/EventHighlights'
import ExclusiveCollection from '@/components/ExclusiveCollection'
import TicketSection from '@/components/TicketSection'
import PartnerSection from '@/components/PartnerSection'
// import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <EventHighlights />
      <ExclusiveCollection />
      <TicketSection />
      <PartnerSection />
      {/* <Features /> */}
      <Pricing />
      <Footer />
    </>
  )
}