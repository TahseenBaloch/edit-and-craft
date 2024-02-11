import Navbar from "../Navbar/Navbar";
import img from "../assets/grow-green.jpg.webp";
import { useState } from "react";
let imgURL = null;
const BgRemover = () => {
  const [image, setImage] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  const [value, setValue] = useState(true);
  const [inputState, setInputState] = useState(true);

  const selectPhoto = (e) => {
    e.preventDefault();
    imgURL = false;
    const formData = new FormData();

    formData.append("image_file", image);
    formData.append("size", "auto");

    const apiKey = "Q9yudCWhgGZypXJUzaTMvb7P";

    fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((res) => {
        return res.blob();
      })
      .then((response) => {
        console.log(response);
        const reader = new FileReader();
        reader.onloadend = () => {
          setBgImage(reader.result);
        };
        setValue(false);
        reader.readAsDataURL(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const downloadPic = () => {
    if (bgImage) {
      const link = document.createElement("a");
      link.href = bgImage;
      link.download = "Tahseen's Edit & Create.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <>
      <Navbar logo={"bg remover"} />
      <div className="main-content">
        {inputState && (
          <form className="form">
            <div className="form-content">
              <label htmlFor="fileselector">Select the photo </label>
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  imgURL = URL.createObjectURL(e.target.files[0]);
                  setInputState(false);
                }}
              />
            </div>
          </form>
        )}

        {value ? (
          imgURL && (
            <>
              <div className="default-image">
                <img src={imgURL} />
              </div>
              <button onClick={selectPhoto}>Remove Background</button>
              <h5>(Press the button to remove Background)</h5>
            </>
          )
        ) : (
          <>
            <div className="default-image">
              <img src={bgImage} />
            </div>
            <button onClick={downloadPic}>Download</button>
            <h5>Enjoy!!</h5>
          </>
        )}
      </div>
    </>
  );
};
export default BgRemover;
