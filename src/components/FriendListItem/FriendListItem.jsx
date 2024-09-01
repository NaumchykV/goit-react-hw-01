import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend_list_item}>
      <img src={avatar} alt="Avatar" width="76" />
      <h3 className={css.title}>{name}</h3>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};


export default FriendListItem;