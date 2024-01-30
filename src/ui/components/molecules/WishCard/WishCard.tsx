import { FC } from 'react';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card, Icon, IconButton, Img, Typography, LinearProgress } from '../../atoms/';
import { Box } from '@mui/joy';

export const WishCard: FC<IWishCard> = ({ wish: { id, title, description, imageSrc }, loading, onEdit, onDelete }) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(id);
    }
  };
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <Box className={css.wishCard}>
      {loading ? <LinearProgress size="sm" /> : null}

      {imageSrc ? (
        <Card className={css.wishPic}>
          <Img className={css.backgroundImg} alt="gift" src={imageSrc} />
        </Card>
      ) : null}

      <Typography>{title}</Typography>

      <Typography>{description}</Typography>

      <div>
        <IconButton disabled={loading} size="sm" onClick={handleEdit}>
          <Icon iconName="edit" />
        </IconButton>

        <IconButton disabled={loading} size="sm" onClick={handleDelete}>
          <Icon iconName="delete" />
        </IconButton>
      </div>
    </Box>
  );
};
