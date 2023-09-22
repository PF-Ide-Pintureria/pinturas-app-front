import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

const Register = () => {
  return (
        <div
            className="flex items-center justify-center mt-8 mb-20"
            style={{
              height: '100vh'
            }}
        >
            <div
            // style={{
            //   backgroundImage:
            //     'url("https://i.pinimg.com/originals/c7/db/af/c7dbafe954111384b98145b0f5842be2.gif")',
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   height: "100%",
            //   width: "100%",
            //   filter: "blur(10px)", // Aplica el efecto de borrosidad con un valor de 8px (ajusta según lo desees)
            //   position: "absolute",
            //   zIndex: "-1",
            // }}
            ></div>
            <div>
                <RegisterForm />
            </div>
            {/* <div style={{ marginLeft: "20px" }}>
        <LoginForm />
      </div> */}
        </div>
  )
}

export default Register
