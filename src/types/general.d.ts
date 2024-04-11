export type DropdownProps = {
  wrapperClassName?: string;
  optionsContainerClassName?: string;
  optionClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  label?: string;
  isLoading?: boolean;
  prefixIcon?: string | ReactNode;
  suffixIcon?: string | ReactNode;
  loadingText?: string;
  name: string;
  options: { label: string; value: string; id?: string | number }[];
  searchable?: boolean;
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
  setIsChecked?: (boolean) => void;
  iconStyle?: string;
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

export type DropBoxProps = {
  children?: ReactNode;
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

export type ProfileProps = { accountType: string };

export type ProfileTabProps = {
  accountType: string;
  currentTab: number;
  setCurrentTab: (index: number) => void;
};

export type IComponentMap = {
  [key: string]: JSX.Element;
};
