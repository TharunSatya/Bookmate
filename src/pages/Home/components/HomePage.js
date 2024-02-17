import React from "react";
import { FeaturedProduct } from "../../../components/FeaturedProduct";
import { HomeContent } from "./HomeContent";
import { Testimonials } from "./Testimonails";

import { Faq } from "./Faq";
import { useTitle } from "../../../hooks";
export const HomePage = () => {
  useTitle("Access the latest Ebooks available");
  return (
    <main>
      <HomeContent />
      <FeaturedProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
