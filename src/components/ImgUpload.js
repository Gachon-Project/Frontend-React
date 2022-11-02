import React from 'react';
import ImgUpload2 from './ImgUpload2';


class ImgUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: '',
            fileName : '',
            previewURL : ''
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleFileOnChange = this.handleFileOnChange.bind(this);
    }

    handleFileOnChange(e) {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.setState({
            fileName : file.name,
            previewURL : reader.result
          })
        }
    }

    handleUploadImage(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        fetch('"플라스크 서버 ip 주소"/predict', { method: 'POST', body: data })
        .then((response) => { response.json().then((body) => { 
            this.setState({ 
                ingredients: `${body}`
            });
          });
        });
    }

    render() {
        let profile_preview = null;
        if(this.state.fileName !== ''){
            profile_preview = <img className='profile_preview' src={this.state.previewURL} alt=""></img>
        }
        if(this.state.ingredients !== ""){
            return (
                <ImgUpload2></ImgUpload2>
            );
        }
        else {
            return (
                <section id="image_box">
                    <form class="ctn1" onSubmit={this.handleUploadImage}>
                        <div class="con11">
                            <div class="img_form">
                                    <div class="button">
                                        <label for="chooseFile">
                                        👉 CLICK HERE! 👈
                                        </label>
                                    </div>
                                    <input ref={(ref) => { 
                                        this.uploadInput = ref;
                                    }} type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={this.handleFileOnChange}></input>
                                <div class="fileInput">
                                    <p>FILE NAME: {this.state.fileName}</p>
                                </div>
                            </div>
                        </div>
                        <div class="con22">
                            <div class="img_cnt">
                                {profile_preview}
                            </div>
                        </div>
                        <div class="con33">
                            <label for="postFile">저장</label>
                            <button type="submit" id="postFile" name="postFile"></button>
                        </div>
                    </form>
                </section>
            );
        }
      }
}

export default ImgUpload;