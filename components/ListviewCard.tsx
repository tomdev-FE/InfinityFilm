import Image from "next/image";

import Thumb from "@components/Thumb";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
};

const InfoCard = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
}: Props) => (
  <div className="relative w-full h-auto p-4 mb-4">
    <div className="relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
      <div className="relative w-full h-96 md:h-auto md:w-1/3">
        <Thumb imgUrl={thumbUrl} />
      </div>
      <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold pb-4">
          {title} ({year})
        </h2>
        <h3 className="text-lg font-bold">Summary</h3>
        <p className="mb-8 text-sm md:text-lg">{summary}</p>
      </div>
    </div>
    <Image
      priority
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      objectFit="cover"
      objectPosition="center"
      layout="fill"
      src={backgroundImgUrl}
      alt="thumb"
    />
  </div>
);

export default InfoCard;
