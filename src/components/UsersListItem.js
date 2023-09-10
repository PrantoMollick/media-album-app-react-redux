import { GoTrash } from 'react-icons/go';

import { deleteUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
