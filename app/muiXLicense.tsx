"use client";
import { Config } from "@/utils/config";
import { LicenseInfo } from "@mui/x-license";


const LicenseKey = Config.MUI_X_LICENSE_KEY
if (!LicenseKey) {
  throw new Error(
    "MUI X license key is missing. Please set NEXT_PUBLIC_MUI_X_LICENSE_KEY."
  );
}
LicenseInfo.setLicenseKey(LicenseKey);

export default function MuiXLicense() {
  return null;
}
