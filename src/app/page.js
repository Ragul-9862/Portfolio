"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import Image from "next/image";
                    

export default function Home() {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.from_name.value;
    const email = form.current.from_email.value;

    if (!name || !email) {
      alert("Please fill in all the required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_i0jrr3j",
        "template_sq28ygw",
        form.current,
        "GZGpMXPuVsCOzZ_wk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setIsFormValid(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const [darkmode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(!darkmode);
  };
  ////cursor////

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });
  console.log(cursor);

  useEffect(() => {
    const cursormove = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", cursormove);

    return () => {
      window.removeEventListener("mousemove", cursormove);
    };
  }, []);

  const variants = {
    default: {
      x: cursor.x,
      y: cursor.y,
    },
  };

  ///Resume///


  const handledownload = () => {
    const doc = new jsPDF();
  
  
    const imagePath = './assets/ragulresume.jpg';
    doc.addImage(imagePath, 'JPEG', 0, 0, 210, 297);
    doc.save("resume.pdf");


    const pdfPath = './Users/DABC/Downloads/resume%20(14).pdf';

    window.open(pdfPath, '_blank');
  }
  
  



  return (
    <div className={darkmode ? "dark" : ""}>
      <main className="bg-white px-10 md:text-center md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-extrabold dark:text-white">
              PORTFOLIO
            </h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill
                  onClick={handleClick}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li id="shake">
                <a  
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  onClick={handledownload}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 dark:text-white">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ragul M
            </h2>

            <motion.div
              className="custom-cursor"
              variants={variants}
              initial="default"
              animate="default"
            />

            <h3 className="text-2xl py-2 md:text-xl max-w-lg mx-auto">
            I&apos;m a
              <span className="text-teal-600 text-2xl font-semi-bold md:text-3xl font-bold ">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Ui/Ux Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Web Developer")
                      .start();
                  }}
                />
              </span>
            </h3>
            <p className="text-md py-5 md:text-xl leading-8">
              Experienced web developer and UI/UX designer with over 6 months of
              hands-on expertise, creating user-friendly digital solutions and
              engaging interfaces.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-0 text-gray-600">
            <a target="blank" href="https://github.com/Ragul-9862">
              <AiOutlineGithub />
            </a>
            <a target="blank" href="https://www.linkedin.com/in/ragul-ragul24/">
              <AiFillLinkedin />
            </a>
            <a target="blank" href="https://www.instagram.com/_.ragul._m/">
              <AiOutlineInstagram />
            </a>
          </div>
          <div id="bounce" className="relative mx-auto bg-gradient-to-b  from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={"./assets/me.png"} alt="Your Alt Text" />
          </div>
          <div className="dark:text-white py-5">
            <h3 className="text-3xl py-4 md:text-5xl font-semibold font-serif ">
              Services I Offer
            </h3>
            <p className="py-2  text-gray-80 ">
              As a highly skilled and collaborative professional, I offer a wide
              range of services to support web developers and UI/UX designers. I
              excel in creating pixel-perfect and user-centric design mockups,
              wireframes, and prototypes that seamlessly bridge the gap between
              creative vision and technical implementation.
            </p>
            <p>
              <span>
                {" "}
                My expertise extends to conducting{" "}
                <span className="text-teal-500">
                  user research, usability testing,
                </span>{" "}
                and crafting intuitive user experiences that enhance product
                functionality.
              </span>
              I am also proficient in responsive design, providing developers
              with design assets that adapt flawlessly to various screen sizes
              and devices, ultimately contributing to the overall success and
              quality of digital projects.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="w-16 h-16 relative left-32 md:relative md:left-56 lg:relative lg:left-36 "
                src={"./assets/design.png"}
                alt="Your Alt Text"
              />
              <h3>Beautiful Designs</h3>
              <p className="font-medium text-lg pt-8 pb-2">
                User-friendly and mobile-responsive designs are meticulously
                crafted to provide a seamless and intuitive user experience.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Html</p>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React Js</p>
              <p className="text-gray-800 py-1">Node Js</p>
              <p className="text-gray-800 py-1">Mongo DB</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="w-16 h-16 relative left-32 md:relative md:left-56 lg:relative lg:left-40"
                src={"./assets/design2.png"}
                alt="Your Alt Text"
              />
              <h3>User Experience</h3>
              <p className="font-medium text-lg pt-8 pb-2">
                I prioritize user satisfaction, accessibility, and efficiency
                through systematic UX design in the websites and apps I create.
              </p>
              <h4 className="py-4 text-teal-600">I were Expertise in</h4>
              <p className="text-gray-800 py-1">User-friendly Design</p>
              <p className="text-gray-800 py-1">Mobile Responsive</p>
              <p className="text-gray-800 py-1">Cross-functionality</p>
              <p className="text-gray-800 py-1">Authentication expert</p>
              <p className="text-gray-800 py-1">Wire-framming</p>
              <p className="text-gray-800 py-1">Familiar in Plugins</p>
              <p className="text-gray-800 py-1">Prototype Usability</p>
              <p className="text-gray-800 py-1">Usability Testing</p>
              <p className="text-gray-800 py-1">
                Version Control and Collaboration Tools
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className=" py-1 text-4xl font-bold md:text-6xl md:font-bold font-serif">
              Projects
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a target="blank" href="https://touristertour.netlify.app/">
                {" "}
                <Image
                  className="rounded-lg object-cover "
                  src="./assets/web3.png"
                  alt="Your Alt Text"
                />{" "}
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                target="blank"
                href="https://weather-forecasting-world.netlify.app"
              >
                {" "}
                <Image
                  className="rounded-lg object-cover "
                  src="./assets/web2.png"
                  alt="Your Alt Text"
                />{" "}
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="blank" href="https://chatbuddychat.netlify.app">
                {" "}
                <Image
                  className="rounded-lg object-cover border"
                  src="./assets/web1.png"
                  alt="Your Alt Text"
                />{" "}
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="blank" href="https://e-bay-ecommerce.netlify.app/">
                <Image
                  className="rounded-lg object-cover border"
                  src="./assets/web4.png"
                  alt="Your Alt Text"
                />
              </a>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-4xl font-bold py-5 md:text-6xl md:font-bold dark:text-white font-serif">
            Contact Me
          </h1>
          <div className="shadow-lg p-6 dark:bg-white rounded-lg">
            <form
              className="flex flex-col gap-5 py-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="text-gray-800 font-semibold text-2xl ">
                Name
              </label>
              <input
                placeholder="Your Name"
                className="border-2 rounded-md py-2 pl-2"
                type="text"
                name="from_name"
                required
              />
              <label className="text-gray-800 font-semibold text-2xl ">
                Email
              </label>
              <input
                placeholder="Your Email"
                className="border-2 rounded-md py-2 pl-2"
                type="email"
                name="from_email"
                required
              />
              <label className="text-gray-800 font-semibold text-2xl ">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="border-2 rounded-md py-2 pl-2"
                rows={5}
                cols={20}
                name="message"
              />
              <input
                className="bg-cyan-500 text-white px-4 py-2 rounded-md"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          {isFormValid && (
            <div className="text-green-600 shadow-lg font-bold">
              All done! Your message has been sent.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
