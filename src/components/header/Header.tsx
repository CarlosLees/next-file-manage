import { auth } from '@/lib/auth';

import { ProjectSession } from '@/lib/auth.config';

import { logout } from '@/lib/action';

import styles from './header.module.css';

const Header = async () => {
    const session = (await auth()) as ProjectSession;

    return (
        <>
            {session && (
                <div className={styles.container}>
                    Header
                    <form action={logout}>
                        <button>Logout</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Header;
