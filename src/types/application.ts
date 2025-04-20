// src/types/application.ts

export type ApplicationStatus = "Pending" | "Accepted" | "Rejected";

export interface Application {
  id: string;
  company: string;
  position: string;
  location: string;
  link: string;
  dateSent: string;       // Format: YYYY-MM-DD
  dateResponse: string;   // Format: YYYY-MM-DD
  status: ApplicationStatus;
  notes: string;
}
