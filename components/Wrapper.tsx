import { ReactNode } from "react";

type Props = {
  title: string;
  viewType: string;
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ title, viewType, children, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold pb-4">{title}</h2>
      <div
        className={viewType === "grid" ? "grid grid-cols-auto-fill gap-8" : ""}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
