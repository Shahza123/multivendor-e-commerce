import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "M.S" };
    }
  ),

  marketLogoUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "M.S" };
    }
  ),
  productImageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "M.S" };
    }
  ),
  trainingImageUploader: f({
    image: { maxFileSize: "1MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url, metadata);
    return { uploadedBy: "M.S" };
  }),
  farmerProfileUploader: f({
    image: { maxFileSize: "1MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    // console.log("file url", file.url, metadata);
    return { uploadedBy: "M.S" };
  }),
  bannerImageUploader: f({
    image: { maxFileSize: "2MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url, metadata);
    return { uploadedBy: "M.S" };
  }),
};
