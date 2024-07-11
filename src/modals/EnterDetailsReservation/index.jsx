import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, SelectBox, TextArea, Button } from "components";
import { useNavigate } from "react-router-dom";

const EnterDetailsReservationModal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[78%]"
        overlayClassName="bg-gray_900_a3 fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col gap-8 items-end justify-start max-w-[1112px] mx-auto my-[76px] p-10 md:px-5 rounded-[16px] w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between ml-auto w-[59%] md:w-full">
              <Text
                className="mt-5 text-gray_900 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Reservation
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer h-5 w-5"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <div className="flex flex-col font-poppins gap-12 items-center justify-start mb-5 mr-5 w-[97%] md:w-full">
              <Text
                className="bg-light_blue_A100_7e font-normal h-16 justify-center max-w-[992px] md:max-w-full not-italic sm:px-5 px-[35px] py-5 rounded-[20px] text-black_900 text-left w-full"
                variant="body2"
              ></Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1.5 w-[48%] md:w-full">
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Data order
                  </Text>
                  <div className="flex flex-col gap-6 items-center justify-start mt-[23px] w-full">
                    <Input
                      wrapClassName="w-full"
                      className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                      type="text"
                      name="Firstname"
                      placeholder="First name"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="OutlineGray400"
                    ></Input>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                      type="text"
                      name="Lastname"
                      placeholder="Last name"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="OutlineGray400"
                    ></Input>
                    <div className="bg-white_A700 border border-gray_400 border-solid flex flex-row gap-4 items-center justify-start p-3 rounded-lg w-full">
                      <SelectBox
                        className="sm:flex-1 mb-0.5 ml-1 w-[11%] sm:w-full"
                        placeholderClassName=""
                        name="groupNinetyFour"
                        placeholder=""
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[11px] mr-[0] w-[11px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-auto"
                        variant="body2"
                      >
                        Phone number
                      </Text>
                    </div>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                      type="email"
                      name="Emailaddress"
                      placeholder="Email address"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="OutlineGray400"
                    ></Input>
                    <SelectBox
                      className="font-normal not-italic text-gray_500 text-left text-xl w-full"
                      placeholderClassName="text-gray_500"
                      name="Selectanaccas"
                      placeholder="Select an occasion"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_21X21.svg"
                          className="h-[21px] mr-5 w-[21px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder8"
                      size="sm"
                      variant="OutlineGray400"
                    ></SelectBox>
                    <TextArea
                      className="font-normal not-italic placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                      name="Addaspecialr"
                      placeholder="Add a special request"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="OutlineGray400"
                    ></TextArea>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-normal min-w-[475px] sm:min-w-full mt-6 not-italic sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-auto"
                    onClick={() => navigate("/reservationhasbeenconfirmed")}
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillRed400"
                  >
                    Confirm reservation
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col gap-[55px] items-center justify-start w-[44%] md:w-full">
                  <div className="bg-bluegray_100_63 flex flex-col items-start justify-end p-[35px] sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="font-semibold md:ml-[0] ml-[5px] mt-[5px] text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Reservation detail
                    </Text>
                    <div className="flex flex-row gap-9 items-center justify-start mr-auto mt-[47px] w-[95%] md:w-full">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[34px] w-[34px]"
                        alt="calendar"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-auto"
                        variant="body2"
                      >
                        Saturday, 28 february 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-start mr-auto mt-[25px] w-[46%] md:w-full">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[34px] w-[34px]"
                        alt="clock"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-auto"
                        variant="body2"
                      >
                        04:30 pm
                      </Text>
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-start mr-auto mt-[25px] w-[95%] md:w-full">
                      <Img
                        src="images/img_user_34X34.svg"
                        className="h-[34px] w-[34px]"
                        alt="user"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-auto"
                        variant="body2"
                      >
                        2 people (Standar seating)
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12 items-start justify-start w-auto md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Restaurant informations
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_801 text-left w-full"
                      variant="body2"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default EnterDetailsReservationModal;
