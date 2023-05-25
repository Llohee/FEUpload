import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListVideo4 = ({ video4s }) => {
  const deleteVideo4 = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/video4/delete/${name}`)
      .then((res) => {
        console.log(res)
        alert(`Đã xóa video4 ${name}`);
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video4`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {video4s &&
              video4s.map((video4) => {
                return (
                  <tr>
                    <td>{video4.name}</td>
                    <td>
                      {video4.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo4(video4.name)}}>DELETE</button>
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

export default UploadsListVideo4;
