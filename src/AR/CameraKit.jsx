import { useEffect, useRef } from "react";
import {
  bootstrapCameraKit,
  createMediaStreamSource,
  Transform2D,
} from "@snap/camera-kit";
let video;

const SnapCamera = () => {
  const canvasRef = useRef(null);
  const apiToken =
    "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzAwMDIxMjg2LCJzdWIiOiI1ZWVhZmRkZi02ZGMwLTQ2NjEtYWM1OC0xZDhhYTViYTA0NWN-U1RBR0lOR34wN2YxNjBkYi04ZTAyLTRiZjQtODk2NC0wMTRmMjlmMTI3N2QifQ.CdyUhb6_cyFeXqMCvw-d458LcCmgrLnxqjmoOjkV0NU";
  const lensGroupId = "2effb7dd-67d4-4e70-9399-1d023c34e032";
  const lensid = "50507980875";
  const cameraSelectRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const cameraKit = await bootstrapCameraKit({ apiToken: apiToken });

      const session = await cameraKit.createSession();

      // Use the ref to get the canvas element
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.replaceWith(session.output.live);
      }
      const lens = await cameraKit.lenses.repository.loadLens(
        lensid,
        lensGroupId
      );
      session.applyLens(lens);
      await setCameraKitSource(session);
      await attachCamerasToSelect(session);
    };

    init();
  }, []);

  const setCameraKitSource = async (session, deviceId) => {
    if (video) {
      session.pause();
      video.getVideoTracks()[0].stop();
    }
    video = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId,
      },
    });
    const source = createMediaStreamSource(video);
    await session.setSource(source);
    source.setTransform(Transform2D.MirrorX);

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    source.setRenderSize(screenWidth, screenHeight);
    session.play();
  };

  const attachCamerasToSelect = async (session) => {
    cameraSelectRef.current.innerHTML = "";
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(({ kind }) => kind === "videoinput");

    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.text = camera.label;
      cameraSelectRef.current.appendChild(option);
    });

    cameraSelectRef.current.addEventListener("change", (event) => {
      const deviceId = event.target.selectedOptions[0].value;
      setCameraKitSource(session, deviceId);
    });
  };
  return (
    <>
      <div className="relative h-full w-full mx-auto">
        <div className="flex items-center justify-center">
          <div className="absolute top-10">
            <img src="/logo.png" className=" w-42 h-8" alt="" />
          </div>
        </div>

        <canvas ref={canvasRef} className={`w-5/6 h-5/6`}></canvas>
        <div className="bg-transparent absolute bottom-[72px] right-10 xl:right-[100px]">
          <button
            className="selectedCamera transform duration-300 ease-in-out hover:rotate-180 hover:scale-125"
            // onClick={handleCameraTurn}
          >
            <img src="/rotate.png" className="w-[48px] h-[48px]" alt="" />
          </button>
        </div>
        <div className="bg-transparent absolute bottom-[72px] left-10 xl:left-[100px]">
          <button
            className="selectedCamera transform duration-300 ease-in-out hover:scale-125"
            // onClick={handleCameraTurn}
          >
            <img src="/Back.png" className="w-[48px] h-[48px]" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default SnapCamera;
