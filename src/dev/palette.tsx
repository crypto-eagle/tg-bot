import React, { Fragment } from "react";

import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox";
import ChakraPalette from "@react-buddy/palette-chakra-ui";

export function ExampleLoaderComponent() {
  return <>Loading...</>;
}

export function PaletteTree() {
  return (
    <Palette>
      <Category name="App">
        <Component name="Loader">
          <Variant>
            <ExampleLoaderComponent />
          </Variant>
        </Component>
      </Category>
      <ChakraPalette />
    </Palette>
  );
}
