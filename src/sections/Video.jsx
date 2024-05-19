import video from "../assets/images/video.png";
const Video = () => {
  return (
    <div className="h-[700px] max-lg:h-[400px] max-sm:h-[200px]  mx-16 flex-center border-4 border-blue rounded-xl">
      <img src={video} alt="Video" className="h-20 w-20 max-sm:scale-90" />
    </div>
  );
};

export default Video;
