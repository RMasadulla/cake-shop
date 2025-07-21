"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function Uploader({ onSuccess }) {
  return (
    <CldUploadWidget
      uploadPreset="category_uploads"
      options={{ folder: "categories" }}
      onSuccess={onSuccess}
    >
      {({ open }) => (
        <button onClick={() => open()} className="upload-button">
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
}
