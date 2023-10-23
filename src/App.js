import React from "react";
import { Box } from "@mui/material";
import useFetch from "./Utils/useFetch";
import Navbar from "./Components/Navbar";
import DividerComponet from "./Components/Controls/DividerComponet";
import CategoriesComponent from "./Components/Categories/CategoriesComponent";
import ProductComponent from "./Components/FeatureProduct/ProductComponent";
import CustomerComponent from "./Components/Customer/CustomerComponent";
// import ImageComponent from "./Components/Gallary/ImageComponent";
// import ProductServiceCard from "./Components/Controls/ProductServiceCard";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
function App() {
  const { Categories, Product, catThree, categoryTwo } = useFetch();

  return (
    <Box>
      <Navbar />
      {/* <DividerComponet direction="horizontal" height="20px" /> */}
      <Section />
      {/* <ProductServiceCard /> */}
      <DividerComponet direction="horizontal" height="20px" />
      {/*<----------------------------Feature Product start from here--------------------- ------>*/}

      <ProductComponent Product={Product} btndisplay={false} />
      {/*<----------------------------Feature Product end from here ------------------------------->*/}
      <DividerComponet direction="horizontal" height="20px" />
      {/*<---------------------------- Categories component start from here ---------------------------->*/}
      <CategoriesComponent Product={catThree} category={categoryTwo} />
      {/*<----------------------------Categories component end from here ---------------------------->*/}
      <DividerComponet direction="horizontal" height="50px" />
      {/*<----------------------------Feature Product start from here--------------------- ------>*/}
      <ProductComponent Product={Categories} btndisplay={true} />
      {/*<----------------------------Product end from here ---------------------------->*/}

      <DividerComponet direction="horizontal" height="50px" />
      {/*<---------------------------- Customer component start  from here---------------------------->*/}
      <CustomerComponent />
      {/*<----------------------------Customer component end   here ---------------------------->*/}
      <DividerComponet direction="horizontal" height="50px" />

      <Footer />
    </Box>
  );
}

export default App;
