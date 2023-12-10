import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Link,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  FormControl,
  ThemeProvider,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useFormik } from 'formik';
import { signinSchema } from './SinginSchema';
import { signupSchema } from './SingupSchema';
import { logIn } from 'src/redux/auth/operations';
import { register } from 'src/redux/auth/operations';
import { Form } from './SingupForm.styled';
import { GoogleButton } from '../GoogleButton/GoogleButton';
import {
  inputProps,
  datePickerStyled,
  outlineStyled,
  outlineError,
  outlineSucces,
  buttonStyled,
  linkStyled,
  iconStyled,
  theme,
} from './muiFormStyled';

export const CredentialForm = ({ page }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function submitLoginHandle({ email, password }) {
    const loginData = { email, password };
    dispatch(logIn(loginData));
  }
  function submitRegisterHandle(values) {
    const birth = new Date(values.birthday).toLocaleDateString('en-uk');
    dispatch(register({ ...values, birthday: birth }));
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      email: '',
      password: '',
    },
    validationSchema: page === 'signin' ? signinSchema : signupSchema,
    onSubmit: page === 'signin' ? submitLoginHandle : submitRegisterHandle,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ThemeProvider theme={theme}>
        {page === 'signin' ? null : (
          <>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                fullWidth
                name="name"
                placeholder="Name"
                autoComplete="off"
                sx={{
                  ...outlineStyled,
                  ...(formik.touched.name &&
                    Boolean(formik.errors.name) && { ...outlineError }),
                  ...(formik.values.name &&
                    Boolean(!formik.errors.name) && { ...outlineSucces }),
                }}
                inputProps={{ ...inputProps }}
                value={formik.values.name}
                onChange={(e) => {
                  e.target.value = e.target.value.trim();
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                required
                endAdornment={[
                  formik.values.name && Boolean(!formik.errors.name) && (
                    <CheckCircleOutlineIcon key={1} sx={{ color: 'green' }} />
                  ),
                  formik.touched.name && Boolean(formik.errors.name) && (
                    <ErrorOutlineIcon key={2} sx={{ color: 'red' }} />
                  ),
                ]}
              />
              {formik.touched.name && Boolean(formik.errors.name) && (
                <FormHelperText error id="name">
                  {formik.errors.name}
                </FormHelperText>
              )}
              {formik.values.name && Boolean(!formik.errors.name) && (
                <FormHelperText sx={{ color: 'green' }} id="name">
                  This is a CORRECT name
                </FormHelperText>
              )}
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  views={['year', 'month', 'day']}
                  id="birthday"
                  name="birthday"
                  disableFuture
                  format={'DD/MM/YYYY'}
                  popperPlacement="bottom-start"
                  dayOfWeekFormatter={(_day, weekday) =>
                    `${weekday.format('dd')}`
                  }
                  slotProps={{
                    ...datePickerStyled,
                  }}
                  value={formik.values.birthday}
                  onChange={(newDate) => {
                    formik.setFieldValue('birthday', newDate);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.values.birthday && Boolean(formik.errors.birthday)
                  }
                  required
                />
              </LocalizationProvider>
              {formik.touched.birthday && (
                <FormHelperText error id="birthday">
                  {formik.errors.birthday}
                </FormHelperText>
              )}
            </FormControl>
          </>
        )}
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput
            fullWidth
            name="email"
            placeholder="Email"
            autoComplete="off"
            sx={{
              ...outlineStyled,
              mt: '14px',
              ...(formik.touched.email &&
                Boolean(formik.errors.email) && { ...outlineError }),
              ...(formik.values.email &&
                Boolean(!formik.errors.email) && { ...outlineSucces }),
            }}
            inputProps={{ ...inputProps }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            required
            endAdornment={[
              formik.values.email && Boolean(!formik.errors.email) && (
                <CheckCircleOutlineIcon key={1} sx={{ color: 'green' }} />
              ),
              formik.touched.email && Boolean(formik.errors.email) && (
                <ErrorOutlineIcon key={2} sx={{ color: 'red' }} />
              ),
            ]}
          />
          {formik.touched.email && Boolean(formik.errors.email) && (
            <FormHelperText error id="email">
              {formik.errors.email}
            </FormHelperText>
          )}
          {formik.values.email && Boolean(!formik.errors.email) && (
            <FormHelperText sx={{ color: 'green' }} id="email">
              This is a CORRECT email
            </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput
            fullWidth
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            sx={{
              ...outlineStyled,
              mt: '14px',
              ...(formik.touched.password &&
                Boolean(formik.errors.password) && { ...outlineError }),
              ...(formik.values.password &&
                Boolean(!formik.errors.password) && { ...outlineSucces }),
            }}
            inputProps={{ ...inputProps }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ ...iconStyled }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.password && Boolean(formik.errors.password) && (
            <FormHelperText error id="password">
              {formik.errors.password}
            </FormHelperText>
          )}
          {formik.values.password && Boolean(!formik.errors.password) && (
            <FormHelperText sx={{ color: 'green' }} id="password">
              This is a CORRECT password
            </FormHelperText>
          )}
        </FormControl>
        <Button
          sx={{ ...buttonStyled }}
          variant="contained"
          fullWidth
          type="submit"
        >
          {page === 'signin' ? 'Sign In' : 'Sign up'}
        </Button>

        <Link
          component={NavLink}
          sx={{ ...linkStyled }}
          to={page === 'signin' ? '/signup' : '/signin'}
        >
          {page === 'signin' ? 'Sign up' : 'Sign In'}
        </Link>
      </ThemeProvider>
    </Form>
  );
};
