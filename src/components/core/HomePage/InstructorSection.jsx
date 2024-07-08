import React from 'react'
import CTAButton from '../HomePage/Button'
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/images/instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center p-5 bg-richblack-700">
          <div className="lg:w-[40%]">
            <img
              src={Instructor}
              alt=""
              className=""
            />
          </div>
          <div className="lg:w-[60%] flex gap-10 flex-col">
            <h1 className="lg:w-[80%] text-5xl font-semibold ">
              Become an <span className='text-yellow-50'>instructor</span> 
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-100">
            Teaching creates a sense of community and connection, as you build relationships with your students and colleagues.Instructors from around the world teach millions of students on BrainBox. We provide the tools and skills to teach what you love.Your teachings and wisdom will live on through your students, creating a legacy of knowledge that transcends generations.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection