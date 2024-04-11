import { Country, State } from "country-state-city";
import { Button, CountryRegionDropdown, Dropdown } from "../ui";
import * as Dialog from "@radix-ui/react-dialog";
import { GrClose } from "react-icons/gr";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FormEvent } from "react";

type Props = {
  setShowSelectAggregatorDialog: (value: boolean) => void;
};

const SelectAggregator = ({ setShowSelectAggregatorDialog }: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSelectAggregatorDialog(false);
    navigate({
      pathname: "",
      search: createSearchParams({
        state: "pending-application",
      }).toString(),
    });
  };
  let countryData = Country.getAllCountries();
  return (
    <div className="w-screen max-w-[806px] bg-white h-fit rounded-md pt-6 mt-[10vh] relative">
      <div className="max-w-[630px] w-full mx-auto px-2 sm:px-6 relative">
        <div className="mx-auto pb-[10vh]">
          <p className="font-semibold text-blue-main text-lg text-center font-poppins">
            SELECT AGGREGATOR
          </p>
          <form onSubmit={handleSubmit} className="mt-10 mx-auto">
            <div className="mt-6">
              <CountryRegionDropdown
                name="country"
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
              <Dropdown
                name="AggregatorType"
                labelClassName="mb-4 text-[#000000_!important] font-poppins"
                options={[
                  {
                    id: 1,
                    label: "Local Authorities",
                    value: "local_authorities",
                  },
                ]}
                label="Aggregator type"
                wrapperClassName="bg-gray-100 w-full font-poppins"
                placeholder="Select aggregator type"
              />
            </div>
            <div className="mt-6">
              <Dropdown
                name="Aggregator name"
                labelClassName="mb-4 text-[#000000_!important] font-poppins"
                options={[
                  { id: 1, label: "Amuwo Odofin LGA", value: "amuwo_odofin" },
                ]}
                label="City/Province"
                wrapperClassName="bg-gray-100 w-full font-poppins"
                placeholder="Select aggregator"
              />
            </div>
            <div className="mt-10">
              <Button className="w-full text-white font-poppins h-12">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Dialog.Close asChild>
        <button
          className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-7 right-6 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <GrClose />
        </button>
      </Dialog.Close>
    </div>
  );
};

export default SelectAggregator;
