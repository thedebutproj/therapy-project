import {
  footer_facebook,
  footer_instagram,
  footer_linkedIn,
} from "../../assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <ul>
          <li>
            {" "}
            <a href="/termsandprivacy">Terms of Use/Privacy Policy</a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://forms.gle/mqz9vPZVs1Sx5Cv89">
              For Mental Health Professionals
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://www.thelivelovelaughfoundation.org/find-help/helplines">
              Helplines
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li>Copyright © 2021 The Debut Project. </li>
          <li>All rights reserved.</li>

          <li className="footer-social-media-icons footer-facebook">
            {/* <ion-icon name="logo-facebook">
              <a href="#"></a>
            </ion-icon> */}

            <a href="https://www.facebook.com/thedebutproj/">
              {" "}
              <img src={footer_facebook} />
            </a>
          </li>
          <li className="footer-social-media-icons footer-instagram">
            {/* <ion-icon name="logo-instagram">
              <a href="#"></a>
            </ion-icon> */}
            <a href="https://www.instagram.com/thedebutproj/">
              {" "}
              <img src={footer_instagram} />
            </a>
          </li>
          <li className="footer-social-media-icons footer-linkedin">
            {/* <ion-icon name="logo-linkedin">
              <a href="#"></a>
            </ion-icon> */}
            <a href="https://www.linkedin.com/company/thedebutproject">
              {" "}
              <img src={footer_linkedIn} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
