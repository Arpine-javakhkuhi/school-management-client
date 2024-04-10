import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@apollo/client";

import { TEACHER_FORM_INPUTS } from "../../constants";
import { createTeacherValidationSchema } from "./constants/validationSchema";
import { CREATE_TEACHER } from "../../../../apollo/mutations/teacher/createTeacher";
import { GET_TEACHERS_LIST } from "../../../../apollo/queries/teacher/getTeachersList";
import { TeacherInput } from "../../../../__generated__/graphql";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const CreateTeacherDialog: FC<Props> = ({ open, handleClose }) => {
  const [createTeacher, { loading }] = useMutation(CREATE_TEACHER, {
    refetchQueries: [GET_TEACHERS_LIST],
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TeacherInput>({
    resolver: yupResolver(createTeacherValidationSchema),
  });

  const formSubmitHandler = async (data: TeacherInput) => {
    createTeacher({
      variables: {
        createTeacherInput: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
        },
      },
    }).then(() => {
      reset();
      handleClose();
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Teacher</DialogTitle>

      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit(formSubmitHandler)}
          noValidate
        >
          <>
            {TEACHER_FORM_INPUTS.map(({ label, fieldName }) => (
              <TextField
                required
                key={label}
                label={label}
                fullWidth
                {...register(fieldName)}
                error={errors[fieldName]?.message !== undefined}
                helperText={errors[fieldName]?.message}
                margin="normal"
              />
            ))}
          </>
        </Box>
      </DialogContent>

      <DialogActions sx={{ marginBottom: 2, paddingX: 3 }}>
        <Button
          variant="outlined"
          sx={{ width: 100 }}
          onClick={() => {
            reset();
            handleClose();
          }}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          sx={{ width: 100 }}
          loading={loading}
          onClick={handleSubmit(formSubmitHandler)}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
export default CreateTeacherDialog;
