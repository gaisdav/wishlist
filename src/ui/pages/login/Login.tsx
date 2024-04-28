import css from './styles.module.scss';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { getGoogleAuthUrl } from 'common/utils/utils.ts';
import { GoogleIcon, Link } from 'components/atoms';

const googleAuthURI = getGoogleAuthUrl();

const Login: FC = observer(() => (
  <div className={css.login}>
    <Link underline="none" to={googleAuthURI} className={css.link} variant="soft" startDecorator={<GoogleIcon />}>
      Log in with Google
    </Link>
  </div>
));

export default Login;
