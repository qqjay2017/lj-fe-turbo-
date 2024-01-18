import coreTailwindConfig from "@core/tailwind-config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  presets: [coreTailwindConfig],
};
