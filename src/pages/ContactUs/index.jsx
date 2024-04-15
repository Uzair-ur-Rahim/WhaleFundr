import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, TextArea, Input } from "../../components";
import Header from "../../components/Header";

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>WhaleFundr</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-gray-900_01 pt-[30px] sm:pt-5">
        <Header className="relative w-[77%] md:w-full md:p-5" />
        <div className="flex flex-col gap-36 self-stretch md:gap-[108px] sm:gap-[72px]">
          <div className="flex flex-col items-center gap-[150px] md:gap-28 sm:gap-[75px]">
            <div className="relative h-[1150px] self-stretch">
              <div className="absolute right-[0.00px] top-[0.00px] m-auto h-[807px] w-[807px] md:h-auto">
                <Img
                  src="images/img_map_2.png"
                  alt="maptwo_one"
                  className=" opacity-5 h-[807px] w-full object-cover"
                />
                <Img
                  src="images/img_contact_us_hero.png"
                  alt="contactushero"
                  className="absolute left-[7%] top-[7%] m-auto h-[657px] w-[54%] object-cover"
                />
              </div>
              <div className="absolute left-[0.00px] top-[0.00px] m-auto h-[807px] w-[807px] rotate-[180deg] md:h-auto">
                <Img
                  src="images/img_map_2_807x807.png"
                  alt="maptwo_three"
                  className=" opacity-5 h-[807px] w-full object-cover"
                />
                <div className="absolute right-[4%] top-[19%] m-auto flex flex-col items-start gap-[231px] md:gap-[173px] sm:gap-[115px]">
                  <a href="#"></a>
                </div>
              </div>
              <div className="absolute left-[12%] top-[18%] m-auto flex w-[38%] flex-col gap-[113px] md:gap-[84px] sm:gap-14">
                <Heading size="xl" as="h2">
                  CONNECT WITH US
                </Heading>
                <div className="flex items-start gap-[30px] md:flex-col">
                  <div className="flex w-[43%] md:w-full md:p-5">
                    <Img
                      src="images/img_subtract.png"
                      alt="subtract_one"
                      className="h-[90px] w-[24%] object-cover"
                    />
                    <Img
                      src="images/img_subtract_90x72.png"
                      alt="subtract_three"
                      className="relative ml-[-2px] h-[90px] w-[24%] object-cover"
                    />
                    <Img
                      src="images/img_subtract_1.png"
                      alt="subtract_five"
                      className="relative z-[1] ml-[-2px] h-[90px] w-[24%] object-cover"
                    />
                    <Img
                      src="images/img_ellipse_9.png"
                      alt="circleimage"
                      className="relative ml-[-2px] h-[90px] w-[90px] rounded-[50%]"
                    />
                  </div>
                  <div className="mt-1.5 flex flex-1 flex-col items-start md:self-stretch md:p-5">
                    <Heading size="s" as="h3">
                      15 Million+
                    </Heading>
                    <Heading as="h4">Be part of growing community</Heading>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0.85px] left-0 right-0 m-auto flex w-[51%] flex-col items-center gap-[58px] sm:gap-[29px]">
                <a href="#">
                  <Heading size="lg" as="h5" className="text-center">
                    Contact Us
                  </Heading>
                </a>
                <div className="flex gap-[30px] self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-center gap-11 rounded-[15px] bg-gray-900_7f p-[42px] md:p-5">
                    <Img
                      src="images/img_vector_blue_800.svg"
                      alt="image"
                      className="mt-4 h-[63px] w-[23%]"
                    />
                    <Heading as="h6" className="text-center">
                      Noe_Rempel30@yahoo.com
                    </Heading>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[29px] rounded-[15px] bg-gray-900_7f p-11 md:p-5">
                    <Img
                      src="images/img_call.svg"
                      alt="call_one"
                      className="h-[90px] w-[90px]"
                    />
                    <Heading as="h4" className="text-center">
                      275-437-1694
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1470px] flex-col gap-[150px] md:gap-28 md:p-5 sm:gap-[75px]">
              <div className="flex items-center justify-between gap-5 rounded-[60px] bg-gradient pl-[59px] md:flex-col md:pl-5">
                <div className="flex w-[36%] flex-col gap-[58px] md:w-full sm:gap-[29px]">
                  <div className="flex flex-col items-start gap-[30px]">
                    <Heading size="s" as="h1">
                      Address:
                    </Heading>
                    <Text as="p">
                      <>
                        Quadrio offices
                        <br />
                        Purkynova 2121/3 110 00 Prague, Czech Republic
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-[30px]">
                    <Heading size="s" as="h1">
                      Business Hours:
                    </Heading>
                    <Text as="p">
                      24/7 for emails, live chat and WhatsApp 9 am – 5 pm
                      CE(S)T, Monday to Friday for phone calls
                    </Text>
                  </div>
                </div>
                <div className="relative h-[548px] w-[60%] md:h-auto md:w-full">
                  <Img
                    src="images/img_map_1.png"
                    alt="mapone_one"
                    className="h-[548px] w-full rounded-br-[60px] rounded-tr-[60px] object-cover"
                  />
                  <div className="absolute bottom-[11%] right-[0.00px] m-auto flex w-[28%] flex-col gap-[15px]">
                    <Button
                      size="lg"
                      variant="gradient"
                      color="gray_900_01_blue_800"
                      leftIcon={
                        <Img
                          src="images/img_search.svg"
                          alt="search"
                          className="h-[30px] w-[30px]"
                        />
                      }
                      className="w-full gap-[15px] rounded-bl-[45px] rounded-tl-[45px] font-montserrat font-semibold sm:px-5"
                    >
                      Zoom In
                    </Button>
                    <Button
                      size="lg"
                      variant="gradient"
                      color="gray_900_01_blue_800"
                      leftIcon={
                        <Img
                          src="images/img_search_blue_800.svg"
                          alt="search"
                          className="h-[30px] w-[30px]"
                        />
                      }
                      className="w-full gap-[15px] rounded-bl-[45px] rounded-tl-[45px] font-montserrat font-semibold sm:px-5"
                    >
                      Zoom Out
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[30px] md:flex-col">
                <div className="mb-1.5 flex flex-1 flex-col items-start rounded-[60px] bg-gradient py-[60px] pl-[60px] pr-14 md:self-stretch md:p-5">
                  <Heading size="lg" as="h1" className="mt-[5px]">
                    Stay Connected
                  </Heading>
                  <div className="mt-[52px] flex flex-col items-start gap-[15px] self-stretch">
                    <a href="#">
                      <Text as="p">Your Name</Text>
                    </a>
                    <Input shape="round" name="name" />
                  </div>
                  <div className="mt-7 flex flex-col items-start gap-[15px] self-stretch">
                    <a href="#">
                      <Text as="p">Your Email</Text>
                    </a>
                    <Input shape="round" name="email" />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-[13px] self-stretch">
                    <a href="#">
                      <Text as="p">Your Message</Text>
                    </a>
                    <TextArea
                      shape="round"
                      name="textarea"
                      className="self-stretch"
                    />
                  </div>
                  <div className="mt-[30px] flex items-center gap-[15px]">
                    <Img
                      src="images/img_attach.svg"
                      alt="attach_one"
                      className="h-[30px] w-[30px]"
                    />
                    <a href="#">
                      <Text as="p" className="underline">
                        Attach Files
                      </Text>
                    </a>
                  </div>
                  <Button
                    shape="round"
                    className="mt-[30px] min-w-[210px] font-medium sm:px-5"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gradient pt-[88px] md:pt-5">
            <div className="flex flex-col items-center justify-center gap-[88px] md:gap-[66px] sm:gap-11">
              <div className="mx-auto flex w-full max-w-[1470px] items-start justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[32%] flex-col gap-6 md:w-full">
                  <Img
                    src="images/img_whale_logo_1.png"
                    alt="whalelogoone"
                    className="h-[60px] w-[47%] object-cover"
                  />
                  <Text as="p" className="!text-white-A700_01">
                    Animi distinctio quia amet possimus sit. Voluptatum sunt
                    corrupti iste voluptas itaque hic. Dolore sed quia et totam.
                  </Text>
                  <div className="flex flex-col items-start gap-7">
                    <a href="#">
                      <Heading as="h4">Contact Us</Heading>
                    </a>
                    <div className="flex items-center gap-[15px]">
                      <Img
                        src="images/img_vector_blue_800.svg"
                        alt="vector_seven"
                        className="h-[20px] self-start"
                      />
                      <Text as="p">Noe_Rempel30@yahoo.com</Text>
                    </div>
                    <div className="flex items-center gap-[15px]">
                      <Img
                        src="images/img_call.svg"
                        alt="call_one"
                        className="h-[29px] w-[30px]"
                      />
                      <Text as="p">275-437-1694</Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[54%] items-start justify-between gap-5 md:w-full md:flex-col">
                  <div className="flex flex-col items-start gap-[27px]">
                    <Heading as="h4">About us</Heading>
                    <ul className="flex flex-col items-start gap-[13px]">
                      <li>
                        <a href="#">
                          <Text as="p">Evaluation Process</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Trading Objectives</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Why our FTMO Challenge?</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Testimonials</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Scaling Plan</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Affiliate Programme</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Terms & Conditions</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Careers</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Press Kit</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-0.5 flex flex-col items-start gap-[25px]">
                    <Heading as="h4">Trading</Heading>
                    <ul className="flex flex-col items-start gap-3.5">
                      <li>
                        <a href="#">
                          <Text as="p">Calendar</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Shop</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">FTMO Academy</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Premium Programme</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-0.5 flex flex-col items-start gap-6">
                    <Heading as="h4">Apps</Heading>
                    <ul className="flex flex-col items-start gap-[13px]">
                      <li>
                        <a href="#">
                          <Text as="p">News Indicator</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Quick Trade Manager</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Equity Simulator</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Mentor App</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Trading Journal</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Statistical App</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Account Analysis</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Account MetriX</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center self-stretch bg-blue-800 p-[13px]">
                <div className="mx-auto mt-4 flex w-full max-w-[1461px] items-start justify-between gap-5 md:flex-col">
                  <Text
                    as="p"
                    className="w-[75%] !text-white-A700_01 md:w-full"
                  >
                    All information provided on this site is intended solely for
                    educational purposes related to trading on financial markets
                    and does not serve in any way as a specific investment
                    recommendation, business recommendation, investment
                    opportunity analysis or similar general recommendation
                    regarding the trading of investment instruments. FTMO only
                    provides services of simulated trading and educational tools
                    for traders. The information on this site is not directed at
                    residents in any country or jurisdiction where such
                    distribution or use would be contrary to local laws or
                    regulations. FTMO companies do not act as a broker and do
                    not accept any deposits. The offered technical solution for
                    the FTMO platforms and data feed is powered by liquidity
                    providers.
                  </Text>
                  <ul className="flex flex-col items-start gap-3">
                    <li>
                      <a href="#">
                        <Heading as="h4">Contact Options</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h4">Privacy Policy</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h4">Cookies</Heading>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mx-auto mt-6 h-[3px] w-full max-w-[1470px] bg-indigo-900 md:p-5" />
                <Text
                  as="p"
                  className="ml-[211px] mt-3 self-start !text-white-A700_01 md:ml-0"
                >
                  2023 © Copyright - FTMO.com Made with for trading
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
