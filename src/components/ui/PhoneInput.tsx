import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Label from "./Label";
import { cn } from "@/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  //   name: Path<any>;
  //   register?: UseFormRegister<any>;
  required?: boolean;
  prependIcon?: React.ReactNode | string;
  appendIcon?: React.ReactNode | string;
  error?: string;
  inputClassName?: string;
  placeholder?: string;
}

const Phoneinput = ({
  type,
  labelClassName,
  prependIcon,
  appendIcon,
  wrapperClassName,
  // register,
  error,
  label,
  inputClassName,
  placeholder,
  ...props
}: //   className,

InputProps) => {
  return (
    <div className={cn(wrapperClassName, "group w-full")}>
      {label && (
        <Label
          htmlFor={props.id}
          className={`mb-1 block ${labelClassName} text-[#888888] group-valid:text-[#171717] group-has-[:valid]:text-[#171717]`}
        >
          {label}
        </Label>
      )}

      <div
        className={cn(
          "flex h-[48px] min-w-full items-center bg-white rounded-md border-none border-input px-3 focus-within:border-[#22C55E]",
          inputClassName
        )}
      >
        {/* {prependIcon} */}
        {/* <input
            tabIndex={1}
            type={type}
            placeholder={placeholder ? placeholder : ""}
            className={cn(
              "placeholder:text-grey-swatch-600 flex h-[48px] w-full flex-1 bg-transparent py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              prependIcon ? "pl-3" : "",
              className
            )}
            {...(register &&
              register(props.name, {
                ...(props.required && { required: props.required }),
              }))}
            {...props}
          /> */}

        <PhoneInput
          country={"gb"}
          containerClass="text-sm"
          containerStyle={{
            width: "100%",
            outlineWidth: 1,
            outlineColor: "red",
          }}
          inputStyle={{
            width: "100%",
            height: "40px",
            fontFamily: "'Poppins', sans-serif",
            color: "#495057",
            border: "0px solid rgba(0, 0, 0, 0.06 )",
            fontSize: "0.875rem",
            background: "transparent",
            outline: "none",
          }}
          buttonStyle={{
            border: "none",
            borderRight: "1px solid rgba(0, 0, 0, 0.06)",
            borderRadius: "0",
          }}
          dropdownStyle={{
            fontFamily: "'Lato', sans-serif",
            borderRadius: "10px",
            boxShadow: "none",
          }}
          onChange={(data) => {
            // dispatch(
            //   setOnboardingData({
            //     section: "bioData",
            //     title: "phoneNumber",
            //     data,
            //   })
            // );
          }}
          onFocus={(e) => {
            // e.target.style.outlineColor = "#2196F3";
            // e.target.style.outlineWidth = "1px";
            // e.target.style.outlineStyle = "solid";
          }}
          onBlur={(e) => {
            e.target.style.outline = "none";
          }}
          //   value={bioData.phoneNumber}
        />
        {/* {appendIcon} */}
      </div>
      {error && <p className="mt-[2px] text-[10px] text-[#E31B23]">{error}</p>}
    </div>
  );
};

Phoneinput.displayName = "Input";

export default Phoneinput;
