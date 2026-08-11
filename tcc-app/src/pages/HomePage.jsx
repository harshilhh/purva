import Hero from '../components/Hero';
import SubNav from '../components/SubNav';
import RegulatoryGap from '../components/RegulatoryGap';
import HomeServices from '../components/HomeServices';
import HomeAudience from '../components/HomeAudience';
import RegulatoryRadar from '../components/RegulatoryRadar';
import WhyUs from '../components/WhyUs';
import FounderQuote from '../components/FounderQuote';
// import Insights from '../components/Insights';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubNav />
      <RegulatoryGap />
      <HomeServices />
      <HomeAudience />
      <RegulatoryRadar />
      <WhyUs />
      <FounderQuote />
      {/* <Insights /> */}
      <FAQ />
      <FinalCTA />
    </>
  );
}
