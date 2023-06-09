import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { Themes } from './styles/themes';

const Wrapper: FC = ({ children }) => (
    <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };