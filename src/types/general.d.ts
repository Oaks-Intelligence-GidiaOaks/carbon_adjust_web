export type DropdownProps = {
  wrapperClassName?: string;
  optionsContainerClassName?: string;
  optionClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  label?: string;
  isLoading?: boolean;
  loadingText?: string;
  name: string;
  options: { label: string; value: string; id?: string | number }[];
  disabled?: boolean;
};

export type DropdownOption = {
  id?: number | string;
  label: string;
  value: string;
};

export type CheckboxProps = {
  className?: string;
  id?: string;
  defaultChecked?: boolean;
  checked: boolean;
};

export type AccountActionHeaderProps = {
  action?: () => void;
  actionTitle?: string;
  className?: string;
};

export type AccountSetupProgressIndicatorProps = {
  accountType: string;
  currentStep: number;
};

export type AccountSetupProps = {
  accountType: string;
  currentStep: number;
};

export type SideBarProps = {
  accountType: string;
};

export type SideBarItem = {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  href: string;
};
