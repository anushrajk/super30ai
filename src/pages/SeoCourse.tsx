import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CourseHeroSection } from "@/components/course/CourseHeroSection";
import { CourseProblemSection } from "@/components/course/CourseProblemSection";
import { CourseSocialProofSection } from "@/components/course/CourseSocialProofSection";
import { CourseLearningOutcomesSection } from "@/components/course/CourseLearningOutcomesSection";
import { CourseCurriculumSection } from "@/components/course/CourseCurriculumSection";
import { CourseTimelineSection } from "@/components/course/CourseTimelineSection";
import { CourseSpecializationSection } from "@/components/course/CourseSpecializationSection";
import { CourseComparisonSection } from "@/components/course/CourseComparisonSection";
import { CourseProjectsSection } from "@/components/course/CourseProjectsSection";
import { CourseCredentialsSection } from "@/components/course/CourseCredentialsSection";
import { CourseAlumniSuccessSection } from "@/components/course/CourseAlumniSuccessSection";
import { CourseVideoTestimonialsSection } from "@/components/course/CourseVideoTestimonialsSection";
import { CourseInvestmentSection } from "@/components/course/CourseInvestmentSection";
import { CourseGuaranteeSection } from "@/components/course/CourseGuaranteeSection";
import { CourseScarcitySection } from "@/components/course/CourseScarcitySection";
import { CourseApplicationSection } from "@/components/course/CourseApplicationSection";
import { CourseFAQSection } from "@/components/course/CourseFAQSection";
import { CourseStickyCTA } from "@/components/course/CourseStickyCTA";

const SeoCourse = () => {
  return (
    <>
      <Helmet>
        <title>AI SEO Course | The Super 30 - Master GEO, AEO & Agentic Commerce</title>
        <meta 
          name="description" 
          content="Join India's first Applied AI SEO course. 6-month program with 95% placement rate, ₹5-10L starting salaries. Learn AI SEO, GEO, AEO & Agentic Commerce." 
        />
        <meta name="keywords" content="AI SEO course, GEO course, AEO training, Agentic Commerce, SEO certification, AI marketing course, digital marketing course India" />
        <link rel="canonical" href="https://thesuper30.ai/seo-course" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI SEO Course | The Super 30 - Master GEO, AEO & Agentic Commerce" />
        <meta property="og:description" content="Join India's first Applied AI SEO course. 6-month program with 95% placement rate. Transform your career." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesuper30.ai/seo-course" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI SEO Course | The Super 30" />
        <meta name="twitter:description" content="India's first Applied AI SEO course. 95% placement rate, ₹5-10L starting salaries." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AI SEO Mastery Course",
            "description": "6-month comprehensive course covering AI SEO, GEO, AEO, and Agentic Commerce with job placement guarantee.",
            "provider": {
              "@type": "Organization",
              "name": "The Super 30",
              "sameAs": "https://thesuper30.ai"
            },
            "educationalLevel": "Professional",
            "courseMode": "online",
            "duration": "P6M",
            "offers": {
              "@type": "Offer",
              "price": "59999",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="pt-16 md:pt-20">
        <CourseHeroSection />
        <CourseProblemSection />
        <CourseSocialProofSection />
        <CourseLearningOutcomesSection />
        <CourseCurriculumSection />
        <CourseTimelineSection />
        <CourseSpecializationSection />
        <CourseComparisonSection />
        <CourseProjectsSection />
        <CourseCredentialsSection />
        <CourseAlumniSuccessSection />
        <CourseVideoTestimonialsSection />
        <CourseInvestmentSection />
        <CourseGuaranteeSection />
        <CourseScarcitySection />
        <CourseApplicationSection />
        <CourseFAQSection />
      </main>
      
      <CourseStickyCTA />
      
      <Footer />
    </>
  );
};

export default SeoCourse;
