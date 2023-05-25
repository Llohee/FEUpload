import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BACKEND_URI } from "./config/constants";

import UploadFormNews from "./components/NewsLB/UploadFormNews";
import UploadsListNews from "./components/NewsLB/UploadsListNews";

import UploadFormNewsCP from "./components/NewsCP/UploadFormNewsCP";
import UploadsListNewsCP from "./components/NewsCP/UploadsListNewsCP";

import UploadFormVideo1 from "./components/Video1/UploadFormVideo1";
import UploadsListVideo1 from "./components/Video1/UploadListVideo1";

import UploadsListVideo2 from "./components/Video2/UploadListVideo2";
import UploadFormVideo2 from "./components/Video2/UploadFormVideo2";

import UploadFormVideo3 from "./components/video3/UploadFormVideo3";
import UploadsListVideo3 from "./components/video3/UploadListVideo3";

import UploadFormVideo4 from "./components/video4/UploadFormVideo4";
import UploadsListVideo4 from "./components/video4/UploadListVideo4";

import UploadFormVideo5 from "./components/video5/UploadFormVideo5";
import UploadsListVideo5 from "./components/video5/UploadListVideo5";


const App = () => {
  //GetAllNews
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  //GetAllNewsCP
  const [cps, setCps] = useState([]);

  useEffect(() => {
    getAllCPs();
  }, []);

  const getAllCPs = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/CP/all`)
      .then((result) => {
        setCps(result.data);
      })
      .catch((error) => {
        setCps([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  //GetAllVideo1
  const [video1s, setVideo1s] = useState([]);

  useEffect(() => {
    getAllVideo1s();
  }, []);

  const getAllVideo1s = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/video1/all`)
      .then((result) => {
        setVideo1s(result.data);
      })
      .catch((error) => {
        setVideo1s([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  //GetAllVideo2
  const [video2s, setVideo2s] = useState([]);

  useEffect(() => {
    getAllVideo2s();
  }, []);

  const getAllVideo2s = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/video2/all`)
      .then((result) => {
        setVideo2s(result.data);
      })
      .catch((error) => {
        setVideo2s([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  //GetAllVideo3
  const [video3s, setVideo3s] = useState([]);

  useEffect(() => {
    getAllVideo3s();
  }, []);

  const getAllVideo3s = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/video3/all`)
      .then((result) => {
        setVideo3s(result.data);
      })
      .catch((error) => {
        setVideo3s([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  //GetAllVideo4
  const [video4s, setVideo4s] = useState([]);

  useEffect(() => {
    getAllVideo4s();
  }, []);

  const getAllVideo4s = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/video4/all`)
      .then((result) => {
        setVideo4s(result.data);
      })
      .catch((error) => {
        setVideo4s([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  //GetAllVideo5
  const [video5s, setVideo5s] = useState([]);

  useEffect(() => {
    getAllVideo5s();
  }, []);

  const getAllVideo5s = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/video5/all`)
      .then((result) => {
        setVideo5s(result.data);
      })
      .catch((error) => {
        setVideo5s([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  
  return (
    <>
      {/* Medias - LookBook */}
      <div className="row">
        <div className="title">NewsPage - LookBook (max 20)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormNews getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListNews medias={medias} />
            </div>
          </div>
        </div>
      </div>

      {/* Medias - CP */}
      <div className="row">
        <div className="title">NewsPage - Campain (max 20)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormNewsCP getAllCPs={getAllCPs} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListNewsCP cps={cps} />
            </div>
          </div>
        </div>
      </div>

      {/* Video1 */}
      <div className="row">
        <div className="title">HomePage-Video1(max 1)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormVideo1 getAllVideo1s={getAllVideo1s} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListVideo1 video1s={video1s} />
            </div>
          </div>
        </div>
      </div>

      {/* Video2 */}
      <div className="row">
        <div className="title">HomePage-Video2(max 1)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormVideo2 getAllVideo2s={getAllVideo2s} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListVideo2 video2s={video2s} />
            </div>
          </div>
        </div>
      </div>

        {/* Video3 */}
        <div className="row">
        <div className="title">HomePage-Video3(max 1)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormVideo3 getAllVideo3s={getAllVideo3s} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListVideo3 video3s={video3s} />
            </div>
          </div>
        </div>
      </div>

        {/* Video4 */}
        <div className="row">
        <div className="title">HomePage-Video4(max 1)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormVideo4 getAllVideo4s={getAllVideo4s} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListVideo4 video4s={video4s} />
            </div>
          </div>
        </div>
      </div>

        {/* Video5 */}
        <div className="row">
        <div className="title">HomePage-Video5(max 1)</div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadFormVideo5 getAllVideo5s={getAllVideo5s} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsListVideo5 video5s={video5s} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
