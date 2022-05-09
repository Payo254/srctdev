import React, { useRef, useState } from "react";
import Stack from "@mui/material/Stack";
export default function Address() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  //0x69e3862fA9C8b01F654d88eFDaF0ed58bA8f46E8
  //0xBC41FC82319145DA526B72f683f6006b3208C7E2
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }
  return (
    <div>
      <form>
        <input
          style={{
            color: "blue",
            fontWeight: "bold",
            width: "100%",
            fontSize: 18,
          }}
          ref={textAreaRef}
          value="0xC215D4FeFaA762d43941b5bF81b42CC5f2C6afaF"
        />
      </form>
      {document.queryCommandSupported("copy") && (
        <Stack spacing={4} direction="row">
          <button
            onClick={copyToClipboard}
            type="button"
            className="text-blue-400 w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Copy Address
          </button>
          <div style={{ color: "green", fontWeight: "bold" }}>
            {copySuccess}
          </div>
        </Stack>
      )}
    </div>
  );
}
