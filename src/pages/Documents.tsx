import React, { useState } from "react";
import { Application } from "../types/application";
import FileUpload from "../components/FileUpload";

interface Props {
  applications: Application[];
}

interface UploadedDocuments {
  [company: string]: File[];
}

const Documents: React.FC<Props> = ({ applications }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [documents, setDocuments] = useState<UploadedDocuments>({});

  const handleUpload = (files: File[], company: string) => {
    setDocuments(prev => ({
      ...prev,
      [company]: [...(prev[company] || []), ...files]
    }));
  };

  return (
    <div>
      <h2>Dokumente hochladen</h2>
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">Firma auswählen</option>
        {applications.map(app => (
          <option key={app.id} value={app.company}>
            {app.company}
          </option>
        ))}
      </select>

      {selectedCompany && (
        <FileUpload company={selectedCompany} onUpload={handleUpload} />
      )}

      {selectedCompany && documents[selectedCompany] && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Hochgeladene Dokumente für {selectedCompany}:</h4>
          <ul>
            {documents[selectedCompany].map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Documents;
