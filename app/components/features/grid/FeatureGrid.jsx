import React from "react";
import { Content } from "./Content";
import { CornerBlur } from "../../utils/CornerBlur";
import { BGGrid } from "./BgGrid";

export const FeatureGrid = () => {
  return (
    <div id="features" className="relative overflow-hidden">
      <Content />
      <CornerBlur />
      <BGGrid />
    </div>
  );
};
