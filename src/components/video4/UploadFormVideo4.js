import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../../config/constants";

const UploadFormVideo4 = ({ getAllVideo4s }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const hadleSubmitvideo4 = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }
    formdata.append("name", name);
    axios
      .post(`${BACKEND_URI}/api/v1/video4/create`, formdata)
      .then((success) => {
        getAllVideo4s();
        alert("Đã thêm Video4");
      })
      .catch((error) => {
        console.log(error);
        alert("Thử lại");
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmitvideo4}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2" >
          Submit
        </button >
      </form>
    </>
  );
};

export default UploadFormVideo4;
