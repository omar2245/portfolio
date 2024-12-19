import MButton from "@mui/material/Button";

export default function Button({ sx, ...others }) {
  return (
    <MButton sx={{ borderRadius: "100px", py: "8px", ...sx }} {...others} />
  );
}
