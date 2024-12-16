import React, { useState } from "react";
export const DataContext = React.createContext(null);
function UserContext({ children }) {
  let [data, setData] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqVFxcCAhvyzCMSPbKSvwcwSPRPBSrZgXg7DolAzatHT1lo3dpNEbd1QpsTSrpwnAQc8&usqp=CAU",
      image:
        "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FApple_i_Phone_9_Plus_Specification_8020930c15.jpg&w=640&q=75",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, 6.5-inch Super Retina HD display with OLED technology, A12 Bionic chip",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://cliktodeal.com/wp-content/uploads/2020/08/apple-iphone-x-a1901-256gb-silver.jpeg",
      image:
        "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-silver-front.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSGRBbgalrXWMtndgS9KfMyTIlKMjDo6-IA&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ347QHlOVQtB-kmivh5Y1H20c5yBRYAgoyuc4cpfJsrHDeVDc5o0FpWUOHyrIvtBmHng&usqp=CAU",
    },
    {
      id: 4,
      title: "OPPO F19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://opsg-img-cdn-gl.heytapimg.com/epb/202207/07/hxwnSiSJ89urUqAQ.png?x-amz-process=image/format,webp/quality,Q_80",
      image:
        "https://store.ramietech.in/1075-large_default/oppo-f19-prism-black-6gb-ram-128gb-storage-10000-mah-power-bank-black.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://i.gadgets360cdn.com/products/large/1553612597_635_huawei_p30_pro.jpg?downsize=*:360",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm36XQ75dWu_yBMU5d5Q54PGfE0jYO_dZrWjCpbggr_WR2trZJH8XJ5qC-UDDWAWNeL40&usqp=CAU",
    },
  ]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default UserContext;
