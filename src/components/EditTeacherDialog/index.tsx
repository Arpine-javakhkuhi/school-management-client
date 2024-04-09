import { FC } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { TEACHER_FORM_INPUTS } from "../CreateTeacherDialog/constants";
import { editUserValidationSchema } from "./constants/validationSchema";

import { Teacher, TeacherInput } from "../../__generated__/graphql";
import { EDIT_TEACHER } from "../../apollo/mutations/teacher/editTeacher";
import { useMutation } from "@apollo/client";
import ResponseMsg from "../ResponseMsg";
import { GET_TEACHERS_LIST } from "../../apollo/queries/teacher/getTeachersList";

interface Props {
  open: boolean;
  handleClose: () => void;
  teacher: Teacher;
}

const EditTeacherDialog: FC<Props> = ({ open, handleClose, teacher }) => {
  const [editTeacher, { loading, data }] = useMutation(EDIT_TEACHER);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TeacherInput>({
    resolver: yupResolver(editUserValidationSchema),
    defaultValues: { ...teacher },
  });

  const formSubmitHandler = async (editedData: Teacher) => {
    console.log("editedData", editedData);
    const { firstName, lastName } = editedData;
    if (teacher.id) {
      editTeacher({
        variables: {
          editTeacherId: +teacher.id,
          editTeacherInput: {
            firstName,
            lastName,
          },
        },
        refetchQueries: [{ query: GET_TEACHERS_LIST }],
      })
        .then(() => {
          reset();
          handleClose();
        })
        .catch(() => {});
    }

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit(formSubmitHandler)}
          noValidate
        >
          {TEACHER_FORM_INPUTS.map(({ label, fieldName }) => (
            <TextField
              key={label}
              required
              label={label}
              fullWidth
              {...register(fieldName)}
              error={errors[fieldName]?.message !== undefined}
              helperText={errors[fieldName]?.message}
              margin="normal"
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ marginBottom: 2, paddingX: 3 }}>
        <Button variant="outlined" sx={{ width: 100 }} onClick={handleClose}>
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          sx={{ width: 100 }}
          loading={loading}
          onClick={handleSubmit(formSubmitHandler)}
        >
          Edit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
export default EditTeacherDialog;
