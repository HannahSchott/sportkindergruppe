"use client";

import { FC, PropsWithChildren } from "react";
import { StyledText } from "./text.styles";

type TextProps = {};

export const Text: FC<PropsWithChildren<TextProps>> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
