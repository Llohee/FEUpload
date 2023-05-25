import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListNew1 = ({ new1s }) => {
  const deleteVideo = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/new1/delete/${name}`)
      .then((res) => {
        alert(`Đã xóa video news1 ${name}`);
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video news1`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {new1s &&
              new1s.map((New1) => {
                return (
                  <tr>
                    <td>{New1.name}</td>
                    <td>
                      {New1.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo(New1.name)}}>DELETE</button>
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

export default UploadsListNew1;
