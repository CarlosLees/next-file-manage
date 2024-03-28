import { auth } from '@/lib/auth';
import { ProjectSession } from '@/lib/auth.config';

import styles from './navber.module.css';

const Navbar = async () => {
    const session = (await auth()) as ProjectSession;

    return <>{session && <div className={styles.container}>Navbar</div>}</>;
};

export default Navbar;
