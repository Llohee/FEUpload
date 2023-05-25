import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListNew2 = ({ new2s }) => {
  const deleteVideo = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/new2/delete/${name}`)
      .then((res) => {
        alert(`Đã xóa video news2 ${name}`);
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
        alert(`Không có video news2`);
      })
  } 
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <tbody>
            {new2s &&
              new2s.map((New2) => {
                return (
                  <tr>
                    <td>{New2.name}</td>
                    <td>
                      {New2.videos.map((video) => {
                        return (
                          <video controls>
                            <source src={`${BACKEND_URI}${video}`} />
                          </video>
                        );
                      })}
                    </td>
                    <td>
                      <button onClick={()=> {deleteVideo(New2.name)}}>DELETE</button>
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

export default UploadsListNew2;
