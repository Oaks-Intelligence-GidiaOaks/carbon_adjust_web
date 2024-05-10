import axiosInstance from "@/api/axiosInstance";

export const fetchRetrofittingOptions = async () => {
  return axiosInstance.get("/applications/metadata");
};

export const fetchAggregators = async (
  country: string,
  cityOrProvince: string,
  aggType: string
) => {
  return axiosInstance.get(
    `/applications/aggregators?country=${country}&cityOrProvince=${cityOrProvince}&aggregatorType=${aggType}`
  );
};

export const fetchHIAPackages = async (id: string) => {
  return axiosInstance.get(`/applications/${id}/hia/packages`);
};

export const getSingleHOApp = async (id: string) => {
  return axiosInstance.get(`/applications/ho/${id}`);
};

export const fetchFinancePackages = async (id: string) => {
  return axiosInstance.get(`/applications/${id}/fin/packages`);
};

export const getRetrofittingActivities = async () => {
  return axiosInstance.get(`/applications/metadata`);
};

export const fetchHIAApps = async () => {
  return axiosInstance.get(`applications/ho?limit=20&page=1&type=HIA`);
};

export const applyToAgg = async (data: {
  retrofittingType: string;
  aggId: string;
  address: {
    country: string;
    cityOrProvince: string;
    firstLineAddress: string;
    zipcode: string;
  };
}) => {
  return axiosInstance.post(`/applications/ho/initiate`, data);
};

export const applyToHIA = async (data: any, id: string) => {
  return axiosInstance.post(`/applications/ho/${id}/hia/apply`, data);
};

export const applyToFinance = async (data: any, id: string) => {
  return axiosInstance.post(`/applications/ho/${id}/fin/apply`, data);
};
