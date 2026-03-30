"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "2",
  },
  {
    metric: "Years",
    value: "4",
  },
];

const AchievementsSection = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border border-[#33353F]/40 rounded-2xl py-12 px-16 flex flex-col sm:flex-row items-center justify-between bg-[#121212] shadow-xl">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-6 sm:my-0 transition-all hover:scale-105"
            >
              <h2 className="text-white text-4xl lg:text-5xl font-bold flex flex-row items-center gap-1">
                {achievement.prefix}
                {isMounted ? (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl lg:text-5xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                ) : (
                  <span>{achievement.value}</span>
                )}
                {achievement.postfix}
              </h2>
              <p className="text-primary-500 font-medium text-lg mt-2 tracking-wide uppercase text-sm">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
