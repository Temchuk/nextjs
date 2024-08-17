"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const user = users.find((u: any) => u.username === username && u.password === password);

        if (user) {
            alert('Login successful!');
            localStorage.setItem('currentUser', username);
            router.push('/'); // Перенаправляємо на головну сторінку після успішного входу
        } else {
            alert('Invalid login credentials');
            document.getElementById('registerButton')?.classList.add(styles.highlight);
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.find((u: any) => u.username === username)) {
            alert('Username already taken');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} className={styles.form}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>

            <form onSubmit={handleRegister} className={styles.form}>
                <button id="registerButton" type="submit">Register</button>
            </form>
        </div>
    );
};

export default LoginPage;
