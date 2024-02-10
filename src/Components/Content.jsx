import React from "react";
import img2 from "../Images/img2.jpg";
import img1 from '../Images/img1.jpg'
import img3 from '../Images/img3.jpg'
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import membership from '../Images/membership.jpg'
const courosel = [
  {
    imgUrl: img1,
    text: "Lower",
    text1: " interest rate",
  },
  {
    imgUrl: img2,
    text: "Interest ",
    text1: "free payment",
  },
  {
    imgUrl: img3,
    text: "Discount on",
    text1: "Materials",
  },
];
function Content() {
  return (
    <div className="w-full h-96 flex flex-col xl:flex-row">
      <Fade>
        <div style={{ width: "30%", height: "100%", paddingLeft: "70px" }}>
          <h3 className="pt-8 text-4xl text-start"> New Arrival</h3>
          <div className="text-start flex flex-row mt-5">
            <p className="underline underline-offset-4"> Join</p>
            <p className="ml-2">Today</p>
          </div>
          <div style={{ width: "300px" }}>
            <img
              className="h-48 w-48 md:w-64 xl:ml-12 sm:ml-0"
              src={membership}
              alt=""
            />
          </div>
          <div
            className="bg-gray-300 xl:ml-20 sm:-ml-1"
            style={{
              width: "200px",

              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            <button className="text-blue-300 font-extrabold">JOIN NOW</button>
          </div>
        </div>
      </Fade>
      <div style={{ width: "70%", height: "100%" }} className="ml-4">
        <TypeAnimation
          className="pt-8 text-green-700 text-2xl font-bold"
          sequence={["  UNLOCK PREMIUM FEATURES NOW", 1000]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
        <div>
          <AwesomeSlider animation="cubeAnimation" className="bg-white">
            <div className="flex flex-row gap-5 justify-center mt-5 bg-white">
              {courosel.map((item) => (
                <div className="h-56 w-44 border rounded-xl bg-white">
                  <img src={item.imgUrl} className="border rounded-xl" alt="" />
                  <p className="mt-6 font-mono text-green-400 font-bold">
                    {item.text} <br /> {item.text1}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-5 justify-center mt-5 ">
              {courosel.map((item) => (
                <div className="h-56 w-44 border rounded-xl">
                  <img src={item.imgUrl} className="border rounded-xl" alt="" />
                  <p className="mt-6">
                    {item.text} <br /> {item.text1}
                  </p>
                </div>
              ))}
            </div>
            <Fade>
              <div className="flex flex-row gap-5 justify-center mt-5 ">
                {courosel.map((item) => (
                  <div className="h-56 w-44 border rounded-xl">
                    <img
                      src={item.imgUrl}
                      className="border rounded-xl"
                      alt=""
                    />
                    <p className="mt-6">
                      {item.text} <br /> {item.text1}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>
          </AwesomeSlider>
        </div>

        <div className="flex flex-col mt-10 gap-3 xl:ml-80 sm:ml-0">
          <button
            className="h-9 w-60 bg-green-700 text-white"
            style={{ borderRadius: "20px" }}
          >
            Unlock now
          </button>
          <button
            className="h-9 w-60 bg-green-700 text-white"
            style={{ borderRadius: "20px" }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
