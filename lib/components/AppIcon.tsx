import ICON from '@@/images/icon.png';
import Image from 'next/image';

type Props = {
  width?: number;
};
export default function AppIcon(props: Props) {
  return <Image src={ICON} alt="logo" width={props?.width} />;
}
