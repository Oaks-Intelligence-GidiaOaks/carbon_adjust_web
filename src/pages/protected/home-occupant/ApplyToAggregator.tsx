import { Button, CountryRegionDropdown, Input } from "@/components/ui";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Country, State } from "country-state-city";
import RadioGroupComponent from "@/components/ui/RadioGroup";
import { useState } from "react";
import DialogComponent from "@/components/reusables/Dialog";
import { LuRefreshCcw } from "react-icons/lu";
import { SelectAggregator } from "@/components/dialogs";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const ApplyToAggregator = (_: Props) => {
  let countryData = Country.getAllCountries();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showSelectAggregatorDialog, setShowSelectAggregatorDialog] =
    useState(false);

  const tab = searchParams.get("state");

  const identifyAggregatorApplicationState = () => {
    switch (tab) {
      case "aggregator-form":
        return (
          <div className="flex justify-center bg-white/80 min-h-screen py-10 px-6">
            <div className="max-w-[706px]">
              <p className="font-semibold font-poppins">
                Sustainability Information
              </p>
              <p className="font-poppins mt-4">
                Please select the range of retrofitting activities you will be
                seeking Carbon Credit for.
              </p>

              <form className="mt-10">
                <Input
                  name="firstLineOfAddress"
                  label="First Line of Address"
                  labelClassName="mb-4 font-poppins text-black-main"
                  inputClassName="bg-gray-100 font-poppins"
                  placeholder="Enter address"
                />
                <div className="mt-6">
                  <CountryRegionDropdown
                    name="countryOfResidence"
                    labelClassName="mb-4 text-black-main font-poppins"
                    options={countryData.map((country) => ({
                      label: country.name,
                      value: country.isoCode,
                      prefixIcon: country.flag,
                    }))}
                    searchable={true}
                    label="Country of Residence"
                    wrapperClassName="bg-gray-100 w-full font-poppins"
                    placeholder="Select country"
                  />
                </div>
                <div className="mt-6">
                  <CountryRegionDropdown
                    name="city/state/province"
                    labelClassName="mb-4 text-black-main font-poppins"
                    options={State.getStatesOfCountry("NG").map((state) => ({
                      label: state.name,
                      value: state.isoCode,
                    }))}
                    searchable={true}
                    label="City/State/Province"
                    wrapperClassName="bg-gray-100 w-full font-poppins"
                    placeholder="Select city/state/province"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Post Code/Zip code"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Enter post/zip code"
                  />
                </div>
                <div className="mt-6">
                  <RadioGroupComponent
                    options={[
                      "Heating/Cooling",
                      "Insulation",
                      "Lighting",
                      "Flexible Dispatch",
                      "Others",
                    ]}
                  />
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() => setShowSelectAggregatorDialog(true)}
                    className="w-full text-white font-poppins h-12"
                  >
                    Send to Aggregators
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      case "pending-application":
        return (
          <div className="flex justify-center bg-white/80 min-h-screen">
            <div className="max-w-[500px] px-2 flex flex-col items-center pt-10">
              <img src="/assets/graphics/pending-application.svg" />
              <p className="text-center font-poppins text-xl font-semibold px-[10%] text-black-main">
                Details successfully sent to aggregators
              </p>
              <p className="pt-4 font-poppins text-red-500">
                Awaiting approval
              </p>
              <Button
                variant="default"
                // disabled
                className="bg-white h-10 shadow px-8 flex gap-2 justify-center items-center font-poppins mt-6"
                onClick={() =>
                  navigate({
                    pathname: "",
                    search: createSearchParams({
                      state: "application-approved",
                    }).toString(),
                  })
                }
              >
                <span className="text-white">Refresh</span>
                <LuRefreshCcw
                  width={24}
                  className="text-white"
                  color="#FFFFFF"
                />
              </Button>
              <p className="mt-10 text-blue-main text-center font-poppins italic">
                “From 1990 to 2019, the total warming effect from greenhouse
                gases added by humans to the Earth's atmosphere increased by 45
                percent. The warming effect associated with carbon dioxide alone
                increased by 36 percent.”
              </p>
            </div>
          </div>
        );
      case "application-rejected":
        return (
          <div className="flex justify-center bg-white/80 min-h-screen">
            <div className="max-w-[500px] px-2 flex flex-col items-center pt-10">
              <img src="/assets/graphics/application-rejected.svg" />
              <p className="text-center font-poppins text-xl font-medium mt-6 px-[10%] text-red-500">
                Application Rejected
              </p>
              <Button
                variant="default"
                // disabled
                className="bg-white h-10 shadow px-8 flex gap-2 justify-center items-center font-poppins mt-6"
                onClick={() =>
                  navigate({
                    pathname: "",
                    search: createSearchParams({
                      state: "aggregator-form",
                    }).toString(),
                  })
                }
              >
                <span className="text-white">Start Application</span>
                <ArrowRightIcon
                  width={24}
                  className="text-white"
                  color="#FFFFFF"
                />
              </Button>
            </div>
          </div>
        );
      case "application-approved":
        return (
          <div className="flex justify-center bg-white/80 min-h-screen">
            <div className="max-w-[500px] px-2 flex flex-col items-center pt-10">
              <img src="/assets/graphics/pending-application.svg" />
              <p className="text-center font-poppins text-xl font-medium mt-6 px-[10%] text-green-500">
                Application Approved
              </p>
              <div className="flex flex-col w-48 items-center">
                <Button
                  variant="default"
                  // disabled
                  className="bg-white h-10 shadow px-8 flex gap-2 justify-center items-center font-poppins mt-6 w-full"
                  onClick={() =>
                    navigate({
                      pathname: "/dashboard/applications/hia",
                    })
                  }
                >
                  <span className="text-white">Finish Application</span>
                </Button>
                <Button
                  variant="outline"
                  // disabled
                  className="bg-transparent h-10 shadow px-8 flex gap-2 justify-center items-center font-poppins mt-6 w-full border-blue-main"
                  onClick={() =>
                    navigate({
                      pathname: "",
                      search: createSearchParams({
                        state: "aggregator-form",
                      }).toString(),
                    })
                  }
                >
                  <span className="text-blue-main">Apply to HIA</span>
                  <ArrowRightIcon width={24} className="text-blue-main" />
                </Button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex justify-center bg-white/80 min-h-screen">
            <div className="max-w-[500px] px-2 flex flex-col items-center pt-10">
              <img src="/assets/graphics/empty-box.svg" />
              <p className="text-center font-poppins text-lg font-semibold px-[10%] text-black-main">
                There is no created{" "}
                <span className="text-blue-main">application</span> yet on your
                account
              </p>
              <Button
                variant="default"
                // disabled
                className="bg-white h-10 shadow px-8 flex gap-4 justify-center items-center font-poppins mt-6"
                onClick={() =>
                  navigate({
                    pathname: "",
                    search: createSearchParams({
                      state: "aggregator-form",
                    }).toString(),
                  })
                }
              >
                <span className="text-white">Start Application</span>
                <ArrowRightIcon
                  width={24}
                  className="text-white"
                  color="#FFFFFF"
                />
              </Button>
              <p className="mt-10 text-blue-main text-center font-poppins italic">
                “From 1990 to 2019, the total warming effect from greenhouse
                gases added by humans to the Earth's atmosphere increased by 45
                percent. The warming effect associated with carbon dioxide alone
                increased by 36 percent.”
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-fixed bg-contain bg-bottom bg-[url(/assets/graphics/applications-bg.svg)] bg-opacity-20">
      {showSelectAggregatorDialog && (
        <DialogComponent
          isOpen={showSelectAggregatorDialog}
          onOpenChange={() => setShowSelectAggregatorDialog(false)}
        >
          <SelectAggregator
            setShowSelectAggregatorDialog={setShowSelectAggregatorDialog}
          />
        </DialogComponent>
      )}
      {identifyAggregatorApplicationState()}
    </div>
  );
};

export default ApplyToAggregator;