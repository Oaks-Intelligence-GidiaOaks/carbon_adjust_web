import { DataRow } from "@/types/generics";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const getLongestKeyLength = (data: any[]) => {
  return Math.max(...data.map((obj) => Object.keys(obj).length));
};

// Function to find object with the most keys
export const findObjectWithMostKeys = (
  data: DataRow<any>[]
): DataRow<any> | undefined => {
  if (!data.length) return undefined; // Handle empty data array
  return data.reduce((maxObject, currentObject) =>
    Object.keys(currentObject).length > Object.keys(maxObject).length
      ? currentObject
      : maxObject
  );
};
