import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type Project = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string;
  owner?: UserWhereUniqueInput | null;
  startDate: Date | null;
  updatedAt: Date;
};
