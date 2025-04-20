import React, { useState } from "react";
import { Application, ApplicationStatus } from "../types/application";

interface Props {
  onAdd: (application: Application) => void;
}

const ApplicationForm: React.FC<Props> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Omit<Application, "id">>({
    company: "",
    position: "",
    location: "",
    link: "",
    dateSent: "",
    dateResponse: "",
    status: "Pending",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newApplication: Application = {
      id: Date.now().toString(),
      ...formData,
    };
    onAdd(newApplication);
    setFormData({
      company: "",
      position: "",
      location: "",
      link: "",
      dateSent: "",
      dateResponse: "",
      status: "Pending",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Firma"
        required
        className="input"
      />
      <input
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
        className="input"
      />
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Ort"
        className="input"
      />
      <input
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Link zur Ausschreibung"
        className="input col-span-3"
      />
      <input
        name="dateSent"
        type="date"
        value={formData.dateSent}
        onChange={handleChange}
        className="input"
      />
      <input
        name="dateResponse"
        type="date"
        value={formData.dateResponse}
        onChange={handleChange}
        className="input"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="input"
      >
        <option value="Pending">Offen</option>
        <option value="Accepted">Angenommen</option>
        <option value="Rejected">Abgelehnt</option>
      </select>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notizen"
        className="input col-span-3"
      />
      <button
        type="submit"
        className="col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Bewerbung hinzufügen
      </button>
    </form>
  );
};

export default ApplicationForm;
