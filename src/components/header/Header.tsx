import { auth } from '@/lib/auth';

import { ProjectSession } from '@/lib/auth.config';

import styles from './header.module.css';

const Header = async () => {
    const session = (await auth()) as ProjectSession;

    return <>{session && <div className={styles.container}>Header</div>}</>;
};

export default Header;
