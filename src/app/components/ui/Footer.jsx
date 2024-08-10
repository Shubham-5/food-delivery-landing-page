import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-12 flex justify-evenly items-center min-h-[45vh]">
      <div className="flex flex-col lg:flex-row w-full justify-around items-center">
        <div className="flex items-center py-20 lg:py-0">
          <Image
            className="logo-app-footer"
            src="/logo.png"
            alt="logo img"
            width={135}
            height={50}
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="space-y-4 text-gray-600 text-sm w-[80vw] lg:w-[18vw] pl-10 lg:ml-0 text-left">
            <h5 className="font-bold text-blue-900 text-lg lg:text-sm ">
              Contact Us
            </h5>
            <p>
              Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
          <div className="space-y-4 pl-10 mt-10 lg:mt-0 text-gray-600 w-[80vw] text-sm lg:w-[20vw] lg:text-center text-left">
            <h5 className="font-bold text-blue-900 text-lg lg:text-sm">More</h5>
            <p>About Us</p>
            <p>Products</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="space-y-4 text-gray-600 w-[80vw] lg:w-[15vw] text-center lg:text-right">
            <h5 className="font-bold text-blue-900 text-lg hidden lg:text-sm lg:flex lg:justify-end">
              Social Links
            </h5>
            <div className="flex flex-col-reverse lg:flex-col items-center lg:items-end gap-y-5 lg:gap-y-0 min-h-[140px] mt-12 lg:mt-0">
              <div className="flex gap-x-5 justify-center">
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
              <div className="copywrite text-gray-600 text-sm lg:text-right md:mt-24">
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
