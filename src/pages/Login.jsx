import React from "react";
import Header from "../Components/Header";
import celeb from "../Images/celeb.png";
import { Link, useNavigate } from "react-router-dom";
function Login() {
     const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "700px" }} className="flex flex-row">
        <div className="w-2/4 h-full">
          <h2 className="mt-10 text-xl xl:text-4xl text-blue-400">
            Unlock Exclusive Benifits
          </h2>
          <div className="ml-32 mt-9 ">
            <div className="flex flex-row gap-3">
              <div className="-ml-36 xl:-ml-0">
                <p className="text-left text-xl">PHONE NUMBER</p>
                <div
                  style={{
                    position: "relative",
                    height: "40px",
                    width: "180px",
                  }}
                >
                  <select
                    style={{
                      borderRadius: "30px",
                      paddingRight: "30px",
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                    className="border border-black h-10"
                  >
                    <option value="+91">+91 India</option>
                  </select>
                </div>
              </div>

              <div className="mt-7">
                <input
                  type="text"
                  placeholder="&nbsp;&nbsp;9493012121"
                  style={{ borderRadius: "30px" }}
                  className="border border-black h-10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="-ml-36 xl:-ml-24">
                <p className="text-left text-xl ml-24">NAME</p>
                <input
                  type="text"
                  style={{ borderRadius: "30px" }}
                  className="w-96 border h-10 border-black mt-3"
                />
              </div>
              <div className="-ml-36 xl:-ml-24">
                <p className="text-left text-xl ml-24">EMAIL[OPTIONAL]</p>
                <input
                  type="text"
                  style={{ borderRadius: "30px" }}
                  className="w-96 h-10 border border-black mt-3"
                />
              </div>
            </div>
          </div>
          <button
            style={{
              width: "380px",
              height: "40px",
              backgroundColor: "green",
              borderRadius: "20px",
              marginTop: "40px",
            }}
            onClick={()=>{
                navigate('/home')
            }}
            className="-ml-4 xl:ml-8"
          >
            CONTINUE
          </button>
          <p className="mt-4">
            Get ready to reccieve a secret code (otp) on your phone.
          </p>
        </div>

        <div className="w-2/4 h-full invisible xl:visible">
          <img src={celeb} className="h-3/4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
