import ICON from '@@/images/logo.png';
import Image from 'next/image';
import { CSSProperties } from 'react';

type Props = {
  width?: number;
};
export default function Logo(props: Props) {
  return <Image src={ICON} alt="logo" width={props?.width || 150} />;
}
