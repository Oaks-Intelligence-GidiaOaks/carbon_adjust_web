import { LogoAndBrand } from "@/assets/icons";
import { Button } from "../../ui";
import { AccountActionHeaderProps } from "@/types/general";
import { cn } from "@/utils";

const AccountActionHeader = ({
  action,
  actionTitle,
  className,
}: AccountActionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex justify-between px-14 py-3 w-full max-w-[1440px] sticky top-0 z-50",
        className
      )}
    >
      <LogoAndBrand />
      <Button
        onClick={action}
        variant="tab"
        className="rounded-none px-8 text-blue-main"
      >
        {actionTitle}
      </Button>
    </div>
  );
};

export default AccountActionHeader;
