import React, { useState } from "react";
import Index from "./pages/Index";
import Documents from "./pages/Documents";
import { Application } from "./types/application";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "documents">("overview");
  const [applications, setApplications] = useState<Application[]>([]);

  const handleAddApplication = (newApp: Application) => {
    setApplications(prev => [...prev, newApp]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <nav style={{ marginBottom: "2rem" }}>
        <button onClick={() => setActiveTab("overview")}>Übersicht</button>
        <button onClick={() => setActiveTab("documents")}>Dokumente</button>
      </nav>

      {activeTab === "overview" && (
        <Index
          applications={applications}
          onAddApplication={handleAddApplication}
        />
      )}

      {activeTab === "documents" && (
        <Documents applications={applications} />
      )}
    </div>
  );
};

export default App;
