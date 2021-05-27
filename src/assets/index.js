import siteLogo from "./Logo.png";
import homeBlog from "./home/home-blog.png";
import homeDirectory from "./home/home-directory.jpg";
import homeDonor from "./home/home-donor.png";
import contactUS from "./contactUs/contactUs.png";
import contactUs_LHSPatch from "./contactUs/contactUs_LHSPatch.png";
import contactUs_LinesGraphic from "./contactUs/contactUs_LinesGraphic.png";
import contactUs_PostIt from "./contactUs/contactUs_PostIt.png";
import home_directory_MainIllustration from "./home/directory/directory_MainIllustration.png";
import home_directory_LHSGraphic from "./home/directory/directory_LHSGraphic.png";
import home_blog_MainIllustration from "./home/blog/blog_MainIllustration.png";
import home_donor_MainIllustration from "./home/donor/donor_MainIllustration.png";
import home_donor_LHSPuzzle from "./home/donor/donor_LHSPuzzle.png";
import directory_LHSPatch from "./directory/directory_LHSPatch.png";
import directory_RHSPatch from "./directory/directory_RHSPatch.png";
import directory_Spiral from "./directory/directory_Spiral.png";
import directory_RedLine from "./directory/directory_RedLine.png";
// import directory_Dp01 from "./directory/directory_Dp01.png";
// import * from
import directory_SearchIcon from "./directory/directory_SearchIcon.png";

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
};
