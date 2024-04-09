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

import { Subject } from "../../../../__generated__/graphql";
import { GET_TEACHERS_LIST } from "../../../../apollo/queries/teacher/getTeachersList";
import { DELETE_SUBJECT } from "../../../../apollo/mutations/subject/deleteSubject";

interface DeleteTeacherProps {
  open: boolean;
  handleClose: () => void;
  subject: Subject;
}

const DeleteSubjectDialog: FC<DeleteTeacherProps> = ({
  open,
  handleClose,
  subject,
}) => {
  const [deleteSubject, { loading }] = useMutation(DELETE_SUBJECT);

  const handleDelete = async () => {
    deleteSubject({
      variables: {
        deleteSubjectId: +subject.id,
      },
      refetchQueries: [{ query: GET_TEACHERS_LIST }],
    }).catch(() => {});

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Delete Subject</DialogTitle>

      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete {subject.name}?
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

export default DeleteSubjectDialog;
