"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PricingComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(userPrefersDark);
    }

    setIsVisible(true);
  }, []);

  const pricing = [
    { sliderValue: 0, pageviews: "10K", price: 8.0 },
    { sliderValue: 25, pageviews: "50K", price: 12.0 },
    { sliderValue: 50, pageviews: "100K", price: 16.0 },
    { sliderValue: 75, pageviews: "500K", price: 24.0 },
    { sliderValue: 100, pageviews: "1M", price: 36.0 },
  ];

  const currentPricing =
    pricing.find((item) => item.sliderValue === sliderValue) || pricing[2];
  const discountedPrice = yearlyBilling
    ? currentPricing.price * 12 * 0.75 // 25% discount 
    : currentPricing.price; // else no discount

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-[hsl(230,100%,99%)]"
      }`}
    >
      <div
        className={`absolute top-0 right-5 mt-4 z-20 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
            darkMode
              ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* bg wave */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden">
        <div className="w-full h-full">
          <Image
            src="/images/bg-pattern.svg"
            width={0}
            height={0}
            alt="Background pattern"
            className={`w-full h-full object-fill transition-opacity duration-500 ${
              darkMode ? "opacity-10" : "opacity-100"
            }`}
            priority
          />
        </div>
      </div>

      {/* circle pattern */}
      <div
        className={`z-10 transition-all duration-700 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-10"
        }`}
      >
      <div className="absolute top-16 left-1 w-full h-[120px] md:h-[160px] overflow-hidden flex justify-center">
        <div className="w-[80%] md:w-full h-full">
          <Image
            src="/images/pattern-circles.svg"
            width={0}
            height={0}
            alt="Circle patterns"
            className={`w-full h-full object-contain transition-opacity duration-500 ${
              darkMode ? "opacity-10" : "opacity-100"
            }`}
            priority
          />
        </div>
      </div>
      </div>

      {/* intro heading */}
      <div
        className={`pt-16 md:pt-20 mt-3 md:mt-5 text-center relative z-10 transition-all duration-700 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-10"
        }`}
      >
        <h1
          className={`text-[24px] md:text-[30px] font-bold mb-2 transition-colors duration-500 ${
            darkMode ? "text-white" : "text-[hsl(227,35%,25%)]"
          }`}
        >
          Simple, traffic-based pricing
        </h1>
        <p
          className={`text-center mx-auto px-4 md:px-6 transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-[hsl(225,20%,60%)]"
          }`}
        >
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>

      <div
        className={`max-w-[620px] mt-10 md:mt-36 mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <div
          className={`rounded-lg shadow-lg transition-all duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="px-6 pt-10 pb-8 md:px-12">
            {/* Pageviews - First on mobile, Left on desktop */}
            <p
              className={`mt-2 uppercase font-bold md:text-lg text-md tracking-wider text-center md:text-left mb-8 transition-all duration-500 ${
                darkMode ? "text-gray-300" : "text-[hsl(225,20%,60%)]"
              }`}
            >
              {currentPricing.pageviews} PAGEVIEWS
            </p>

            {/* slider */}
            <div className="my-10 md:my-15 relative">
              <div
                className={`h-2 rounded-full overflow-hidden transition-colors duration-500 ${
                  darkMode ? "bg-gray-700" : "bg-[hsl(224,65%,95%)]"
                }`}
              >
                <div
                  className="h-full bg-[hsl(174,77%,80%)] rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${sliderValue}%` }}
                />
              </div>
              <div
                className="absolute top-0 transform transition-all duration-300 ease-in-out"
                style={{
                  left: `${sliderValue}%`,
                  transform: `translateX(-50%) translateY(-50%)`,
                }}
              >
                <div className="h-10 w-10 mt-1 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-[hsl(174,86%,45%)] shadow-lg hover:opacity-90 cursor-pointer hover:scale-110">
                  <Image
                    src="/images/icon-slider.svg"
                    width={16}
                    height={12}
                    alt="Slider Icon"
                    className="object-contain"
                    priority
                    draggable="false"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="25"
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                className="absolute top-0 left-0 w-full h-8 opacity-0 cursor-pointer"
              />
            </div>

            {/* pricing */}
            <div className="text-center md:text-right md:absolute md:top-10 md:right-12">
              <p
                className={`flex items-center justify-center md:justify-end transition-all duration-500 ${
                  darkMode ? "text-white" : "text-[hsl(227,35%,25%)]"
                }`}
              >
                <span className="text-4xl md:text-5xl font-bold animate-price">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span
                  className={`ml-2 transition-colors duration-500 ${
                    darkMode ? "text-gray-300" : "text-[hsl(225,20%,60%)]"
                  }`}
                >
                  {yearlyBilling ? "/ year" : "/ month"}
                </span>
              </p>
              <style jsx global>{`
                @keyframes pricePulse {
                  0% {
                    transform: scale(1);
                  }
                  50% {
                    transform: scale(1.05);
                  }
                  100% {
                    transform: scale(1);
                  }
                }
                .animate-price {
                  animation: pricePulse 0.5s ease-in-out;
                }
              `}</style>
            </div>

            {/* monthly/yearly toggle */}
            <div
              className={`flex items-center justify-center text-sm my-4 md:mt-10 mt-10 transition-colors duration-500 ${
                darkMode ? "text-gray-300" : "text-[hsl(225,20%,60%)]"
              }`}
            >
              <span className="mr-3">Monthly Billing</span>
<label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only"
    checked={yearlyBilling}
    onChange={() => setYearlyBilling(!yearlyBilling)}
  />
  <div
    className={`w-12 h-6 rounded-full transition-all duration-300 ${
      yearlyBilling
        ? "bg-[hsl(174,77%,80%)]" 
        : darkMode
          ? "bg-gray-600"
          : "bg-[hsl(223,50%,87%)]"
    }`}
  >
    <div
      className="w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow transform transition-all duration-300"
      style={{
        transform: yearlyBilling
          ? "translateX(24px)"
          : "translateX(0)",
      }}
    />
  </div>
</label>
              <span className="ml-3">Yearly Billing</span>
              <span className="ml-2 bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)] text-xs px-2 py-1 rounded-full">
                25% discount
              </span>
            </div>
          </div>

         {/* below content */}
          <div
            className={`border-t px-6 py-8 md:px-12 md:flex md:justify-between md:items-center md:gap-x-10 transition-colors duration-500 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            
            <ul className="space-y-3 mb-8 md:mb-0 text-center md:text-left">
              {[
                "Unlimited websites",
                "100% data ownership",
                "Email reports",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-center md:justify-start text-sm transition-all duration-500 ${
                    darkMode ? "text-gray-300" : "text-[hsl(225,20%,60%)]"
                  } ${
                    isVisible
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 700}ms` }}
                >
                  <span className="mr-4 text-[hsl(174,86%,45%)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* trail button */}
            <div className="flex justify-center md:justify-end md:self-center">
              <button
                className={`w-auto px-8 md:px-12 rounded-full py-3 text-sm font-bold transition-colors cursor-pointer ${
                  darkMode
                    ? "bg-[hsl(174,86%,45%)] text-white hover:bg-teal-500"
                    : "bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] hover:text-white"
                }`}
              >
                Start my trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
