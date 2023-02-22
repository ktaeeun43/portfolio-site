import "./write.css";

export default function Write() {
  return (
    <>
      <div className="write">
        <img
          className="writeImg"
          src="https://t1.daumcdn.net/cfile/tistory/25317A3C53E1055419"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGrop">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="내용을 입력해주세요."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">글쓰기</button>
        </form>
      </div>
    </>
  );
}
