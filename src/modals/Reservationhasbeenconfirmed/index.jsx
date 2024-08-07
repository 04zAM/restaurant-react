import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const ReservationhasbeenconfirmedModal = (props) => {
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
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[1112px] mx-auto my-[76px] md:px-5 py-[38px] rounded-[16px] w-full">
            <div className="mb-[26px] overflow-x-auto w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between ml-auto w-[55%] md:w-full">
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Reservation
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="common-pointer h-6 w-6"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-poppins h-[286px] items-start justify-end p-11 md:px-10 sm:px-5 w-full"
                  style={{
                    backgroundImage: "url('images/img_reservationhas.png')",
                  }}
                >
                  <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[54px] w-[62%] md:w-full">
                    <Text
                      className="font-semibold text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Reservation has been confirmed
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mt-7 w-[85%] md:w-full">
                      <Img
                        src="images/img_arrowdown_30X30.svg"
                        className="h-[30px] w-[30px]"
                        alt="arrowdown"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body2"
                      >
                        The confirmation result has been sent to your email
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start mt-3 w-[38%] md:w-full">
                      <Img
                        src="images/img_calendar_30X30.svg"
                        className="h-[30px] w-[30px]"
                        alt="calendar"
                      />
                      <Text
                        className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                        variant="body2"
                      >
                        Booking ID : #123456
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start md:ml-[0] ml-[34px] mt-12 w-[95%] md:w-full">
                  <div className="md:h-[329px] h-[330px] relative w-[330px]">
                    <div className="bg-deep_orange_200_63 flex flex-col h-full items-center justify-start m-auto p-8 sm:px-5 rounded-[50%] w-[330px]">
                      <div className="bg-deep_orange_200_6c h-[265px] rounded-[50%] w-[265px]"></div>
                    </div>
                    <Img
                      src="images/img_unsplash.png"
                      className="absolute h-[210px] inset-[0] justify-center m-auto rounded-[50%] w-[210px]"
                      alt="unsplash"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] w-[31%] md:w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Reservation detail
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-full">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[34px] w-[34px]"
                        alt="calendar One"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-auto"
                        variant="body2"
                      >
                        Saturday, 28 february 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start mt-5 w-[46%] md:w-full">
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
                    <div className="flex flex-row gap-5 items-center justify-start mt-5 w-full">
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
                  <div className="flex flex-col gap-5 items-center justify-start ml-28 md:ml-[0] w-[24%] md:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[246px] not-italic text-center text-indigo_900 text-xl w-auto"
                      shape="RoundedBorder20"
                      size="xl"
                      variant="FillLightblueA7006c"
                    >
                      Modify
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-normal min-w-[246px] not-italic text-center text-red_A700 text-xl w-auto"
                      onClick={() => navigate("/cancelreservation")}
                      shape="RoundedBorder20"
                      size="2xl"
                      variant="FillRedA70063"
                    >
                      Cancel
                    </Button>
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

export default ReservationhasbeenconfirmedModal;
