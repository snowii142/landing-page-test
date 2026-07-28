import { Product } from '@/types/product';

export function ColorVariants({
  colors,
  selectedIndex,
  onSelect,
}: {
  colors: Product['colors'];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-6 mx-auto">
      {colors.map((color, index) => (
        <button
          key={color.name}
          onClick={() => onSelect(index)}
          className={`px-2 py-1.5 text-[8px] md:text-xs font-bold uppercase tracking-wide border border-black cursor-pointer rounded-full transition-colors ${
            index === selectedIndex
              ? 'bg-black text-white'
              : 'bg-transparent text-black'
          }`}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}
