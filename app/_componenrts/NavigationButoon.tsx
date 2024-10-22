import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => (
  <button onClick={onClick} className='p-4 z-10'>
    {direction === "prev" ? (
      <ChevronLeft size={40} />
    ) : (
      <ChevronRight size={40} />
    )}
  </button>
);
