import React from "react";
import { BACKEND_URI } from "../config/constants";
import axios from "axios";

const UploadsList = ({ medias }) => {
  // const deleteVideo = (id, name) => {
  //   if (window.confirm(`Are you sure to delete ${name}`)) {
  //     axios.delete(`${BACKEND_URI}/delete`, {
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         mediaid: id,
  //       })
  //     })
  //   } else { }
  // }
  const deleteVideo = (id) => {
    axios.delete("https://localhost:4000/delete" + id)
    .then((r) => {
      console.log(r)
    })
    .catch((e) => {
      console.log(e)
    })
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {medias &&
              medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}</td>
                    <td>
                      {media.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={() => { deleteVideo(media._id, media.name) }}>DELETE</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;
