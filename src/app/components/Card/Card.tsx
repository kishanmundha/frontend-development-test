import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  description: string;
  iconUrl: StaticImageData;
}

export const Card = ({ title, description, iconUrl }: CardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-start gap-1">
        <div className="uppercase text-2xl font-bold">{title}</div>
        <div className="opacity-70 text-lg font-normal">{description}</div>
      </div>
      <Image src={iconUrl} alt="icon" />
    </div>
  );
};
