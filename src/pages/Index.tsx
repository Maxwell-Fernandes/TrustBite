
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import PopularProducts from "@/components/home/PopularProducts";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <PopularProducts />
      <CallToAction />
    </Layout>
  );
};

export default Index;