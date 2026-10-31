import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HomeReference } from "@/components/home/HomeReference";
import "@/components/home/home-reference.css";

const Home = () => <div className="s30-home">
    <Helmet>
      <title>Digital Marketing Agency &amp; AI Growth Company | TheSuper30</title>
      <meta name="description" content="A leading AI-driven digital marketing agency helping businesses achieve real ROI and scalable growth with proven strategies. Book a free consultation now." />
      <meta name="keywords" content="Digital Marketing Agency, Digital Marketing Company, AI digital marketing agency, AI Digital Marketing Company, AI based digital marketing agency" />
      <link rel="canonical" href="https://www.thesuper30.ai/" />
      <meta property="og:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta property="og:description" content="From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thesuper30.ai/" />
      <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta name="twitter:description" content="From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!" />
      <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="twitter:url" content="https://www.thesuper30.ai/" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <Navbar />
    <main>
      <HomeReference />
      <Footer />
    </main>
  </div>;

export default Home;
