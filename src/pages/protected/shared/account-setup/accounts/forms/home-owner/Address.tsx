import { Dropdown, Input } from "@/components/ui";

type Props = {};

const Address = (_: Props) => {
  return (
    <div className="">
      <div className="p-6 px-14 pt-14 bg-white my-10 pb-20 rounded-xl flex flex-col gap-y-6">
        <div>
          <Dropdown
            name="countryOfResidence"
            labelClassName="mb-4 text-[#000000_!important]"
            options={[{ id: 1, label: "Nigeria", value: "nigeria" }]}
            label="Country of Residence"
            wrapperClassName="bg-gray-100 w-full"
            placeholder="Select country"
          />
        </div>
        <div>
          <Dropdown
            name="city/province"
            labelClassName="mb-4 text-[#000000_!important]"
            options={[{ id: 1, label: "Nigeria", value: "nigeria" }]}
            label="City/Province"
            wrapperClassName="bg-gray-100 w-full"
            placeholder="Select city/province"
          />
        </div>
        <Input
          name="lineOfAddress"
          label="First Line of Address"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Enter address"
        />
        <Input
          name="zipCode"
          label="Zip Code"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Enter zip code"
        />
        <div>
          <Dropdown
            name="epcRating"
            labelClassName="mb-4 text-[#000000_!important]"
            options={[{ id: 1, label: "Nigeria", value: "nigeria" }]}
            label="EPC Rating"
            wrapperClassName="bg-gray-100 w-full"
            placeholder="Select EPC rating"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
