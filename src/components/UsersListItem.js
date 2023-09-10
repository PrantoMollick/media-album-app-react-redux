import { GoTrash } from 'react-icons/go';

import { deleteUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import Button from './Button';

function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between gap-2">
          <Button loading={isLoading} onClick={handleClick}>
            <GoTrash />
          </Button>

          {error && <div>Error deleting user.</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
