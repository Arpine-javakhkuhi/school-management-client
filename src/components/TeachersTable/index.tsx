import {
  IconButton,
  Paper,
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

const TeachersTable = () => {
  const teachers = [
    {
      id: 1,
      firstName: "Aaaa",
      lastName: "AAA",
      email: "email@test.com",
      subjects: ["Math"],
    },
    {
      id: 2,
      firstName: "BBB",
      lastName: "BBB",
      email: "email@test.com",
      subjects: ["Literature"],
    },
    {
      id: 3,
      firstName: "CCC",
      lastName: "CCC",
      email: "email@test.com",
      subjects: ["Music", "Art"],
    },
  ];
  return (
    <>
      {/* {loading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : ( */}
      <Paper sx={{ width: "90%" }}>
        <TableContainer
          sx={{
            maxHeight: 445,
          }}
        >
          <Table
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
                <TableCell align="left" sx={{ width: "25%" }}>
                  First Name
                </TableCell>
                <TableCell align="left" sx={{ width: "25%" }}>
                  Last Name
                </TableCell>
                <TableCell align="left" sx={{ width: "25%" }}>
                  Email
                </TableCell>
                <TableCell align="left" sx={{ width: "25%" }}>
                  Subjects
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers?.map((teacher) => (
                <TableRow
                  key={teacher.id}
                  sx={{ "& td": { border: 0, padding: "3px 15px" } }}
                >
                  <TableCell align="left">{teacher.firstName}</TableCell>
                  <TableCell align="left">{teacher.lastName}</TableCell>
                  <TableCell align="left">{teacher.email}</TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {teacher?.subjects?.map((subject, index) => (
                      <Typography
                        variant="subtitle1"
                        key={`${teacher.id}-${subject}`}
                      >
                        {subject}
                        {index !== teacher?.subjects.length - 1 ? "," : ""}
                      </Typography>
                    ))}
                    <div>
                      <IconButton
                        // onClick={() => setEditedUserField(singleUser.id)}
                        sx={{
                          color: "primary.main",
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        // onClick={() => setDeletedUserField(teacher.id)}

                        sx={{
                          color: "primary.main",
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* )} */}
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
