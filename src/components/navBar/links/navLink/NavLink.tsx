'use client';

import Link from 'next/link';
import { FC } from 'react';

import Image from 'next/image';

import styles from './navLink.module.css';

interface ItemProps {
    item: {
        title: string;
        path: string;
        image: string;
    };
}

const NavLink: FC<ItemProps> = ({ item }) => {
    // const pathName = usePathname();

    return (
        <Link href={item.path} className={styles.container}>
            <Image
                className={styles.image}
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 600px) 270px, 223px"
            />
        </Link>
    );
};

export default NavLink;
