import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Banner = ({ imgUrl }: Props) => {
  return (
    <div className="bg-gray-100 relative">
      <div className=" flex pl-4 pr-4 max-w-7xl m-auto justify-between">
        <div className="pr-8 lg:py-24 max-w-[50%]">
          <div className="xl:max-w-lg xl:ml-auto">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can find everything.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Get access to maintain your own custom personal lists, track what
              you have seen and search and filter for what to watch
              next—regardless if it is in theatres, on TV or available on
              popular streaming services like .
            </p>
          </div>
        </div>
        <div className=" ml-8 lg:block lg:w-1/2 lg:relative">
          <Image
            className="mt-6 shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src={imgUrl}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            alt="Netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
