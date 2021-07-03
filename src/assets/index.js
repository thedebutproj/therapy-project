import siteLogo from "./Logo.png";

// Might need to delete
import homeBlog from "./home/home-blog.png";
import homeDirectory from "./home/home-directory.jpg";
import homeDonor from "./home/home-donor.png";

//Footer imports
import footer_facebook from "./footer/footer_facebook.png";
import footer_instagram from "./footer/footer_instagram.png";
import footer_linkedIn from "./footer/footer_linkedIn.png";

// Contact Us page imports
import contactUS from "./contactUs/contactUs.png";
import contactUs_LHSPatch from "./contactUs/contactUs_LHSPatch.png";
import contactUs_LinesGraphic from "./contactUs/contactUs_LinesGraphic.png";
import contactUs_PostIt from "./contactUs/contactUs_PostIt.png";

// Home imports
import home_FullBGWithText from "./home/home_FullBGWithText.png";
import home_directory_MainIllustration from "./home/directory/directory_MainIllustration.png";
import home_directory_LHSGraphic from "./home/directory/directory_LHSGraphic.png";
import home_blog_MainIllustration from "./home/blog/blog_MainIllustration.png";
import home_donor_MainIllustration from "./home/donor/donor_MainIllustration.png";
import home_donor_LHSPuzzle from "./home/donor/donor_LHSPuzzle.png";

// Directory imports
import directory_LHSPatch from "./directory/directory_LHSPatch.png";
import directory_RHSPatch from "./directory/directory_RHSPatch.png";
import directory_Spiral from "./directory/directory_Spiral.png";
import directory_RedLine from "./directory/directory_RedLine.png";
import directory_SearchIcon from "./directory/directory_SearchIcon.png";

// Individual directory page or profile imports
import profile_LogoInstagram from "./profile/profile_LogoInstagram.png";
import profile_LogoLinkedin from "./profile/profile_LogoLinkedin.png";
import profile_LogoTwitter from "./profile/profile_LogoTwitter.png";
import profile_LogoWebsite from "./profile/profile_LogoWebsite.png";
import profile_Section_ContactPostit from "./profile/profile_Section_ContactPostit.png";
import profile_Section_SchedulePostit from "./profile/profile_Section_SchedulePostit.png";
import profile_Section_PricingPostit from "./profile/profile_Section_PricingPostit.png";
import profile_Section_BackgroundPostit from "./profile/profile_Section_BackgroundPostit.png";
import profile_Section_SessionPostit from "./profile/profile_Section_SessionPostit.png";
import profile_Section_AddInfoPostit from "./profile/profile_Section_AddInfoPostit.png";
import profile_Section_ScheduleDaysOFF from "./profile/profile_Section_ScheduleDaysOFF.png";
import profile_Section_ScheduleIcon from "./profile/profile_Section_ScheduleIcon.png";
import profile_Section_ContactLocation from "./profile/profile_Section_ContactLocation.png";
import profile_SquigglyPointer from "./profile/profile_SquigglyPointer.png";
import profile_JumpToArrow from "./profile/profile_JumpToArrow.png";
import profile_YellowNameBlob from "./profile/profile_YellowNameBlob.png";
import profile_Section_S_OFF from "./profile/profile_Section_S_OFF.png";
import profile_Section_S_ON from "./profile/profile_Section_S_ON.png";
import profile_Section_M_OFF from "./profile/profile_Section_M_OFF.png";
import profile_Section_M_ON from "./profile/profile_Section_M_ON.png";
import profile_Section_T_OFF from "./profile/profile_Section_T_OFF.png";
import profile_Section_T_ON from "./profile/profile_Section_T_ON.png";
import profile_Section_W_OFF from "./profile/profile_Section_W_OFF.png";
import profile_Section_W_ON from "./profile/profile_Section_W_ON.png";
import profile_Section_F_OFF from "./profile/profile_Section_F_OFF.png";
import profile_Section_F_ON from "./profile/profile_Section_F_ON.png";

// Blog imports
import blog_CLOUD1 from "./blog/blog_CLOUD1.png";
import blog_CLOUD2 from "./blog/blog_CLOUD2.png";

// Donor imports
import donor_BenefitsDetails from "./donor/donor_BenefitsDetails.png";
import donor_MainIllustration from "./donor/donor_MainIllustration.png";

// Function for importing all the files in the Therapist Images in the directory folder
function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images.push(r(item));
  });
  return images;
}

const therapistImages = importAll(
  require.context("./directory/Therapist_Images", false, /\.(png|jpe?g|svg)$/)
);

export {
  siteLogo,
  homeBlog,
  homeDonor,
  homeDirectory,
  contactUS,
  contactUs_LHSPatch,
  contactUs_PostIt,
  contactUs_LinesGraphic,
  home_FullBGWithText,
  home_directory_MainIllustration,
  home_directory_LHSGraphic,
  home_blog_MainIllustration,
  home_donor_MainIllustration,
  home_donor_LHSPuzzle,
  directory_LHSPatch,
  directory_RHSPatch,
  directory_Spiral,
  directory_RedLine,
  therapistImages,
  directory_SearchIcon,
  profile_LogoInstagram,
  profile_LogoLinkedin,
  profile_LogoTwitter,
  profile_LogoWebsite,
  profile_Section_ScheduleDaysOFF,
  profile_Section_ScheduleIcon,
  profile_Section_ContactLocation,
  profile_SquigglyPointer,
  profile_JumpToArrow,
  blog_CLOUD1,
  blog_CLOUD2,
  donor_BenefitsDetails,
  donor_MainIllustration,
  profile_Section_ContactPostit,
  profile_Section_SchedulePostit,
  profile_Section_PricingPostit,
  profile_Section_BackgroundPostit,
  profile_Section_SessionPostit,
  profile_Section_AddInfoPostit,
  profile_YellowNameBlob,
  profile_Section_S_OFF,
  profile_Section_S_ON,
  profile_Section_M_OFF,
  profile_Section_M_ON,
  profile_Section_T_OFF,
  profile_Section_T_ON,
  profile_Section_W_OFF,
  profile_Section_W_ON,
  profile_Section_F_OFF,
  profile_Section_F_ON,
  footer_facebook,
  footer_instagram,
  footer_linkedIn,
};
