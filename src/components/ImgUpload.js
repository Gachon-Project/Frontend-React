import React, {Component} from 'react';

class ImgUpload extends Component {
    render() {
      return(
        <section id="image_box">
            <div class="ctn">
                <div class="con1">
                    <div class="img_form">
                        <form method="post" enctype="multipart/form-data">
                            <div class="button">
                                <label for="chooseFile">
                                👉 CLICK HERE! 👈
                                </label>
                            </div>
                            <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="readURL(this);"/>
                        </form>
                        <div class="fileInput">
                            <p>FILE NAME: </p>
                            <p id="fileName"></p>
                        </div>
                    </div>
                </div>
                <div class="con2">
                    <img id="image_container" style="width: auto; height: auto;"></img>
                </div>
                <div class="con3">
                    <button class="buttonContainer" type="button" name="submitButton" value="저장">
                </div>
            </div>
        </section>
      );
    }
  }

  export default ImgUpload;