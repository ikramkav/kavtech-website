"use client";
import { useRef, useEffect, useState, JSX } from "react";
import type React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Types ---
interface LeftCardProps {
  id: string;
  type: "brand" | "problem" | "industry";
  title: string;
  subtitle?: string;
  content?: string;
  flag?: string;
}

interface ResultCardProps {
  id: string;
  title: string;
  content: string;
  isActive?: boolean;
}

interface TechItemProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  position: string;
}

// Tech stack data for each card
const getTechStackData = (cardIndex: number): TechItemProps[] => {
  if (cardIndex === 0) {
    return [
      {
        id: "t1",
        name: "CSS",
        icon: (
          <Image
            src="/images/projectcards/css.png"
            alt="css"
            width={42}
            height={42}
            quality={100}
          />
        ),
        position: "top-[10%] left-[50%] -translate-x-1/2",
      },
      {
        id: "t2",
        name: "JS",
        icon: (
          <Image
            src="/images/projectcards/jslogo.png"
            alt="JavaScript"
            width={40}
            height={40}
            quality={100}
          />
        ),
        position: "top-[25%] right-[15%]",
      },
      {
        id: "t3",
        name: "MySQL",
        icon: (
          <Image
            src="/images/projectcards/mysql.png"
            alt="MySQL"
            width={38}
            height={38}
            quality={100}
          />
        ),
        position: "bottom-[30%] right-[10%]",
      },
      {
        id: "t4",
        name: "HTML",
        icon: (
          <Image
            src="/images/projectcards/html5.png"
            alt="HTML5"
            width={40}
            height={40}
            quality={100}
          />
        ),
        position: "bottom-[10%] left-[50%] -translate-x-1/2",
      },
      {
        id: "t5",
        name: "Laravel",
        icon: (
          <Image
            src="/images/projectcards/laravel.png"
            alt="css"
            width={40}
            height={40}
            quality={100}
          />
        ),
        position: "bottom-[25%] left-[15%]",
      },
      {
        id: "t6",
        name: "Stripe",
        icon: (
          <Image
            src="/images/projectcards/stripe.png"
            alt="Stripe"
            width={63}
            height={35}
            quality={100}
          />
        ),
        position: "top-[25%] left-[15%]",
      },
    ];
  } else if (cardIndex === 1) {
    return [
      {
        id: "t1",
        name: "React",
        icon: (
          <Image
            src="/images/projectcards/react.png"
            alt="Vue"
            width={41}
            height={37}
            quality={100}
          />
        ),
        position: "top-[10%] left-[50%] -translate-x-1/2",
      },
      {
        id: "t2",
        name: "Python",
        icon: (
          <Image
            src="/images/projectcards/python.png"
            alt="Vue"
            width={34}
            height={34}
            quality={100}
          />
        ),
        position: "top-[25%] right-[15%]",
      },
      {
        id: "t3",
        name: "PostgreSQL",
        icon: (
          <Image
            src="/images/projectcards/mysq2.png"
            alt="Vue"
            width={38}
            height={38}
            quality={100}
          />
        ),
        position: "bottom-[30%] right-[10%]",
      },
      {
        id: "t4",
        name: "Node.js",
        icon: (
          <Image
            src="/images/projectcards/nextjs.png"
            alt="Vue"
            className="rounded-md"
            width={40}
            height={30}
            quality={100}
          />
        ),
        position: "bottom-[10%] left-[50%] -translate-x-1/2",
      },
      {
        id: "t5",
        name: "Docker",
        icon: (
          <Image
            src="/images/projectcards/ts.png"
            alt="Vue"
            width={34}
            height={34}
            quality={100}
          />
        ),
        position: "bottom-[25%] left-[15%]",
      },
      {
        id: "t6",
        name: "AWS",
        icon: (
          <Image
            src="/images/projectcards/awslogo.png"
            alt="Vue"
            width={48}
            height={32}
            quality={100}
          />
        ),
        position: "top-[25%] left-[15%]",
      },
    ];
  } else {
    return [
      {
        id: "t1",
        name: "Vue",
        icon: (
          <Image
            src="/images/projectcards/aframe.png"
            alt="Vue"
            width={30.848}
            height={30.848}
            quality={100}
          />
        ),
        position: "top-[10%] left-[50%] -translate-x-1/2",
      },
      {
        id: "t2",
        name: "TypeScript",
        icon: (
          <Image
            src="/images/projectcards/databricks.png"
            alt="Vue"
            width={39}
            height={39}
            quality={100}
          />
        ),
        position: "top-[25%] right-[15%]",
      },
      {
        id: "t3",
        name: "MongoDB",
        icon: (
          <Image
            src="/images/projectcards/ML.png"
            alt="Vue"
            width={30.848}
            height={30.848}
            quality={100}
          />
        ),
        position: "bottom-[30%] right-[10%]",
      },
      {
        id: "t4",
        name: "GraphQL",
        icon: (
          <Image
            src="/images/projectcards/python.png"
            alt="Vue"
            width={34}
            height={34}
            quality={100}
          />
        ),
        position: "bottom-[10%] left-[50%] -translate-x-1/2",
      },
      {
        id: "t5",
        name: "spark",
        icon: (
          <Image
            src="/images/projectcards/spark.png"
            alt="Vue"
            width={47}
            height={25}
            quality={100}
          />
        ),
        position: "bottom-[25%] left-[15%]",
      },
      {
        id: "t6",
        name: "sigma",
        icon: (
          <Image
            src="/images/projectcards/sigma.png"
            alt="Vue"
            width={40}
            height={36}
            quality={100}
          />
        ),
        position: "top-[25%] left-[15%]",
      },
    ];
  }
};

const projectsData: {
  id: string;
  leftSectionData: LeftCardProps[];
  resultsData: ResultCardProps[];
}[] = [
  {
    id: "p1",
    leftSectionData: [
      {
        id: "l1",
        type: "brand",
        title: "Chemco",
        subtitle: "Established in 1984,trusted by major global and domestic brands.",
      },
      {
        id: "l2",
        type: "problem",
        title: "Client Problem",
        content: "Medication tracking is slow, manual, and risky.",
      },
      {
        id: "l3",
        type: "industry",
        title: "Pharmaceutical",
        content:
          "With decades of experience, Chemco integrates advanced technology.",
      },
    ],
    resultsData: [
      {
        id: "r1",
        title: "Results",
        content: "Fully digital,streamlined operations with zero paperwork.",
      },
      {
        id: "r2",
        title: "Results",
        content:
          "Instant collaboration and complete transparency across all staff.",
      },
      {
        id: "r3",
        title: "Results",
        content: "Faster, error-free medication rounds and safer patient care.",
      },
      {
        id: "r4",
        title: "Results",
        content: "Reduced administrative overhead by 40% annually.",
      },
      {
        id: "r5",
        title: "Results",
        content: "Improved patient safety scores across all departments.",
      },
    ],
  },
  {
    id: "p2",
    leftSectionData: [
      {
        id: "l1",
        type: "brand",
        title: "CAMMI",
        subtitle:
          "Established in 2025,trusted by major global and domestic brands.",
      },
      {
        id: "l2",
        type: "problem",
        title: "Client Problem",
        content: "We need ready-made Marketing we can quickly customize.",
      },
      {
        id: "l4",
        type: "industry",
        title: "Marketing Industry",
        content:
          "With years of experience in marketing, CAMMI integrates advanced technology.",
      },
    ],
    resultsData: [
      {
        id: "r1",
        title: "Results",
        content: "Real-time optimization powered by AI insights",
      },
      {
        id: "r2",
        title: "Results",
        content: "AI-generated marketing solutions in minutes",
      },
      {
        id: "r3",
        title: "Results",
        content: "Scheduling of marketing campaigns based on AI insights",
      },
      {
        id: "r4",
        title: "Results",
        content: "Seamless integration with existing CRM platforms.",
      },
      {
        id: "r5",
        title: "Results",
        content: "Increased engagement rates through targeted automation.",
      },
    ],
  },
  {
    id: "p3",
    leftSectionData: [
      {
        id: "l1",
        type: "brand",
        title: "Million Dollar baby",
        subtitle:
          "Established in 1990,trusted by major global and domestic brands.",
      },
      {
        id: "l2",
        type: "problem",
        title: "Client Problem",
        content: "Dashboards everywhere, truth nowhere.",
      },
      {
        id: "l5",
        type: "industry",
        title: "Retail Industryy",
        content:
          "With decades of experience, MDB integrates advanced technology.",
      },
    ],
    resultsData: [
      {
        id: "r1",
        title: "Results",
        content: "Clarity at scale. Decisions at speed.",
      },
      {
        id: "r2",
        title: "Results",
        content: "From chaos to a fully intelligent data ecosystem.",
      },
      {
        id: "r3",
        title: "Results",
        content: "Customers understood like never before.",
      },
      {
        id: "r4",
        title: "Results",
        content: "Unified data sources for singular truth.",
      },
      {
        id: "r5",
        title: "Results",
        content: "Predictive analytics driving inventory efficiency.",
      },
    ],
  },
];

