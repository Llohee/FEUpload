import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../../config/constants";

const UploadFormVideo1 = ({ getAllVideo1s }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  //Video1
  const hadleSubmitvideo1 = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }
    formdata.append("name", name);
    axios
      .post(`${BACKEND_URI}/api/v1/video1/create`, formdata)
      .then((success) => {
        getAllVideo1s();
        alert("Đã thêm Video1");
      })
      .catch((error) => {
        console.log(error);
        alert("Thử lại");
      });
  };

  return (
    <>
      {/* //video1 */}
      <form onSubmit={hadleSubmitvideo1}>
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

export default UploadFormVideo1;
