import React from "react";

import { Img, Text, Line, Button, SelectBox } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ReservationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              src="images/img_logo.svg"
              className="h-[51px] w-[12%]"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <Text
                  className="not-italic text-gray_900_a2 text-left w-auto"
                  variant="body6"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0] w-auto sm:w-full">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-auto"
                  variant="body6"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0] w-auto sm:w-full">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-auto"
                  variant="body6"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px] w-auto sm:w-full">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-auto"
                  variant="body6"
                  onClick={() => navigate("/orderonline")}
                >
                  Order online
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[27px] w-[16%] sm:w-full">
                <Text
                  className="not-italic text-left text-red_400 w-auto"
                  variant="body6"
                >
                  Reservation
                </Text>
                <Line className="bg-red_400 h-px w-[53%]" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px] w-auto sm:w-full">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-auto"
                  variant="body6"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] rounded-[50%] w-[50px]"
              leftIcon={
                <Img
                  src="images/img_cart.svg"
                  className="m-[13px]"
                  alt="cart"
                />
              }
              variant="FillWhiteA700"
            ></Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm text-white_A700 w-auto"
              shape="RoundedBorder16"
              size="md"
              variant="FillRed400"
            >
              Log in
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              src="images/img_rectangle150.png"
              className="md:flex-1 h-[657px] sm:h-auto object-cover rounded-[20px] w-auto md:w-full"
              alt="Rectangle150"
            />
            <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="font-opensans text-gray_900 text-left w-auto"
                as="h2"
                variant="h2"
              >
                Book a table
              </Text>
              <div className="flex flex-col font-poppins gap-10 items-center justify-start mt-[60px] w-full">
                <SelectBox
                  className="font-normal not-italic text-gray_500 text-left text-xl w-full"
                  placeholderClassName="text-gray_500"
                  name="date"
                  placeholder="Date"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] mr-[35px] w-[21px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineGray400"
                ></SelectBox>
                <SelectBox
                  className="font-normal not-italic text-gray_500 text-left text-xl w-full"
                  placeholderClassName="text-gray_500"
                  name="time"
                  placeholder="Time"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] mr-[35px] w-[21px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineGray400"
                ></SelectBox>
                <SelectBox
                  className="font-normal not-italic text-gray_500 text-left text-xl w-full"
                  placeholderClassName="text-gray_500"
                  name="partysize"
                  placeholder="Party size"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] mr-[35px] w-[21px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineGray400"
                ></SelectBox>
              </div>
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold min-w-[475px] sm:min-w-full mt-10 sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-auto"
                onClick={() => navigate("/enterdetailsreservation")}
                shape="RoundedBorder20"
                size="3xl"
                variant="FillRed400"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ReservationPage;
