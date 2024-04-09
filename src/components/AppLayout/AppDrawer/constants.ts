import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SubjectIcon from "@mui/icons-material/Subject";
import { AppRoute } from "../../../types/enums";

export const menuItems = [
  {
    id: 1,
    title: "Teachers",
    icon: CastForEducationIcon,
    to: `${AppRoute.Teachers}`,
  },
  {
    id: 2,
    title: "Subjects",
    icon: SubjectIcon,
    to: `${AppRoute.Subjects}`,
  },
  {
    id: 3,
    title: "Pupils",
    icon: LocalLibraryIcon,
    to: `${AppRoute.Pupils}`,
  },
];
