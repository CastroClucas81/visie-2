import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Divider from "./components/Divider";
import ProductItem from "./components/ProductItem";
import SkeletonProductItem from "./components/SkeletonProductItem";
import SkeletonTitle from "./components/SkeletonTitle";
import { ProductEntities } from "./entities/ProductEntities";
import { ProductEntitiesByCategory } from "./entities/ProductEntitiesByCategory";
import { groupBy } from "./utils/functions";

function App() {
  const [loading, setLoading] = useState(true);
  const [productsByCategory, setProductsByCategory] =
    useState<ProductEntitiesByCategory>();

  const handleFetchInitial = useCallback(async () => {
    try {
      const result = await axios.get<ProductEntities>(
        "https://dummyjson.com/products"
      );

      const categories = groupBy(result.data.products, (p) => p.category);
      setProductsByCategory(categories);
    } finally {
      setLoading(false);
    }
  }, [loading, productsByCategory]);

  useEffect(() => {
    handleFetchInitial();
  }, []);

  const mountCategoryProducts = (): JSX.Element[] => {
    const html = [];

    for (const category in productsByCategory) {
      html.push(
        <div key={category} className="row">
          <h3 className="mb-3">{category}</h3>
          <Divider />
          {productsByCategory[category].map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center">
                <ProductItem product={product} />
              </div>
            </div>
          ))}
        </div>
      );
    }

    return html;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {loading ? (
          <>
            <SkeletonTitle />
            <Divider />
            {Array(8)
              .fill("")
              .map((_, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="d-flex justify-content-center">
                    <SkeletonProductItem />
                  </div>
                </div>
              ))}
          </>
        ) : (
          <>
            {productsByCategory ? (
              mountCategoryProducts()
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <h3>Products Not found =(</h3>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
