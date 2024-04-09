import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, Paper, Stack } from "@mui/material";

import { loginValidationSchema } from "./constants/validationSchema";
import { LoginData } from "./types";
import { LOGIN } from "../../apollo/mutations/login";
import { AppRoute } from "../../types/enums";
import storage from "../../storage/Storage";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginValidationSchema),
  });

  const submitForm = async (loginData: LoginData) => {
    console.log("loginData", loginData);
    login({
      variables: {
        input: {
          email: loginData.email,
          password: loginData.password,
        },
      },
    }).then((res) => {
      if (res?.data?.login?.id) {
        storage.set("accessToken", res.data.login.accessToken);
        navigate(AppRoute.Teachers);
      }
    });
  };

  // console.log("data", data);
  // if (error) {
  //   return <Typography variant="h2">Error</Typography>;
  // }

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={1}
    >
      <Paper variant="elevation" elevation={3}>
        <Grid
          container
          padding={3}
          justifyContent="center"
          alignItems="center"
          maxWidth={500}
          minHeight={380}
        >
          <Typography variant="h5">Log in to your account</Typography>

          <Stack
            component="form"
            onSubmit={handleSubmit(submitForm)}
            noValidate
            alignItems="center"
            spacing={3}
            width="100%"
          >
            <TextField
              required
              label="E-mail"
              type="email"
              fullWidth
              margin="normal"
              {...register("email")}
              error={errors.email?.message !== undefined}
              helperText={errors.email?.message}
            />
            <TextField
              required
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              {...register("password")}
              error={errors.password?.message !== undefined}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      tabIndex={-1}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={loading}
                sx={{ width: 100 }}
              >
                Log in
              </LoadingButton>
            </Box>
          </Stack>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
