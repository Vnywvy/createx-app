import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const offices = [
  {
    id: 1,
    city: "New York, USA",
    location: "8502 Preston Rd. Inglewood, New York 98380",
    phone: "(405) 555-0128",
    schedule: "Mon - Fri 9:00 - 18:00",
  },
  {
    id: 2,
    city: "New Jersey, USA",
    location: "2464 Royal Ln. Mesa, New Jersey 45463",
    phone: "(808) 555-0111",
    schedule: "Mon - Fri 9:00 - 18:00",
  },
  {
    id: 3,
    city: "San Francisco, USA",
    location: "8502 Preston Rd. Inglewood, San Francisco 98380",
    phone: "(505) 555-0125",
    schedule: "Mon - Fri 10:00 - 19:00",
  },
];

const Offices = () => {
  return (
    <section className="bg-[#F4F5F6]">
      <div className="container mx-auto py-[40px] md:py-[80px] flex flex-col gap-[40px] md:gap-[80px]">
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-[700] text-[36px] md:text-[46px] text-center text-heading">
            Our offices
          </h2>
          <p className="font-[400] text-[16px] md:text-[18px] text-center text-paragraph">
            Give us a call, send us a note or visit our office. We can’t wait to
            hear from you!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[40px] min-[890px]:grid-cols-3 min-[890px]:gap-[5%] lg:gap-[12%]">
          {offices.map((office) => (
            <div
              key={office.id}
              className="flex flex-col items-center min-[890px]:items-start gap-[10px] font-[400] text-[14px] md:text-[16px] text-heading">
              <h3 className="font-[700] text-[24px] md:text-[28px] text-heading">
                {office.city}
              </h3>
              <p className="text-center min-[890px]:text-start">
                {office.location}
              </p>
              <p>
                <span className="font-[400] text-[14px] md:text-[16px] text-paragraph">
                  Call:{" "}
                </span>
                <span>{office.phone}</span>
              </p>
              <p>
                <span className="font-[400] text-[14px] md:text-[16px] text-paragraph">
                  Email:{" "}
                </span>
                <span>hello@createx.com</span>
              </p>
              <p>
                <span className="font-[400] text-[14px] md:text-[16px] text-paragraph">
                  Schedule:{" "}
                </span>
                <span>{office.schedule}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[20px] items-center">
          <h2 className="font-[700] text-[36px] md:text-[46px] text-heading text-center">
            Find us at
          </h2>
          <div className="flex gap-[20px]">
            <Link
              to="/contacts"
              onClick={() => window.scrollTo(0, 0)}
              className="size-[40px] flex justify-center items-center">
              <motion.svg
                style={{ transition: "all ease-out .3s" }}
                initial="initial"
                whileHover="hover"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M29.3327 15.6559C29.3327 22.8302 23.4722 28.6459 16.2417 28.6459C13.9463 28.6459 11.7899 28.0592 9.91372 27.0296L2.66602 29.3327L5.02898 22.3632C3.83698 20.4059 3.15046 18.1102 3.15046 15.6559C3.15046 8.48172 9.0115 2.66602 16.2417 2.66602C23.4728 2.66602 29.3327 8.48172 29.3327 15.6559ZM16.2417 4.73476C10.1724 4.73476 5.2355 9.63402 5.2355 15.6559C5.2355 18.0456 6.01446 20.2586 7.33209 22.0589L5.95698 26.1149L10.1866 24.7706C11.9244 25.9116 14.0062 26.5771 16.242 26.5771C22.3105 26.5771 27.2482 21.6785 27.2482 15.6565C27.2482 9.63461 22.3108 4.73476 16.2417 4.73476ZM22.8524 18.6476C22.7715 18.5152 22.5579 18.4352 22.2373 18.2761C21.9161 18.117 20.338 17.3463 20.0447 17.2405C19.7505 17.1345 19.5359 17.0811 19.3223 17.3996C19.1087 17.7185 18.4936 18.4352 18.306 18.6476C18.1188 18.8607 17.9318 18.8873 17.6106 18.7279C17.29 18.5688 16.2562 18.2322 15.0305 17.1478C14.0767 16.3039 13.4325 15.2622 13.2453 14.9431C13.0583 14.6245 13.2257 14.4524 13.386 14.2939C13.5306 14.1511 13.7072 13.922 13.8675 13.7362C14.0284 13.5502 14.0817 13.4177 14.1881 13.205C14.2956 12.9925 14.242 12.8068 14.1614 12.6471C14.0814 12.4879 13.4391 10.9211 13.1718 10.2835C12.9045 9.64646 12.6376 9.75253 12.45 9.75253C12.2631 9.75253 12.0488 9.72587 11.8349 9.72587C11.621 9.72587 11.2731 9.80557 10.9789 10.1241C10.685 10.4429 9.85624 11.2133 9.85624 12.7798C9.85624 14.3466 11.0056 15.8604 11.1665 16.0725C11.3268 16.2847 13.3857 19.6044 16.6479 20.8793C19.9105 22.1537 19.9105 21.7285 20.4989 21.6752C21.0868 21.6222 22.397 20.9051 22.6654 20.162C22.9321 19.4177 22.9321 18.7804 22.8524 18.6476Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </motion.svg>
            </Link>
            <Link
              to="/contacts"
              onClick={() => window.scrollTo(0, 0)}
              className="size-[40px] flex justify-center items-center">
              <motion.svg
                style={{ transition: "all ease-out .3s" }}
                initial="initial"
                whileHover="hover"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M15.9993 2.66602C8.63602 2.66602 2.66602 8.19268 2.66602 15.011C2.66602 18.896 4.60435 22.361 7.63435 24.6243V29.3327L12.1743 26.841C13.386 27.176 14.6693 27.3577 15.9993 27.3577C23.3627 27.3577 29.3327 21.831 29.3327 15.0127C29.3327 8.19435 23.3627 2.66602 15.9993 2.66602ZM17.3243 19.291L13.9293 15.6693L7.30435 19.291L14.5927 11.5543L18.071 15.176L24.6127 11.5543L17.3243 19.291Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </motion.svg>
            </Link>
            <Link
              to="/contacts"
              onClick={() => window.scrollTo(0, 0)}
              className="size-[40px] flex justify-center items-center">
              <motion.svg
                style={{ transition: "all ease-out .3s" }}
                initial="initial"
                whileHover="hover"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M23.4178 1.34009L19.7148 1.33398C15.5545 1.33398 12.866 4.16744 12.866 8.55296V11.8814H9.14281C8.82108 11.8814 8.56055 12.1493 8.56055 12.4798V17.3023C8.56055 17.6328 8.82138 17.9004 9.14281 17.9004H12.866V30.0692C12.866 30.3997 13.1266 30.6673 13.4483 30.6673H18.306C18.6278 30.6673 18.8883 30.3994 18.8883 30.0692V17.9004H23.2416C23.5633 17.9004 23.8239 17.6328 23.8239 17.3023L23.8257 12.4798C23.8257 12.3211 23.7642 12.1692 23.6551 12.0569C23.5461 11.9446 23.3976 11.8814 23.2431 11.8814H18.8883V9.05983C18.8883 7.70368 19.2029 7.01523 20.9227 7.01523L23.4172 7.01432C23.7386 7.01432 23.9991 6.74638 23.9991 6.41619V1.93821C23.9991 1.60833 23.7389 1.3407 23.4178 1.34009Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </motion.svg>
            </Link>
            <Link
              to="/contacts"
              onClick={() => window.scrollTo(0, 0)}
              className="size-[40px] flex justify-center items-center">
              <motion.svg
                style={{ transition: "all ease-out .3s" }}
                initial="initial"
                whileHover="hover"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M30 7.69579C28.9694 8.13304 27.8637 8.42958 26.7019 8.56197C27.8881 7.88176 28.7962 6.80286 29.2266 5.52121C28.1138 6.15113 26.8855 6.60852 25.5768 6.85648C24.5287 5.78594 23.038 5.11914 21.3845 5.11914C18.2124 5.11914 15.6404 7.58189 15.6404 10.6176C15.6404 11.0482 15.6911 11.4687 15.7891 11.8708C11.016 11.6412 6.78357 9.45157 3.95085 6.12431C3.45568 6.9352 3.17399 7.88005 3.17399 8.88864C3.17399 10.7969 4.18881 12.4806 5.72854 13.4657C4.78719 13.4355 3.90185 13.1876 3.12677 12.7754V12.8441C3.12677 15.5079 5.10741 17.7311 7.73365 18.237C7.25248 18.361 6.74509 18.4297 6.22018 18.4297C5.84927 18.4297 5.49058 18.3945 5.13889 18.3275C5.87023 20.5138 7.99087 22.1037 10.5034 22.1473C8.53851 23.6216 6.06097 24.4978 3.36999 24.4978C2.90634 24.4978 2.44965 24.471 2 24.4224C4.54229 25.9855 7.56048 26.8969 10.8044 26.8969C21.3706 26.8969 27.1463 18.5168 27.1463 11.2492L27.1271 10.5372C28.2556 9.76651 29.2319 8.79818 30 7.69579Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </motion.svg>
            </Link>
            <Link
              to="/contacts"
              onClick={() => window.scrollTo(0, 0)}
              className="size-[40px] flex justify-center items-center">
              <motion.svg
                style={{ transition: "all ease-out .3s" }}
                initial="initial"
                whileHover="hover"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5204 5.48608C29.891 5.85522 30.9718 6.93578 31.3407 8.30662C32.0262 10.8105 31.9999 16.0297 31.9999 16.0297C31.9999 16.0297 31.9999 21.2223 31.3409 23.7265C30.9718 25.0971 29.8912 26.1779 28.5204 26.5468C26.0162 27.2059 15.9999 27.2059 15.9999 27.2059C15.9999 27.2059 6.00974 27.2059 3.47948 26.5206C2.10863 26.1515 1.02807 25.0707 0.658933 23.7001C0 21.2223 0 16.0034 0 16.0034C0 16.0034 0 10.8105 0.658933 8.30662C1.02783 6.93602 2.135 5.82885 3.47923 5.45996C5.98337 4.80078 15.9997 4.80078 15.9997 4.80078C15.9997 4.80078 26.0162 4.80078 28.5204 5.48608ZM21.1397 16.0033L12.8104 20.8007V11.206L21.1397 16.0033Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </motion.svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
