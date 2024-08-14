// ThemeProvider.tsx
"use client"; // Додаємо директиву для клієнтського компонента

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        document.body.className = theme; // Змінюємо клас на body залежно від теми
    }, [theme]);

    return <>{children}</>; // Повертаємо дітей компонента без змін
}
