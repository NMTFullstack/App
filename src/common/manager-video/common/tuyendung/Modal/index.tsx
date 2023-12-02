// import React, { MouseEventHandler, useEffect, useRef, useState } from "react";

// import styles from "./table.module.scss";
// import ContentVideo from "../ContentVideo";
// import { ReactMediaRecorder } from "react-media-recorder";
// import axios from "axios";

// import { useSwiper } from "swiper/react";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// export default function ModalEdit() {
//     // if (data && data?.productVariants?.length > 0) {
//     //     data?.productVariants?.map((item) => {
//     //         item?.images?.map((itemImg) => {
//     //             slide.push(itemImg?.url);
//     //         });
//     //     });
//     // }
//     const videoRef = useRef<HTMLVideoElement>(null);

//     const [idVideo, setIdVideo] = useState<String>("0925764");
//     const [permission, setPermission] = useState(false);
//     const mediaRecorder = useRef(null);
//     const liveVideoFeed = useRef(null);
//     const [recordingStatus, setRecordingStatus] = useState("inactive");
//     const [videoChunks, setVideoChunks] = useState([]);
//     const [recordedVideo, setRecordedVideo] = useState(null);
//     const mimeType = "video/webm";
//     const [url, setUrl] = useState<any>();

//     // useEffect(() => {
//     //     const time = setInterval(() => {
//     //         goNext();
//     //     }, 5000);
//     //     stt === 10 && clearInterval(time);
//     // }, []);

//     // const [audio, setAudio] = useState<any>();
//     // useEffect(() => {
//     //     fetch("/video/audio.mp3").then((d) => {
//     //         setAudio(d.url);
//     //     });
//     // }, []);
//     const handlePlay = () => {
//         console.log("Audio is playing");
//         // Thực hiện các thao tác cần thiết khi audio bắt đầu phát.
//     };

//     const handlePause = () => {
//         console.log("Audio is paused");
//         // Thực hiện các thao tác cần thiết khi audio bị tạm dừng.
//     };

//     const handleDownload = () => {
//         console.log("Download button is clicked");
//         // Thực hiện các thao tác cần thiết khi nút download được nhấn.
//     };
//     // useEffect(() => {
//     //     const audioElement = document.getElementById("yourAudioElement");

//     //     audioElement.addEventListener("play", handlePlay);
//     //     audioElement.addEventListener("pause", handlePause);
//     //     audioElement.addEventListener("loadeddata", handleDownload);

//     //     return () => {
//     //         // Làm sạch bất kỳ listener nào nếu component unmounted.
//     //         audioElement.removeEventListener("play", handlePlay);
//     //         audioElement.removeEventListener("pause", handlePause);
//     //         audioElement.removeEventListener("loadeddata", handleDownload);
//     //     };
//     // }, []);
//     return (
//         <div>
//             <div
//                 style={{
//                     gap: "8px",
//                     margin: "8px 0",
//                     display: "flex",
//                     alignItems: "center",
//                 }}
//             >
//                 <div>
//                     <span>Giao dien</span>
//                 </div>

//                 <div>
//                     <Radio.Group defaultValue={1}>
//                         <Radio value={1}>Work247</Radio>
//                         <Radio value={2}>TimVie123</Radio>
//                         <Radio value={3}>Hungha365</Radio>
//                     </Radio.Group>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     gap: "8px",
//                     margin: "8px 0",
//                     display: "flex",
//                     alignItems: "center",
//                 }}
//             >
//                 <div>
//                     <span>InTro</span>
//                 </div>
//                 <div>
//                     <Radio.Group defaultValue={1}>
//                         <Radio value={1}>1</Radio>
//                     </Radio.Group>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     margin: "8px 0",
//                     gap: "8px",
//                     display: "flex",
//                     alignItems: "center",
//                 }}
//             >
//                 <div>
//                     <span>OutTro</span>
//                 </div>
//                 <div>
//                     <Radio.Group defaultValue={1}>
//                         <Radio value={1}>1</Radio>
//                     </Radio.Group>
//                 </div>
//             </div>
//             <div className={styles.content}>
//                 <ContentVideo />{" "}
//             </div>
//         </div>
//     );
// }
