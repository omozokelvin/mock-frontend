'use client';
import { useLogin } from '@/lib/_apis/auth';
import { LoginPayload } from '@/lib/_types/Authentication';
import AppLink from '@/lib/components/AppLink';
import { ErrorHelperText } from '@/lib/components/ErrorHelperText';
import { PasswordTextField } from '@/lib/components/PasswordTextField';
import { setAccessToken } from '@/lib/constants/http';
import routes from '@/lib/constants/routes';
import { withoutAuth } from '@/lib/HOC/withoutAuth';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

function LoginPage() {
  const { mutate: login, isPending: isAuthenticating } = useLogin();
  const router = useRouter();

  const formik = useFormik<LoginPayload>({
    enableReinitialize: true,
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Please provide a valid username'),
      password: Yup.string().required('Please enter a password'),
    }),
    onSubmit: (values) => {
      login(values, {
        onSuccess: () => {
          router.replace(routes.dashboard);
        },
      });
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <main>
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            rowGap={2}
          >
            <Typography variant="h5">Welcome to Aryon</Typography>

            <FormControl fullWidth>
              <FormLabel>Username</FormLabel>
              <TextField
                id="username"
                variant="outlined"
                autoComplete="off"
                type="username"
                {...getFieldProps('username')}
                error={Boolean(touched.username && errors.username)}
                helperText={
                  <ErrorHelperText
                    touched={touched.username}
                    errorMessage={errors.username}
                  />
                }
              />
            </FormControl>

            <FormControl fullWidth>
              <FormLabel>Password</FormLabel>
              <PasswordTextField
                id="password"
                variant="outlined"
                autoComplete="off"
                {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={
                  <ErrorHelperText
                    touched={touched.password}
                    errorMessage={errors.password}
                  />
                }
              />
              <AppLink
                href={routes.resetPassword()}
                sx={{
                  ml: 'auto',
                  mt: '0.5rem',
                  typography: 'body2',
                  letterSpacing: '1px',
                  color: 'gold.700',
                }}
              >
                Forgot Password?
              </AppLink>
            </FormControl>

            <LoadingButton
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              loading={isAuthenticating}
            >
              SIGN IN
            </LoadingButton>
          </Box>
        </Form>
      </FormikProvider>
    </main>
  );
}

export default withoutAuth(LoginPage);
