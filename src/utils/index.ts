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

type ObjectType = { [key: string]: any };

export function uniqueObjectsByIdType<T extends ObjectType>(arr: T[]): T[] {
  const idTypeValuesMap = new Map<T[keyof T], T>();

  // Iterate through the array and store objects based on idType
  arr.forEach((obj) => {
    const id = obj.idType; // Assuming idType exists in the object
    if (!idTypeValuesMap.has(id)) {
      idTypeValuesMap.set(id, obj);
    }
  });

  // Return the values of the map as an array
  return Array.from(idTypeValuesMap.values());
}

export function downloadFile(fileUrl: string, fileName: string) {
  fetch(fileUrl)
    .then((response) => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Convert response to blob
      return response.blob();
    })
    .then((blob) => {
      // Create a new URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
      // Create a new anchor element
      const link = document.createElement("a");
      // Set the href attribute to the blob URL
      link.href = blobUrl;
      // Set the download attribute to the file name
      link.download = fileName;
      // Simulate click on the anchor element
      link.click();
      // Clean up by revoking the blob URL
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

export function convertImageToDataURL(file: File) {
  return new Promise((resolve, reject) => {
    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      reject(new Error("File is not an image"));
      return;
    }

    // Check if the file size is greater than 2MB
    if (file.size > 2 * 1024 * 1024) {
      reject(new Error("File size exceeds 2MB"));
      return;
    }

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(new Error("Error reading the file"));
    };
    reader.readAsDataURL(file);
  });
}
