import { Dropdown, Input } from "@/components/ui";

type Props = {};

const HomeInformation = (_: Props) => {
  return (
    <div className="">
      <div className="p-6 px-14 pt-14 bg-white my-10 pb-20 rounded-xl flex flex-col gap-y-6">
        <div>
          <Dropdown
            name="houseType"
            labelClassName="mb-4 text-[#000000_!important]"
            options={[{ id: 1, label: "Nigeria", value: "nigeria" }]}
            label="House Type"
            wrapperClassName="bg-gray-100 w-full"
            placeholder="Select house type"
          />
        </div>
        <Input
          name="yearOfConstruction"
          label="Year of Construction"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Select year"
        />
        <div>
          <Dropdown
            name="Ownership Status"
            labelClassName="mb-4 text-[#000000_!important]"
            options={[{ id: 1, label: "Nigeria", value: "nigeria" }]}
            label="City/Province"
            wrapperClassName="bg-gray-100 w-full"
            placeholder="Select ownership status"
          />
        </div>
        <Input
          name="moveInDate"
          label="Move-in Date"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Select move-in date"
        />
        <Input
          name="zipCode"
          label="Zip Code"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Enter zip code"
        />
        <Input
          name="noOfRooms"
          label="Enter number of rooms"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Enter zip code"
        />
        <Input
          name="noOfRooms"
          label="Enter number of rooms"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
        />
        <Input
          name="noOfRooms"
          label="Number of Occupants (Adults 16+)"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
        />
        <Input
          name="noOfOccupants"
          label="Number of Occupants (Children 0-15)"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
        />
      </div>
    </div>
  );
};

export default HomeInformation;
