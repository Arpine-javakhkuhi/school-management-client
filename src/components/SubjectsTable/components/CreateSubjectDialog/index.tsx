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
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation, useQuery } from "@apollo/client";

import { SubjectInput, Teacher } from "../../../../__generated__/graphql";
import { createSubjectValidationSchema } from "./constants/validationSchema";
import { CREATE_SUBJECT } from "../../../../apollo/mutations/subject/createSubject";
import { GET_TEACHERS_LIST } from "../../../../apollo/queries/teacher/getTeachersList";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const CreateSubjectDialog: FC<Props> = ({ open, handleClose }) => {
  const [createSubject, { loading }] = useMutation(CREATE_SUBJECT);
  const { data } = useQuery(GET_TEACHERS_LIST);
  console.log("teachers", data.teachers);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SubjectInput>({
    resolver: yupResolver(createSubjectValidationSchema),
  });

  const formSubmitHandler = async (data: SubjectInput) => {
    const input: SubjectInput = { name: data.name };
    if (data.teacherId) {
      input.teacherId = data.teacherId;
    }
    createSubject({
      variables: {
        createSubjectInput: input,
      },
    }).then(() => {
      reset();
      handleClose();
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Subject</DialogTitle>

      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit(formSubmitHandler)}
          noValidate
        >
          <TextField
            required
            label="Name"
            fullWidth
            {...register("name")}
            error={errors["name"]?.message !== undefined}
            helperText={errors["name"]?.message}
            margin="normal"
          />
          <FormControl
            fullWidth
            margin="normal"
            sx={{ marginBottom: "1rem" }}
            size={"small"}
          >
            <InputLabel id="role">Teacher</InputLabel>
            <Select
              labelId="teacher"
              label="Teacher"
              defaultValue=""
              {...register("teacherId")}
              error={!!errors.teacherId?.message}
              MenuProps={{
                PaperProps: { sx: { maxHeight: 190, overflowY: "auto" } },
              }}
            >
              {data.teachers?.length &&
                data.teachers.map((teacher: Teacher) => {
                  console.log("teacher", teacher);
                  return (
                    <MenuItem key={teacher.id} value={teacher.id}>
                      {teacher.firstName} {teacher.lastName}
                    </MenuItem>
                  );
                })}
            </Select>
            {errors.teacherId?.message && (
              <FormHelperText error>{errors.teacherId?.message}</FormHelperText>
            )}
          </FormControl>
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
export default CreateSubjectDialog;
