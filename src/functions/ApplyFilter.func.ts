import Product from '@/types/Product.type';

function ApplyFilter(
    name: string,
    minP: number,
    maxP: number,
    products: Product[]
  ) {
  name = name.toLowerCase();
  minP = minP || 0;
  maxP = maxP || Infinity;

  const byName = name?products.filter((p) => p.name.toLowerCase().includes(name)):products;
  const byPrice = byName.filter((p) => p.price >= minP && p.price <= maxP);

  return byPrice;
};

export default ApplyFilter;
