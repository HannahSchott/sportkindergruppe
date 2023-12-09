"use client";

import { FC, PropsWithChildren } from "react";
import { StyledHeadline } from "./headline.styles";

type HeadlineProps = {};

export const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
  children,
}) => {
  return <StyledHeadline>{children}</StyledHeadline>;
};
