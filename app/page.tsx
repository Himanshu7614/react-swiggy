"use client";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [email, setEmail] = useState("");
  const [option1, setoprtion1] = useState("");
  const [option2, setoption2] = useState("");
  const [option3, setoprtion3] = useState("");
  const [option4, setoprtion4] = useState("");
  const [option5, setoprtion5] = useState("");
  const [option6, setoprtion6] = useState("");
  const [option7, setoprtion7] = useState("");
  const [option8, setoprtion8] = useState("");
  const [option9, setoprtion9] = useState("");

  const [gift, setGift] = useState("");
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState(
    "Select the behaviours you wish to commit to this year:"
  );

  const [click, setClick] = useState("");
  const [loading, setloading] = useState(true);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setloading(false);
      const response = await fetch(
        "https://v1.nocodeapi.com/himanshu1/google_sheets/CyHmaRpoJqQsKJzi?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify([
            [
              email,
              option1 ? "Yes" : "No",
              option2 ? "Yes" : "No",
              option3 ? "Yes" : "No",
              option4 ? "Yes" : "No",
              option5 ? "Yes" : "No",
              option6 ? "Yes" : "No",
              option7 ? "Yes" : "No",
              option8 ? "Yes" : "No",
              option9 ? "Yes" : "No",

              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      const allOption = [
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8,
        option9,
      ];

      const countYes = allOption.filter((option) => option != "").length;
      const countNo = allOption.filter((option) => option === "No").length;

      setText("Yay, Thanks for commiting to Swiggy's Blended Ways of Working!   🙏 ");
      setText1(
        " Now, unlike your New Year's Resolutions, follow the selected behaviours & become a Blended Champ! 🤩"
      );
      setText2("");
      setGift("Click to Know More about Blended Ways of Working");
      setClick("/image/gif.gif");

      setloading(true);
      setEmail("");
    } catch (error) {
      console.error("Error submitting data:", error);
      setloading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen py-4 bg-transparent">
        <form
          action="/"
          id="myForm"
          onSubmit={handleSubmit}
          className={
            (text2 === "" ? "mt-5" : "") +
            ` flex-col  bg-white p-8  shadow-md md:w-[90%] transition-all duration-500 rounded-[12px] m-5`
          }
        >
          <div className="mx-auto">
            <h1 className="text-[20px] pb-2 font-bold my-3"> {text2}</h1>
          </div>

          <div
            className={`${
              gift != "" ? "hidden" : "flex "
            } flex-col transition-all duration-500  text-gray-700`}
          >
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"A"}
                name="option1"
                className="mr-2 font-bold"
                onChange={(e) => {
                  setoprtion1(e.target.value);
                }}
              />
              <p> <span className="font-semibold">I am a cheer champ </span> - sprinkling words of appreciation when due. </p>
              
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"B"}
                name="option2"
                onChange={(e) => {
                  setoption2(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span className="font-semibold">I am a self-care superhero </span>- i plan my day / leaves, have lunch on
              time, block deep work hours etc.</p>
               
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"C"}
                name="option3"
                onChange={(e) => {
                  setoprtion3(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span  className="font-semibold">I am a work wizard</span>  - sticking to committed deadlines, and
              proactively communicating a likely miss.              
              </p>
               
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"D"}
                name="option4"
                onChange={(e) => {
                  setoprtion4(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span className="font-semibold"> I care for others </span>- making intentional efforts to know my
              colleagues beyond work.</p>
             
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"E"}
                name="option5"
                onChange={(e) => {
                  setoprtion5(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span className="font-semibold"> I am a camera chief </span>- I switch on my camera for making hybrid
              meetings humane</p>
             
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"C"}
                name="option6"
                onChange={(e) => {
                  setoprtion6(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span className="font-semibold">I am a team player</span> - I proactively ask for help and offer help.</p>
              
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"D"}
                name="option7"
                onChange={(e) => {
                  setoprtion7(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span className="font-semibold">I am a communication chef </span> - blending synchronous (meetings,calls)
              and async (slack, mail, chat) channels for effective
              collaboration.</p>
             
            </label>
            <label className=" mb-4 flex items-center">
              <input
                type="checkbox"
                value={"E"}
                name="option8"
                onChange={(e) => {
                  setoprtion8(e.target.value);
                }}
                className="mr-2 font-bold"
              />
              <p><span className="font-semibold">I am tech savvy </span>- using the right tools & resources to get work
              done and upskill myself.</p>
              
            </label>
            <label className=" my-4  flex-col items-center gap-3">
              <span className="block mb-1 text-[18px] font-semibold">Email:</span>
              <div className="flex items-center gap-2 w-[50%]">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Swiggy mail id"
                  className="p-2 border border-gray-300 rounded w-full py-2 "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <input
                  type="submit"
                  value={loading ? "Submit " : "Loading..."}
                  onSubmit={handleSubmit}
                  className="bg-[#ED8a22]  text-white p-2  cursor-pointer rounded font-bold w-[200px] "
                />
              </div>
            </label>
          </div>
          {/* <h1 className="pt-3">{click}</h1> */}
          <img
            className={`flex justify-center mx-auto cursor-pointer w- ${
              click != "" ? "flex [300px] h-[300px]" : "hidden"
            } `}
            src={click}
          />
          <div className="flex  flex-col items-center justify-center text-center mt-5">
            <p className="text-[18px] font-bold">{text}</p>
            <p>{text1}</p>
           
          </div>
        </form>
      </div>
    </>
  );
}
