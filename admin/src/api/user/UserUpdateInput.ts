export type UserUpdateInput = {
  email?: string | null;
  employeeId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
