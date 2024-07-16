import Footer from "../components/common/FooTer";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponent from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import RatingSlider from "../components/core/Ratings/RatingSlider";
import BannerImage1 from "../assets/images/student1.jpg";
import BannerImage3 from "../assets/images/student2.jpg";
import BannerImage2 from "../assets/images/student3.avif";
import FoundingStory from "../assets/images/student4.jpg";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto text-white">
      {/* section 1 */}
      <section className="bg-richblack-800">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a<br />
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-10 lg:gap-5">
            <img
              src={BannerImage1}
              className="shadow-[5px_5px_10px_5px] shadow-richblack-300"
            />
            <img
              src={BannerImage2}
              className="shadow-[5px_5px_10px_5px] shadow-richblack-300"
            />
            <img
              src={BannerImage3}
              className="shadow-[5px_5px_10px_5px] shadow-richblack-300"
            />
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="border-b border-richblack-700 bg-richblack-900">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* section 3 */}

      <section className="bg-richblack-800">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-black">
          {/* foudning story wala div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between ">
            {/* founding story left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-yellow-50 bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>

              <p className="text-justify font-medium text-white lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>

              <p className="text-justify font-medium text-white lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* foudning story right box */}
            <div>
              <img
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                src={FoundingStory}
              />
            </div>
          </div>

          {/* vision and mission wala parent div */}
        </div>
      </section>

      {/* section 4 */}
      <StatsComponent />
      <section>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10  text-white">
          <div className="flex flex-col items-center gap-10 py-10 lg:gap-10 lg:flex-row justify-betwen  ">
            {/* left box */}
            <div className="flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-yellow-50 bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-justify font-medium text-white lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* right box */}
            <div className=" flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-yellow-50 text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-justify font-medium text-white lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[140px]">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <section>
        <div className=" mb-16 mt-3 w-screen">
          <h2 className="text-center text-4xl font-semibold mt-8 text-richblack-5 mb-5">
            Reviews from other learners
          </h2>
          <RatingSlider />
        </div>
      </section>
    </div>
  );
};

export default About;
