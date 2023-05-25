import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListVideo3 = ({ video3s }) => {
  const deleteVideo3 = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/video3/delete/${name}`)
      .then((res) => {
        console.log(res)
        alert(`Đã xóa video3 ${name}`);
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video3`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {video3s &&
              video3s.map((video3) => {
                return (
                  <tr>
                    <td>{video3.name}</td>
                    <td>
                      {video3.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo3(video3.name)}}>DELETE</button>
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

export default UploadsListVideo3;
