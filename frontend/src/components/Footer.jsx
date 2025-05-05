import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Our approach centers on treating people with the same kindness and
            respect that we value for ourselves. We understand mental health
            challenges firsthand and support your pursuit of well-being with
            compassion. Whether it’s connecting you with the right therapist or
            supporting you through difficult times, we embrace you as part of
            our community.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 6204557626</li>
            <li>aumhealthcare@gmail.com</li>
            <li><a href="https://web.whatsapp.com" target="_blank">Chat With Us on WhatsApp</a></li>
            <li>  <a href="https://web.whatsapp.com" target="_blank"
            style="background-color: #25D366; color: white; border: none; padding: 10px 16px; 
            font-size: 14px; border-radius: 6px; text-decoration: none; 
            display: inline-block;">
    Chat With Us 
  </a>
</li>

          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ AUMHealthcare.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
