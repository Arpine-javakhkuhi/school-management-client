import Groups2TwoToneIcon from "@mui/icons-material/Groups2TwoTone";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import QuizIcon from "@mui/icons-material/Quiz";
import { AppRoute } from "../../../types/enums";

export const menuItems = [
  {
    id: 1,
    title: "Teachers",
    icon: AccountTreeIcon,
    to: `${AppRoute.Teachers}`,
  },
  {
    id: 2,
    title: "Pupils",
    icon: Groups2TwoToneIcon,
    to: `${AppRoute.Pupils}`,
  },
  {
    id: 3,
    title: "Tests",
    icon: QuizIcon,
    to: `${AppRoute.Subjects}`,
  },
];
