import type { Config } from "tailwindcss";
import coreTailwindConfig from "@core/tailwind-config";
const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [coreTailwindConfig],
} satisfies Config;

export default config;
