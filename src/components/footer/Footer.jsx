import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputError from "../general-components/InputError";

const Footer = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <footer className="bg-heading">
      <div className="container mx-auto py-[35px] md:py-[80px]">
        <div className="flex flex-col md:flex-row gap-[10%] items-start">
          <div className="w-full md:w-[50%] flex flex-col gap-[20px]">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[80px] md:items-center">
              <Link to="/">
                <motion.img
                  src="./images/logo-white.svg"
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <div className="flex gap-[10px] md:gap-[15px]">
                <motion.svg
                  initial="initial"
                  whileHover="hover"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.g
                    variants={{
                      initial: { opacity: 0.6 },
                      hover: { opacity: 1 },
                    }}>
                    <path
                      d="M22 11.7424C22 17.1231 17.6047 21.4849 12.1818 21.4849C10.4602 21.4849 8.84289 21.0449 7.43578 20.2727L2 22L3.77222 16.7729C2.87822 15.3049 2.36333 13.5831 2.36333 11.7424C2.36333 6.36178 6.75911 2 12.1818 2C17.6051 2 22 6.36178 22 11.7424ZM12.1818 3.55156C7.62978 3.55156 3.92711 7.226 3.92711 11.7424C3.92711 13.5347 4.51133 15.1944 5.49956 16.5447L4.46822 19.5867L7.64044 18.5784C8.94378 19.4342 10.5051 19.9333 12.182 19.9333C16.7333 19.9333 20.4367 16.2593 20.4367 11.7429C20.4367 7.22644 16.7336 3.55156 12.1818 3.55156ZM17.1398 13.9862C17.0791 13.8869 16.9189 13.8269 16.6784 13.7076C16.4376 13.5882 15.254 13.0102 15.034 12.9309C14.8133 12.8513 14.6524 12.8113 14.4922 13.0502C14.332 13.2893 13.8707 13.8269 13.73 13.9862C13.5896 14.146 13.4493 14.166 13.2084 14.0464C12.968 13.9271 12.1927 13.6747 11.2733 12.8613C10.558 12.2284 10.0749 11.4471 9.93444 11.2078C9.79422 10.9689 9.91978 10.8398 10.04 10.7209C10.1484 10.6138 10.2809 10.442 10.4011 10.3027C10.5218 10.1631 10.5618 10.0638 10.6416 9.90422C10.7222 9.74489 10.682 9.60556 10.6216 9.48578C10.5616 9.36644 10.0798 8.19133 9.87933 7.71311C9.67889 7.23533 9.47867 7.31489 9.338 7.31489C9.19778 7.31489 9.03711 7.29489 8.87667 7.29489C8.71622 7.29489 8.45533 7.35467 8.23467 7.59356C8.01422 7.83267 7.39267 8.41044 7.39267 9.58533C7.39267 10.7604 8.25467 11.8958 8.37533 12.0549C8.49556 12.214 10.0398 14.7038 12.4864 15.66C14.9333 16.6158 14.9333 16.2969 15.3747 16.2569C15.8156 16.2171 16.7982 15.6793 16.9996 15.122C17.1996 14.5638 17.1996 14.0858 17.1398 13.9862Z"
                      fill="white"
                    />
                  </motion.g>
                </motion.svg>
                <motion.svg
                  initial="initial"
                  whileHover="hover"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.g
                    variants={{
                      initial: { opacity: 0.6 },
                      hover: { opacity: 1 },
                    }}>
                    <path
                      d="M12 2C6.4775 2 2 6.145 2 11.2587C2 14.1725 3.45375 16.7712 5.72625 18.4688V22L9.13125 20.1313C10.04 20.3825 11.0025 20.5187 12 20.5187C17.5225 20.5187 22 16.3737 22 11.26C22 6.14625 17.5225 2 12 2ZM12.9937 14.4688L10.4475 11.7525L5.47875 14.4688L10.945 8.66625L13.5538 11.3825L18.46 8.66625L12.9937 14.4688Z"
                      fill="white"
                    />
                  </motion.g>
                </motion.svg>

                <motion.svg
                  initial="initial"
                  whileHover="hover"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.g
                    variants={{
                      initial: { opacity: 0.6 },
                      hover: { opacity: 1 },
                    }}>
                    <path
                      d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z"
                      fill="white"
                    />
                  </motion.g>
                </motion.svg>
                <motion.svg
                  initial="initial"
                  whileHover="hover"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.g
                    variants={{
                      initial: { opacity: 0.6 },
                      hover: { opacity: 1 },
                    }}>
                    <path
                      d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
                      fill="white"
                    />
                  </motion.g>
                </motion.svg>

                <motion.svg
                  initial="initial"
                  whileHover="hover"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.g
                    variants={{
                      initial: { opacity: 0.6 },
                      hover: { opacity: 1 },
                    }}>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z"
                      fill="white"
                    />
                  </motion.g>
                </motion.svg>
              </div>
            </div>
            <p className="font-[400] text-[14px] text-[#FFFFFF] opacity-60">
              Createx Construction Bureau has been successfully operating in the
              USA construction market since 2000. We are proud to offer you
              quality construction and exemplary service. Our mission is to set
              the highest standards for construction sphere.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[40%] flex flex-col mt-[11px] md:mt-[-9px]">
            <h3 className="font-[700] text-[24px] mb-[20px] md:mb-[40px] text-[#FFFFFF]">
              Let’s stay in touch
            </h3>
            <div className="h-[44px] relative w-full flex">
              <div className="absolute top-[-34px]">
                <InputError message={errors.email?.message} />
              </div>
              <input
                type="text"
                placeholder="Your email address "
                className="h-full outline-primary px-[15px] w-[65%] bg-white bg-opacity-[12%] rounded-l-[4px] border-[1px] border-white border-opacity-[20%]"
                id="email"
                {...register("email", {
                  required: { value: true, message: "Required" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email",
                  },
                })}
              />
              <motion.button
                initial={{ backgroundColor: "#FF5A30" }}
                whileHover={{
                  backgroundColor: "#FC3300",
                }}
                className="uppercase w-[35%] py-[12px] text-center object-cover bg-primary rounded-r-[4px] text-white font-[700] text-[14px] felx justify-center items-center"
                type="submit">
                subscribe
              </motion.button>
            </div>
            <label
              htmlFor=""
              className="mt-[10px] font-[400] text-[12px] text-white opacity-60">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx Construction Bureau.
            </label>
          </form>
        </div>
        <div className="flex flex-col md:flex-row gap-[10%] mt-[20px] md:mt-[60px]">
          <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[50%]">
            <div className="flex flex-col mb-[20px] md:mb-0 gap-[10px] text-white text-opacity-60">
              <h4 className="font-[700] text-[16px] text-white">HEAD OFFICE</h4>
              <div className="flex flex-col gap-[5px]">
                <p>
                  <span className="text-white">Address: </span>
                  <span>8502 Preston Rd. Inglewood, New York</span>
                </p>
                <p>
                  <span className="text-white">Call: </span>
                  <Link to="/contacts">
                    <motion.span
                      whileHover={{
                        color: "#FFFFFF",
                        transition: { duration: 0.3 },
                      }}>
                      (405) 555-0128
                    </motion.span>
                  </Link>
                </p>
                <p>
                  <span className="text-white">Email: </span>
                  <Link to="/contacts">
                    <motion.span
                      whileHover={{
                        color: "#FFFFFF",
                        transition: { duration: 0.3 },
                      }}>
                      hello@createx.com
                    </motion.span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-[20px] md:mb-0 gap-[10px] text-white text-opacity-60">
              <h4 className="font-[700] text-[16px] text-white">WHO WE ARE</h4>
              <div className="flex flex-col gap-[5px]">
                <Link to="/aboutUs">
                  <motion.span
                    whileHover={{
                      color: "#FFFFFF",
                      transition: { duration: 0.3 },
                    }}>
                    About Us
                  </motion.span>
                </Link>
                <Link to="/">
                  <motion.span
                    whileHover={{
                      color: "#FFFFFF",
                      transition: { duration: 0.3 },
                    }}>
                    Available Positions
                  </motion.span>
                </Link>
                <Link to="/">
                  <motion.span
                    whileHover={{
                      color: "#FFFFFF",
                      transition: { duration: 0.3 },
                    }}>
                    Contacts
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] text-white text-opacity-60">
            <h4 className="font-[700] text-[16px] text-white">WHO WE ARE</h4>
            <div className="flex flex-col gap-[5px]">
              <Link to="/services">
                <motion.span
                  whileHover={{
                    color: "#FFFFFF",
                    transition: { duration: 0.3 },
                  }}>
                  Services
                </motion.span>
              </Link>
              <Link to="/work">
                <motion.span
                  whileHover={{
                    color: "#FFFFFF",
                    transition: { duration: 0.3 },
                  }}>
                  Work
                </motion.span>
              </Link>
              <Link to="/news">
                <motion.span
                  whileHover={{
                    color: "#FFFFFF",
                    transition: { duration: 0.3 },
                  }}>
                  News
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-[5px] text-white text-opacity-60 mt-[20px] md:mt-[60px]">
          <span>© All rights reserved. Made with</span>
          <img src="./images/footer/heart.svg" alt="heart" />
          <span>by Createx Studio </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
