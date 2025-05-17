import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe,} from "react-icons/si";
import Image from 'next/image';
import { FaRegNewspaper, FaAward, FaLandmark, FaPizzaSlice, FaMedal } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";






const Features = () => {
  const features = [
    {
  icon: FaRegNewspaper,
  title: "Articles",
  description: "Explore well-researched write-ups, critical opinions, and timely updates on political, economic, and societal issues shaping our world.",
    },
    {
      icon: FaSchool,
      title: "Education",
      description: "Dive into topics on learning systems, educational policies, student life, and the future of knowledge in the digital era.",
    },
    {
      icon: FaMedal,
      title: "Sports",
      description: "Get insights into national and global sports events, athlete highlights, and the role of sports in social development.",
    },
    {
      icon: FaAward,
      title: "Award",
      description: "Discover achievements, recognitions, and milestones — celebrating individuals and institutions that drive positive change.",
    },
    {
      icon: FaLandmark,
      title: "Economic",
      description: "Unpack financial trends, government budgets, business insights, and how the economy impacts everyday lives.",
    },
    {
      icon: FaPizzaSlice,
      title: "Food",
      description: "From cultural cuisines to food security, explore how food shapes identity, community, and sustainability in modern times.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Topics</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            House of Thoughts is a platform for exploring ideas, sharing insights, and advocating for practical solutions in finance, politics, education, and more. It’s where diverse perspectives shape meaningful change.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
