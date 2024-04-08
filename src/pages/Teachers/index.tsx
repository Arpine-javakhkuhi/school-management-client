import { FC } from "react";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TeachersTable from "../../components/TeachersTable";

const Teachers: FC = () => {
  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h6">
        Teachers
      </Typography>

      <TeachersTable />

      <Fab
        color="primary"
        // onClick={openModal}
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(4),
          right: (theme) => theme.spacing(2),
        }}
      >
        <AddIcon />
      </Fab>

      {/* <CreateTeacherDialog handleClose={closeModal} open={isOpen} /> */}
    </Box>
  );
};

export default Teachers;
