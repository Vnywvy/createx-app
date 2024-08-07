import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Newsletter from "./Newsletter";
import CV from "./CV";

const offerings = [
  {
    id: 1,
    location: "New York",
    workHours: "Full Time",
    job: "Heavy Equipment Operator",
  },
  {
    id: 2,
    location: "San Francisco",
    workHours: "Full Time",
    job: "Financial Compliance Analyst",
  },
  {
    id: 3,
    location: "New Jersey",
    workHours: "Full Time",
    job: "Project Manager - Buildings",
  },
  {
    id: 4,
    location: "New York",
    workHours: "Part Time",
    job: "Environment Specialist",
  },
  { id: 5, location: "New York", workHours: "Full Time", job: "Accountant" },
];

const Offerings = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [resume, setResume] = useState(false);
  return (
    <section className="relative">
      <div className="container mx-auto py-[40px] md:py-[80px] flex flex-col md:flex-row md:gap-[10%]">
        <div className="flex flex-col gap-[20px] w-full md:w-[60%]">
          {offerings.map((element) => (
            <div
              key={element.id}
              style={{ transition: "all ease-in-out .3s" }}
              className="py-[20px] px-[30px] flex flex-col gap-[15px] md:gap-0 md:flex-row md:justify-between md:items-center rounded-[4px] border-[1px] border-[#E5E8ED] shadow-sm hover:shadow-md">
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-[10px] items-center">
                  <div className="flex gap-[3px]">
                    <img src="./images/positions/location.svg" alt="location" />
                    <span className="font-[400] text-[14px] text-paragraph">
                      {element.location}
                    </span>
                  </div>
                  <div className="flex gap-[3px] border-l-[1px] border-[#787A80] pl-[10px] items-center">
                    <img src="./images/positions/clock.svg" alt="clock" />
                    <span className="font-[400] text-[14px] text-paragraph">
                      {element.workHours}
                    </span>
                  </div>
                </div>
                <h4 className="font-[700] text-[20px] text-heading">
                  {element.job}
                </h4>
              </div>
              <Link to={`/contacts`} onClick={() => window.scrollTo(0, 0)}>
                <motion.button
                  style={{ transition: "all ease-out .3s" }}
                  initial={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
                  whileHover={{
                    color: "#FFFFFF",
                    backgroundColor: "#FF5A30",
                  }}
                  className="w-[151px] h-[44px]  font-[700] text-[14px] border-[1px] border-primary rounded-[4px] uppercase flex justify-center items-center">
                  Apply now
                </motion.button>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full pt-[30px] md:pt-0 md:w-[30%] flex flex-col gap-[20px]">
          <h4 className="font-[700] text-[28px] text-heading">
            Didn’t find what you were looking for?
          </h4>
          <p className="font-[400] text-[18px] text-customGray">
            Send your CV or subscribe to our newsletter to receive information
            about new vacancies.
          </p>
          <div className="flex w-full gap-[2%]">
            <motion.button
              style={{ transition: "all ease-out .3s" }}
              initial={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
              onClick={() => setSubscribe(true)}
              whileHover={{
                color: "#FFFFFF",
                backgroundColor: "#FF5A30",
              }}
              className="w-[49%] h-[44px]  font-[700] text-[14px] border-[1px] border-primary rounded-[4px] uppercase flex justify-center items-center">
              subscribe
            </motion.button>
            <motion.button
              style={{ transition: "all ease-out .3s" }}
              initial={{
                color: "#FFFFFF",
                backgroundColor: "#FF5A30",
              }}
              onClick={() => setResume(true)}
              whileHover={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
              className="w-[49%] h-[44px]  font-[700] text-[14px] border-[1px] border-primary rounded-[4px] uppercase flex justify-center items-center">
              send cv
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {subscribe && <Newsletter setSubscribe={setSubscribe} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {resume && <CV setResume={setResume} />}
      </AnimatePresence>
    </section>
  );
};

export default Offerings;
