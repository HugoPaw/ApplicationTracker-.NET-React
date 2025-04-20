import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import { Application } from "../types/application";

interface Props {
  applications: Application[];
  onAddApplication: (app: Application) => void;
}

const Index: React.FC<Props> = ({ applications, onAddApplication }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bewerbungsübersicht</h1>
      <ApplicationForm onAdd={onAddApplication} />
      <hr style={{ margin: "2rem 0" }} />
      <ApplicationList applications={applications} />
    </div>
  );
};

export default Index;
