import { useState } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "@apollo/client";

import { GET_TEACHERS_LIST } from "../../apollo/queries/teacher/getTeachersList";
import { Subject } from "../../__generated__/graphql";
import ResponseMsg from "../ResponseMsg";
import { GET_SUBJECTS_LIST } from "../../apollo/queries/subject/getSubjectList";
import DeleteSubjectDialog from "./components/DeleteSubjectDialog";
import { subjectTeacher } from "../../utils/findSubjetTeacher";
import EditSubjectDialog from "./components/EditSubjectDialog";

const SubjectsTable = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [subjectOnDelete, setSubjectOnDelete] = useState<Subject | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState<Subject | null>(null);

  const { loading, data } = useQuery(GET_SUBJECTS_LIST, {
    fetchPolicy: "cache-and-network",
  });

  const { data: teachersData } = useQuery(GET_TEACHERS_LIST);

  const closeDeleteModal = () => {
    setOpenDeleteDialog(false);
    setSubjectOnDelete(null);
  };

  const closeEditModal = () => {
    setOpenEditDialog(false);
    setSubjectToEdit(null);
  };

  if (loading) {
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }
  return (
    <>
      {data.isSuccess && (
        <ResponseMsg
          message={data.message}
          setAlert={data.isSuccess}
          type="success"
        />
      )}
      <Paper sx={{ width: "90%", overflow: "hidden" }}>
        <TableContainer
          sx={{
            maxHeight: 445,
          }}
        >
          <Table
            stickyHeader
            sx={{
              height: "max-content",
            }}
          >
            <TableHead
              sx={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                padding: 0,
              }}
            >
              <TableRow>
                <TableCell align="left" sx={{ width: "40%" }}>
                  Name
                </TableCell>
                <TableCell align="left" sx={{ width: "40%" }}>
                  Teacher
                </TableCell>

                <TableCell align="left" sx={{ width: "20%" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.subjects?.map((subject: Subject) => (
                <TableRow
                  key={subject.id}
                  sx={{ "& td": { border: 0, padding: "3px 15px" } }}
                >
                  <TableCell align="left">{subject.name}</TableCell>
                  <TableCell align="left">
                    {subject.teacherId &&
                      teachersData?.teachers &&
                      subjectTeacher(teachersData?.teachers, subject.teacherId)}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <IconButton
                        onClick={() => {
                          setOpenEditDialog(true);
                          setSubjectToEdit(subject);
                        }}
                        sx={{
                          color: "primary.main",
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setOpenDeleteDialog(true);
                          setSubjectOnDelete(subject);
                        }}
                        sx={{
                          color: "primary.main",
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {subjectOnDelete && (
        <DeleteSubjectDialog
          open={openDeleteDialog}
          handleClose={closeDeleteModal}
          subject={subjectOnDelete}
        />
      )}

      {subjectToEdit && (
        <EditSubjectDialog
          open={openEditDialog}
          handleClose={closeEditModal}
          subject={subjectToEdit}
        />
      )}
    </>
  );
};

export default SubjectsTable;
