import Image from 'next/image';

import { auth } from '@/lib/auth';

import { ProjectSession } from '@/lib/auth.config';

import UserProfile from '@/components/header/profile/UserProfile';

import styles from './header.module.css';

const Header = async () => {
    const headerLink = [
        {
            title: 'dir',
            image: '/header-dir.svg',
        },
        {
            title: 'edit',
            image: '/header-edit.svg',
        },
        {
            title: 'omit',
            image: '/header-omit.svg',
        },
    ];

    const session = (await auth()) as ProjectSession;

    return (
        <>
            {session && (
                <div className={styles.container}>
                    <input className={styles.input} type="text" placeholder="Search" />
                    <div className={styles.content}>
                        <div className={styles.list}>
                            {headerLink.map((link) => {
                                return (
                                    <div className={styles.headerLink} key={link.title}>
                                        <Image
                                            src={link.image}
                                            alt={link.title}
                                            fill
                                            className={styles.headerLinkImage}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <UserProfile />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
