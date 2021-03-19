import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  createdAt?: Date;
  estimationDays?: number | null;
  id?: string;
  project?: ProjectWhereUniqueInput | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string;
  updatedAt?: Date;
};
