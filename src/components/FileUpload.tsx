import React, { useState } from "react";

interface FileUploadProps {
  company: string;
  onUpload: (files: File[], company: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ company, onUpload }) => {
  const [dragging, setDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles(prev => [...prev, ...files]);
    onUpload(files, company);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        border: dragging ? "2px dashed #00f" : "2px dashed #ccc",
        padding: "2rem",
        textAlign: "center",
        marginTop: "1rem"
      }}
    >
      <p>Dateien hierher ziehen oder ablegen für <strong>{company}</strong></p>

      {uploadedFiles.length > 0 && (
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
