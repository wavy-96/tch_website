'use client'

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRobot,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function AnimatedFeaturesSection() {
  const features = [
    {
      title: "Website Development",
      description: "Mobile-first, SEO-optimized websites that work as hard as you do. Fast loading, conversion-driven, and built to impress.",
      icon: <IconTerminal2 />,
    },
    {
      title: "AI Voice Agents",
      description: "AI voice agents that can handle your calls and inquiries, 10Xing your time to focus on other things.",
      icon: <IconRobot />,
    },
    {
      title: "Social Media Marketing",
      description: "Content strategy and campaigns that connect with audiences, build trust, and inspire action across all platforms.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Google Ads Management",
      description: "ROI-driven campaigns designed to generate real leads and measurable growth for your business.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "SEO Optimization",
      description: "Get found when it matters most. Local SEO strategies that drive organic traffic and qualified leads.",
      icon: <IconCloud />,
    },
    {
      title: "Graphic Design",
      description: "From logos to ad creatives, we design visuals that make your brand feel refined, modern, and premium.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Content Strategy",
      description: "Strategic content that tells your story, engages your audience, and drives meaningful business results.",
      icon: <IconHelp />,
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and performance tracking to optimize your digital presence and maximize ROI.",
      icon: <IconAdjustmentsBolt />,
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({
  title,
  description,
  icon,
  index
}: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary-blue/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary-blue/5 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-primary-blue group-hover/feature:text-primary-navy transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-neutral-700 group-hover/feature:bg-primary-blue transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary-navy dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-gray-dark dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
