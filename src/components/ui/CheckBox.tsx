import { CheckboxProps } from "@/types/general";
import { cn } from "@/utils";
import { CheckIcon } from "@heroicons/react/24/outline";
import * as Checkbox from "@radix-ui/react-checkbox";

const CheckBox = ({ className, id, checked }: CheckboxProps) => {
  return (
    <Checkbox.Root
      className={cn(
        "hover:bg-blue-200 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none",
        className
      )}
      checked={checked}
      id={id}
    >
      <Checkbox.Indicator className="text-blue-main">
        <CheckIcon width={14} className="text-blue-main" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

export default CheckBox;
