import React from "react";
import { Text, Heading, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex w-full flex-col items-center justify-center gap-[90px] md:gap-[67px] sm:gap-[45px]">
        <div className="mx-auto flex w-full max-w-[1470px] items-start justify-between gap-5 md:flex-col md:p-5">
          <div className="flex w-[32%] flex-col gap-[25px] md:w-full">
            <Img src="images/img_whale_logo_1.png" alt="whalelogoone" className="h-[61px] w-[47%] object-cover" />
            <Text as="p" className="!text-white-A700_01">
              Animi distinctio quia amet possimus sit. Voluptatum sunt corrupti iste voluptas itaque hic. Dolore sed
              quia et totam.
            </Text>
            <div className="flex flex-col items-start gap-[29px]">
              <a href="#">
                <Heading as="h4">Contact Us</Heading>
              </a>
              <div className="flex items-center gap-[15px]">
                <div className="flex flex-col gap-[31px]">
                  <Img src="images/img_vector_blue_800.svg" alt="vector_seven" className="h-[21px]" />
                  <Img src="images/img_call.svg" alt="call_one" className="h-[30px]" />
                </div>
                <ul className="flex flex-col items-start gap-[31px] self-start">
                  <li>
                    <a href="Noe_Rempel30@yahoo.com" target="_blank" rel="noreferrer">
                      <Text as="p">Noe_Rempel30@yahoo.com</Text>
                    </a>
                  </li>
                  <li>
                    <a href="275-437-1694" target="_blank" rel="noreferrer">
                      <Text as="p">275-437-1694</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-[54%] items-start justify-between gap-5 md:w-full md:flex-col">
            <div className="flex flex-col items-start gap-7">
              <Heading as="h4">About us</Heading>
              <ul className="flex flex-col items-start gap-3.5">
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
                  <a href="Testimonials" target="_blank" rel="noreferrer">
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
                  <a href="Careers" target="_blank" rel="noreferrer">
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
            <div className="mt-0.5 flex flex-col items-start gap-[26px]">
              <Heading as="h4">Trading</Heading>
              <ul className="flex flex-col items-start gap-3.5">
                <li>
                  <a href="Calendar" target="_blank" rel="noreferrer">
                    <Text as="p">Calendar</Text>
                  </a>
                </li>
                <li>
                  <a href="Shop" target="_blank" rel="noreferrer">
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
            <div className="mt-0.5 flex flex-col items-start gap-[25px]">
              <Heading as="h4">Apps</Heading>
              <ul className="flex flex-col items-start gap-3.5">
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
            <Text as="p" className="w-[75%] !text-white-A700_01 md:w-full">
              All information provided on this site is intended solely for educational purposes related to trading on
              financial markets and does not serve in any way as a specific investment recommendation, business
              recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
              investment instruments. FTMO only provides services of simulated trading and educational tools for
              traders. The information on this site is not directed at residents in any country or jurisdiction where
              such distribution or use would be contrary to local laws or regulations. FTMO companies do not act as a
              broker and do not accept any deposits. The offered technical solution for the FTMO platforms and data feed
              is powered by liquidity providers.
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
                <a href="Cookies" target="_blank" rel="noreferrer">
                  <Heading as="h4">Cookies</Heading>
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-[26px] h-[3px] w-full max-w-[1470px] bg-indigo-900 md:p-5" />
          <Text as="p" className="ml-[211px] mt-3 self-start !text-white-A700_01 md:ml-0">
            2023 © Copyright - FTMO.com Made with for trading
          </Text>
        </div>
      </div>
    </footer>
  );
}
