import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListVideo1 = ({ video1s }) => {
  const deleteVideo1 = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/video1/delete/${name}`)
      .then((res) => {
        console.log(res)
        alert(`Đã xóa video1 ${name}`);
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {video1s &&
              video1s.map((video1) => {
                return (
                  <tr>
                    <td>{video1.name}</td>
                    <td>
                      {video1.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo1(video1.name)}}>DELETE</button>
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

export default UploadsListVideo1;
