import { forwardRef } from "react";

import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from "react-router-dom";

const AppNavLink = forwardRef<HTMLAnchorElement, RouterNavLinkProps>(
  ({ className, ...props }, ref) => (
    <RouterNavLink
      ref={ref}
      className={({ isActive }) =>
        [className, isActive ? "Mui-selected" : null].filter(Boolean).join(" ")
      }
      {...props}
    />
  )
);

AppNavLink.displayName = "routerNavLink";

export default AppNavLink;
