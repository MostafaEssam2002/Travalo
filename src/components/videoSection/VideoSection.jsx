import { Fragment, useState } from "react"
import { FaPlay } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
import ReactPlayer from 'react-player'

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <Fragment>
      <div className="video_section">
        <div className="video_section_icon" onClick={() => setShowVideo(true)}>
          <FaPlay  />
        </div>
        {showVideo && 
          <div className="video_player">
            <div className="video_player_icon" onClick={() => setShowVideo(false)}>
              <IoClose  />
            </div>
            <ReactPlayer playing={true} width={"80%"} height={"80%"} src='`https://www.youtube.com/watch?v=LXb3EKWsInQ`' />
          </div>
        }
      </div>
    </Fragment>
  )
}
export default VideoSection