import { cn } from "@/utils";

type Props = {
  image: string;
  name: string;
  retrofitCount: string;
  className?: string;
};

const TopHiaCard = ({ image, name, retrofitCount, className }: Props) => {
  return (
    <div
      className={cn(
        "group px-4 py-2 flex items-center gap-4 bg-white h-[70px]",
        className
      )}
    >
      <div className="w-8 h-8 flex justify-center items-center">
        <img src={image} alt="" className="w-[30px] rounded-md" />
      </div>
      <p className="text-[14px] font-medium leading-[20px] font-poppins text-main">
        <p>{name}</p>
        <p className="group-hover:opacity-100 group-hover:translate-y-0 mt-1 opacity-0 -translate-y-2 text-gray-400 font-normal text-xs transition-all">
          {retrofitCount} homes retrofitted
        </p>
      </p>
    </div>
  );
};

export default TopHiaCard;
