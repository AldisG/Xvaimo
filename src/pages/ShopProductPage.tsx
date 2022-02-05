import { useEffect, useState } from 'react';
import BuySection from '../components/BuySection';
import Description from '../components/Description';
import ProductImage from '../components/ProductImage';
import { useGetAnyDataQuery } from '../store/services/storeApi';
import '../styles/ShopProductPage.scss';

import { Product } from '../store/types';

const ShopProductPage = () => {
  const [productData, setProductData] = useState<Product | null>(null);
  const { data, error, isLoading, isError } = useGetAnyDataQuery(undefined);
  useEffect(() => {
    if (data && !isError) {
      setProductData(data.product);
      console.log(data.product);
    }
  }, [data]);
  if (isLoading) return <h1>Loading...</h1>;
  if (!isLoading && isError) return <h1>Error fetching data{error}</h1>;
  //  spp stands for ShopProductPage
  return (
    <div className="ShopProductPage-container">
      {productData && (
        <>
          <ProductImage imageSrc={productData?.gallery[0].main} />
          <Description product={productData} />
          <BuySection />
        </>
      )}
    </div>
  );
};

export default ShopProductPage;
