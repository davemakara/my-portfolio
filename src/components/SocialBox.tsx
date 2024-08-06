import socialLinkedin from "../assets/social-linkedin.svg";
import socialGithub from "../assets/social-github.svg";
import socialInstagram from "../assets/social-instagram.png";
import socialFacebook from "../assets/social-facebook.png";

const SocialBox = () => {
  return (
    <div className="absolute z-10 hidden top-1/2 left-0 p-[5px] bg-white rounded-r-md shadow-md shadow-black -translate-y-1/2 lg:block">
      <ul className="block">
        <li>
          <a
            href="https://www.linkedin.com/in/davidmakarov/"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-colors duration-500 ease-out hover:bg-gray-light"
          >
            <img src={socialLinkedin} alt="linkedin logo" className="w-7" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/davemakara"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-all duration-500 ease-out hover:bg-gray-light"
          >
            <img src={socialGithub} alt="github logo" className="w-7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/davemakaraa/"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-all duration-500 ease-out hover:bg-gray-light"
          >
            <img src={socialInstagram} alt="instagram logo" className="w-7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/DavidMakarovv"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-all duration-500 ease-out hover:bg-gray-light"
          >
            <img src={socialFacebook} alt="linkedin logo" className="w-7" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBox;
