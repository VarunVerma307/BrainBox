import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
import frameImg from "../../../assets/images/background.png"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto items-center flex w-11/12 max-w-maxContent flex-col-reverse justify-around gap-y-12 py-10 md:flex-row md:gap-y-0 md:gap-x-12  ">
          <div className="mx-auto w-11/12 max-w-[650px] md:mx-0 shadow-[2px_2px_20px_2px] shadow-black p-6">
            <h1 className="text-[1.6rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-yellow-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className=" relative mx-auto w-11/12 max-w-[450px] md:mx-0">
          <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={750}
              height={700}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template