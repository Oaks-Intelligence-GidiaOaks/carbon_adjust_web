import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { cn } from "../../utils";
import { DropdownOption, DropdownProps } from "../../types/general";
import LoadingSpinner from "./LoadingSpinner";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Label from "./Label";
import Input from "./Input";
import { Controller } from "react-hook-form";

const Dropdown = ({
  wrapperClassName,
  optionsContainerClassName,
  optionClassName,
  placeholder,
  isLoading,
  loadingText,
  labelClassName,
  searchable,
  name,
  label,
  options,
  control,
  value,
  disabled = false,
  countryChange,
  onOptionChange,
  cityChange,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    value
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log(selectedOption);
    if (onOptionChange) {
      onOptionChange(selectedOption);
    }
    if (countryChange) {
      countryChange(selectedOption);
    }
    if (cityChange) {
      cityChange(selectedOption);
    }
  }, [selectedOption]);

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, name, ref, value } }) => (
        <Listbox
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(selectedOption);
            onChange(e);
          }}
          name={name}
        >
          <div className="relative">
            {label && (
              <Label
                className={`mb-1 block ${labelClassName} group-valid:text-[#171717] group-has-[:valid]:text-[#171717]`}
              >
                {label}
              </Label>
            )}
            {!isLoading ? (
              <Listbox.Button
                className={cn(
                  "border-none h-12 bg-white relative rounded-lg px-3 pr-3 py-3 flex justify-between items-center gap-4 text-sm",
                  wrapperClassName,
                  value?.label ? "" : "text-grey-swatch-600"
                )}
                value={value}
                onBlur={onBlur}
                ref={ref}
                name={name}
                onChange={(e) => {
                  console.log(e);
                  onChange(e);
                }}
              >
                {value?.label ?? placeholder}
                <ChevronDownIcon
                  width={20}
                  className={cn(
                    "ui-open:rotate-180 transition-all absolute top-3 right-3"
                  )}
                />
              </Listbox.Button>
            ) : (
              <Listbox.Button
                className={cn(
                  "border-none h-12 bg-white relative rounded-lg px-3 pr-3 py-3 flex justify-between items-center gap-4 text-sm",
                  wrapperClassName,
                  value?.label ? "" : "text-grey-swatch-600"
                )}
                value={value}
                onBlur={onBlur}
                ref={ref}
                name={name}
                onChange={(e) => {
                  console.log(e);
                  onChange(e);
                }}
              >
                <div className="flex gap-x-3 items-center">
                  <LoadingSpinner />
                  <p>{loadingText}</p>
                </div>
              </Listbox.Button>
            )}

            <Listbox.Options
              className={cn(
                "border-none max-h-[240px] overflow-scroll text-sm z-20 bg-white rounded-lg w-full mt-10 absolute top-11 shadow-lg",
                optionsContainerClassName
              )}
            >
              {searchable ? (
                <Input
                  type="search"
                  name="search"
                  placeholder="Search..."
                  wrapperClassName="bg-gray-100 p-2 sticky top-0"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              ) : null}
              {!isLoading ? (
                options
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((option, i) => (
                    <Listbox.Option
                      key={i}
                      value={option}
                      disabled={disabled}
                      className={cn(
                        "flex justify-between gap-2 py-2 cursor-pointer hover:bg-hover-color px-3",
                        optionClassName
                      )}
                      onClick={() => {
                        setSelectedOption(option);
                      }}
                    >
                      <div className="flex gap-4 items-center">
                        <span>{option.label}</span>
                      </div>
                    </Listbox.Option>
                  ))
              ) : (
                <div className="flex gap-x-3 items-center">
                  <LoadingSpinner />
                  <p>{loadingText}</p>
                </div>
              )}
            </Listbox.Options>
          </div>
        </Listbox>
      )}
    />
  ) : (
    <Listbox
      value={selectedOption}
      onChange={(value) => {
        setSelectedOption(value);
      }}
      name={name}
    >
      <div className="relative">
        {label && (
          <Label
            className={`mb-1 block ${labelClassName} group-valid:text-[#171717] group-has-[:valid]:text-[#171717]`}
          >
            {label}
          </Label>
        )}
        <Listbox.Button
          className={cn(
            "border-none h-12 bg-white relative rounded-lg px-3 pr-3 py-3 flex justify-between items-center gap-4 text-sm",
            wrapperClassName,
            value?.label ? "" : "text-grey-swatch-600"
          )}
          name={name}
        >
          {value?.label === "" ? placeholder : value?.label}
          <ChevronDownIcon
            width={20}
            className={cn(
              "ui-open:rotate-180 transition-all absolute top-3 right-3"
            )}
          />
        </Listbox.Button>
        <Listbox.Options
          className={cn(
            "border-none max-h-[240px] overflow-scroll text-sm z-20 bg-white rounded-lg w-full mt-10 absolute top-11 shadow-lg",
            optionsContainerClassName
          )}
        >
          {searchable ? (
            <Input
              type="search"
              name="search"
              placeholder="Search..."
              wrapperClassName="bg-gray-100 p-2 sticky top-0"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          ) : null}
          {!isLoading ? (
            options
              .filter((option) =>
                option.label.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((option, i) => (
                <Listbox.Option
                  key={i}
                  value={option}
                  disabled={disabled}
                  className={cn(
                    "flex justify-between gap-2 py-2 cursor-pointer hover:bg-hover-color px-3",
                    optionClassName
                  )}
                  onClick={() => {
                    setSelectedOption(option);
                  }}
                >
                  <div className="flex gap-4 items-center">
                    <span>{option.label}</span>
                  </div>
                </Listbox.Option>
              ))
          ) : (
            <div className="flex gap-x-3 items-center">
              <LoadingSpinner />
              <p>{loadingText}</p>
            </div>
          )}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Dropdown;
