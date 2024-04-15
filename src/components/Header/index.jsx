import React from "react";
import MegaMenu1 from "../MegaMenu1";
import { SelectBox, Img, Button, Text } from "./..";
import { Link } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);

  return (
    <header {...props}>
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        <Img src="images/img_whale_logo_1.png" alt="whalelogoone" className="h-[61px] w-[15%] object-cover md:w-full" />
        <div className="flex items-center gap-[30px] md:flex-col">
          <div className="flex items-center gap-2.5 self-start">
            <Text as="p">How it works</Text>
            <Img src="images/img_vector_white_a700.svg" alt="vector_one" className="mb-2 h-[5px] self-end" />
          </div>
          <a href="FAQ" target="_blank" rel="noreferrer">
            <Text as="p">FAQ</Text>
          </a>
          <a href="Testimonials" target="_blank" rel="noreferrer" className="self-start">
            <Text as="p">Testimonials</Text>
          </a>
          <ul className="flex gap-[30px]">
            <li
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer items-start gap-2.5 self-end">
                <Text as="p">Trading</Text>
                <Img src="images/img_vector_white_a700.svg" alt="vector_three" className="mt-2 h-[5px]" />
              </div>
              {menuOpen ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen1(false);
              }}
              onMouseEnter={() => {
                setMenuOpen1(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-2.5 self-start">
                <Link to="/contactus" > <Text as="p">Contactus</Text></Link>
                <Img src="images/img_vector_white_a700.svg" alt="vector_five" className="mb-2 h-[5px] self-end" />
              </div>
              {menuOpen1 ? <MegaMenu1 /> : null}
            </li>
          </ul>
          <a href="Academy" target="_blank" rel="noreferrer" className="self-end">
            <Text as="p">Academy</Text>
          </a>
        </div>
        <div className="flex w-[16%] justify-center gap-[30px] md:w-full">
          <Button size="sm" shape="circle" className="w-[60px] !rounded-[30px]">
            <Img src="images/img_rewind.svg" />
          </Button>
          <SelectBox
            size="xs"
            indicator={<Img src="images/img_vector_white_a700.svg" alt="Vector" className="h-[5px] w-[10px]" />}
            getOptionLabel={(e) => (
              <>
                <div className="flex items-center">
                  <Img src="images/img_settings.svg" alt="settings" className="h-[18px] w-[23px]" />
                  <span>{e.label}</span>
                </div>
              </>
            )}
            name="eng"
            placeholder={`ENG`}
            options={dropDownOptions}
            className="flex-grow rounded-[30px] sm:px-5"
          />
        </div>
      </div>
    </header>
  );
}
