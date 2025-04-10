import React,{useLayoutEffect,useRef} from "react";
import Header from "../custom/Header";
import Footer from "../custom/Footer";
// import {a} from 'react-router-dom'
import { LockIcon, CheckIcon, ChevronDownIcon } from "lucide-react";
import HorizontalScroll from "../custom/HorizontalScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function App() {
  const comp = useRef(null);
  const partnersRef = useRef(null);

  useLayoutEffect(() => {
    // Enable markers only in development
    // ScrollTrigger.defaults({
    //   markers: process.env.NODE_ENV === "development"
    // });

    let ctx = gsap.context(() => {
      // Partners animation
      gsap.from("#partners svg", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#partners",
          start: "top 100%",
          end: "bottom 60%",
          scrub: 1,
          toggleActions: "play none none none"
        }
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-linear-to-r from-blue-100 to-blue-200">
      <Header />

      <div className="content">
        <div className="hero">
          <div className="min-h-screen  ">
            <div className="container mx-auto px-4 py-8">
              <main className="mt-8 md:flex md:gap-8 ">
                <div className="md:w-1/2 flex-1">
                  <div className="flex flex-col justify-start">
                    <h1 className="text-7xl font-bold text-gray-800 leading-tight ">
                      Get your resume interview
                    </h1>
                    <span className="text-7xl font-bold text-gray-800 leading-tight mb-8">
                      ready!
                    </span>
                  </div>
                  <p className="text-gray-700 mb-12 text-xl ">
                    A free, fast AI tool that checks key areas to help you land
                    more interviews.
                  </p>

                  <div className="border-3 border-dashed border-blue-300 rounded-lg p-8 text-center mb-8 w-1/2 ml-64 ">
                    <p className="text-gray-700 mb-4">
                      Drop your resume here or choose a file.
                      <br />
                      PDF & DOCX only. Max 2MB file size.
                    </p>

                    <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 mb-4">
                      Upload Your Resume
                    </button>

                    <div className="flex items-center justify-center text-gray-500 text-sm">
                      <LockIcon className="w-4 h-4 mr-2" />
                      <span>Privacy guaranteed</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/4 flex-none -rotate-12 ">
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <div className="text-center mb-6">
                      <h2 className="text-gray-700 mb-4">Resume Score</h2>
                      <div className="relative inline-block">
                        <div className="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center">
                          <svg
                            className="absolute top-0 left-0 w-32 h-32"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#e6e6e6"
                              strokeWidth="8"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#2b7fff"
                              strokeWidth="8"
                              strokeDasharray="251.2"
                              strokeDashoffset="20"
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">
                              92/100
                            </div>
                            <div className="text-xs text-gray-500">
                              24 Issues
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-b pb-2">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium text-sm text-gray-500">
                            CONTENT
                          </div>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            98% <ChevronDownIcon className="w-3 h-3 ml-1" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CheckIcon className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm text-gray-700">
                              ATS Parse Rate
                            </span>
                          </div>
                          <div className="flex items-center">
                            <CheckIcon className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm text-gray-700">
                              Quantifying Impact
                            </span>
                          </div>
                          <div className="flex items-center">
                            <CheckIcon className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm text-gray-700">
                              Repetition
                            </span>
                          </div>
                          <div className="flex items-center">
                            <CheckIcon className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm text-gray-700">
                              Spelling & Grammar
                            </span>
                          </div>
                          <div className="flex items-center">
                            <CheckIcon className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm text-gray-700">
                              Summarize Resume
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm text-gray-500">
                            FORMAT & BREVITY
                          </div>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            94% <ChevronDownIcon className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm text-gray-500">
                            STYLE
                          </div>
                          <div className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            80% <ChevronDownIcon className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm text-gray-500">
                            SECTIONS
                          </div>
                          <div className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            85% <ChevronDownIcon className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm text-gray-500">
                            SKILLS
                          </div>
                          <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            88% <ChevronDownIcon className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

     
      {/* Partners Section - Fixed */}
      <div ref={comp} className="relative flex flex-col items-center py-16 overflow-hidden">
        <h1 className="text-5xl font-semibold mb-12">Our partners</h1>
        <div className="w-full bg-blue-400 py-8">
          <div 
            id="partners" 
            ref={partnersRef}
            className="container mx-auto flex flex-wrap justify-center gap-16 px-4"
          >
            <svg
              className="w-20 h-20 bg-white p-4 rounded-lg shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>

            <svg
              className="w-20 h-20 bg-white p-4 rounded-lg shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M640 317.9C640 409.2 600.6 466.4 529.7 466.4C467.1 466.4 433.9 431.8 372.8 329.8L341.4 277.2C333.1 264.7 326.9 253 320.2 242.2C300.1 276 273.1 325.2 273.1 325.2C206.1 441.8 168.5 466.4 116.2 466.4C43.4 466.4 0 409.1 0 320.5C0 177.5 79.8 42.4 183.9 42.4C234.1 42.4 277.7 67.1 328.7 131.9C365.8 81.8 406.8 42.4 459.3 42.4C558.4 42.4 640 168.1 640 317.9H640zM287.4 192.2C244.5 130.1 216.5 111.7 183 111.7C121.1 111.7 69.2 217.8 69.2 321.7C69.2 370.2 87.7 397.4 118.8 397.4C149 397.4 167.8 378.4 222 293.6C222 293.6 246.7 254.5 287.4 192.2V192.2zM531.2 397.4C563.4 397.4 578.1 369.9 578.1 322.5C578.1 198.3 523.8 97.1 454.9 97.1C421.7 97.1 393.8 123 360 175.1C369.4 188.9 379.1 204.1 389.3 220.5L426.8 282.9C485.5 377 500.3 397.4 531.2 397.4L531.2 397.4z" />
            </svg>

            <svg
              className="w-20 h-20 bg-white p-4 rounded-lg shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>

            <svg
              className="w-20 h-20 bg-white p-4 rounded-lg shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex my-24 mx-14">
      <div className="flex-none w-1/3">img</div>
      <div className="flex-1 ">
        <div>
          <h1 className="text-5xl font-semibold mb-7">ResuBuild: A Smarter Way to Optimize Your ATS Score</h1>

          <p className="text-lg font-thin my-3">
            When applying for a job, your resume is likely to go through an
            Applicant Tracking System (ATS) before a recruiter ever sees it.
            These systems help hiring managers filter candidates by scanning for
            relevant keywords and organizing resumes into a database.
          </p>
          <p className="text-lg font-thin my-3">
            That’s why your resume’s success depends on how well it’s optimized
            for the job. Factors like the template you choose, the keywords you
            use, and how effectively your skills are highlighted can make a big
            difference.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold my-7"> How Our Resume Checker Works</h1>
          <p className="text-lg font-thin my-3">
            1. Content Interpretation Just like an ATS, our system analyzes your
            resume to determine how well it aligns with automated screening
            processes. The more information we can accurately interpret, the
            better your resume will perform in an ATS scan.
          </p>
          <p className="text-lg font-thin my-3">
            2. Key Insights and Improvements While ATS systems don’t check for
            grammar mistakes or weak content, recruiters certainly do. That’s
            why our checker evaluates your resume based on measurable
            achievements, clarity, and overall writing quality—helping you
            create a stronger, more compelling application.
          </p>
        </div>
      </div>
      </div>  
      <Footer />
      <div className="">

      <HorizontalScroll/>
      </div>
    </div>
  );
}

export default App;
