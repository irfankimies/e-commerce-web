import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            We are passionate about providing authentic and high-quality Nike
            shoes, ensuring comfort, style, and performance for every customer.
          </p>
          <p>
            Dedicated to offering genuine Nike footwear, we strive to deliver
            the perfect blend of style, durability, and excellence to elevate
            your every step.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to inspire confidence and elevate lifestyles by
            providing premium Nike footwear that combines innovation, comfort,
            and unmatched style for everyone.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-700">
            Our e-commerce platform ensures top-notch quality by offering only
            authentic products, rigorous quality checks, and secure
            transactions
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-700">
            We make shopping for your favorite Nike shoes effortless with
            user-friendly browsing
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-700">
            We prioritize your satisfaction above all else by offering prompt,
            friendly, and personalized support. 
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}

export default About