import * as React from 'react';
export type IconName =
  | "ArrowDownSLine"
  | "ArrowRightSLine"
  | "ArrowUpDownLine"
  | "CheckFill"
  | "CloseLine"
  | "DeleteBinLine"
  | "EditLine"
  | "FileAddFill"
  | "FileExcel2Fill"
  | "FileWarningFill"
  | "Filter3Line"
  | "Home5Line"
  | "RemixIconsLineDocumentFile"
  | "RemixIconsLineDocumentFolder"
  | "RemixIconsLineSystemStar"
  | "SearchLine"
  | "Settings3Line"
  | "SidebarExpand"
  | "SidebarShrink"
  | "Sparkling2Fill"
  | "Sparkling2Line"
  | "UploadLine";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
