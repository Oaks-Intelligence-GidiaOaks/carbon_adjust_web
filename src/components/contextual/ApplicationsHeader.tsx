import {
  AggregatorIcon,
  FinanceIcon,
  HIAIcon,
  InsuranceIcon,
} from "@/assets/icons";
import gridIcon from "@/assets/icons/grid-icon.svg";
import { cn } from "@/utils";
import { useLocation, useNavigate } from "react-router-dom";

const ApplicationsHeader = ({}: { currentStage: number }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isCurrentPath = (path: string): boolean => pathname === path;

  const isAggregatorTabActive = isCurrentPath(
    "/dashboard/applications/aggregator"
  );
  const isAggregatorApplicationsTabActive = isCurrentPath(
    "/dashboard/applications/aggregator-applications"
  );
  const isHIATabActive = isCurrentPath("/dashboard/applications/hia");
  const isHIAApplicationsTabActive = isCurrentPath(
    "/dashboard/applications/hia-applications"
  );
  const isFinanceTabActive = isCurrentPath("/dashboard/applications/finance");
  const isFinanceApplicationsTabActive = isCurrentPath(
    "/dashboard/applications/finance-applications"
  );
  const isInsuranceTabActive = isCurrentPath(
    "/dashboard/applications/insurance"
  );
  const isInsuranceApplicationsTabActive = isCurrentPath(
    "/dashboard/applications/insurance-applications"
  );

  return (
    <div className="bg-[#F8FBFC] pl-2 sm:pl-6 pt-6 border-b border-[#DDD7D7] shadow-md">
      <p className="font-bold font-poppins text-lg">Applications</p>
      <div className="w-full overflow-scroll">
        <div className="w-0 overflow-visible">
          <div className="flex pb-10 pt-3">
            <div className="w-[285px] min-w-[285px]">
              <button
                // disabled={isDisabled}
                onClick={() => {
                  navigate("/dashboard/applications/aggregator");
                }}
                className={`w-[100%] pointer-outer-start bg-[#E5F2FA] drop-shadow-sm cursor-pointer`}
              >
                <div className={`w-[100%] pointer-inner-start drop-shadow-sm`}>
                  <div
                    className={`w-full h-full flex items-center justify-start pl-6 gap-2 ${
                      isAggregatorTabActive
                        ? "bg-gradient-to-r from-blue-main to-blue-secondary"
                        : "bg-[#E5F2FA]"
                    }`}
                  >
                    <div
                      className={cn(
                        "w-[38px] h-[39px] rounded bg-[#C2E4FA] flex justify-center items-center",
                        isAggregatorTabActive &&
                          "bg-gradient-to-bl from-blue-main to-blue-secondary shadow-lg shadow-blue-secondary"
                      )}
                    >
                      <AggregatorIcon
                        className={
                          isAggregatorTabActive ? "brightness-[1000%]" : ""
                        }
                      />
                    </div>
                    <span
                      className={`font-poppins font-semibold ${
                        isAggregatorTabActive ? "text-white" : "text-blue-main"
                      } text-xs`}
                    >
                      Apply to Aggregator
                    </span>
                  </div>
                </div>
              </button>
              <div>
                <span
                  onClick={() => {
                    navigate("/dashboard/applications/aggregator-applications");
                  }}
                  className={`cursor-pointer font-medium flex items-center shadow-[#2480CC]/10 shadow-sm rounded-md justify-center text-[10px] gap-2 p-1 w-[229px] mt-3 py-2 text-xs border font-poppins border-solid ${
                    isAggregatorApplicationsTabActive
                      ? "text-white bg-blue-main border-blue-main"
                      : "text-blue-main bg-white border-[#2186D2]/20"
                  }`}
                >
                  <img
                    alt="icon"
                    src={gridIcon}
                    className={`w-4 ${
                      isAggregatorApplicationsTabActive
                        ? "brightness-[1000%]"
                        : ""
                    }`}
                  />{" "}
                  Applications to Aggregators
                </span>
              </div>
            </div>
            <div className="w-[285px] min-w-[285px] -translate-x-[3%]">
              <button
                onClick={() => {
                  navigate("/dashboard/applications/hia");
                }}
                className={`w-[100%] pointer-outer bg-[#E5F2FA] drop-shadow-sm cursor-pointer`}
              >
                <div className="w-[100%] pointer-inner drop-shadow-sm">
                  <div
                    className={`w-full h-full flex items-center gap-x-2 justify-start pl-12 ${
                      isHIATabActive
                        ? "bg-gradient-to-r from-blue-main to-blue-secondary"
                        : "bg-[#E5F2FA]"
                    } `}
                  >
                    <div
                      className={cn(
                        "w-[38px] h-[39px] rounded bg-[#C2E4FA] flex justify-center items-center",
                        isHIATabActive &&
                          "bg-gradient-to-bl from-blue-main to-blue-secondary shadow-lg shadow-blue-secondary"
                      )}
                    >
                      <HIAIcon
                        className={isHIATabActive ? "brightness-[1000%]" : ""}
                      />
                    </div>
                    <span
                      className={`font-poppins text-start font-semibold ${
                        isHIATabActive ? "text-white" : "text-blue-main"
                      } text-xs`}
                    >
                      Apply to Home <br /> Improvement Agencies
                    </span>
                  </div>
                </div>
              </button>
              <div>
                <span
                  onClick={() => {
                    navigate("/dashboard/applications/hia-applications");
                  }}
                  className={`cursor-pointer font-medium flex items-center shadow-[#2480CC]/10 shadow-sm rounded-md justify-center text-[10px]  gap-2 p-1 w-[229px] -translate-x-[15%] mt-3 py-2 text-xs border font-poppins border-solid ${
                    isHIAApplicationsTabActive
                      ? "text-white bg-blue-main border-blue-main"
                      : "text-blue-main bg-white border-[#2186D2]/20"
                  }`}
                >
                  <img
                    alt="icon"
                    src={gridIcon}
                    className={`w-4 ${
                      isHIAApplicationsTabActive ? "brightness-[1000%]" : ""
                    }`}
                  />{" "}
                  Applications to HIA
                </span>
              </div>
            </div>
            <div className="w-[285px] min-w-[285px] -translate-x-[6%]">
              <button
                onClick={() => {
                  navigate("/dashboard/applications/finance");
                }}
                className={`w-[100%] pointer-outer bg-ca-cyan drop-shadow-sm cursor-pointer -translate-x-[24%]`}
              >
                <div className="w-[100%] pointer-inner drop-shadow-sm">
                  <div
                    className={`w-full h-full flex items-center justify-start pl-12 gap-x-2 ${
                      isFinanceTabActive
                        ? "bg-gradient-to-r from-blue-main to-blue-secondary"
                        : "bg-[#E5F2FA]"
                    }`}
                  >
                    <div
                      className={cn(
                        "w-[38px] h-[39px] rounded bg-[#C2E4FA] flex justify-center items-center",
                        isFinanceTabActive &&
                          "bg-gradient-to-bl from-blue-main to-blue-secondary shadow-lg shadow-blue-secondary"
                      )}
                    >
                      <FinanceIcon
                        className={
                          isFinanceTabActive ? "brightness-[1000%]" : ""
                        }
                      />
                    </div>
                    <span
                      className={`font-poppins font-semibold ${
                        isFinanceTabActive ? "text-white" : "text-blue-main"
                      } text-xs`}
                    >
                      Apply for Finance
                    </span>
                  </div>
                </div>
              </button>
              <div>
                <span
                  onClick={() => {
                    navigate("/dashboard/applications/finance-applications");
                  }}
                  className={`cursor-pointer font-medium flex items-center shadow-[#2480CC]/10 shadow-sm rounded-md justify-center text-[10px] gap-2 p-1 w-[229px] mt-3 py-2 text-xs border font-poppins border-solid -translate-x-[30%] ${
                    isFinanceApplicationsTabActive
                      ? "text-white bg-blue-main border-blue-main"
                      : "text-blue-main bg-white border-[#2186D2]/20"
                  }`}
                >
                  <img
                    alt="icon"
                    src={gridIcon}
                    className={`w-4 ${
                      isFinanceApplicationsTabActive ? "brightness-[1000%]" : ""
                    }`}
                  />{" "}
                  Applications for Finance
                </span>
              </div>
            </div>
            <div className="w-[285px] min-w-[285px] -translate-x-[9%]">
              <button
                // disabled={isInsuranceDisabled}
                onClick={() => {
                  navigate("/dashboard/applications/insurance");
                }}
                className={`w-[100%] pointer-outer bg-ca-cyan drop-shadow-sm cursor-pointer -translate-x-[36%]`}
              >
                <div className="w-[100%] pointer-inner drop-shadow-sm">
                  <div
                    className={`w-full h-full flex items-center justify-start pl-12 gap-x-2 ${
                      isInsuranceTabActive
                        ? "bg-gradient-to-r from-blue-main to-blue-secondary"
                        : "bg-[#E5F2FA]"
                    }`}
                  >
                    <div
                      className={cn(
                        "w-[38px] h-[39px] rounded bg-[#C2E4FA] flex justify-center items-center",
                        isInsuranceTabActive &&
                          "bg-gradient-to-bl from-blue-main to-blue-secondary shadow-lg shadow-blue-secondary"
                      )}
                    >
                      <InsuranceIcon
                        className={
                          isInsuranceTabActive ? "brightness-[1000%]" : ""
                        }
                      />
                    </div>
                    <span
                      className={`font-poppins font-semibold ${
                        isInsuranceTabActive ? "text-white" : "text-blue-main"
                      } text-xs`}
                    >
                      Apply for Insurance
                    </span>
                  </div>
                </div>
              </button>
              <div>
                <span
                  onClick={() => {
                    navigate("/dashboard/applications/insurance-applications");
                  }}
                  className={`cursor-pointer font-medium flex items-center shadow-[#2480CC]/10 shadow-sm rounded-md justify-center text-[10px]  gap-2 p-1 w-[229px] mt-3 py-2 text-xs border font-poppins border-solid -translate-x-[45%] ${
                    isInsuranceApplicationsTabActive
                      ? "text-white bg-blue-main border-blue-main"
                      : "text-blue-main bg-white border-[#2186D2]/20"
                  }`}
                >
                  <img
                    alt="icon"
                    src={gridIcon}
                    className={`w-4 ${
                      isInsuranceApplicationsTabActive
                        ? "brightness-[1000%]"
                        : ""
                    }`}
                  />{" "}
                  Applications for Insurance
                </span>
              </div>
            </div>
            <div className="pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsHeader;
