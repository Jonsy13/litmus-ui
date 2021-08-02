import React from "react";
import SVG from "react-inlinesvg";
import { IconName, IconSize } from "./base";
import { getIcon } from "./iconBundle";
import { useStyles } from "./style";
import {
  iconsPathWithStorke,
  iconsWithRectFill,
  iconsWithRectStroke,
} from "./utils";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconName;
  size?: IconSize;
  color?: string;
}
export const getSvgSize = (size: IconSize) => {
  switch (size) {
    case "xs":
      return 12;
    case "sm":
      return 14;
    case "md":
      return 16;
    case "lg":
      return 18;
    case "xl":
      return 24;
    case "2xl":
      return 32;
    case "3xl":
      return 48;
    case "4xl":
      return 150;
    case "5xl":
      return 180;
  }
};

const Icon: React.FC<IconProps> = ({
  size = "md",
  name,
  className,
  style,
  color = "black",
  ...rest
}) => {
  const classes = useStyles({
    color: color,
    pathStroke: iconsPathWithStorke.includes(name),
    rectFill: iconsWithRectFill.includes(name),
    rectStroke: iconsWithRectStroke.includes(name),
  });
  const svgSize = getSvgSize(size);

  return (
    <div
      className={`${classes.container}  ${className}`}
      style={style}
      {...rest}
      data-testid="icon-component"
    >
      <SVG
        src={getIcon(name)}
        width={svgSize}
        height={svgSize}
        className={classes.icon}
      >
        {/* fallback content in case of a fetch error or unsupported browser*/}
        <img src={getIcon(name)} alt={name} />
      </SVG>
    </div>
  );
};
export { Icon };