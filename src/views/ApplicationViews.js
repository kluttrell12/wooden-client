import { AdminViews } from "./AdminViews";
import { BuilderViews } from "./BuilderViews";

export const ApplicationViews = () => {
  // TODO find a different solution to this then using local storage
  const localUserStaffBool = localStorage.getItem("is_staff");

  return localUserStaffBool ? <AdminViews /> : <BuilderViews />;
};
