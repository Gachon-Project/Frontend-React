import React, { useState } from "react";

function ImgUpload() {
    const [fileImage, setFileImage] = useState("");
    const [fileName, setFileName] = useState("")
    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setFileName(e.target.files[0].name);
    };

    return(
        <section id="image_box">
            <div class="ctn1">
                <div class="con11">
                    <div class="img_form">
                        <form method="post" enctype="multipart/form-data">
                            <div class="button">
                                <label for="chooseFile">
                                👉 CLICK HERE! 👈
                                </label>
                            </div>
                            <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={saveFileImage}></input>
                        </form>
                        <div class="fileInput">
                            <p>FILE NAME: {fileName}</p>
                        </div>
                    </div>
                </div>
                <div class="con22">
                    <div class="img_cnt">
                        <img src={fileImage}></img>
                    </div>
                </div>
                <div class="con33">
                    <form>
                        <a href="/img2">저장</a>
                    </form>
                </div>
            </div>
        </section>
    );
}

  export default ImgUpload;