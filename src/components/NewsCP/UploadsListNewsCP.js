import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListNewsCP = ({ cps }) => {
  const deleteVideo = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/CP/delete/${name}`)
      .then((res) => {
        alert(`Đã xóa video CamPain ${name}`);
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video hoặc đã xóa`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {cps &&
              cps.map((CP) => {
                return (
                  <tr>
                    <td>{CP.name}</td>
                    <td>
                      {CP.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo(CP.name)}}>DELETE</button>
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

export default UploadsListNewsCP;
