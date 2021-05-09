import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <li>
          {" "}
          <strong>Links</strong>{" "}
        </li>
        <li> Work With Us </li>
        <li> For Mental Health Professionals </li>
        <li> Helplines </li>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            {" "}
            <strong>Contact Us</strong>{" "}
          </li>
          <li>9876543210</li>
          <li>ask@thedebutproj.in</li>

          <li className="footer-social-media-icons footer-facebook">
            <ion-icon name="logo-facebook">
              <a href="#"></a>
            </ion-icon>
          </li>
          <li className="footer-social-media-icons footer-instagram">
            <ion-icon name="logo-instagram">
              <a href="#"></a>
            </ion-icon>
          </li>
          <li className="footer-social-media-icons footer-linkedin">
            <ion-icon name="logo-linkedin">
              <a href="#"></a>
            </ion-icon>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
