import signupImg from "../assets/images/signup (3).png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Welcome to BRAIN-BOX"
      description1="Create new Account"
      description2=""
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup