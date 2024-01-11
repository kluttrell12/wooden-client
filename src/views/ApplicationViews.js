import { AdminViews } from "./AdminViews";
import { BuilderViews } from "./BuilderViews";

export const ApplicationViews = () => {
  const localUserStaffBool = localStorage.getItem("is_staff");

  return localUserStaffBool ? <AdminViews /> : <BuilderViews />;
};
