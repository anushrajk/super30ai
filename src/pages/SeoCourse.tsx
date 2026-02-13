import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CourseHeroSection } from "@/components/course/CourseHeroSection";
import { CourseProblemSection } from "@/components/course/CourseProblemSection";
import { CourseSocialProofSection } from "@/components/course/CourseSocialProofSection";
import { CourseStudentGallerySection } from "@/components/course/CourseStudentGallerySection";
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
        <title>Advanced AI SEO Course with Hands-On Training | The Super 30</title>
        <meta name="description" content="Join our AI SEO course and SEO certification course with practical training and expert guidance. One of the best SEO training courses for building real skills." />
        <meta name="keywords" content="ai seo course, SEO certification course, seo training in bangalore, seo course, seo course in bangalore, best seo training courses" />
        <link rel="canonical" href="https://www.thesuper30.ai/seo-course" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Advanced AI SEO Course with Hands-On Training | The Super 30" />
        <meta property="og:description" content="Join our AI SEO course and SEO certification course with practical training and expert guidance. One of the best SEO training courses for building real skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/seo-course" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced AI SEO Course with Hands-On Training | The Super 30" />
        <meta name="twitter:description" content="Join our AI SEO course and SEO certification course with practical training and expert guidance." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Advanced AI SEO Course with Hands-On Training",
            "url": "https://www.thesuper30.ai/seo-course",
            "description": "AI SEO course and SEO certification course with practical training and expert guidance.",
            "provider": {
              "@type": "Organization",
              "name": "The Super 30",
              "url": "https://www.thesuper30.ai/"
            },
            "educationalLevel": "Advanced",
            "teaches": "AI SEO, Technical SEO, On-Page SEO, Off-Page SEO"
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
        <CourseStudentGallerySection />
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
