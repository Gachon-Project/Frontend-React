import React, {Component} from 'react';

class ImgUpload extends Component {
    render() {
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
                            <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="readURL(this);"></input>
                        </form>
                        <div class="fileInput">
                            <p>FILE NAME: </p>
                            <p id="fileName"></p>
                        </div>
                    </div>
                </div>
                <div class="con22">
                    <div class="img_cnt">
                        <img alt=""></img>
                    </div>
                </div>
                <div class="con33">
                    <form>
                        <label for="butcnt">
                            저장
                        </label>
                        <input id="butcnt" class="butcnt" type="button" name="submitButton" value="저장"></input>
                    </form>
                </div>
            </div>
        </section>
      );
    }
  }

  export default ImgUpload;