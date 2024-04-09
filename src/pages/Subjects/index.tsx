import { FC, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CreateSubjectDialog from "../../components/SubjectsTable/components/CreateSubjectDialog";
import SubjectsTable from "../../components/SubjectsTable";

const Subjects: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h6">
        Subjects
      </Typography>

      <SubjectsTable />

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

      <CreateSubjectDialog handleClose={closeModal} open={isOpen} />
    </Box>
  );
};

export default Subjects;
