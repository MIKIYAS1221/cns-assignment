import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import EncryptionTextArea from "./EncrpytionTextArea";
import DecryptionTextArea from "./DecrypptionTextArea";
import {
  Select,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#090A0A" : "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: '33px',
  height: '100%',
}));

export default function FullWidthGrid() {
  const [encryptionType, setEncryptionType] = useState("None");
  return (
    <Box sx={{ padding: '1rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Grid container spacing={2} justifyContent="center" >
        <Grid item xs={12} md={12}>
          <Typography variant="h4" gutterBottom align="center">
            Encryption Demo
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{padding:"0px"}}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="encryption-type-label">Encryption Type</InputLabel>
            <Select
              labelId="encryption-type-label"
              id="encryption-type-select"
              value={encryptionType}
              onChange={(e) => setEncryptionType(e.target.value)}
              label="Encryption Type"
            >
              <MenuItem value="None">NONE</MenuItem>
              <MenuItem value="AES">AES</MenuItem>
              <MenuItem value="TripleDES">Triple DES</MenuItem>
              <MenuItem value="OneTimePad">One Time Pad</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "1rem",
          "& .MuiOutlinedInput-input": { backgroundColor: "white" },
        }}
      >
        <Grid container spacing={2} sx={{backgroundColor: "#EEEEEE",magin : "1rem"}} borderRadius={34} p={1}>
          <Grid item xs={6} md={6} sx={{ height: '100%' }}>
            <Item>
              <EncryptionTextArea type={encryptionType} />
            </Item>
          </Grid>
          <Grid item xs={6} md={6} sx={{ height: '100%' }}>
            <Item>
              <DecryptionTextArea type={encryptionType} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
