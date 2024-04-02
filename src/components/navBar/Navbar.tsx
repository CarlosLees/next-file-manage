import Image from 'next/image';

import { auth } from '@/lib/auth';
import { ProjectSession } from '@/lib/auth.config';

import Links from '@/components/navBar/links/Links';

import { logout } from '@/lib/action';

import styles from './navber.module.css';

const Navbar = async () => {
    const session = (await auth()) as ProjectSession;

    return (
        <>
            {session && (
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image
                            className={styles.logoImage}
                            src="/logo.png"
                            alt="avatar"
                            fill
                            priority
                            sizes="270px, 220px"
                        />
                    </div>
                    <div className={styles.items}>
                        <Links session={session} />
                    </div>
                    <form className={styles.exit} action={logout}>
                        <button className={styles.exitButton}>
                            <Image
                                className={styles.exitImage}
                                src="/exit.png"
                                alt="exit"
                                fill
                                sizes="(max-width: 600px) 270px, 223px"
                            />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Navbar;
