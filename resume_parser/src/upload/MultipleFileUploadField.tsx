import { Grid, makeStyles } from "@material-ui/core";
import { useField } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { SingleFileUploadWithProgress } from "./SingleFileUploadWithProgress";
import { UploadError } from "./UploadError";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Box from '@material-ui/core/Box';


export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: `4px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
    height: theme.spacing(40),
    outline: "none",
  },
  button: {
    margin: theme.spacing(1),
    
  },
}));

export function MultipleFileUploadField({ name }: { name: string }) {
  const [_, __, helpers] = useField(name);
  const classes = useStyles();

  const [files, setFiles] = useState<UploadableFile[]>([]);
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  useEffect(() => {
    helpers.setValue(files);
    // helpers.setTouched(true);
  }, [files]);
  // eslint-disable-next-line

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ["image/*", "video/*", ".pdf"],
    maxSize: 300 * 1024, // 300KB
  });

  return (
    <React.Fragment>
      <Grid item  >
        <div {...getRootProps({ className: classes.dropzone })}>
          <input {...getInputProps()} />
          <Box><div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Click Here To Upload Resume
            </Button>
          </div>
          </Box>
          <p>Drag and Drop your resume here or click the Upload button!</p>
          
          
        </div>
      </Grid>
      

      {files.map((fileWrapper, idx) => (
        <Grid item key={idx}>
          {fileWrapper.errors.length ? (
            <UploadError
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          ) : (
            <SingleFileUploadWithProgress
              onDelete={onDelete}
              onUpload={onUpload}
              file={fileWrapper.file}
            />
          )}
        </Grid>
      ))}
    </React.Fragment>
  );
}
