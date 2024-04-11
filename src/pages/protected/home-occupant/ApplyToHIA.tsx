import { Button, CountryRegionDropdown, Input } from "@/components/ui";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { BiChevronRight, BiDownload, BiEdit, BiSearch } from "react-icons/bi";
import Map from "@/components/reusables/Map";
import {
  image1,
  image2,
  image3,
  image4,
  pendingApplications,
  placeholderHIAPackages,
  subContractors,
} from "@/constants";
import PackageCard from "@/components/reusables/PackageCard";
import TopHiaCard from "@/components/ui/TopHiaCard";
import FlyoutSidebar from "@/components/reusables/FlyoutSidebar";
import SubContractorCard from "@/components/reusables/SubContractorCard";
import SelectedPackagesSummaryCard from "@/components/reusables/SelectedPackagesSummaryCard";
import { FaChevronRight } from "react-icons/fa";
import DialogComponent from "@/components/reusables/Dialog";
import { HIAApplicationSuccess } from "@/components/dialogs";
import { HIAApplicationStatus } from "@/components/contextual";

type Props = {};

const ApplyToHIA = (_: Props) => {
  let countryData = Country.getAllCountries();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get("state");

  const [showSheet, setShowSheet] = useState(false);
  const [showSelectedPackagesSheet, setShowSelectedPackagesSheet] =
    useState(false);
  const [showApplicationSuccessDialog, setShowApplicationSuccessDialog] =
    useState(false);

  const selectedPackages = [0, 1];

  const identifyAggregatorApplicationState = () => {
    switch (tab) {
      case "details":
        return (
          <div className="flex justify-center text-black-main bg-white/80 min-h-screen py-10 px-6">
            <div className="max-w-[706px] w-full">
              <div className="flex justify-between items-center gap-x-4">
                <p className="font-semibold font-poppins text-xl">Details</p>
                <Button
                  variant={"link"}
                  className="flex items-center gap-x-1 font-poppins font-normal text-black-main px-0"
                >
                  <span>Edit details</span>
                  <BiEdit />
                </Button>
              </div>

              <form className="mt-10">
                <div>
                  <Input
                    name="annualHouseHoldIncome"
                    label="What is your annual household Income?"
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Your annual household income"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="otherIncome"
                    label="Other income (Spouse, additional employment, etc."
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Other income"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="householdMonthlyExpenses"
                    label="Household monthly expenses (excluding loans, credit card, etc)"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Household monthly expenses"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="otherMonthlyExpenses"
                    label="Other monthly expenses"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Other monthly expenses"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="numberOfDependents"
                    label="Number of dependents"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Number of dependents"
                  />
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() =>
                      navigate({
                        pathname: "",
                        search: createSearchParams({
                          state: "packages",
                        }).toString(),
                      })
                    }
                    className="w-full text-white font-poppins h-12"
                  >
                    Find
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      case "packages":
        return (
          <>
            {/* Select Packages sub contractors Sheet */}
            <FlyoutSidebar isOpen={showSheet} onOpenChange={setShowSheet}>
              <div className="font-poppins relative h-full">
                <div className="px-2 sm:px-6">
                  <div>
                    <p className="font-semibold text-2xl text-black-main">
                      Choose Subcontractors
                    </p>
                    <p className="text-gray-500 mt-1">
                      Select from a list of sub contractors to continue
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mt-6">
                      4/8 Subcontractors Selected
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-4">
                    {subContractors.map((subcontractor, i) => (
                      <SubContractorCard
                        data={subcontractor}
                        key={i}
                        setShowSheet={setShowSheet}
                      />
                    ))}
                  </div>
                </div>
                <div className="sticky bottom-0 mt-20 bg-white left-0 p-4 flex justify-around gap-2 flex-wrap font-poppins border w-full border-t-black-main/50 z-50">
                  <Button
                    onClick={() => setShowSheet(false)}
                    variant={"outline"}
                    className="border-black-main text-black-main max-w-[192px] w-full min-w-[120px]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setShowSheet(false)}
                    className="text-white max-w-[192px] w-full min-w-[120px]"
                  >
                    Save selection
                  </Button>
                </div>
              </div>
            </FlyoutSidebar>

            {/* View Selected Packages Sheet */}
            <FlyoutSidebar
              isOpen={showSelectedPackagesSheet}
              onOpenChange={setShowSelectedPackagesSheet}
            >
              <div className="font-poppins relative h-full">
                <div className="px-2 sm:px-6">
                  <div>
                    <p className="font-semibold text-2xl text-black-main">
                      Summary
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mt-6">
                      2/8 Packages selected
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-4 min-h-screen">
                    {placeholderHIAPackages
                      .slice(0, 1)
                      .map((packageData, i) => (
                        <SelectedPackagesSummaryCard
                          key={i}
                          packageData={packageData}
                          setShowSelectedPackagesSheet={
                            setShowSelectedPackagesSheet
                          }
                          setShowSheet={setShowSheet}
                          subContractorData={subContractors.slice(0, 2)}
                        />
                      ))}
                  </div>
                </div>
                <div className="sticky bottom-0 mt-20 bg-white left-0 p-4 flex justify-around gap-2 flex-wrap font-poppins border w-full border-t-black-main/50 z-50">
                  <Button
                    onClick={() => setShowSelectedPackagesSheet(false)}
                    variant={"outline"}
                    className="border-black-main text-black-main max-w-[192px] w-full min-w-[120px]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={
                      () => setShowApplicationSuccessDialog(true)
                      // navigate({
                      //   pathname: "",
                      //   search: createSearchParams({
                      //     state: "pending-applications",
                      //   }).toString(),
                      // })
                    }
                    className="text-white max-w-[192px] w-full min-w-[120px] gap-3"
                  >
                    <span>Apply now</span>
                    <FaChevronRight />
                  </Button>
                </div>
              </div>
            </FlyoutSidebar>

            <div className="flex justify-between items-center gap-x-4 py-10 px-6">
              <p className="font-semibold font-poppins text-xl text-black-main">
                Available HIA Packages (HIAs)
              </p>
              <Input
                name="firstLineOfAddress"
                inputClassName="bg-white font-poppins h-10"
                wrapperClassName="max-w-[400px_!important] rounded-lg border border-black-main/70"
                placeholder="Search here"
                prependIcon={<BiSearch color="grey" size={18} />}
              />
            </div>
            <div className="flex justify-center text-black-main bg-white/80 min-h-screen px-6">
              <div className="w-full flex justify-center gap-x-6">
                <div className="flex-[0.5] h-full">
                  <div className="flex justify-between items-center gap-x-5 flex-wrap">
                    <p className="font-poppins text-blue-main text-base">
                      0/20 Packages selected
                    </p>
                    <Button
                      onClick={() => setShowSelectedPackagesSheet(true)}
                      className="font-poppins text-white font-normal"
                    >
                      View selected Packages
                    </Button>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-5">
                    {placeholderHIAPackages.map((hiaPackage, i) => (
                      <PackageCard
                        data={hiaPackage}
                        key={i}
                        setShowSheet={setShowSheet}
                        isSelected={selectedPackages.includes(i)}
                        type="hia"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-[0.5] h-full flex flex-col sticky top-0">
                  <div className="w-full h-3/5 max-h-[390px]">
                    <Map />
                  </div>

                  <div className="flex flex-col pt-2 mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[16px] leading-[20px] font-medium font-poppins text-sub-header">
                        Top Home Improvement Agencies
                      </span>
                      <button className="text-[14px] leading-[12px] font-normal font-poppins text-main text-[#2196F3]">
                        See More
                      </button>
                    </div>

                    <div className="p-2 h-full rounded-lg flex flex-col gap-[1px] mt-4 overflow-hidden bg-gray-100">
                      <TopHiaCard
                        name="Microsoft Corporation"
                        image={image1}
                        retrofitCount="267,502"
                        className="rounded-t"
                      />
                      <TopHiaCard
                        name="Apple Inc."
                        image={image2}
                        retrofitCount="217,034"
                      />
                      <TopHiaCard
                        name="Tesla Inc."
                        image={image3}
                        retrofitCount="193,205"
                      />
                      <TopHiaCard
                        name="Real Madrid CF"
                        image={image4}
                        retrofitCount="154,005"
                        className="rounded-b"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "pending-applications":
        return (
          <div className="flex justify-center text-black-main bg-gray-100 min-h-screen py-10 px-6">
            <div className="max-w-[885px] w-full">
              <div className="flex justify-between items-center gap-x-4">
                <p className="font-semibold font-poppins text-xl">
                  Application Status
                </p>
              </div>
              <div className="flex flex-col gap-y-6 mt-8">
                {pendingApplications.map((data, i) => (
                  <div key={i} className="bg-white rounded-2xl px-10 py-6">
                    <p className="font-sans text-sm text-[#FF8D31]">
                      Application ID: APP243 45567
                    </p>
                    <div className="flex justify-between flex-wrap gap-4 mt-3">
                      <div className="flex gap-2">
                        <div className="size-8">
                          <img
                            src={image4}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-2">
                            <div className="flex justify-between flex-1 items-center">
                              <p className="font-poppins text-black text-lg brightness-0">
                                {data.org_name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <div className="flex gap-2 flex-wrap items-center">
                              <p className="text-sm text-blue-main py-1 font-sans rounded">
                                {data.location}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 items-center">
                            <div className="flex items-center">
                              {data.subcontractors.map(
                                (subcontractor: string, i: number) => (
                                  <div
                                    style={{
                                      transform: `translateX(-${i * 10}px)`,
                                    }}
                                    className={`size-8 rounded-full overflow-hidden shadow-lg bg-white border border-gray-200`}
                                    key={i}
                                  >
                                    <img
                                      src={subcontractor}
                                      className="object-cover"
                                    />
                                  </div>
                                )
                              )}
                            </div>
                            <p
                              className="text-xs font-medium font-poppins"
                              style={{
                                transform: `translateX(-${
                                  data.subcontractors.length === 1
                                    ? 0
                                    : data.subcontractors.length * 6
                                }px)`,
                              }}
                            >
                              {data.subcontractors.length} Subcontractors
                            </p>
                          </div>
                        </div>
                      </div>

                      {Boolean(data.status === "approved/accepted") && (
                        <div className="w-full max-w-[314px] flex justify-between flex-wrap gap-y-4 font-poppins">
                          <Button
                            onClick={() =>
                              navigate("/dashboard/applications/finance")
                            }
                            variant={"outline"}
                            className="w-[145px] border-2 text-blue-main border-blue-main text-xs"
                          >
                            Apply for finance
                          </Button>
                          <Button
                            variant={"outline"}
                            className="w-[145px] border-2 text-blue-main border-blue-main text-xs"
                          >
                            Apply for Insurance
                          </Button>
                          <Button
                            onClick={() =>
                              navigate(
                                "/dashboard/applications/hia-applications"
                              )
                            }
                            className="flex items-center gap-x-2 text-white w-[145px] flex-1 text-xs"
                          >
                            <span>Finish Application</span>
                            <BiChevronRight size={18} />
                          </Button>
                        </div>
                      )}
                      {Boolean(data.status === "approved") && (
                        <div className="w-full max-w-[314px] flex justify-between flex-wrap gap-y-4 font-poppins">
                          <Button
                            variant={"outline"}
                            className="w-[145px] border-2 text-blue-main border-blue-main text-xs flex gap-x-2 items-center"
                          >
                            <span className="font-normal">Download offer</span>
                            <BiDownload size={16} />
                          </Button>
                          <Button className="flex bg-blue-main items-center gap-x-2 text-white w-[145px] text-xs">
                            <span>Accept offer</span>
                            <BiChevronRight size={18} />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="mt-9 flex justify-between gap-4 items-center">
                      <HIAApplicationStatus status={data.status} />
                      {Boolean(data.status === "approved/accepted") && (
                        <Button
                          variant={"link"}
                          className="flex items-center gap-2 font-poppins text-sm p-0"
                        >
                          <span className="font-normal">Download offer</span>
                          <BiDownload size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex justify-center text-black-main bg-white/80 min-h-screen py-10 px-6">
            <div className="max-w-[706px] w-full">
              <div className="flex justify-between items-center gap-x-4">
                <p className="font-semibold font-poppins text-xl">Details</p>
                <Button
                  variant={"link"}
                  className="flex items-center gap-x-1 font-poppins font-normal text-black-main px-0"
                >
                  <span>Edit details</span>
                  <BiEdit />
                </Button>
              </div>

              <form className="mt-10">
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
                    label="Select country of residence"
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
                    label=" Select city/state/province"
                    wrapperClassName="bg-gray-100 w-full font-poppins"
                    placeholder="Select city/state/province"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="firstLineOfAddress"
                    label="First line of home address"
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Enter address"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Post code (home address)"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Enter post/zip code"
                  />
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() =>
                      navigate({
                        pathname: "",
                        search: createSearchParams({
                          state: "details",
                        }).toString(),
                      })
                    }
                    className="w-full text-white font-poppins h-12"
                  >
                    Proceed
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-fixed bg-contain bg-bottom bg-[url(/assets/graphics/applications-bg.svg)] bg-opacity-20">
      <DialogComponent
        isOpen={showApplicationSuccessDialog}
        onOpenChange={() =>
          navigate("/dashboard/applications/hia-applications")
        }
      >
        <HIAApplicationSuccess
          setShowApplicationSuccessDialog={setShowApplicationSuccessDialog}
        />
      </DialogComponent>

      {identifyAggregatorApplicationState()}
    </div>
  );
};

export default ApplyToHIA;
