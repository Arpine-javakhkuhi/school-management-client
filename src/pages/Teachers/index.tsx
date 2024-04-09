import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TeachersTable from "../../components/TeachersTable";
import CreateTeacherDialog from "../../components/CreateTeacherDialog";
import { TeacherInput } from "../../components/CreateTeacherDialog/types";
import { createTeacherValidationSchema } from "../../components/CreateTeacherDialog/constants/validationSchema";

const Teachers: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { reset } = useForm<TeacherInput>({
    resolver: yupResolver(createTeacherValidationSchema),
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h6">
        Teachers
      </Typography>

      <TeachersTable />

      <Fab
        color="primary"
        onClick={openModal}
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(4),
          right: (theme) => theme.spacing(2),
        }}
      >
        <AddIcon />
      </Fab>

      <CreateTeacherDialog handleClose={closeModal} open={isOpen} />
    </Box>
  );
};

export default Teachers;
