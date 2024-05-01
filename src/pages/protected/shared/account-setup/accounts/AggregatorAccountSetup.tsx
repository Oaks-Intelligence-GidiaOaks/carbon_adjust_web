import AccountActionHeader from "@/components/reusables/account-setup/AccountActionHeader";
import AccountSetupInfo from "@/components/reusables/account-setup/AccountSetupInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import AccountSetUpForm from "./AccountSetUpForm";
import { Button } from "@/components/ui";
import ScrollToTop from "@/components/reusables/ScrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/api/axiosInstance";
import toast from "react-hot-toast";
import { VerifyPhoneNumber } from "@/components/dialogs";
import { Oval } from "react-loader-spinner";
import { OrgDocInfoForm } from "@/types/general";
import OrganizationSetupForm from "./OrganizationSetUpForm";
import { uniqueObjectsByIdType } from "@/utils";

type Props = {};

const AggregatorAccountSetup = (_: Props) => {
  const navigate = useNavigate();

  const userData = useSelector((state: RootState) => state.user.user);

  const figureStepBasedOnAccountType = (step: number | undefined) => {
    if (userData?.roles[0] !== "HOME_OCCUPANT") {
      return step ?? 1;
    }

    step ? step + 1 : 1;
  };
  const initialStep = figureStepBasedOnAccountType(userData?.step);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [verifyPhoneNumber, setVerifyPhoneNumber] = useState(false);

  const logOut = () => {
    navigate("/");
  };

  const setAggBioData = useMutation({
    mutationFn: (bioData: {
      contactEmail: string;
      dateFormed: string;
      phoneNos: string;
      contactName: string;
      name: string;
      bio: string;
    }) => axiosInstance.patch(`/users/org/biodata`, bioData),
    mutationKey: ["set-biodata"],
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.message}. Please verify your phone number`, {
        duration: 10000,
      });
      setVerifyPhoneNumber(true);
    },
  });

  const setAggAddress = useMutation({
    mutationFn: (address: {
      address: {
        country: string;
        cityOrProvince: string;
        firstLineAddress: string;
        zipcode: string;
      };
    }) => axiosInstance.patch(`/users/address`, address),
    mutationKey: ["address-setup"],
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.message}`, {
        duration: 10000,
      });
      setCurrentStep(3);
    },
  });

  const setContactDoc = useMutation({
    mutationFn: (docData: FormData) =>
      axiosInstance.post(`/users/upload/doc`, docData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    mutationKey: ["doc-submission"],
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.message}`, {
        duration: 10000,
      });
      navigate("/dashboard");
    },
  });

  const setCertOfInc = useMutation({
    mutationFn: (docData: FormData) =>
      axiosInstance.post(`/users/org/upload/doc`, docData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    mutationKey: ["cert-of-inc-submission"],
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.message}`, {
        duration: 10000,
      });
      navigate("/dashboard");
    },
  });

  const setCertOfAuth = useMutation({
    mutationFn: (docData: FormData) =>
      axiosInstance.post(`/users/org/upload/doc`, docData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    mutationKey: ["cert-of-auth-submission"],
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.message}`, {
        duration: 10000,
      });
      navigate("/dashboard");
    },
  });

  const handleDocSubmission = () => {
    const formData = new FormData();

    if (DocInfoState.contactDoc === null) {
      return;
    }
    if (DocInfoState.contactDoc !== null) {
      formData.append("idType", DocInfoState.idType.value);
      formData.append("file", DocInfoState.contactDoc[0]);
    }
    setContactDoc.mutate(formData);
  };
  const handleCertOfIncSubmission = () => {
    const formData = new FormData();

    if (DocInfoState.certOfInc === null) {
      return;
    }
    if (DocInfoState.certOfInc !== null) {
      formData.append("idType", "Certificate of Incorporation");
      formData.append("file", DocInfoState.certOfInc[0]);
    }

    setCertOfInc.mutate(formData);
  };
  const handleCertOfAuthSubmission = () => {
    const formData = new FormData();

    if (DocInfoState.certOfAuth === null) {
      return;
    }
    if (DocInfoState.certOfAuth !== null) {
      formData.append("idType", DocInfoState.idType.value);
      formData.append("file", DocInfoState.certOfAuth[0]);
    }
    setCertOfAuth.mutate(formData);
  };

  const [formState, setFormState] = useState({
    entityName: userData?.name ?? "",
    contactEmail: userData?.contactEmail ?? "",
    contactName: userData?.name ?? "",
    dateOfFormation: userData?.dateFormed ?? "",
    phoneNumber: userData?.phoneNos ?? "",
    bio: userData?.bio ?? "",
  });

  const [addressFormState, setAddressFormState] = useState({
    country: {
      label: "",
      value: "",
    },
    cityOrProvince: {
      label: "",
      value: "",
    },
    firstLineAddress: "",
    zipcode: "",
  });

  const [DocInfoState, setDocInfoState] = useState<OrgDocInfoForm>({
    idType: {
      label: "",
      value: "",
    },
    contactDoc: null,
    certOfInc: null,
    certOfAuth: null,
  });

  const doc = uniqueObjectsByIdType(
    useSelector((state: RootState) => state.user?.user?.doc ?? null)
  );

  const goToNext = async () => {
    switch (currentStep) {
      case 1:
        setAggBioData.mutate({
          contactEmail: formState.contactEmail,
          contactName: formState.contactName,
          dateFormed: formState.dateOfFormation,
          name: formState.entityName,
          phoneNos: formState.phoneNumber,
          bio: formState.bio,
        });
        break;
      case 2:
        setAggAddress.mutate({
          address: {
            cityOrProvince: addressFormState.cityOrProvince.label,
            country: addressFormState.country.label,
            firstLineAddress: addressFormState.firstLineAddress,
            zipcode: addressFormState.zipcode,
          },
        });
        break;
      case 3:
        // handleDocSubmission();
        if (doc.length === 3) {
          navigate("/pending-verification");
        }
        return;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(addressFormState);
  }, [addressFormState]);

  return (
    <ScrollToTop dependentValue={currentStep}>
      {verifyPhoneNumber && (
        <VerifyPhoneNumber
          phone={setAggBioData.data?.data.data.phoneNos}
          nextStep={() => setCurrentStep(2)}
          closeVerifyPhoneNumber={() => setVerifyPhoneNumber(false)}
        />
      )}
      <AccountActionHeader
        actionTitle="Log out"
        action={logOut}
        className={"bg-white"}
      />
      <AccountSetupInfo
        accountType={userData?.roles[0]}
        currentStep={currentStep}
      />
      <div className="flex bg-gray-100 justify-center min-h-screen pb-20 bg-account-setup-image bg-cover bg-fixed">
        <div className="max-w-[760px] w-full">
          <OrganizationSetupForm
            accountType={userData?.roles[0]}
            currentStep={currentStep}
            formState={formState}
            setFormState={setFormState}
            addressFormState={addressFormState}
            setAddressFormState={setAddressFormState}
            DocInfoState={DocInfoState}
            setDocInfoState={setDocInfoState}
            handleDocSubmission={handleDocSubmission}
            handleCertOfIncSubmission={handleCertOfIncSubmission}
            handleCertOfAuthSubmission={handleCertOfAuthSubmission}
          />
          <Button
            disabled={
              setAggBioData.isPending || setAggAddress.isPending
              // setUserDoc.isPending
            }
            onClick={goToNext}
            className="rounded-lg text-white mt-4 w-full h-11"
          >
            {setAggBioData.isPending || setAggAddress.isPending ? (
              // setUserDoc.isPending ?
              <Oval
                visible={
                  setAggBioData.isPending || setAggAddress.isPending
                  // setUserDoc.isPending
                }
                height="20"
                width="20"
                color="#ffffff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <span>Next</span>
            )}
          </Button>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default AggregatorAccountSetup;