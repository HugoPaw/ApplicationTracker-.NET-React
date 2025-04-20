import React from "react";
import { Application } from "../types/application";

interface Props {
  applications: Application[];
}

const ApplicationList: React.FC<Props> = ({ applications }) => {
  if (applications.length === 0) {
    return <p className="text-gray-500 italic">Keine Bewerbungen vorhanden.</p>;
  }

  return (
    <ul className="space-y-4">
      {applications.map((app) => (
        <li
          key={app.id}
          className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
        >
          <h3 className="text-lg font-semibold text-blue-600 underline">
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              {app.company}
            </a>
          </h3>
          <p><span className="font-medium">Position:</span> {app.position}</p>
          <p><span className="font-medium">Ort:</span> {app.location}</p>
          <p><span className="font-medium">Gesendet am:</span> {app.dateSent || "–"}</p>
          <p><span className="font-medium">Antwort erhalten am:</span> {app.dateResponse || "–"}</p>
          <p><span className="font-medium">Status:</span> {app.status}</p>
          <p><span className="font-medium">Notizen:</span> {app.notes || "–"}</p>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationList;
