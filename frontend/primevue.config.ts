import Lara from "@primeuix/themes/lara";
import { definePreset } from "@primeuix/themes";

export const Preset = definePreset(Lara, {
  semantic: {
    primary: {
      50: "{amber.50}",
      100: "{amber.100}",
      200: "{amber.200}",
      300: "{amber.300}",
      400: "{amber.400}",
      500: "{amber.500}",
      600: "{amber.600}",
      700: "{amber.700}",
      800: "{amber.800}",
      900: "{amber.900}",
      950: "{amber.950}",
    },
  },
  components: {
    tabs: {
      tab: {
        borderWidth: "2px 0 0 0",
        borderColor: "transparent",
        hoverBorderColor: "transparent",
        activeBorderColor: "{primary.color}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        activeColor: "{primary.color}",
        padding: "1rem 1.25rem",
        fontWeight: "700",
        margin: "0",
        gap: "0.5rem",
        focusRing: {
          width: "{focus.ring.width}",
          style: "{focus.ring.style}",
          color: "{focus.ring.color}",
          offset: "{focus.ring.offset}",
          shadow: "inset {focus.ring.shadow}",
        },
      },
    },
  },
});
