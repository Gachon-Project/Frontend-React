function ImgUpload2() {
  return(
    <section id="Img_result">
      <div class="ctn">
        <div class="con1">
        </div>
        <div class="con2">
          <div class="Img_dvs">
            <div class="Img_col">
              <p>[음식이름]</p>
            </div>
          </div>
        </div>
        <div class="con3">
          <a href="/" class="buttonContainer" onClick={function(e){
            alert("냉장고 저장 완료!");
          }}>냉장고 넣기</a>
        </div>
      </div>
    </section>
  );
}

export default ImgUpload2;