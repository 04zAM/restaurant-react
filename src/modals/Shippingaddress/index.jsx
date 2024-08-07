import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, Button } from "components";

const ShippingaddressModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[59%]"
        overlayClassName="bg-gray_900_a3 fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col gap-10 items-end justify-start mb-[511px] p-[50px] md:px-5 rounded-[16px] w-full">
            <div className="flex flex-row items-center justify-between ml-auto w-[67%] md:w-full">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Shipping address
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer h-5 w-5"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-[54px] items-center justify-start mb-2.5 mr-2.5 w-[98%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="font-medium text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Shipping address
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-[13px] rounded-lg w-full">
                  <Input
                    wrapClassName="sm:flex-1 w-auto sm:w-full"
                    className="font-normal not-italic p-0 placeholder:text-gray_900 text-base text-gray_900 text-left w-full"
                    name="Subject"
                    placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineGray400"
                  ></Input>
                  <Button
                    className="cursor-pointer font-normal min-w-[166px] not-italic text-center text-lg text-white_A700 w-auto"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillIndigo300"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-row gap-4 items-end justify-start mt-[17px] w-[37%] md:w-full">
                  <Img
                    src="images/img_checkmark.svg"
                    className="h-6 mb-0.5 w-6"
                    alt="checkmark"
                  />
                  <Text
                    className="font-normal mt-[5px] not-italic text-indigo_300 text-left w-auto"
                    variant="body3"
                  >
                    Use your current location
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[481px] items-center justify-end p-[93px] md:px-10 sm:px-5 rounded-[16px] w-full"
                style={{ backgroundImage: "url('images/img_group7771.png')" }}
              >
                <div className="flex flex-col gap-[13px] items-center justify-start mt-5 w-[71%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[221px] items-center justify-start p-3 rounded-[30px] w-full"
                    style={{
                      backgroundImage: "url('images/img_direction.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-3.5 items-end justify-between mb-[25px] mt-[5px] w-[99%] md:w-full">
                      <Img
                        src="images/img_1.png"
                        className="h-[165px] md:h-auto object-cover w-auto"
                        alt="One"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[7px] w-auto">
                        <div className="flex flex-col items-start justify-start w-auto md:w-full">
                          <Text
                            className="text-gray_900 text-left w-auto"
                            variant="body5"
                          >
                            Highbridge House
                          </Text>
                          <Text
                            className="leading-[153.00%] mt-2 not-italic text-gray_900 text-left w-full"
                            variant="body8"
                          >
                            1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat
                          </Text>
                          <Text
                            className="mt-[11px] not-italic text-gray_900 text-left w-auto"
                            variant="body8"
                          >
                            40.885147,-73.9220459
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-semibold min-w-[185px] text-[12.99px] text-center text-white_A700 w-auto"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillRed500"
                        >
                          Confirmation
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_location.svg"
                    className="h-[38px] w-[8%]"
                    alt="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ShippingaddressModal;
