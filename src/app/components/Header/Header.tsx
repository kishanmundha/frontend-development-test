'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Logo, Bar, Close } from '../../../assets';
import { Marquee } from '../Marquee';
import clsx from 'clsx';
import Link from 'next/link';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-12">
      <div className="fixed top-0 right-0 left-0 z-20 flex items-center justify-between bg-black h-12 px-4">
        <div className="flex items-center	gap-2">
          <Image src={Logo} alt="lorem logo" />
          <p className="text-base font-medium">Lorem</p>
        </div>
        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <Image src={Close} alt="close icon" />
          ) : (
            <Image src={Bar} alt="bar icon" />
          )}
        </button>
      </div>
      <div
        className={clsx(
          'fixed left-0 right-0 h-screen bg-black z-10 flex flex-col pt-12 overflow-hidden transition-all',
          open ? 'top-0' : '-top-full'
        )}
      >
        <div className="flex flex-col flex-1 justify-center gap-6 px-3">
          <Link
            href="/page1"
            className="text-lg	font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            lorem ipsum
          </Link>
          <Link
            href="/page2"
            className="text-lg	font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            lorem ipsum
          </Link>
          <Link
            href="/page3"
            className="text-lg	font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            lorem ipsum
          </Link>
          <Link
            href="/page4"
            className="text-lg	font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            lorem ipsum
          </Link>
          <div className="flex items-center justify-between">
            <div className="text-lg	font-bold uppercase opacity-40">
              lorem ipsum
            </div>
            <div className="text-lg	font-bold uppercase opacity-40">
              Comming Soon
            </div>
          </div>
        </div>
        <div>
          <Marquee />
        </div>
      </div>
    </div>
  );
};
