import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social__container">
        <a
          className="social__item"
          target="_blank"
          href="https://www.youtube.com/channel/UCP8Z4fMbxdP2bfCSbmkSuDg"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <a
          className="social__item"
          href="https://www.instagram.com/kjh__cc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="social__item"
          href="https://www.linkedin.com/in/kimjaehu"
          target="_blank"
          rel="noopener noreferrer"
        >
          LnkedIn
        </a>
        <p>© 2021 Jay Kim. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
