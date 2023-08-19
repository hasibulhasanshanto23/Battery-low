"use client";
import { useContext ,useRef} from "react";
import { Header } from "@/components/Header";
import {
    Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as Styles from './index.styles';
import { ContextApi } from "@/app/layout";
import { useRouter } from "next/navigation";
import {useReactToPrint} from 'react-to-print'

export default function Report() {
    const router = useRouter();
    const PDF=useRef()
    const { companyData, setCompanyData } = useContext(ContextApi);

    const generatePDF=useReactToPrint({
        content:()=>PDF.current,
        documentTitle:'Report',
    })
  return (
    <Styles.Wrapper>
      <Header title="Report" />
      <div ref={PDF} style={{width:'100%'}}>
      <TableContainer component={Paper} sx={{width:'100%'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="right">Project Description</TableCell>
              <TableCell align="right">Client</TableCell>
              <TableCell align="right">Contractor</TableCell>
              <TableCell align="right">Max_X</TableCell>
              <TableCell align="right">Min_X</TableCell>
              <TableCell align="right">Max_Y</TableCell>
              <TableCell align="right">Min_Y</TableCell>
              <TableCell align="right">Max_Z</TableCell>
              <TableCell align="right">min_Z</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{companyData?.projectName}</TableCell>
              <TableCell align="right">
                {companyData?.projectDescription}
              </TableCell>
              <TableCell align="right">{companyData?.client}</TableCell>
              <TableCell align="right">{companyData?.contractor}</TableCell>
              <TableCell align="right">{companyData?.max_X}</TableCell>
              <TableCell align="right">{companyData?.min_X}</TableCell>
              <TableCell align="right">{companyData?.max_Y}</TableCell>
              <TableCell align="right">{companyData?.min_Y}</TableCell>
              <TableCell align="right">{companyData?.max_Z}</TableCell>
              <TableCell align="right">{companyData?.min_Z}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>

      <Styles.ButtonDiv>
              <Button
                type="button"
                variant="outlined"
                onClick={() => router.push("/")}
              >
               Back
              </Button>
              <Button
                type="submit"
                variant="outlined"
               onClick={generatePDF}
              >
               Download Pdf
              </Button>
            </Styles.ButtonDiv>
    </Styles.Wrapper>
  );
}
