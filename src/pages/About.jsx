import { FiMonitor, FiPenTool, FiDownload, FiMail } from "react-icons/fi";
import { FaLinkedin, FaFacebookF, FaGithub } from "react-icons/fa";
import profilePic from "../assets/SelfImg.png";
import CV from "../assets/KylaRosaldo_CV.pdf"

export default function About() {
  return (
    <div className="w-full text-white">
      <div className="w-full gap-3 grid grid-cols-1 md:grid-cols-12 items-center">
        {/* Left: photo */}
        <div className="flex justify-center md:justify-end md:pr-4 md:col-span-4">
          <div className="w-50 h-55 md:w-80 md:h-80 overflow-hidden shadow-lg">
            <img
              src={profilePic}
              alt="Profile photo"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right: content */}
        <div className="w-full text-center md:text-left md:pr-5 md:col-span-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-center md:text-left">
            About Me
          </h2>
          <h3 className="text-xl md:text-2xl text-[#ffde59] font-semibold mb-4 text-center md:text-left">
            Front-end Web Developer
          </h3>

          <p className="text-sm text-white/80 leading-relaxed text-center md:text-left">
            With a genuine interest in designing responsive and modern user
            interfaces for web applications, I value creating layouts that are
            both visually appealing and easy to use. While I’m continuously
            learning and refining my skills, I always strive to deliver my best
            and approach every project with dedication and professionalism.
          </p>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-[#ffde59] bg-black rounded-lg p-4 flex items-start gap-4 text-left">
              <div className="text-md text-black bg-[#ffde59] p-2 rounded-md">
                <FiMonitor />
              </div>
              <div>
                <div className="font-semibold">Web Development</div>
                <div className="text-xs text-white/80">
                  Building responsive and modern interfaces that bring designs
                  to life.
                </div>
              </div>
            </div>

            <div className="border border-[#ffde59] bg-black rounded-lg p-4 flex items-start gap-4 text-left">
              <div className="text-md text-black bg-[#ffde59] p-2 rounded-md">
                <FiPenTool />
              </div>
              <div>
                <div className="font-semibold">UI/UX Design</div>
                <div className="text-xs text-white/80">
                  Designing intuitive and visually engaging interfaces for web
                  and game projects.
                </div>
              </div>
            </div>
          </div>

          {/* Socials + CV */}
          <div className="mt-6 flex flex-row flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kylarosaldo/"
                aria-label="LinkedIn"
                className="text-white/90 hover:text-[#ffde59] text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:kylabridgetr@gmail.com"
                aria-label="Email"
                className="text-white/90 hover:text-[#ffde59] text-lg"
              >
                <FiMail />
              </a>
              <a
                href="https://www.facebook.com/kylarosaldo"
                aria-label="Facebook"
                className="text-white/90 hover:text-[#ffde59] text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/KylaBridge"
                aria-label="GitHub"
                className="text-white/90 hover:text-[#ffde59] text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div>
              <a
                href={CV}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#ffde59] rounded-full text-[#ffde59] hover:bg-[#ffde59] hover:text-black transition-all duration-200"
                download="KylaRosaldo_CV.pdf"
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
