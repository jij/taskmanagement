import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  estimationDays?: number | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string;
};
