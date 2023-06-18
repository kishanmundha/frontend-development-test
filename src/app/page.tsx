'use client';
import { Accordion, Card, Header, Marquee } from './components';
import Image from 'next/image';
import {
  CpuChip,
  Image1,
  Image2,
  Users,
  Cube,
  Disk,
  Percentage,
  Target,
  About,
  Laugh_Man,
} from '../assets';
import { FC } from 'react';
import { accordionData } from './const';

const Section1: FC = () => (
  <div className="flex flex-col sm:gap-10 gap-5 pt-16 md:pt-32 pb-20 md:pb-44">
    <div className="text-10 text-4xl sm:text-9xl font-bold uppercase">
      lorem ipsum
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <Card
          title="dolor sit"
          description="Lorem ipsum dolor sit amet consectetur. In nibh nam vel
          lacus sit. Neque venenatis mattis est nibh sed quis vel quis
          eu. In tincidunt faucibus aliquet quis sed sed. Phasellus
          non at lacus convallis elementum. Suspendisse tincidunt
          congue sem turpis. Nulla eu lorem cras leo."
          iconUrl={Users}
        />
      </div>
      <div>
        <Card
          title="Lorem ipsum dolor sit"
          description="Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus."
          iconUrl={Disk}
        />
      </div>
      <div>
        <Image src={Image1} alt="image" className="mb-10" />
        <Card
          title="dolor sit"
          description="Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus."
          iconUrl={Target}
        />
      </div>
      <div>
        <Card
          title="Lorem ipsum"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          iconUrl={Percentage}
        />
      </div>
      <div>
        <Card
          title="dolor sit amet"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          iconUrl={CpuChip}
        />
      </div>
      <div />
      <div />
      <div className="flex">
        <Image src={Image2} alt="image" />
      </div>
      <div>
        <Card
          title="Lorem ipsum dolor"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          iconUrl={Cube}
        />
      </div>
    </div>
  </div>
);

const Section2: FC = () => (
  <div className="relative pt-32 md:pt-48 pb-32 md:pb-64">
    <div className="grid md:grid-cols-2 gap-16">
      <div className="relative">
        <div className="text-xl sm:text-9xl font-bold uppercase">About</div>
        <div className="text-xl sm:text-9xl font-bold uppercase">us</div>
        <div className="flex flex-col items-start gap-4">
          <div className="text-lg opacity-70 font-normal">Lorem</div>
          <div className="text-lg opacity-70 font-normal">Lorem</div>
        </div>
        <Image
          src={About}
          alt="about us"
          className="rounded-full absolute top-28 right-8 hidden md:block"
        />
      </div>
      <div className="text-lg	font-normal opacity-70 md:mt-28">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  </div>
);

const Section3: FC = () => (
  <div className="flex flex-col sm:gap-10 gap-5 pt-16 md:pt-32 pb-20 md:pb-44">
    <div className="text-10 sm:text-9xl font-bold uppercase">
      lorem ipsum dolor set
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <Card
          title="Lorem ipsum"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          iconUrl={Percentage}
        />
      </div>
      <div>
        <Card
          title="dolor sit amet"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          iconUrl={CpuChip}
        />
      </div>
      <div></div>
      <div></div>
      <div className="flex">
        <Image src={Laugh_Man} alt="laugh man" />
      </div>
      <div>
        <Card
          title="Lorem ipsum dolor"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          iconUrl={Cube}
        />
      </div>
    </div>
  </div>
);

const Section4: FC = () => (
  <div className="flex items-center justify-center w-full pt-20 pb-20 md:pt-40 md:pb-64">
    <div className="flex flex-col items-start sm:gap-8 gap-16">
      <div className="text-4xl sm:text-9xl font-bold uppercase">
        lorem ipsum dolor
      </div>
      <div className="flex flex-col w-full">
        {accordionData.map((item, index) => (
          <Accordion title={item.title} content={item.content} key={index} />
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <div className="flex flex-col max-w-screen-xl mx-auto px-2">
        <Section1 />
        <Section2 />
      </div>
      <div className="py-10">
        <Marquee />
      </div>
      <div className="flex flex-col max-w-screen-xl mx-auto px-2">
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}
