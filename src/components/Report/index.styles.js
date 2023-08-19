import { styled } from "@mui/system";

export const ButtonDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "8px",
  gap: "8px",
}));

export const Wrapper = styled("div")(({ theme }) => ({
  "& .MuiTableRow-head ": {
    backgroundColor: "#1882FF",
    color:'white'
  },
  th:{
    color:'white'
  },
  width:'100%',
  maxWidth:'98%',
  margin:'0 auto'
}));
