import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/joy';
import { Typography, Img } from 'components/atoms';
import { useStore } from 'hooks/useStore.tsx';
import { WishActions } from 'components/molecules/WishActions';

const Wish: FC<PropsWithChildren> = observer(() => {
  const {
    wish: { entity, loading },
  } = useStore();

  if (loading) return <Box>loading</Box>;
  if (!entity) return <Box>Not found</Box>;

  return (
    <Box>
      <Img src={entity.imageSrc} />
      <Typography>{entity.title}</Typography>
      <Typography>{entity.description}</Typography>
      <WishActions wish={entity} />
    </Box>
  );
});

export default Wish;
