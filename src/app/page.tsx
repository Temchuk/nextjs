import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <main className={styles.main}>

            <div style={{
                display: 'flex',
                margin: '30px 20px 30px 50px',
                opacity: '0.8',

            }}>
                <Link style={{marginRight: '20px'}} href="/" passHref>
                    <img
                        src="https://img.icons8.com/flat-round/64/back--v1.png"
                        alt="Back Arrow Icon"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>
                <Link style={{
                    marginRight: '15px',
                    textDecoration: 'none',
                    color: '#20bcc6',
                }} href='/'>HOME</Link>
                <Link style={{
                    marginRight: '15px',
                    textDecoration: 'none',
                    color: 'inherit',
                }} href='/moives'>MOVIES</Link>
                <Link style={{
                    marginRight: '15px',
                    textDecoration: 'none',
                    color: 'inherit',
                }} href='/genres'>GENRES</Link>

            </div>


            hello

        </main>
    );
}