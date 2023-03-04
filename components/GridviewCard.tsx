import Thumb from '@components/Thumb';

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const InfoCard = ({ title, subtitle, imgUrl }: Props) => {
  return (
    <div className='h-80'>
      <div className='relative h-full'>
        <Thumb imgUrl={imgUrl} />
        <div className='absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800'>
          <h2 className='text-white text-center text-sm truncate'>{title}</h2>
          {subtitle && <p className='text-white text-center text-xs truncate'>{subtitle}</p>}
        </div>
      </div>
    </div>
  )
};

export default InfoCard;
