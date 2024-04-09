export type AlertType = "error" | "success" | "warning";

export interface AlertInfo {
  type: AlertType;
  message: string;
}

export type SetAlert = React.Dispatch<React.SetStateAction<AlertInfo | null>>;
