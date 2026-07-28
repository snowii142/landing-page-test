import { Product } from '@/types/product';
import { Button } from '../ui/Button';

export function ProductInfo({
  product,
  model,
}: {
  product: Product;
  model: string;
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-1 bg-black text-white md:px-14 md:py-20 px-6 py-10">
      {/* Product Info */}
      <table className="text-sm">
        <tbody>
          <tr>
            <td className="pr-8 py-1 font-outfit">P/No.</td>
            <td className="py-1 font-outfit">{model}</td>
          </tr>
          <tr>
            <td className="pr-8 py-1 font-outfit">TYPE</td>
            <td className="py-1 font-outfit">{product.type}</td>
          </tr>
          <tr>
            <td className="pr-8 py-1 font-outfit">PRICE</td>
            <td className="py-1 font-outfit">
              ¥{product.price.toLocaleString('en-US')}{' '}
              <span className="text-xs">税込</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Description */}
      <p className="text-sm leading-8 text-gray-200 font-notosansjp">
        {product.description}
      </p>

      {/* Online store button */}
      <div className="mt-7.5">
        <Button variant="primary" type="button">
          online store
        </Button>
        <p className="text-center text-[10px] text-white mt-3 font-notosansjp">
          OWNDAYSオンラインストアに移動します
        </p>
      </div>
    </div>
  );
}
