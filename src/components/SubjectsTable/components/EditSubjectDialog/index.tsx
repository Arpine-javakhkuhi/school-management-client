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
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import {
  Subject,
  SubjectInput,
  Teacher,
} from "../../../../__generated__/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TEACHERS_LIST } from "../../../../apollo/queries/teacher/getTeachersList";
import { GET_SUBJECTS_LIST } from "../../../../apollo/queries/subject/getSubjectList";
import { EDIT_SUBJECT } from "../../../../apollo/mutations/subject/editSubject";
import { createSubjectValidationSchema } from "../CreateSubjectDialog/constants/validationSchema";

interface EditSubjectProps {
  open: boolean;
  handleClose: () => void;
  subject: Subject;
}

const EditSubjectDialog: FC<EditSubjectProps> = ({
  open,
  handleClose,
  subject,
}) => {
  const [editSubject, { loading }] = useMutation(EDIT_SUBJECT, {
    refetchQueries: [GET_SUBJECTS_LIST],
  });
  const { data } = useQuery(GET_TEACHERS_LIST);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SubjectInput>({
    resolver: yupResolver(createSubjectValidationSchema),
    defaultValues: { ...subject },
  });

  const formSubmitHandler = async (editedData: SubjectInput) => {
    const input: SubjectInput = { name: editedData.name.trim() };
    if (editedData.teacherId) {
      input.teacherId = editedData.teacherId;
    }

    editSubject({
      variables: {
        editSubjectId: +subject.id,
        editSubjectInput: input,
      },
    })
      .then(() => {
        reset();
        handleClose();
      })
      .catch(() => {});

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Edit Subject</DialogTitle>
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
              {data?.teachers?.length &&
                data.teachers.map((teacher: Teacher) => (
                  <MenuItem key={teacher.id} value={teacher.id}>
                    {teacher.firstName} {teacher.lastName}
                  </MenuItem>
                ))}
            </Select>
            {errors.teacherId?.message && (
              <FormHelperText error>{errors.teacherId?.message}</FormHelperText>
            )}
          </FormControl>
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
export default EditSubjectDialog;
