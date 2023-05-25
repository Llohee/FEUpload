import React from "react";
import { BACKEND_URI } from "../../config/constants";
import axios from "axios";
const UploadsListNews = ({ medias }) => {
  const deleteVideo = async name => {
    axios.delete(`${BACKEND_URI}/api/v1/media/delete/${name}`)
      .then((res) => {
        alert(`Đã xóa video ${name}`);
        console.log(res)
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
                      <button onClick={()=> {deleteVideo(media.name)}}>DELETE</button>
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

export default UploadsListNews;
