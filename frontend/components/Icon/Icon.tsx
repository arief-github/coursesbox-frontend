import { FC } from 'react';
import { Icons } from "./Icons";
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type AvailableIcons = keyof typeof Icons;

type WrapperProps = {
    size?: number;
};

export type Props = {
    name: AvailableIcons;
} & WrapperProps & React.SVGProps<SVGSVGElement>;


export const Icon: FC<Props> = ({ name, size= 2, ...rest }) => {
    const Icon = styled(Icons[name])`
        color: ${({ theme }) => theme.font.regular};
    `;

    const sizeInRem = `${size}rem`;
    const sizes = { width: sizeInRem, height: sizeInRem };

    return <Icon {...sizes} {...rest} />        
};