const containervarients: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftColumn: Variants = {
  hidden: {
    x: "30vw",
    opacity: 0,
  },
  visible: {
    x: ["30vw", "30vw", 0],
    opacity: 1,
    transition: {
      duration: 0.99,
      times: [0, 0.5, 0.99],
      ease: "easeInOut",
    },
  },
};

const centerColumn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 5.2,
      stiffness: 100,
    },
  },
};

const rightColumn: Variants = {
  hidden: { x: "50vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 6.2,
      damping: 12,
    },
  },
};

// --- Main Component ---
interface ProjectCardProps {
  leftSectionData: LeftCardProps[];
  resultsData: ResultCardProps[];
  index: number;
  totalCards: number;
}

export function ProjectCard({
  leftSectionData,
  resultsData,
  index,
  totalCards,
}: ProjectCardProps) {
  const cardRef = useRef(null);
  const ORBIT_RADIUS = 140;

  // Cycle state for the vertical slider
  const [activeCycle, setActiveCycle] = useState(0);

  const techStackData = getTechStackData(index);

  useEffect(() => {
    // Move the slider every 3 seconds
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top top",
        end: () => `+=${window.innerHeight * 1.5}`,
        scrub: 1, // Smooths the interaction (takes 1 second to catch up)
        pin: true,
        pinSpacing: index === totalCards - 1,
        anticipatePin: 1,
      },
    });

    tl.to(card, {
      scale: 0.95 - index * 0.05,
      opacity: 1 - index * 0.1,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index, totalCards]);

  return (
    // Added py-20 for margin and ensure container doesn't collapse
    <div className="flex items-center justify-center min-h-screen py-20 w-full ">
      {/* Main Container Card */}
      <motion.div
        ref={cardRef}
        className="w-full max-w-[1232px] h-[598px] rounded-[40px] p-12 relative overflow-hidden"
        style={{ transformOrigin: "center top" }}
      >
        <Image
          src={
            index === 0
              ? "/images/projectcards/cardbg2.png"
              : index === 1
              ? "/images/projectcards/cardbg3.png"
              : "/images/projectcards/cardbg4.png"
          }
          alt="card background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

        <motion.div
          variants={containervarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 pt-10"
        >
          {/* --- LEFT COLUMN --- */}
          <motion.div className="lg:col-span-4 flex flex-col justify-end items-end gap-6 me-6">
            {leftSectionData.map((item, itemIndex) => (
              <div key={item.id}>
                {item.type === "brand" && (
                  <motion.div
                    initial={{ x: 400, y: 150, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 2 + itemIndex * 1,
                      ease: "easeInOut",
                    }}
                    className="relative flex items-center gap-3 p-3 rounded-[10px] hover:bg-white/30 w-[270px] h-[100px] backdrop-blur-[50px]"
                  >
                    <Image
                      src="/images/projectcards/chemocardbg.png"
                      alt="card background"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="z-10 h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <Image
                        src={
                          item.title === "Chemco"
                            ? "/images/projectcards/chemco2.png"
                            : item.title === "CAMMI"
                            ? "/images/projectcards/cammi.png"
                            : "/images/projectcards/mdb.png"
                        }
                        alt="logo"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="z-10">
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className="text-[#000] text-[18px] font-medium "
                          style={{
                            fontFamily: "Bw Gradual DEMO",
                          }}
                        >
                          {item.title}
                        </p>
                        <Image
                          src={
                            item.title === "Chemco"
                              ? "/images/projectcards/flag.png"
                              : "/images/projectcards/cammiflag.png"
                          }
                          alt="flag"
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="text-[#1E2F40] font-nunito text-[12px] font-normal leading-[14px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                )}

                {item.type === "problem" && (
                  <motion.div
                    initial={{ x: 400, y: 0, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 2 + itemIndex * 1,
                      ease: "easeInOut",
                    }}
                    className="bg-white/20 border border-white/80  w-[324px] h-[120px] rounded-xl p-4"
                  >
                    <div className="relative flex items-center mb-3">
                      <h3
                        style={{
                          fontFamily: "Bw Gradual DEMO",
                          whiteSpace: "nowrap",
                        }}
                        className="absolute left-1/2 -translate-x-1/2 text-black text-[21.6px] font-bold text-center"
                      >
                        {item.title}
                      </h3>
                      <span className="ml-auto">
                        <Image
                          src="/images/projectcards/alertsvg.png"
                          alt="alert"
                          width={16.8}
                          height={16.8}
                        />
                      </span>
                    </div>
                    <div className="relative rounded-[9.6px] w-[292.8px] h-[60px] pt-2 px-1">
                      <Image
                        src="/images/projectcards/clientprobbg.png"
                        alt="bg"
                        fill
                        className="object-cover rounded-[9.6px]"
                        priority
                      />
                      <p className="relative text-[#1E2F40] text-center font-nunito text-[19.2px] font-medium leading-[19.2px]">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}

                {item.type === "industry" && (
                  <motion.div
                    initial={{ x: 600, y: -150, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 2 + itemIndex * 1,
                      ease: "easeInOut",
                    }}
                    className="relative w-[270px] h-[100px] flex items-center gap-3 rounded-[10px]"
                  >
                    <Image
                      src="/images/projectcards/industrycardbg.png"
                      alt="card background"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="flex flex-col z-10 justify-center align-center pt-7">
                      <h3 className="text-center pe-10 text-black font-bw-gradual-demo text-[18px] font-medium">
                        {item.title}
                      </h3>
                      <div className="flex z-10 px-2">
                        <div className="w-[66px] h-[66px]">
                          <Image
                            src={
                              item.id === "l3"
                                ? "/images/projectcards/medicplus2.png"
                                : item.id === "l4"
                                ? "/images/projectcards/cammimarketing.png"
                                : "/images/projectcards/retailicon.png"
                            }
                            alt="icon"
                            width={66}
                            height={66}
                          />
                        </div>
                        <p className="text-[#1E2F40] font-nunito text-[12px] font-normal">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* --- CENTER COLUMN (Tech Stack) --- */}
          <motion.div
            variants={centerColumn}
            className="lg:col-span-4 relative h-[400px] flex items-center justify-center"
          >
            <div className="hidden lg:block absolute left-0 top-1/2 w-14 h-[1px] bg-[#CAF0FE] -translate-x-full" />
            <div className="hidden lg:block absolute right-0 top-1/2 w-12 h-[1px] bg-[#CAF0FE] translate-x-full" />

            <div className="relative w-full h-full border rounded-[25px] bg-[linear-gradient(111deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] backdrop-blur-[50px] flex items-center justify-center overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {techStackData.map((tech, techIndex) => {
                  const angle = (360 / techStackData.length) * techIndex;
                  return (
                    <div
                      key={tech.id}
                      className="absolute"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-${ORBIT_RADIUS}px)`,
                      }}
                    >
                      <motion.div>{tech.icon}</motion.div>
                    </div>
                  );
                })}
              </motion.div>

              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl w-28 h-28 flex items-center justify-center">
                <Image
                  src="/images/projectcards/kvlogo.png"
                  alt="logo"
                  width={63.545}
                  height={63.545}
                />
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN (Vertical Slider) --- */}
          <motion.div
            variants={rightColumn}
            className="lg:col-span-4 relative h-[380px] w-full flex justify-center"
          >
            {resultsData.map((result, rIndex) => {
              // Calculate the 'slot' index based on the active cycle
              const slot = (rIndex - activeCycle + 5) % 5;

              const isCardActive = slot === 0;

              let yOffset = 0;
              let opacity = 0;
              let zIndex = 0;
              let scale = 0.9;
              let transitionDuration = 0.6;

              switch (slot) {
                case 0: // Center (Active)
                  yOffset = 0;
                  opacity = 1;
                  zIndex = 10;
                  scale = 1;
                  break;
                case 1: // Bottom Visible
                  yOffset = 130;
                  opacity = 0.6;
                  zIndex = 5;
                  break;
                case 2: // Bottom Hidden (Exit point)
                  yOffset = 260;
                  opacity = 0;
                  zIndex = 0;
                  break;
                case 3: // Top Hidden (Entry point)
                  yOffset = -260;
                  opacity = 0;
                  zIndex = 0;
                  break;
                case 4: // Top Visible
                  yOffset = -130;
                  opacity = 0.6;
                  zIndex = 5;
                  break;
              }

              if (slot === 2) {
                transitionDuration = 0;
              }

              const renderContentWithBlueWords = (
                content: string
              ): string | (string | JSX.Element)[] => {
                const wordsToHighlight = [
                  "streamlined",
                  "paperwork.",
                  "collaboration",
                  "transparency",
                  "error-free",
                  "Real-time",
                  "AI insights",
                  "marketing",
                  "solutions",
                  "speed",
                  "intelligent",
                  "understood",
                  "administrative",
                  "overhead",
                  "patient",
                  "safety",
                  "CRM",
                  "engagement",
                  "automation",
                  "Unified",
                  "Predictive",
                  "analytics",
                  "inventory",
                ];
                const patterns = wordsToHighlight.map((word) => {
                  const escapedWord = word.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                  );
                  return new RegExp(`(${escapedWord}[.,!?;:]?)`, "gi");
                });
                interface Match {
                  text: string;
                  index: number;
                  length: number;
                }
                const matches: Match[] = [];
                patterns.forEach((pattern) => {
                  let match: RegExpExecArray | null;
                  while ((match = pattern.exec(content)) !== null) {
                    matches.push({
                      text: match[0],
                      index: match.index,
                      length: match[0].length,
                    });
                  }
                });
                matches.sort((a, b) => a.index - b.index);
                const filteredMatches: Match[] = [];
                let lastEnd = 0;
                matches.forEach((match) => {
                  if (match.index >= lastEnd) {
                    filteredMatches.push(match);
                    lastEnd = match.index + match.length;
                  }
                });
                const elements: (string | JSX.Element)[] = [];
                let lastIndex = 0;
                filteredMatches.forEach((match, matchIndex) => {
                  if (match.index > lastIndex) {
                    elements.push(content.substring(lastIndex, match.index));
                  }
                  elements.push(
                    <span
                      key={`highlight-${matchIndex}`}
                      className="text-blue-600 font-medium"
                    >
                      {match.text}
                    </span>
                  );
                  lastIndex = match.index + match.length;
                });
                if (lastIndex < content.length) {
                  elements.push(content.substring(lastIndex));
                }
                if (elements.length === 0) return content;
                return elements;
              };

              return (
                <motion.div
                  key={result.id}
                  animate={{
                    y: yOffset,
                    zIndex: zIndex,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    duration: transitionDuration,
                    ease: "easeInOut",
                  }}
                  className={`absolute top-[130px] left-4 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl flex items-center
                  ${
                    isCardActive
                      ? "border border-white w-[324.001px] h-[120px] rounded-[12.273px_11.782px_11.782px_11.782px] bg-[url('/images/projectcards/rightcardbg.png')] bg-cover bg-center shadow-xl"
                      : "w-[264px] h-[100px] rounded-[10px] bg-[linear-gradient(111deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] backdrop-blur-[50px]"
                  }
                `}
                >
                  <div className="flex items-start gap-2">
                    <p
                      className={`transition-all duration-300 ${
                        isCardActive
                          ? "text-[17.182px] text-[#1E2F40] font-['Nunito_Sans'] font-normal leading-[19.636px]"
                          : "text-[#1E2F40] font-['Nunito_Sans'] text-[14px] font-normal leading-[16px]"
                      }`}
                    >
                      {renderContentWithBlueWords(result.content)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ProjectsCardsFive() {
  const totalCards = projectsData.length;

  return (
    <div className="min-h-screen">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.id}
          leftSectionData={project.leftSectionData}
          resultsData={project.resultsData}
          index={index}
          totalCards={totalCards}
        />
      ))}
    </div>
  );
}