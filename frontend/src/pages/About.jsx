import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to AUMTHIRDEYE trusted partner in managing your mental
            healthcare needs conveniently and efficiently. AUMTHIRDEYE can help
            you find judgement free and confidential care you need for all
            mental and emotional concerns, small or large: stress, anger,
            depression, anxiety, emotional distress and a variety of other
            conditions. Whether you're looking for free anonymous support
            groups, individual therapy sessions, or psychiatry and medication,
            we're here to help.
          </p>
          <p>
            AUMTHIRDEYE is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, AUMTHIRDEYE is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at AUMTHIRDEYE is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          Mental{" "}
          <span className="text-gray-700 font-semibold">Health Library</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Attention Deficit Hyperactivity Disorder (ADHD) & Stimulants:</b>
          <p>
            ADHD is a neurological condition characterized by persistent
            inattention, hyperactivity, and impulsivity.
            {""}
            <a
              href="https://www.mentalhealth.com/library/adhd-and-stimulant-medications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Read More
            </a>
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Generalized Anxiety Disorder : </b>
          <p>
            Glossophobia the ‘Fear of Public Speaking’ area. {""}
            <a
              href="https://www.mentalhealth.com/library/what-we-fear-more-than-death"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Read More
            </a>
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Family Health :</b>
          <p>
            How to Resolve Parent-Child Conflict {""}
            <a
              href="https://www.mentalhealth.com/library/three-vital-steps-to-repair-parenting-mistakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Read More
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Women’s Health :</b>
          <p>
            The Three Stages of Labor
            {""}
            <a
              href="https://www.mentalhealth.com/library/stages-of-labor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Read More
            </a>
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE: </b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
