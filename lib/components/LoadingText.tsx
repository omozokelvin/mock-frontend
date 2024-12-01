import { Skeleton, Typography } from '@mui/material';
import { CSSProperties, FC, useMemo } from 'react';

type Props = {
  loading: boolean;
  children: JSX.Element;
  width?: CSSProperties['width'];
};

const LoadingText: FC<Props> = (props) => {
  const { loading, children, width = '10ch' } = props;

  const childrenProps = useMemo(() => {
    if (!children?.props) {
      return {};
    }

    const propsClone = { ...children.props };
    delete propsClone.children;

    return { ...propsClone };
  }, [children?.props]);

  return (
    <>
      {loading ? (
        <Typography
          variant={childrenProps?.variant}
          color={childrenProps?.color}
          fontWeight={childrenProps?.fontWeight}
          component="span"
        >
          <Skeleton component="span" sx={{ width, display: 'inline-flex' }} />
        </Typography>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoadingText;
