import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListVideo2 = ({ video2s }) => {
  const deleteVideo2 = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/video2/delete/${name}`)
      .then((res) => {
        console.log(res)
        alert(`Đã xóa video2 ${name}`);
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
            {video2s &&
              video2s.map((video2) => {
                return (
                  <tr>
                    <td>{video2.name}</td>
                    <td>
                      {video2.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo2(video2.name)}}>DELETE</button>
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

export default UploadsListVideo2;
