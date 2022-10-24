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
        fetch('http://192.168.45.133:5000/predict', { method: 'POST', body: data })
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
                        {/* <div>
                            <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                        </div>
                        <div>
                            <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
                        </div>
                        <br />
                        <div>
                            <button>Upload</button>
                        </div> */}
                    </form>
                </section>
            );
        }
        // return (
        //     <section id="image_box">
        //         <form class="ctn1" onSubmit={this.handleUploadImage}>
        //             <div class="con11">
        //                 <div class="img_form">
        //                         <div class="button">
        //                             <label for="chooseFile">
        //                             👉 CLICK HERE! 👈
        //                             </label>
        //                         </div>
        //                         <input ref={(ref) => { 
        //                             this.uploadInput = ref;
        //                         }} type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={this.handleFileOnChange}></input>
        //                     <div class="fileInput">
        //                         <p>FILE NAME: {this.state.fileName}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="con22">
        //                 <div class="img_cnt">
        //                     {profile_preview}
        //                 </div>
        //             </div>
        //             <div class="con33">
        //                 <label for="postFile">저장</label>
        //                 <button type="submit" id="postFile" name="postFile"></button>
        //             </div>
        //             {/* <div>
        //                 <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        //             </div>
        //             <div>
        //                 <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        //             </div>
        //             <br />
        //             <div>
        //                 <button>Upload</button>
        //             </div> */}
        //             <p>{this.state.ingredients}</p>
        //         </form>
        //     </section>
        // );
      }
}

export default ImgUpload;

// import axios from "axios";
// import React, { useState } from "react";

// function ImgUpload() {
//     const [fileImage, setFileImage] = useState("");
//     const [fileName, setFileName] = useState("");
//     const [image, setImage] = useState("");
//     // 파일 저장
//     const saveFileImage = (e) => {
//         console.log(e.target.files[0]);
//         setImage(e.target.files);
//         setFileImage(URL.createObjectURL(e.target.files[0]));
//         setFileName(e.target.files[0].name);
//     };


//     const handleSubmit = (e) => {
//         let fileToUpload = image
//         const formData = new FormData()
//         formData.append('file', fileToUpload)

//         fetch('http://121.170.222.30:5000/predict', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//             body: formData
//         }).then(res => {
//             res.json().then(data => {console.log(data)})
//         })
//     }


//     return(
//         <section id="image_box">
//             <form class="ctn1" onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div class="con11">
//                     <div class="img_form">
//                             <div class="button">
//                                 <label for="chooseFile">
//                                 👉 CLICK HERE! 👈
//                                 </label>
//                             </div>
//                             <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={saveFileImage}></input>
//                         <div class="fileInput">
//                             <p>FILE NAME: {fileName}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="con22">
//                     <div class="img_cnt">
//                         <img src={fileImage} alt=""></img>
//                     </div>
//                 </div>
//                 <div class="con33">
//                     <label for="postFile">저장</label>
//                     <button type="submit" id="postFile" name="postFile"></button>
//                 </div>
//             </form>
//         </section>
//     );
// }

//   export default ImgUpload;