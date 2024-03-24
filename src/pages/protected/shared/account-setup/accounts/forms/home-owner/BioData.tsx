import { Input } from "@/components/ui";

type Props = {};

const BioData = (_: Props) => {
  return (
    <div className="">
      <div className="p-6 px-14 pt-14 bg-white my-10 pb-20 rounded-xl flex flex-col gap-y-6">
        <Input
          name="fullName"
          label="Full Name"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="Jeffery Cooper"
        />
        <Input
          name="email"
          label="Email Address"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="jefferycooper@gmail.com"
        />
        <Input
          name="phoneNumber"
          label="Phone Number"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="+234"
        />
        <Input
          name="dateOfBirth"
          label="Date of birth"
          labelClassName="mb-4"
          inputClassName="bg-gray-100"
          placeholder="4th April 1956"
        />
      </div>
    </div>
  );
};

export default BioData;
