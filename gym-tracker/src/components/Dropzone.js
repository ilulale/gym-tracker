import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

export default function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/json": [".json"],
    },
  });
  let [schedule, setSchedule] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    let tmpSchedule = window.localStorage.getItem("schedule");
    let tmpUser = window.localStorage.getItem("user");

    if (!tmpUser) {
      navigate("/login");
    }

    if (tmpSchedule) {
      navigate("/schedule");
    }
  }, []);

  useEffect(() => {
    if (schedule.length > 0) {
      console.log(schedule);
      window.localStorage.setItem("schedule", JSON.stringify(schedule));
      navigate("/schedule");
    }
  }, [schedule]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      var reader = new FileReader();
      reader.onload = function () {
        var fileContent = JSON.parse(reader.result);
        setSchedule(fileContent);
      };
      reader.readAsText(acceptedFiles[0]);
    }
  }, [acceptedFiles]);

  return (
    <div
      className={`mt-4 border-dashed border-2 border-white p-14 self-center flex flex-col justify-center`}
    >
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="cursor-pointer">
          Drag 'n' drop <b>schedule.json</b> here, or click to select file
        </p>
      </div>
    </div>
  );
}
