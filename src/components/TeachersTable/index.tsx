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
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TEACHERS_LIST } from "../../apollo/queries/teacher/getTeachersList";
import { Teacher } from "../../__generated__/graphql";
import { DELETE_TEACHER } from "../../apollo/mutations/teacher/deleteTeacher";
import ResponseMsg from "../ResponseMsg";
import DeleteTeacherDialog from "../DeleteTeacherDialog";
import { useState } from "react";
import EditTeacherDialog from "../EditTeacherDialog";

const TeachersTable = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [teacherOnDelete, setTeacherOnDelete] = useState<Teacher | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [teacherToEdit, setTeacherToEdit] = useState<Teacher | null>(null);

  const { loading, data } = useQuery(GET_TEACHERS_LIST, {
    fetchPolicy: "cache-and-network",
  });
  // const [deleteTeacher, { data: deleteInfo }] = useMutation(DELETE_TEACHER);
  console.log("data", data);

  // console.log("deleteInfo", deleteInfo);
  // const handleDeleteTeacher = (id: string) => {
  //   deleteTeacher({
  //     variables: {
  //       deleteTeacherId: +id,
  //     },
  //     //     refetchQueries: [
  //     //   {query: GET_TEACHERS_LIST},
  //     // ]
  //   }).catch(() => {});
  // };

  const closeDeleteModal = () => {
    setOpenDeleteDialog(false);
    setTeacherOnDelete(null);
  };

  const closeEditModal = () => {
    setOpenEditDialog(false);
    setTeacherToEdit(null);
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
                  First Name
                </TableCell>
                <TableCell align="left" sx={{ width: "40%" }}>
                  Last Name
                </TableCell>
                <TableCell align="left" sx={{ width: "20%" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.teachers?.map((teacher: Teacher) => (
                <TableRow
                  key={teacher.id}
                  sx={{ "& td": { border: 0, padding: "3px 15px" } }}
                >
                  <TableCell align="left">{teacher.firstName}</TableCell>
                  <TableCell align="left">{teacher.lastName}</TableCell>
                  {/* <TableCell align="left">{teacher.email}</TableCell> */}
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* {teacher?.subjects?.map((subject, index) => (
                        <Typography
                          variant="subtitle1"
                          key={`${teacher.id}-${subject}`}
                        >
                          {subject}
                          {index !== teacher?.subjects.length - 1 ? "," : ""}
                        </Typography>
                      ))} */}
                    <Box>
                      <IconButton
                        onClick={() => {
                          setOpenEditDialog(true);
                          setTeacherToEdit(teacher);
                        }}
                        sx={{
                          color: "primary.main",
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={
                          () => {
                            setOpenDeleteDialog(true);
                            setTeacherOnDelete(teacher);
                          }
                          // teacher.id && handleDeleteTeacher(teacher.id)
                        }
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

      {teacherOnDelete && (
        <DeleteTeacherDialog
          open={openDeleteDialog}
          handleClose={closeDeleteModal}
          teacher={teacherOnDelete}
        />
      )}

      {teacherToEdit && (
        <EditTeacherDialog
          open={openEditDialog}
          handleClose={closeEditModal}
          teacher={teacherToEdit}
        />
      )}
    </>

    // {rowCountArray.map((row, index) => (
    //     <TableRow key={index}>
    //        {colCountArray.map((col, index) => (
    //          <TableCell key={index}>
    //            Row {row} - Col {col}
    //          </TableCell>
    //         ))}
    //     </TableRow>
    //   ))}
  );
};

export default TeachersTable;
