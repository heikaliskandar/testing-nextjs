import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Johan Iskandar
              </h2>
              <p className="text-xl font-light">
               Welcome to House of Thoughts, where ideas spark innovation, and insights drive change. We are a platform dedicated to exploring diverse perspectives in finance, politics, education, and beyond, fostering a space for meaningful conversations and impactful solutions.  </p>
            </>
          }
          rightHalf={
            <Image src={"/products/cofounder1.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
          
          
        />
        <Section
  leftHalf={
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        Amzar Johari
      </h2>
      <p className="text-xl font-light">
        At House of Thoughts, we believe in the transformative power of knowledge and its ability to shape a better tomorrow. Our mission is to inform, inspire, and empower individuals and organizations through in-depth research, thought-provoking analysis, and pragmatic solutions to today’s challenges.
      </p>
    </>
  }
  rightHalf={
    <Image
      src={"/products/cofounder2.png"}
      alt="Amzar Johari"
      width={500}
      height={100}
      className="w-1/2 h-auto"
    />
  }
/>

        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Why Readers Trust Us
              </h2>
              <p className="text-xl font-light">
                Discover insightful articles across politics, education, economy, and more—designed to keep you informed, inspired, and ahead of the curve.
              </p>
            </div>
          }
        />
        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
