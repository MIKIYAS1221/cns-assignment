import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { aesEncrypt } from "../encryption/AES.mjs";
import { TripleDESEncrypt } from "../encryption/triple_des.mjs";
import { OTP_encrypt } from "../encryption/one_time_pad.mjs";

const EncryptionDemo = (props) => {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const encryptedMessageRef = useRef(null);

  const encryptText = (encryptionType) => {
    const encrypted = encryptionType(message, key);
    setEncryptedMessage(encrypted);
  };

  const copyToClipboard = () => {
    if (encryptedMessageRef.current) {
      const textArea = document.createElement("textarea");
      textArea.value = encryptedMessageRef.current.value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  };

  const handleEncrypt = () => {
    switch (props.type.toUpperCase()) {
      case "AES":
        encryptText(aesEncrypt);
        break;
      case "TRIPLEDES":
        encryptText(TripleDESEncrypt);
        break;
      case "ONETIMEPAD":
        encryptText(OTP_encrypt);
        break;
      default:
        setEncryptedMessage(message);
    }
  };

  return (
    <Box>
      <TextField
        label="Message"
        multiline
        rows={8}
        variant="outlined"
        fullWidth
        value={message.toString()}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginBottom: "1rem", borderRadius: "5px" }}
      />
      <TextField
        label="Encryption Key"
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
            ENCRYPT
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
            onClick={copyToClipboard}
            size="large"
          >
            COPY TO CLIPBOARD
          </Button>
        </Grid>
      </Grid>

      <TextField
        inputRef={encryptedMessageRef}
        label="Encrypted Text"
        multiline
        rows={8}
        variant="outlined"
        fullWidth
        value={encryptedMessage}
        disabled
      />
    </Box>
  );
};

export default EncryptionDemo;
