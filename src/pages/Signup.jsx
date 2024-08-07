import signupImg from "../assets/images/signup (3).png"
import Template from "../components/core/Auth/Template"
import { useSelector } from "react-redux";

function Signup() {
  const {loading} = useSelector((state)=>state.auth);
  return (
    loading?(<div className=" h-[100vh] flex justify-center items-center"><div class="custom-loader"></div></div>):(
    <Template
      title="Welcome to BrainBox"
      description1="Build skills for today, tomorrow, and beyond."
      image={signupImg}
      formType="signup"
    />
    )
  )
}

export default Signup