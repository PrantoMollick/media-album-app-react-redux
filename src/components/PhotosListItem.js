import { GoTrash } from 'react-icons/go';
import { useDeletePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [deletePhoto] = useDeletePhotoMutation(photo);

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };

  return (
    <div className="relative cursor-pointer m-2" onClick={handleDeletePhoto}>
      <img src={photo.url} alt={photo.title} className="h-20 w-20" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
