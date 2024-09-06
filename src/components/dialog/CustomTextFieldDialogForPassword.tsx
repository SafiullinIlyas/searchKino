import { FC, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CustomTextFieldDialogForPasswordProps {
  className?: string;
}

const CustomTextFieldDialogForPassword: FC<
  CustomTextFieldDialogForPasswordProps
> = ({ className }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl
      variant="outlined"
      className={className}
      size={"small"}
      required
    >
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        placeholder={"Пароль"}
        name={"password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export { CustomTextFieldDialogForPassword };