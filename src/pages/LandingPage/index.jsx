import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, SelectBox } from "../../components";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>WhaleFundr</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="overscroll-x-none w-full bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center self-stretch">
            <div className="flex justify-center self-stretch bg-gradient1 px-[30px] pt-[30px] sm:px-5 sm:pt-5">
              <div className=" mx-auto flex w-full max-w-[1470px] flex-col gap-[63px] sm:gap-[31px]">
                <Header className="relative" />
                <div className="relative h-[926px]">
                  <Img
                    src="images/img_landing_mockup_1.png"
                    alt="landingmockup"
                    className="absolute bottom-0 right-[7%] top-0 my-auto h-[926px] w-[23%] object-cover"
                  />
                  <div className="absolute left-[0.00px] top-[9%] m-auto flex w-[67%] flex-col items-start">
                    <Heading size="s" as="h1" className="!text-blue-800">
                      SINCE 2021
                    </Heading>
                    <Heading size="xl" as="h2" className="mt-3.5">
                      WE ARE LOOKING FOR PROFITABLE TRADERS
                    </Heading>
                    <Text as="p" className="mt-[30px] w-[74%] md:w-full">
                      Unleash your inner whale and trade up to $500,000 in a
                      trading environment where you can earn real gains.
                    </Text>
                    <div className="mt-[29px] flex gap-[30px]">
                      <Button
                        shape="round"
                        className="min-w-[210px] font-medium sm:px-5"
                      >
                        Learn More
                      </Button>
                      <Button
                        color="gray_900_01"
                        shape="round"
                        className="min-w-[210px] border-4 border-solid border-indigo-900 font-medium sm:px-5"
                      >
                        Free Trial
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle_11.svg"
                    alt="image"
                    className="absolute bottom-[30%] right-[17%] m-auto h-[277px] w-[27%] rounded-[30px]"
                  />
                  <Img
                    src="images/img_rectangle_12.svg"
                    alt="image_one"
                    className="absolute right-[0.00px] top-[11%] m-auto h-[184px] w-[18%] rounded-[30px]"
                  />
                  <div className="absolute bottom-[27%] left-[0.00px] m-auto flex w-[50%] items-start gap-[30px] md:relative md:flex-col">
                    <div className="flex w-[43%] md:w-full">
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
                        className="relative z-[2] ml-[-2px] h-[90px] w-[24%] object-cover"
                      />
                      <Img
                        src="images/img_ellipse_9.png"
                        alt="circleimage"
                        className="relative ml-[-2px] h-[90px] w-[90px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-1.5 flex flex-1 flex-col items-start md:self-stretch">
                      <Heading size="s" as="h3">
                        15 Million+
                      </Heading>
                      <Heading as="h4">Be part of growing community</Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-[1] mx-auto mt-[-120px] h-[252px] w-full max-w-[1500px] md:p-5">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center md:relative md:flex-col">
                <div
                  className="h-[35px] w-[20%] self-end rounded-[187px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5]"
                  style={{ height: "100%", width: "25%" }}
                />
                <div
                  className="relative ml-[-360px] flex flex-1 flex-col items-end md:ml-0 md:self-stretch"
                  style={{ height: "100%", width: "25%" }}
                >
                  <div
                    className="flex flex-col items-start self-stretch"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <div
                      className="relative z-[3] flex gap-[30px] self-stretch md:flex-col"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="flex flex-col items-center gap-3 rounded-[30px] bg-gray-200 p-[45px] shadow-bs md:p-5"
                        style={{ height: "100%", width: "25%" }}
                      >
                        <Heading
                          size="lg"
                          as="h5"
                          className="text-center !text-blue-800"
                        >
                          $180M+
                        </Heading>
                        <Text
                          as="p"
                          className="mb-[38px] text-center !text-gray-900"
                        >
                          Paid out to FTMO Traders
                        </Text>
                      </div>
                      <div
                        className="flex w-full flex-col items-center gap-[13px] rounded-[30px] bg-gray-200 p-[30px] shadow-bs sm:p-5"
                        style={{ height: "100%", width: "25%" }}
                      >
                        <Heading
                          size="lg"
                          as="h6"
                          className="mt-[15px] text-center !text-blue-800"
                        >
                          180+
                        </Heading>
                        <Text
                          as="p"
                          className="mb-[29px] text-center !text-gray-900"
                        >
                          No. of countries with traders registered at FTMO
                        </Text>
                      </div>
                      <div
                        className="flex w-full flex-col items-center gap-[13px] rounded-[30px] bg-gray-200 p-[30px] shadow-bs sm:p-5"
                        style={{ height: "100%", width: "25%" }}
                      >
                        <Heading
                          size="lg"
                          as="h1"
                          className="mt-[15px] text-center !text-blue-800"
                        >
                          16M+
                        </Heading>
                        <Text
                          as="p"
                          className="mb-[29px] text-center !text-gray-900"
                        >
                          No. of trades opened every month
                        </Text>
                      </div>
                      <div
                        className="flex w-full flex-col items-center gap-[15px] rounded-[30px] bg-gray-200 p-11 shadow-bs md:p-5"
                        style={{ height: "100%", width: "25%" }}
                      >
                        <Heading
                          size="lg"
                          as="h1"
                          className="text-center !text-blue-800"
                        >
                          8h
                        </Heading>
                        <Text
                          as="p"
                          className="mb-9 text-center !text-gray-900"
                        >
                          Avg payout processing time
                        </Text>
                      </div>
                    </div>
                    <div
                      className="relative ml-[360px] mt-[-23px] h-[35px] w-[34%] rounded-[187px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5] md:ml-0"
                      style={{ height: "100%", width: "25%" }}
                    />
                  </div>
                  <div
                    className="relative mr-[360px] mt-[-35px] h-[35px] w-[34%] rounded-[187px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5] md:mr-0"
                    style={{ height: "100%", width: "25%" }}
                  />
                </div>
              </div>
              <div
                className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[35px] w-[25%] rounded-[187px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5]"
                style={{ height: "100%", width: "25%" }}
              />
            </div>
          </div>
          <div className="mx-auto mt-[138px] flex w-full max-w-[1470px] flex-col gap-[59px] md:p-5 sm:gap-[29px]">
            <Heading
              size="lg"
              as="h2"
              className="text-center !text-gray-900_01"
            >
              WhaleFundr is one of the most reliable firms in modern prop
              trading industry.
            </Heading>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(233px_,_1fr))] justify-center gap-[30px]">
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 px-14 py-[63px] md:p-5">
                <Img
                  src="images/img_group_23.svg"
                  alt="image"
                  className="h-[43px] w-[77%]"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 p-[46px] md:p-5">
                <Img
                  src="images/img_3.png"
                  alt="three_one"
                  className="h-[77px] w-[71%] object-cover opacity-0.5"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 p-7 sm:p-5">
                <Img
                  src="images/img_graphic_father_seeklogo.png"
                  alt="graphicfather"
                  className="h-[112px] w-[62%] object-cover opacity-0.5"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 p-12 md:p-5">
                <Img
                  src="images/img_2.png"
                  alt="two_one"
                  className="h-[73px] w-[72%] object-cover opacity-0.5"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 px-14 py-[63px] md:p-5">
                <Img
                  src="images/img_group_23.svg"
                  alt="image"
                  className="h-[43px] w-[77%]"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 p-[46px] md:p-5">
                <Img
                  src="images/img_3.png"
                  alt="five_one"
                  className="h-[77px] w-[71%] object-cover opacity-0.5"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 p-7 sm:p-5">
                <Img
                  src="images/img_graphic_father_seeklogo.png"
                  alt="graphicfather"
                  className="h-[112px] w-[62%] object-cover opacity-0.5"
                />
              </div>
              <div className="flex w-full justify-center rounded-[15px] bg-gray-200 p-12 md:p-5">
                <Img
                  src="images/img_2.png"
                  alt="four_one"
                  className="h-[73px] w-[72%] object-cover opacity-0.5"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[150px] flex w-full max-w-[1485px] items-center gap-[39px] md:flex-col md:p-5">
            <div className="flex flex-1 gap-px md:flex-col md:self-stretch">
              <div className="h-[35px] flex-1 cursor-pointer rounded-[125px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5]  " />
              <div className="mb-3 flex flex-1 cursor-pointer flex-col md:mb-0">
                <div className="relative z-[4] h-[302px] md:h-auto">
                  <Img
                    src="images/img_rectangle_17.png"
                    alt="image"
                    className="h-[302px] w-full rounded-[15px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-end justify-between gap-5 rounded-[15px] bg-gradient2 p-[13px]">
                    <div className="mt-[220px] flex flex-col items-start">
                      <a href="Trader" target="_blank" rel="noreferrer">
                        <Text as="p">Trader</Text>
                      </a>
                      <Heading as="h2" className="!text-gray-200">
                        Name
                      </Heading>
                    </div>
                    <Img
                      src="images/img_warning.svg"
                      alt="warning_one"
                      className="h-[18px]"
                    />
                  </div>
                </div>
                <div className="relative mt-[-37px] flex justify-center rounded-bl-[15px] rounded-br-[15px] bg-gray-200 p-3.5 shadow-bs">
                  <div className="mt-[38px] flex flex-col items-center">
                    <Text
                      as="p"
                      className="relative z-[5] text-center !text-gray-900_02"
                    >
                      Profit Split
                    </Text>
                    <Heading
                      size="s"
                      as="h3"
                      className="text-center !text-blue-800"
                    >
                      $76,000
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="h-[35px] flex-1 cursor-pointer rounded-[125px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5] " />
              <div className="flex flex-1 cursor-pointer flex-col">
                <div className="relative z-[6] h-[302px]">
                  <Img
                    src="images/img_rectangle_18.png"
                    alt="image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[301px] w-full rounded-[15px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-end justify-between gap-5 rounded-[15px] bg-gradient2 p-[13px]">
                    <div className="mt-[220px] flex flex-col items-start">
                      <a href="Trader" target="_blank" rel="noreferrer">
                        <Text as="p">Trader</Text>
                      </a>
                      <Heading as="h4" className="!text-gray-200">
                        Name
                      </Heading>
                    </div>
                    <Img
                      src="images/img_warning.svg"
                      alt="warning_one"
                      className="h-[18px]"
                    />
                  </div>
                </div>
                <div className="relative mt-[-37px] flex justify-center rounded-bl-[15px] rounded-br-[15px] bg-gray-200 p-3.5 shadow-bs">
                  <div className="mt-[38px] flex flex-col items-center">
                    <Text
                      as="p"
                      className="relative z-[7] text-center !text-gray-900_02"
                    >
                      Profit Split
                    </Text>
                    <Heading
                      size="s"
                      as="h5"
                      className="text-center !text-blue-800"
                    >
                      $41,018
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="h-[35px] flex-1 cursor-pointer rounded-[125px] bg-gray-900_26 blur-[20.00px] backdrop-opacity-[0.5] " />
              <div className="flex w-[29%] cursor-pointer flex-col md:w-full">
                <div className="relative z-[8] h-[302px]">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[301px] w-full rounded-[15px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-end justify-between gap-5 rounded-[15px] bg-gradient2 p-[13px]">
                    <div className="mt-[220px] flex flex-col items-start">
                      <a href="Trader" target="_blank" rel="noreferrer">
                        <Text as="p">Trader</Text>
                      </a>
                      <Heading as="h6" className="!text-gray-200">
                        Name
                      </Heading>
                    </div>
                    <Img
                      src="images/img_warning.svg"
                      alt="warning_one"
                      className="mb-[15px] h-[18px]"
                    />
                  </div>
                </div>
                <div className="relative mt-[-37px] flex rounded-bl-[15px] rounded-br-[15px] bg-gray-200 p-3.5 shadow-bs">
                  <div className="mt-[38px] flex flex-col items-center">
                    <Text
                      as="p"
                      className="relative z-[9] text-center !text-gray-900_02"
                    >
                      Profit Split
                    </Text>
                    <Heading
                      size="s"
                      as="h1"
                      className="text-center !text-blue-800"
                    >
                      $500,180
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[48%] md:w-full">
              <Heading size="md" as="h1" className="!text-gray-900_01">
                <span className="text-gray-900_01">Trade for&nbsp;</span>
                <span className="text-blue-800">Modern Prop Trading Firm</span>
              </Heading>
              <Text as="p" className="mt-[30px] !text-gray-900">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using &#39;Content
                here, content here&#39;, making it look like readable English.
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
                &#39;lorem ipsum&#39; will uncover
              </Text>
              <Text as="p" className="mt-3 !text-gray-900">
                <span className="text-gray-900">
                  Upon successful completion of the Evaluation Process, you are
                  offered to trade on an WhaleFundr Account with a balance of up
                  to&nbsp;
                </span>
                <span className="text-blue-800">
                  200,000 USD. Your journey to get there might be challenging,
                  but our educational applications, Account Analysis and
                  Performance Coaches are here to help you on the endeavour to
                  financial independence.
                </span>
              </Text>
            </div>
          </div>
          <div className="mx-auto mt-[147px] flex w-full max-w-[1470px] flex-col items-center justify-center gap-[61px] rounded-[60px] bg-gray-200 p-[42px] md:p-5 sm:gap-[30px]">
            <Heading size="lg" as="h2" className="mt-[15px] !text-gray-900_01">
              Evaluation Process
            </Heading>
            <div className="mb-[18px] flex self-stretch md:flex-col">
              <div className="flex h-[437px] w-full items-start bg-[url(/public/images/img_group_98.png)] bg-cover bg-no-repeat py-[58px] pl-[58px] pr-14 md:h-auto md:p-5">
                <div className="mb-[34px] flex w-[38%] flex-col items-center gap-3.5 md:w-full">
                  <Img
                    src="images/img_settings_blue_800.svg"
                    alt="settings_one"
                    className="h-[60px] w-[15%]"
                  />
                  <Heading as="h3" className="text-center !text-gray-900">
                    WhaleFundr Challenge
                  </Heading>
                  <Text as="p" className="text-center !text-gray-900_02">
                    An WhaleFundr Challenge is the first step of the Evaluation
                    Process. You need to succeed here to advance into the
                    Verification stage. Prove your trading skills and discipline
                    in observing the Trading Objectives.
                  </Text>
                </div>
              </div>
              <div className="relative ml-[-420px] h-[437px] w-full bg-[url(/public/images/img_group_99.png)] bg-cover bg-no-repeat px-14 py-[58px] md:ml-0 md:h-auto md:p-5">
                <div className="mb-[34px] flex justify-between gap-[185px] md:flex-col md:gap-5">
                  <div className="flex w-[38%] flex-col items-center gap-3.5 md:w-full">
                    <Img
                      src="images/img_vector_blue_800.svg"
                      alt="vector_seven"
                      className="h-[60px] w-[29%]"
                    />
                    <Heading as="h4" className="text-center !text-gray-900">
                      Verification
                    </Heading>
                    <Text as="p" className="text-center !text-gray-900_02">
                      A Verification is the second and the last step towards
                      becoming an WhaleFundr Trader. Once you pass a
                      Verification stage and your results are verified, you will
                      be offered to trade on an WhaleFundr Account.
                    </Text>
                  </div>
                  <div className="flex w-[38%] flex-col items-center gap-3.5 md:w-full">
                    <Img
                      src="images/img_vector.svg"
                      alt="vector_nine"
                      className="h-[60px] w-[60px]"
                    />
                    <Heading as="h5" className="text-center !text-gray-900">
                      WhaleFundr Trader
                    </Heading>
                    <Text as="p" className="text-center !text-gray-900_02">
                      You are becoming an WhaleFundr Trader with an WhaleFundr
                      Account. Trade responsibly and consistently and receive up
                      to 90%. If you consistently generate profits on your
                      WhaleFundr Account,{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[90px] flex w-[88%] flex-col items-start gap-[35px] self-end md:w-full md:p-5">
            <div className="flex items-center gap-[30px] self-stretch md:flex-col">
              <div className="w-[43%] md:w-full">
                <Heading size="lg" as="h2" className="!text-blue-800">
                  Know your Trading Objectives
                </Heading>
                <Text as="p" className="mt-[29px] !text-gray-900">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &#39;Content here, content here&#39;, making it look like
                  readable English.
                </Text>
                <div className="mt-[57px] flex items-center gap-[30px] md:flex-col">
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <Heading size="s" as="h3" className="!text-gray-900">
                      Currency:
                    </Heading>
                    <SelectBox
                      color="gray_200"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                          className="h-[8px] w-[15px]"
                        />
                      }
                      getOptionLabel={(e) => (
                        <>
                          <div className="flex items-center">
                            <Img
                              src="images/img_settings.svg"
                              alt="settings"
                              className="h-[18px] w-[23px]"
                            />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="usd"
                      placeholder={`USD`}
                      options={dropDownOptions}
                      className="self-stretch font-montserrat font-semibold sm:px-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-[15px]">
                    <Heading size="s" as="h4" className="!text-gray-900">
                      Risk:
                    </Heading>
                    <SelectBox
                      color="gray_200"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                          className="h-[8px] w-[15px]"
                        />
                      }
                      name="normal"
                      placeholder={`Normal`}
                      options={dropDownOptions}
                      className="gap-px self-stretch font-montserrat font-semibold sm:px-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-[15px]">
                    <Heading size="s" as="h5" className="!text-gray-900">
                      Balance:
                    </Heading>
                    <SelectBox
                      color="gray_200"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                          className="h-[8px] w-[15px]"
                        />
                      }
                      name="price"
                      placeholder={`\$200,000`}
                      options={dropDownOptions}
                      className="gap-px self-stretch font-montserrat font-semibold sm:px-5"
                    />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_trrading_objectives_mockup.png"
                alt="trrading_one"
                className="h-[694px] w-[57%] object-cover md:w-full"
              />
            </div>
        
          </div>
          <div className="mx-auto mt-[153px] flex w-full max-w-[1470px] flex-col items-start gap-[55px] md:p-5 sm:gap-[27px]">
            <Heading size="lg" as="h2" className="!text-gray-900_01">
              Key Hightlights
            </Heading>
            <div className="flex gap-[30px] self-stretch md:flex-col">
              <div className="flex w-full flex-col items-start justify-center rounded-[30px] bg-gray-200 p-[27px] sm:p-5">
                <Img
                  src="images/img_calendar.svg"
                  alt="swing_account"
                  className="ml-0.5 mt-0.5 h-[60px] w-[60px] md:ml-0"
                />
                <Heading
                  as="h3"
                  className="ml-0.5 mt-[31px] !text-gray-900 md:ml-0"
                >
                  Swing Account
                </Heading>
                <Text as="p" className="ml-0.5 mt-3 !text-gray-900_02 md:ml-0">
                  Pick the FTMO Account that perfectly suits your trading style
                  and needs. FTMO Account Swing has no restrictions on holding
                  positions over the weekend or trading during macroeconomic
                  releases.
                </Text>
              </div>
              <div className="flex w-full flex-col items-start justify-center rounded-[30px] bg-gray-200 p-[27px] sm:p-5">
                <Img
                  src="images/img_file.svg"
                  alt="file_one"
                  className="ml-0.5 mt-0.5 h-[60px] w-[12%] md:ml-0"
                />
                <Heading
                  as="h4"
                  className="ml-0.5 mt-[31px] !text-gray-900 md:ml-0"
                >
                  Scaling Plan
                </Heading>
                <Text as="p" className="ml-0.5 mt-3 !text-gray-900_02 md:ml-0">
                  We aim for long-term business relationships. If you manage to
                  be consistent and profitable, we will increase the balance of
                  your FTMO Account by 25% every 4 months according to the
                  Scaling Plan.
                </Text>
              </div>
              <div className="flex w-full flex-col items-start justify-center rounded-[30px] bg-gray-200 p-[27px] sm:p-5">
                <Img
                  src="images/img_clock.svg"
                  alt="clock_one"
                  className="ml-0.5 mt-0.5 h-[60px] w-[13%] md:ml-0"
                />
                <Heading as="h5" className="ml-0.5 mt-7 !text-gray-900 md:ml-0">
                  Free Trial
                </Heading>
                <Text
                  as="p"
                  className="ml-0.5 mt-[15px] !text-gray-900_02 md:ml-0"
                >
                  If you are still not sure, you have the option to try the
                  process completely for free. The Free Trial account is a
                  shortened version of our FTMO Challenge with the same trading
                  conditions.
                </Text>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-[150px] h-[664px] w-full max-w-[1470px] md:p-5">
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full justify-end rounded-[60px] bg-gray-200 p-[45px] md:p-5">
              <div className="mr-20 flex w-[46%] flex-col gap-7 md:mr-0 md:w-full">
                <Text as="p" className="!text-gray-900">
                  If you are ready, accept our FTMO Challenge and become our
                  FTMO Trader. You can even try the entire process completely
                  free of charge.
                </Text>
                <div className="flex gap-[30px]">
                  <Button
                    shape="round"
                    className="min-w-[210px] font-medium sm:px-5"
                  >
                    Learn More
                  </Button>
                  <Button
                    color="gray_900_01"
                    shape="round"
                    className="min-w-[210px] border-4 border-solid border-indigo-900 font-medium sm:px-5"
                  >
                    Free Trial
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_untitled_1_1.png"
              alt="untitled1one"
              className="absolute bottom-0 left-[9%] top-0 my-auto h-[664px] w-[32%] object-cover"
            />
            <Heading
              size="lg"
              as="h2"
              className="absolute right-[9%] top-1/4 m-auto w-[40%] !text-gray-900_01"
            >
              <span className="text-gray-900_01">
                Join the team of our&nbsp;
              </span>
              <span className="text-blue-800">successful traders</span>
            </Heading>
          </div>
          <div className="relative mx-auto mt-[150px] h-[654px] w-full max-w-[1470px] md:p-5">
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-start justify-center gap-[13px] rounded-[60px] bg-gray-200 py-[58px] pl-[58px] pr-14 md:p-5">
              <Text as="p" className="w-[49%] !text-gray-900 md:w-full">
                The default payout ratio for all FTMO Traders is set to 80%,
                however, an 80% share is not where we draw the line.
              </Text>
              <Text as="p" className="w-[49%] !text-gray-900 md:w-full">
                All FTMO Traders can request payout on-demand. The payout can be
                processed just after 14 days, but you also have the ability to
                choose your own Profit Split Day, which can be even changed up
                to three times. In conclusion, we make sure that you will always
                receive your withdrawal on your most convenient day.
              </Text>
              <Text as="p" className="w-[49%] !text-gray-900 md:w-full">
                If you meet the conditions of our Scaling Plan, not only do we
                increase the balance of your FTMO Account by 25%, the payout
                ratio will also automatically change to a staggering 90 %!
              </Text>
            </div>
            <Img
              src="images/img_payout_system_1.png"
              alt="payoutsystemone"
              className="absolute right-[12%] top-[0.00px] m-auto h-[624px] w-[26%] object-cover"
            />
            <Heading
              size="lg"
              as="h2"
              className="absolute left-[4%] top-[27%] m-auto !text-gray-900_01"
            >
              Payout System
            </Heading>
          </div>
          <div className="relative mx-auto mt-[150px] h-[541px] w-full max-w-[1470px] md:p-5">
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full justify-end rounded-[60px] bg-gray-200 py-[57px] pl-14 pr-[57px] md:p-5">
              <Text
                as="p"
                className="mr-0.5 mt-0.5 w-[49%] !text-gray-900 md:mr-0"
              >
                We offer all our clients the best trading solution in the form
                of our MT4, MT5, DXtrade and cTrader accounts powered by data
                feed directly from our pool of prime liquidity providers. We do
                our best to simulate the real market conditions with super-raw
                spreads, very low commission and no markup to all demo trading
                accounts with virtual funds.
              </Text>
            </div>
            <Heading
              size="lg"
              as="h2"
              className="absolute right-[0.00px] top-[10%] m-auto w-[49%] !text-gray-900_01"
            >
              The most popular retail trading platforms
            </Heading>
            <Img
              src="images/img_tablet_mockup_1.png"
              alt="tabletmockupone"
              className="absolute left-[0.00px] top-[0.00px] m-auto h-[511px] w-[47%] object-cover"
            />
          </div>
          <div className="mx-auto mt-[150px] w-full max-w-[1470px] rounded-[60px] bg-gradient1 py-[93px] md:p-5 md:py-5">
            <div className="relative mb-[533px] mt-[-704px] flex items-center justify-between gap-5 px-[90px] md:flex-col md:px-5">
              <div className="flex w-[31%] items-center justify-between gap-5 md:w-full">
                <Button
                  size="md"
                  className="min-w-[172px] rounded-[39px] font-montserrat font-semibold sm:px-5"
                >
                  Forex
                </Button>
                <Heading size="s" as="h2">
                  Indices
                </Heading>
              </div>
              <Heading size="s" as="h3" className="mb-2.5 self-end">
                Crypto
              </Heading>
              <Heading size="s" as="h4">
                Commodities
              </Heading>
              <Heading size="s" as="h5" className="mr-[31px] md:mr-0">
                Custom
              </Heading>
            </div>
            <div className="p-[15px]">
              <div className="mb-[15px] flex flex-col gap-[83px]">
                <div className="flex flex-1 items-center justify-between gap-5 rounded-[30px] bg-blue-800_19 p-7 md:flex-col sm:p-5">
                  <a
                    href="Symbol"
                    target="_blank"
                    rel="noreferrer"
                    className="self-end"
                  >
                    <Text as="p">Symbol</Text>
                  </a>
                  <a href="#" className="self-start">
                    <Text as="p">Bid Price</Text>
                  </a>
                  <div className="flex w-[23%] flex-wrap justify-between gap-5 md:w-full">
                    <a href="#" className="self-start">
                      <Text as="p">Ask Price</Text>
                    </a>
                    <a
                      href="Spread"
                      target="_blank"
                      rel="noreferrer"
                      className="self-end"
                    >
                      <Text as="p">Spread</Text>
                    </a>
                  </div>
                  <div className="mr-[61px] flex w-[27%] flex-wrap justify-between gap-5 self-start md:mr-0 md:w-full">
                    <a href="Commissions" target="_blank" rel="noreferrer">
                      <Text as="p">Commissions</Text>
                    </a>
                    <a href="#">
                      <Text as="p">Overall costs</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 justify-between gap-5 rounded-[30px] bg-blue-800_19 p-7 sm:flex-col sm:p-5">
                  <div className="flex w-[24%] flex-wrap justify-between gap-5 self-end sm:w-full">
                    <a href="#">
                      <Text as="p">Minimum trading days</Text>
                    </a>
                    <a href="#">
                      <Text as="p">4 days</Text>
                    </a>
                  </div>
                  <a href="#" className="self-end">
                    <Text as="p">4 days</Text>
                  </a>
                  <a href="#" className="self-end">
                    <Text as="p">4 days</Text>
                  </a>
                  <a href="#" className="self-end">
                    <Text as="p">4 days</Text>
                  </a>
                  <a href="#" className="mr-[117px] self-end md:mr-0">
                    <Text as="p">4 days</Text>
                  </a>
                </div>
                <div className="flex flex-1 justify-between gap-5 rounded-[30px] bg-blue-800_19 p-7 sm:flex-col sm:p-5">
                  <div className="flex w-[24%] flex-wrap justify-between gap-5 self-start sm:w-full">
                    <a href="#">
                      <Text as="p">Maximum Loss</Text>
                    </a>
                    <a href="$1,000" target="_blank" rel="noreferrer">
                      <Text as="p">$1,000</Text>
                    </a>
                  </div>
                  <a href="$1,000" target="_blank" rel="noreferrer">
                    <Text as="p">$1,000</Text>
                  </a>
                  <a href="$1,000" target="_blank" rel="noreferrer">
                    <Text as="p">$1,000</Text>
                  </a>
                  <a href="$1,000" target="_blank" rel="noreferrer">
                    <Text as="p">$1,000</Text>
                  </a>
                  <a
                    href="$1,000"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-[115px] md:mr-0"
                  >
                    <Text as="p">$1,000</Text>
                  </a>
                </div>
                <div className="flex flex-1 justify-between gap-5 rounded-[30px] bg-blue-800_19 p-7 sm:flex-col sm:p-5">
                  <div className="flex w-[23%] flex-wrap justify-between gap-5 self-start sm:w-full">
                    <a href="#">
                      <Text as="p">Refundable Fee</Text>
                    </a>
                    <a href="€250" target="_blank" rel="noreferrer">
                      <Text as="p">€250</Text>
                    </a>
                  </div>
                  <a
                    href="€250"
                    target="_blank"
                    rel="noreferrer"
                    className="self-start"
                  >
                    <Text as="p">€250</Text>
                  </a>
                  <a
                    href="€250"
                    target="_blank"
                    rel="noreferrer"
                    className="self-start"
                  >
                    <Text as="p">€250</Text>
                  </a>
                  <a
                    href="€250"
                    target="_blank"
                    rel="noreferrer"
                    className="self-start"
                  >
                    <Text as="p">€250</Text>
                  </a>
                  <a
                    href="€250"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-[131px] self-start md:mr-0"
                  >
                    <Text as="p">€250</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[150px] flex w-full max-w-[1470px] justify-center rounded-[60px] bg-gray-200 px-14 py-[60px] md:p-5">
            <div className="flex w-full items-start justify-between gap-5 md:flex-col">
              <div className="w-[49%] md:w-full">
                <Heading size="lg" as="h2" className="!text-gray-900_01">
                  <span className="text-gray-900_01">
                    We are more than just a&nbsp;
                  </span>
                  <span className="text-blue-800">
                    Modern Prop Trading Firm
                  </span>
                </Heading>
                <div className="relative mt-[3px] h-[244px] md:h-auto">
                  <Text as="p" className="mt-[25px] !text-gray-900">
                    Find out how you can benefit with FTMO.
                  </Text>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center md:relative md:flex-col">
                    <Heading
                      size="s"
                      as="h3"
                      className="relative z-10 mb-2.5 w-[62%] self-end !text-gray-900_01 md:w-full"
                    >
                      Benefit from our custom trading apps
                    </Heading>
                    <Heading
                      size="2xl"
                      as="h4"
                      className="relative ml-[-46px] !text-blue-800_33 md:ml-0"
                    >
                      01.
                    </Heading>
                  </div>
                </div>
                <Text as="p" className="mt-5 !text-gray-900_01">
                  We’ve developed several apps for our traders. Some of them
                  will help you with discipline, while others can assist with
                  journaling or analysing the markets.
                </Text>
                <div className="mt-7 flex items-center gap-[30px] md:flex-col">
                  <Button
                    shape="round"
                    className="min-w-[210px] font-medium sm:px-5"
                  >
                    Learn More
                  </Button>
                  <div className="relative h-[15px] flex-1 rounded-[7px] bg-blue-800_33 md:self-stretch">
                    <div
                      style={{ width: "20%" }}
                      className="absolute h-full rounded-[7px] bg-indigo-900"
                    />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_benefits_1.png"
                alt="benefitsone_one"
                className="h-[713px] w-[47%] object-cover md:w-full"
              />
            </div>
          </div>
          <div className="mx-auto mt-[150px] grid w-full max-w-[1470px] grid-cols-[repeat(auto-fill,_minmax(412px_,_1fr))] justify-center gap-[30px] md:p-5">
            <div className="flex w-full flex-col items-start rounded-[30px] bg-gray-200 p-[29px] sm:p-5">
              <Img
                src="images/img_calendar.svg"
                alt="image"
                className="h-[60px] w-[60px]"
              />
              <Heading as="h2" className="mt-[31px] !text-gray-900">
                Amazing trading conditions
              </Heading>
              <Text as="p" className="mb-[21px] mt-3 !text-gray-900_02">
                FTMO Solution with a wide choice of assets across the board,
                with very low commissions and spreads.
              </Text>
            </div>
            <div className="flex w-full flex-col items-start rounded-[30px] bg-gray-200 p-[30px] sm:p-5">
              <Img
                src="images/img_file.svg"
                alt="file_one"
                className="h-[60px] w-[12%]"
              />
              <Heading as="h3" className="mt-8 !text-gray-900">
                Leverage 1:100
              </Heading>
              <Text as="p" className="mb-[21px] mt-[11px] !text-gray-900_02">
                Use professional trader’s leverage to your advantage with no
                imposed limits on position sizing.
              </Text>
            </div>
            <div className="flex w-full flex-col items-start justify-center rounded-[30px] bg-gray-200 p-7 sm:p-5">
              <Img
                src="images/img_clock.svg"
                alt="clock_one"
                className="h-[60px] w-[13%]"
              />
              <Heading as="h4" className="mt-[31px] !text-gray-900">
                One-time fee only
              </Heading>
              <Text as="p" className="mt-3 !text-gray-900_02">
                No recurrent charges, no membership or other hidden fees.
                Moreover, the fee is automatically reimbursed to you with the
                first Profit Split.
              </Text>
            </div>
            <div className="flex w-full flex-col rounded-[30px] bg-gray-200 p-[26px] sm:p-5">
              <Img
                src="images/img_calendar.svg"
                alt="calendar_one"
                className="ml-1 mt-1 h-[60px] w-[60px] md:ml-0"
              />
              <Heading
                as="h5"
                className="ml-1 mt-[30px] !text-gray-900 md:ml-0"
              >
                The most popular trading platforms
              </Heading>
              <Text
                as="p"
                className="mb-[19px] ml-1 mt-3.5 !text-gray-900_02 md:ml-0"
              >
                MT4, MT5, cTrader, or DXtrade. Choose yourself!
              </Text>
            </div>
            <div className="flex w-full flex-col items-start rounded-[30px] bg-gray-200 p-[30px] sm:p-5">
              <Img
                src="images/img_file.svg"
                alt="file_one"
                className="h-[60px] w-[12%]"
              />
              <Heading as="h6" className="mt-[31px] !text-gray-900">
                No limits on trading style!
              </Heading>
              <Text as="p" className="mb-[21px] mt-3 !text-gray-900_02">
                Trade your own trading strategy with no limits or restrictions.
                You can use EAs, hedging or trade discretionary.
              </Text>
            </div>
            <div className="flex w-full flex-col rounded-[30px] bg-gray-200 p-[30px] sm:p-5">
              <Img
                src="images/img_clock.svg"
                alt="clock_one"
                className="h-[60px] w-[13%]"
              />
              <Heading as="h4" className="mt-[30px] !text-gray-900">
                Trade every instrument you want
              </Heading>
              <Text as="p" className="mb-[15px] mt-3.5 !text-gray-900_02">
                Forex, Commodities, Indices, Crypto, Stocks, Bonds.
              </Text>
            </div>
          </div>
          <footer className="mt-[150px] self-stretch">
            <div>
              <div className="flex items-start justify-between gap-5 bg-gradient1 p-[89px] md:flex-col md:p-5">
                <div className="ml-[135px] flex w-[32%] flex-col gap-[25px] md:ml-0 md:w-full">
                  <Img
                    src="images/img_whale_logo_1.png"
                    alt="whalelogoone"
                    className="h-[61px] w-[47%] object-cover"
                  />
                  <Text as="p" className="!text-white-A700_01">
                    Animi distinctio quia amet possimus sit. Voluptatum sunt
                    corrupti iste voluptas itaque hic. Dolore sed quia et totam.
                  </Text>
                  <div className="flex flex-col items-start gap-[29px]">
                    <a href="#">
                      <Heading as="h4">Contact Us</Heading>
                    </a>
                    <div className="flex items-center gap-[15px]">
                      <div className="flex flex-col gap-[31px]">
                        <Img
                          src="images/img_vector_blue_800.svg"
                          alt="vector_eleven"
                          className="h-[21px]"
                        />
                        <Img
                          src="images/img_call.svg"
                          alt="call_one"
                          className="h-[30px]"
                        />
                      </div>
                      <ul className="flex flex-col items-start gap-[31px] self-start">
                        <li>
                          <a href="#">
                            <Text as="p">Noe_Rempel30@yahoo.com</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">275-437-1694</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mr-[135px] flex w-[54%] items-start justify-between gap-5 md:mr-0 md:w-full md:flex-col">
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
                  <div className="mt-0.5 flex flex-col items-start gap-[26px]">
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
              <div className="flex flex-col items-center bg-blue-800 p-[13px]">
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
                <div className="mx-auto mt-[26px] h-[3px] w-full max-w-[1470px] bg-indigo-900 md:p-5" />
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
