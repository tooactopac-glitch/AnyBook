import { useState,useContext } from "react";
import { FaVideo, FaImage, FaFacebook } from "react-icons/fa";
import { MyContext } from "../context";


export default function CreatePost() {
  const { BASE_URL,token } = useContext(MyContext);
  const [activeTab, setActiveTab] = useState("text");
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const types = [{ id: "text", label: "Text Post", icon: <FaFacebook /> },
    { id: "image", label: "Photo", icon: <FaImage /> },
    { id: "video", label: "Video", icon: <FaVideo /> }
    ]

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedVideo(file);
  };

  const handleSubmit = async() => {
    console.log("Posting:", {
      type: activeTab,
      text: postText,
      image: selectedImage?.name,
      video: selectedVideo?.name,
    });

    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("content", postText);
      formData.append("type", activeTab);

      if (activeTab === "image" && selectedImage) {
        formData.append("file", selectedImage);
      } else if (activeTab === "video" && selectedVideo) {
        formData.append("file", selectedVideo);
      }

      const res = await fetch(`${BASE_URL}/api/add-post`, {
        method: "post",
        body: formData,
      });
      const r = await res.json();
      console.log(r);
    } catch (error) {
      console.log("FETCH ERROR : ", error);
    }
    setPostText("");
    setSelectedImage(null);
    setSelectedVideo(null);
    setActiveTab("text");
  };

 
   


   

  return (
    <div className="create-post-container">

        <div className="create-post">

      <div className="tabs-container">
        {types.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "tab-button-active" : ""}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder={
          activeTab === "text"
            ? "What's on your mind?"
            : activeTab === "image"
            ? "Add a caption (optional)"
            : "Add a description (optional)"
        }
        className="post-textarea"
        rows="4"
      />

      {/* File Uploads */}
      <div className="file-uploads">
        {activeTab === "image" && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-image"
            />
            {selectedImage && (
              <div className="selected-file">
                <FaImage className="selected-icon selected-icon-image" />
                {selectedImage.name}
              </div>
            )}
          </div>
        )}

        {activeTab === "video" && (
          <div>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="file-input file-input-video"
            />
            {selectedVideo && (
              <div className="selected-file">
                <FaVideo className="selected-icon selected-icon-video" />
                {selectedVideo.name}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="submit-container">
        <button
          onClick={handleSubmit}
          disabled={!postText.trim() && !selectedImage && !selectedVideo}
          className={`post-button ${
            postText.trim() || selectedImage || selectedVideo ? "" : "post-button-disabled"
          }`}
        >
          Post
        </button>
      </div>
        </div>

    </div>
  );
}