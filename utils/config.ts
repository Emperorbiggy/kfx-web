export const Config = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
  MUI_X_LICENSE_KEY: process.env.NEXT_PUBLIC_MUI_X_LICENSE_KEY || "",
};

console.log("process.env.NEXT_PUBLIC_API_URL", Config);
