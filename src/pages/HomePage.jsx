import Hero from '../components/Hero';
import SubNav from '../components/SubNav';
import CTABanner from '../components/CTABanner';
import GlobalComplexity from '../components/GlobalComplexity';
import WhatWeDo from '../components/WhatWeDo';
import SelectedExperience from '../components/SelectedExperience';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import FoundationAndChallenges from '../components/FoundationAndChallenges';
import OperationalFrameworks from '../components/OperationalFrameworks';
import ProcessSteps from '../components/ProcessSteps';
import Specialist from '../components/Specialist';
import ContextAndCollaborate from '../components/ContextAndCollaborate';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubNav />

      <CTABanner
        heading="Build Compliance That Works Across Jurisdictions"
        subheading="Design and implement cross-border AML and Data Protection frameworks"
        buttonText="Explore Our Approach"
        index={0}
      />

      <GlobalComplexity />
      <WhatWeDo />

      <CTABanner
        heading="Apply the Alignment-First Compliance Model"
        subheading="Move beyond standardisation. Structure compliance to work across jurisdictions, without conflict."
        buttonText="Apply the Model"
        index={1}
        noBgImage
      />

      <SelectedExperience />
      <WhoWeWorkWith />
      <FoundationAndChallenges />
      <OperationalFrameworks />
      <ProcessSteps />
      <Specialist />

      <CTABanner
        heading="Turn Complexity into Operational Compliance"
        subheading="Implement jurisdiction-specific controls, data structures, and regulatory mapping, built to hold across borders."
        buttonText="Discuss Implementation"
        index={2}
      />

      <ContextAndCollaborate />
      <FAQ />

      <CTABanner
        heading="Build Compliance That Holds Across Borders"
        subheading="Cross-border compliance requires more than policies. It requires structured systems designed for multiple regulators and evolving requirements."
        buttonText="Contact Us"
        index={3}
      />
    </>
  );
}
