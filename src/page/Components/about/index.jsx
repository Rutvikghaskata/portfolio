import React, { useEffect, useState } from "react";
import Rutvik from "../../../assets/svg-images/rutvik.svg";
import "./about.scss";

const SocialLinks = ({ DarkMode }) => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {setTimeout(() =>setAnimate(false),4000)}, [])
  return (
    <div className="flex md:gap-7 gap-3 ">
      <a
        href="https://www.facebook.com/rutvik.ghaskata/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${
          DarkMode && "dark"
        } ${animate && 'facebook'}`}
      >
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.8125 12.0938V22.9688C2.8125 23.1562 2.90625 23.25 3.09375 23.25H7.40625C7.59375 23.25 7.6875 23.1562 7.6875 22.9688V11.9062H10.875C11.0625 11.9062 11.1562 11.8125 11.1562 11.625L11.4375 8.25C11.4375 8.0625 11.3438 7.96875 11.1562 7.96875H7.6875V5.625C7.6875 5.0625 8.15625 4.59375 8.8125 4.59375H11.25C11.5312 4.59375 11.625 4.5 11.625 4.3125V1.03125C11.625 0.84375 11.5313 0.75 11.3438 0.75H7.21875C4.78125 0.75 2.8125 2.53125 2.8125 4.78125V7.96875H0.65625C0.46875 7.96875 0.375 8.0625 0.375 8.25V11.625C0.375 11.8125 0.46875 11.9062 0.65625 11.9062H2.8125V12.0938Z"
            fill="#323BAC"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/rutvikghaskata_18/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${
          DarkMode && "dark"
        } ${animate && 'instagram'}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9062 4.875C17.1562 4.875 16.5938 5.4375 16.5938 6.1875C16.5938 6.9375 17.1562 7.5 17.9062 7.5C18.6562 7.5 19.2188 6.9375 19.2188 6.1875C19.2188 5.4375 18.6562 4.875 17.9062 4.875Z"
            fill="#323BAC"
          />
          <path
            d="M12 6.5625C8.90625 6.5625 6.46875 9.09375 6.46875 12.0938C6.46875 15.0938 9 17.625 12 17.625C15 17.625 17.5312 15.0938 17.5312 12.0938C17.5312 9.09375 15.0938 6.5625 12 6.5625ZM12 15.6562C10.0312 15.6562 8.4375 14.0625 8.4375 12.0938C8.4375 10.125 10.0312 8.53125 12 8.53125C13.9687 8.53125 15.5625 10.125 15.5625 12.0938C15.5625 14.0625 13.9687 15.6562 12 15.6562Z"
            fill="#323BAC"
          />
          <path
            d="M16.5 0.75H7.59375C3.75 0.75 0.75 3.75 0.75 7.5V16.4063C0.75 20.1562 3.75 23.1562 7.5 23.1562H16.4063C20.1562 23.1562 23.1562 20.1562 23.1562 16.4063V7.5C23.25 3.75 20.25 0.75 16.5 0.75ZM21.0938 16.5C21.0938 19.0312 19.0312 21.1875 16.4063 21.1875H7.5C4.96875 21.1875 2.8125 19.125 2.8125 16.5V7.59375C2.8125 5.0625 4.875 2.90625 7.5 2.90625H16.4063C18.9375 2.90625 21.0938 4.96875 21.0938 7.59375V16.5Z"
            fill="#323BAC"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/rutvikghaskata_18/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${
          DarkMode && "dark"
        } ${animate && 'twitter'}`}
      >
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8912 1.65249C22.127 1.65446 22.3578 1.72088 22.5585 1.84458C22.7593 1.96828 22.9223 2.14453 23.0301 2.35425C23.1378 2.56398 23.1862 2.79918 23.1699 3.0344C23.1535 3.26963 23.0732 3.4959 22.9375 3.68874L21.635 5.53999C21.555 11.8975 19.4288 16.2137 15.315 18.37C13.3547 19.3442 11.1887 19.8325 9 19.7937C6.29358 19.856 3.61916 19.1986 1.25 17.8887C1.09063 17.7816 0.96745 17.6287 0.896713 17.4502C0.825975 17.2717 0.810996 17.0759 0.85375 16.8887C0.893776 16.6988 0.990465 16.5254 1.13106 16.3915C1.27165 16.2576 1.44954 16.1695 1.64125 16.1387C3.23281 15.9165 4.80006 15.5457 6.3225 15.0312C-0.5 11.875 0.9875 4.77999 1.6375 2.60124C1.70087 2.38493 1.82002 2.1891 1.98299 2.03339C2.14596 1.87769 2.34702 1.76759 2.56598 1.71414C2.78495 1.6607 3.01413 1.66579 3.23051 1.72891C3.44688 1.79203 3.64286 1.91095 3.79875 2.07374C5.7958 4.13152 8.44366 5.43447 11.2925 5.76124C11.2419 4.99566 11.3603 4.22833 11.6392 3.51356C11.918 2.79879 12.3506 2.15405 12.9063 1.62499C13.8689 0.711446 15.1467 0.204238 16.4738 0.208894C17.8009 0.213551 19.0751 0.729714 20.0312 1.64999L21.8912 1.65249ZM2.65125 17.2425C4.97875 18.3325 10.4338 19.5162 14.735 17.2625C18.4287 15.3262 20.33 11.3475 20.3862 5.43624C20.3888 5.24077 20.4507 5.0507 20.5637 4.89124L21.915 2.96874L21.8638 2.90249C21.2162 2.89374 20.5775 2.88499 19.9263 2.90249C19.6723 2.89667 19.4292 2.79845 19.2425 2.62624C18.5229 1.89685 17.546 1.47883 16.5215 1.462C15.4971 1.44517 14.5069 1.83088 13.7638 2.53624C13.2864 2.99019 12.9297 3.55585 12.7256 4.18216C12.5216 4.80848 12.4767 5.47574 12.595 6.12374C12.6168 6.24445 12.6107 6.36854 12.5774 6.48658C12.544 6.60462 12.4842 6.71351 12.4025 6.80499C12.3242 6.89726 12.2244 6.96889 12.112 7.01357C11.9995 7.05825 11.8778 7.07462 11.7575 7.06124C8.39902 6.82687 5.2455 5.36006 2.9025 2.94249C2.065 5.53999 1.0025 11.81 7.73875 14.2737C7.88051 14.3246 8.00479 14.4149 8.09692 14.5341C8.18905 14.6532 8.2452 14.7962 8.25875 14.9462C8.27399 15.094 8.24681 15.243 8.1804 15.3758C8.11398 15.5086 8.01108 15.6198 7.88375 15.6962C6.23766 16.4989 4.46924 17.0215 2.65125 17.2425Z"
            fill="#323BAC"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/rutvikghaskata_18/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${
          DarkMode && "dark"
        } ${animate && 'telegram'}`}
      >
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.817 21.1035C17.4072 21.1032 17.0106 20.9588 16.6965 20.6955L12.422 17.1335L9.8905 19.6645C9.78562 19.7693 9.65204 19.8406 9.50664 19.8695C9.36124 19.8984 9.21055 19.8835 9.07358 19.8268C8.93662 19.7701 8.81953 19.6741 8.73711 19.5508C8.65469 19.4276 8.61064 19.2827 8.61051 19.1345V14.1085C8.61046 14.01 8.62982 13.9124 8.66748 13.8214C8.70515 13.7304 8.76037 13.6477 8.83 13.578L12.521 9.88701L6.76051 13.727C6.65677 13.7962 6.53744 13.8384 6.4133 13.8498C6.28916 13.8612 6.16413 13.8415 6.04951 13.7925L1.31401 11.763C0.991929 11.625 0.718527 11.3938 0.529002 11.0991C0.339476 10.8044 0.242505 10.4597 0.250572 10.1094C0.25864 9.75911 0.371377 9.41925 0.574269 9.13358C0.777161 8.84791 1.06092 8.62952 1.38901 8.50651L21.3775 1.01051C21.6771 0.898285 22.0018 0.870087 22.3163 0.928962C22.6308 0.987838 22.9232 1.13155 23.1619 1.34456C23.4007 1.55758 23.5767 1.83179 23.6709 2.13757C23.7651 2.44335 23.774 2.76906 23.6965 3.07951L19.523 19.773C19.4518 20.0616 19.308 20.3272 19.1054 20.5447C18.9027 20.7621 18.6479 20.9242 18.365 21.0155C18.1881 21.0734 18.0032 21.1031 17.817 21.1035ZM12.376 15.3685C12.5514 15.3686 12.7213 15.4302 12.856 15.5425L17.656 19.5425C17.6891 19.5705 17.7288 19.5895 17.7714 19.5978C17.8139 19.606 17.8579 19.6031 17.899 19.5895C17.9404 19.5765 17.9777 19.553 18.0072 19.5213C18.0367 19.4896 18.0575 19.4507 18.0675 19.4085L22.2405 2.71551C22.2516 2.67049 22.2502 2.6233 22.2365 2.57902C22.2227 2.53473 22.1972 2.49503 22.1626 2.46417C22.128 2.43332 22.0856 2.41248 22.0401 2.40391C21.9945 2.39534 21.9475 2.39935 21.904 2.41551L1.91551 9.91051C1.86779 9.92848 1.82654 9.96031 1.79706 10.0019C1.76759 10.0435 1.75123 10.093 1.7501 10.144C1.74897 10.1949 1.76312 10.2451 1.79073 10.288C1.81833 10.3308 1.85813 10.3644 1.90501 10.3845L6.26651 12.2535L15.8795 5.84501C16.086 5.70382 16.338 5.64517 16.5857 5.68065C16.8333 5.71613 17.0587 5.84315 17.2173 6.03665C17.3759 6.23015 17.4562 6.47607 17.4423 6.72587C17.4285 6.97568 17.3215 7.21122 17.1425 7.38601L10.1105 14.419V17.3235L11.8455 15.5885C11.9151 15.5188 11.9978 15.4635 12.0889 15.4257C12.1799 15.388 12.2775 15.3685 12.376 15.3685Z"
            fill="#323BAC"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/rutvik-ghaskata-5a2097221/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${
          DarkMode && "dark"
        } ${animate && 'linkedin'}`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8818 21.6C16.6193 21.6 16.4055 21.387 16.4055 21.1245V13.8975C16.4055 11.2845 15.0645 11.2845 14.559 11.2845C13.1505 11.2845 12.4373 12.1635 12.4373 13.8975V21.1252C12.4373 21.3877 12.2243 21.6007 11.9618 21.6007H7.87501C7.61251 21.6007 7.39951 21.3877 7.39951 21.1252V7.35749C7.39951 7.09499 7.61251 6.88199 7.87501 6.88199H11.9625C12.225 6.88199 12.438 7.09499 12.438 7.35749V7.87049L12.684 7.66724C13.6515 6.86699 14.8058 6.46124 16.1145 6.46124C17.7323 6.46124 19.0943 6.97799 20.0528 7.95674C21.0653 8.99024 21.6 10.5292 21.6 12.4065V21.1252C21.6 21.3877 21.3863 21.6007 21.1238 21.6007H16.8818V21.6ZM14.5598 10.332C15.6053 10.332 17.3588 10.7955 17.3588 13.8975V20.649H20.6475V12.4065C20.6475 9.23324 18.9953 7.41374 16.1145 7.41374C13.542 7.41374 12.4275 9.35624 12.381 9.43874C12.297 9.59099 12.138 9.68549 11.9648 9.68549C11.9258 9.68549 11.886 9.67949 11.8455 9.66974C11.634 9.61649 11.4863 9.42824 11.4863 9.21224V7.83449H8.35126V20.6497H11.4863V13.8975C11.4863 11.6647 12.6353 10.332 14.5598 10.332Z"
            fill="#323BAC"
          />
          <path
            d="M0.885003 21.6C0.622503 21.6 0.408752 21.387 0.408752 21.1245V7.35749C0.408752 7.09499 0.622503 6.88199 0.885003 6.88199H5.14875C5.41125 6.88199 5.62425 7.09499 5.62425 7.35749V21.1245C5.62425 21.387 5.41125 21.6 5.14875 21.6H0.885003ZM1.36125 20.649H4.6725V7.83374H1.36125V20.649Z"
            fill="#323BAC"
          />
          <path
            d="M2.99775 6.02925C1.34475 6.02925 0 4.677 0 3.015C0 1.35225 1.34475 0 2.99775 0C4.6485 0 5.9925 1.353 5.9925 3.01575C5.9925 4.677 4.6485 6.02925 2.99775 6.02925ZM2.99775 0.9495C1.86975 0.9495 0.9525 1.87575 0.9525 3.015C0.9525 4.1535 1.86975 5.07825 2.99775 5.07825C4.125 5.07825 5.0415 4.1535 5.0415 3.015C5.04075 1.8765 4.125 0.9495 2.99775 0.9495Z"
            fill="#323BAC"
          />
        </svg>
      </a>
    </div>
  );
};
function About({ mode }) {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="about"
      className="w-full flex justify-center items-center flex-col about container md:w-9/12 relative"
    >
    {DarkMode && <div className="absolute w-[60%] h-[50%] bottom-0 right-0 gradient-01" />}
      <SocialLinks DarkMode={DarkMode} />
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>ABOUT</h1>
      </div>
      <div className="content w-full flex md:mt-5 flex-col md:flex-row">
        <div className="md:w-2/4 w-full p-5">
          <h1
            className={`font-semibold text-lg mt-5 text-center md:text-star ${
              DarkMode && "text-white"
            }`}
          >
            RUTVIK GHASKATA
          </h1>
          <p className={`text-[#999] mt-5 text-justify	md:tracking-widest ${DarkMode && 'text-[#ccc]'}`}>
            I am a Software developer with 2+year experience have experience in
            a variety of platforms, including web, mobile, and desktop
            applications. I also offer services such as software architecture,
            design, testing, and deployment. I pride myself on delivering
            high-quality solutions that are tailored to meet the specific needs
            of our clients.
          </p>
          <p className={`text-[#999] mt-3 text-justify	md:tracking-widest ${DarkMode && 'text-[#ccc]'}`}>
            I have experience in web development as well as mobile-app
            development. Currently I’m working in React-js, React-native,
            Angular-js, Nodejs, Next-js.
          </p>
        </div>
        <div className="md:w-2/4 md:flex hidden w-full  justify-center">
          <img src={Rutvik} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
