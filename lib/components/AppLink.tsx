'use client';
import { LinkProps } from '@mui/material';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
} & Omit<LinkProps, 'children'>;

export default function AppLink(props: Props) {
  const { href, children, ...rest } = props;
  const { sx, ...other } = rest;

  return (
    <Link
      href={href}
      component={NextLink}
      {...other}
      sx={{
        textDecoration: 'none',
        ...sx,
      }}
    >
      {children}
    </Link>
  );
}
