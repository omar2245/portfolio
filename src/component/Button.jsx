import MButton from "@mui/material/Button";

export default function Button({ sx, ...others }) {
  return (
    <MButton
      sx={{
        borderRadius: "8px",
        px: "12px",
        py: "8px",
        textTransform: "none",
        fontWeight: 600,
        ...sx,
      }}
      {...others}
    />
  );
}
