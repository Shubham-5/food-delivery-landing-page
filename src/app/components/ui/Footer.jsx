import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-wrapper bg-gray-100 mt-12 flex justify-evenly items-center min-h-[45vh]">
      <div className="inner-footerwhole flex flex-col lg:flex-row w-full justify-around items-center">
        <div className="logo-app-foot flex items-center">
          <Image
            className="logo-app-footer"
            src="/logo.png"
            alt="logo img"
            width={135}
            height={50} // Adjust the height as needed
          />
        </div>
        <div className="inner-footer-wrapper flex flex-col lg:flex-row">
          <div className="contactUs-sec foot-sec text-gray-600 w-[80vw] lg:w-[18vw] ml-[10vw] lg:ml-0 text-center lg:text-left">
            <h5 className="footer-sec text-blue-900 text-lg lg:text-sm">
              Contact Us
            </h5>
            <p>
              Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
          <div className="more-sec foot-sec text-gray-600 w-[80vw] lg:w-[20vw] text-center">
            <h5 className="footer-sec text-blue-900 text-lg lg:text-sm">
              More
            </h5>
            <p>About Us</p>
            <p>Products</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="socialLinks-sec foot-sec text-gray-600 w-[80vw] lg:w-[15vw] text-center lg:text-right">
            <h5 className="footer-sec text-blue-900 text-lg lg:text-sm lg:flex lg:justify-end">
              Social Links
            </h5>
            <div className="socail-foot flex flex-col-reverse lg:flex-col items-center lg:items-end gap-y-5 lg:gap-y-0 min-h-[140px] mt-12 lg:mt-0">
              <div className="social-logo flex gap-x-5 justify-center">
                <Image
                  className="social"
                  src="/insta.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <Image
                  className="social"
                  src="/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
                <Image
                  className="social"
                  src="/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </div>
              <div className="copywrite text-gray-600 text-sm lg:text-right">
                © 2022 Food Truck Example
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
