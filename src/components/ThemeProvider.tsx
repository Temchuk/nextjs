
"use client";

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return <>{children}</>;
}
