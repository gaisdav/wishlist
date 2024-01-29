import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import { Box } from '@mui/joy';
import { Typography, Img } from '../../components/atoms';

const Wish: FC<PropsWithChildren> = observer(() => {
  const { entity, loading } = useStore('wish');

  if (loading) return <Box>loading</Box>;
  if (!entity) return <Box>Not found</Box>;

  return (
    <Box>
      <Img src={entity.imageSrc} />
      <Typography>{entity.title}</Typography>
      <Typography>{entity.description}</Typography>
    </Box>
  );
});

export default Wish;
