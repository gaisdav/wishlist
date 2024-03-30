import { FC } from 'react';
import css from './styles.module.scss';
import { IErrorInfo } from './types';
import { Icon, IconButton, Link, Typography } from 'components/atoms';
import { ERoute } from 'routes/types.ts';

export const ErrorInfoComponent: FC<IErrorInfo> = ({ handleExpand, errorInfo, error, expanded }) => {
  return (
    <div className={css.errorBoundary}>
      <Typography className={css.icon} color="danger">
        <Icon iconName="" />
      </Typography>

      <Typography color="danger">Произошла ошибка при работе с приложением</Typography>

      <Typography color="danger" onClick={handleExpand} className={css.collapseTitle}>
        {error && error.toString()}
        <IconButton aria-label="expand">{expanded ? '<' : '>'}</IconButton>
      </Typography>

      <Typography>{error && error.toString()}</Typography>
      <Typography>{errorInfo.componentStack}</Typography>

      <Link to={ERoute.HOME}>Перейти на главную</Link>
    </div>
  );
};
