import { useMemo } from 'react';

export const Marquee = () => {
  const items = useMemo(() => {
    return new Array(100).fill('lorem ipsum');
  }, []);

  return (
    <div className="bg-red-200 w-full overflow-hidden bg-[url('../assets/bgline.png')]">
      <div className="flex marquee">
        {items.map((item, index) => (
          <div key={index} className="px-2 py-1 whitespace-nowrap">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
