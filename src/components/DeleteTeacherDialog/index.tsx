import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@apollo/client";

import { DELETE_TEACHER } from "../../apollo/mutations/teacher/deleteTeacher";
import ResponseMsg from "../ResponseMsg";
import { Teacher } from "../../__generated__/graphql";
import { GET_TEACHERS_LIST } from "../../apollo/queries/teacher/getTeachersList";

interface DeleteTeacherProps {
  open: boolean;
  handleClose: () => void;
  teacher: Teacher;
}

const DeleteTeacherDialog: FC<DeleteTeacherProps> = ({
  open,
  handleClose,
  teacher,
}) => {
  const [deleteTeacher, { data, loading }] = useMutation(DELETE_TEACHER);

  const handleDelete = async () => {
    if (teacher.id) {
      deleteTeacher({
        variables: {
          deleteTeacherId: +teacher.id,
        },
        refetchQueries: [{ query: GET_TEACHERS_LIST }],
      }).catch(() => {});
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Delete User</DialogTitle>

      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete {teacher.firstName} {teacher.lastName}
          ?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" sx={{ width: 100 }} onClick={handleClose}>
          Cancel
        </Button>

        <LoadingButton
          variant="contained"
          sx={{ width: 100 }}
          loading={loading}
          onClick={handleDelete}
        >
          Yes
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTeacherDialog;
