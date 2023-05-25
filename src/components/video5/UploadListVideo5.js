import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListVideo5 = ({ video5s }) => {
  const deleteVideo5 = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/video5/delete/${name}`)
      .then((res) => {
        console.log(res)
        alert(`Đã xóa video5 ${name}`);
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video5`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {video5s &&
              video5s.map((video5) => {
                return (
                  <tr>
                    <td>{video5.name}</td>
                    <td>
                      {video5.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo5(video5.name)}}>DELETE</button>
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

export default UploadsListVideo5;
