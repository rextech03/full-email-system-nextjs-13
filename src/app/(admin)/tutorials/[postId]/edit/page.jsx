import { updateUserAction } from "../../../../actions/userscrud";
import UserForm from "../../editForm"
import { getUser } from "../../../../lib/usercrud";

const EditUserPage = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);

  return (
    <div>
      <h2 className="page-title">Edit user</h2>
      <UserForm user={user} action={updateUserAction} />
    </div>
  );
};

export default EditUserPage;
