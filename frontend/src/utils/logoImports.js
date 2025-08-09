// Import all logo files
import scootLogo from "../assets/logos/scoot.svg";
import blogrLogo from "../assets/logos/blogr.svg";
import vectorLogo from "../assets/logos/vector.svg";
import officeliteLogo from "../assets/logos/officelite.svg";
import podLogo from "../assets/logos/pod.svg";
import coffeeroastersLogo from "../assets/logos/coffeeroasters.svg";
import creativeLogo from "../assets/logos/creative.svg";
import mastercraftLogo from "../assets/logos/mastercraft.svg";
import typemasterLogo from "../assets/logos/typemaster.svg";
import crowdfundLogo from "../assets/logos/crowdfund.svg";
import makerLogo from "../assets/logos/maker.svg";
import pomodoroLogo from "../assets/logos/pomodoro.svg";

// Create a mapping object for company names to logo imports with background info
const logoMap = {
	Scoot: { src: scootLogo, backgroundColor: "bg-[#E99210]" },
	Blogr: { src: blogrLogo, backgroundColor: "bg-[#E54D25]" },
	Vector: { src: vectorLogo, backgroundColor: "bg-[#34353F]" },
	"Office Lite": { src: officeliteLogo, backgroundColor: "bg-[#2F4FC7]" },
	Pod: { src: podLogo, backgroundColor: "bg-[#132034]" },
	Coffeeroasters: { src: coffeeroastersLogo, backgroundColor: "bg-[#F2DECB]" },
	Creative: { src: creativeLogo, backgroundColor: "bg-[#4E1853]" },
	Mastercraft: { src: mastercraftLogo, backgroundColor: "bg-[#1F1F1F]" },
	Typemaster: { src: typemasterLogo, backgroundColor: "bg-[#F16718]" },
	Crowdfund: { src: crowdfundLogo, backgroundColor: "bg-[#37C790]" },
	Maker: { src: makerLogo, backgroundColor: "bg-[#21427D]" },
	Pomodoro: { src: pomodoroLogo, backgroundColor: "bg-[#4722C6]" },
};

// Function to get logo by company name
export const getLogoByCompany = (companyName) => {
  return logoMap[companyName] || null;
};

// Function to get logo with fallback
export const getLogoWithFallback = (companyName) => {
  const logoData = getLogoByCompany(companyName);
  if (!logoData) {
    console.warn(`Logo not found for company: ${companyName}`);
    return null;
  }
  return logoData;
};

export default logoMap;
