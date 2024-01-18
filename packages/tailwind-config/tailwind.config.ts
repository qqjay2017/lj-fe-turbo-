import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "node_modules/@core/ui/**/*.{jsx,tsx,js,ts}",
  ],
  // ... 其他配置
};

export default config;
