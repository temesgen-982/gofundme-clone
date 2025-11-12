"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalTime = 5000; // 5 seconds per step

  // --- Properly typed refs (for timers)
  const stepIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const stepsData = [
    {
      title: "Use our tools to create your fundraiser",
      description:
        "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.",
      image:
        "https://images.unsplash.com/vector-1760083742244-fbac4356520a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      linkText: "Get tips for starting your fundraiser.",
      linkHref: "/",
    },
    {
      title: "Reach donors by sharing",
      description:
        "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
      image:
        "https://images.unsplash.com/vector-1743883866466-ae5c5446a36a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      linkText: null,
    },
    {
      title: "Securely receive funds",
      description:
        "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
      image:
        "https://images.unsplash.com/vector-1760080403959-8138486d14af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      linkText: null,
    },
  ];

  // Function to start/reset timers
  const startTimers = () => {
    setProgress(0);

    // ✅ Clear any existing timers safely
    if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Step rotation
    stepIntervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
      setProgress(0);
    }, intervalTime);

    // Progress animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (intervalTime / 100)));
    }, 100);
  };

  // Run once on mount
  useEffect(() => {
    startTimers();

    // Cleanup on unmount
    return () => {
      if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [stepsData.length]);

  // Handle manual click (resets progress + timers)
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    startTimers();
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Fundraising on FundSphere is easy, powerful, and trusted.
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          GoFundMe empowers people to help others. We combine technology, trust,
          and compassion to make fundraising simple and impactful.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Left Column: Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full md:min-h-[400px] h-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden aspect-video relative flex items-center justify-center">
              <Image
                src={stepsData[activeStep].image}
                alt={stepsData[activeStep].title}
                fill
                className="object-cover transition-opacity duration-500"
              />
              {/* Subtle progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div
                  className="h-full bg-gray-800 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="md:w-1/2 flex flex-col items-start text-left space-y-8">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 w-full"
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={`flex-shrink-0 border border-dark w-9 h-9 rounded-full flex items-center justify-center font-bold ${activeStep === index
                      ? "bg-dark text-white"
                      : "bg-white text-dark"
                    }`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-1 ${activeStep === index ? "text-gray-900" : "text-gray-700"
                      }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-gray-600 ${activeStep === index ? "block" : "hidden md:block"
                      }`}
                  >
                    {step.description}
                  </p>
                  {step.linkText && (
                    <Link
                      href={step.linkHref}
                      className="text-gofundmeBlue text-sm hover:underline mt-1 block"
                    >
                      {step.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="hover:border hover:border-black transition-colors"
            >
              Learn More About How it Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

