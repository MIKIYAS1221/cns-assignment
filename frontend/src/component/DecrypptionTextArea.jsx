import React, { useState , useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { aesDecrypt } from "../encryption/AES.mjs";
import { TripleDESDecrypt } from "../encryption/triple_des.mjs";
import { OTP_decrypt } from "../encryption/one_time_pad.mjs";

const DecryptionDemo = (props) => {
  const [key, setKey] = useState("");
  const [DecrptMessage, setDecrptMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  

  const decryptText = (DecryptionType) => {
    const encrypted = DecryptionType(encryptedMessage, key);
    setDecrptMessage(encrypted);
  };

  const handleEncrypt = () => {
    switch (props.type.toUpperCase()) {
      case "AES":
        decryptText(aesDecrypt);
        break;
      case "TRIPLEDES":
        decryptText(TripleDESDecrypt);
        break;
      case "ONETIMEPAD":
        decryptText(OTP_decrypt);
        break;
      default:
        setDecrptMessage(encryptedMessage);
  };
}

  return (
    <Box >
      <TextField
        label="Encrypted Message"
        multiline
        rows={8}
        variant="outlined"
        fullWidth
        value={encryptedMessage}
        onChange={(e) => setEncryptedMessage(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Decryption Key"
        variant="outlined"
        fullWidth
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5C5C5F",
              "&:hover": { backgroundColor: "#187EFA" },
              margin: "1rem",
              textTransform: "none",
            }}
            onClick={handleEncrypt}
            size="large"
          >
            DECRYPT
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5C5C5F",
              "&:hover": { backgroundColor: "#187EFA" },
              margin: "1rem",
              textTransform: "none",
            }}
            onClick={handleEncrypt}
            size="large"
          >
            COPY TO CLIPBOARD
          </Button>
        </Grid>
      </Grid>

      <TextField
        label="Decrypted Text"
        multiline
        rows={8}
        variant="outlined"
        fullWidth
        value={DecrptMessage}
        disabled
      />
    </Box>
  );
};


export default DecryptionDemo;
