import Link from 'next/link';
import ModMenuBar from '../components/Dashboard/ModMenuBar';
import React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function AdminDashboard() {
    const [actors, setActors] = React.useState([""]);
    const [directors, setDirectors] = React.useState([""]);
    const [categories, setCategories] = React.useState([""]);
    const [hashtags, setHashtags] = React.useState([""]);

    return (
        <div>
            <link rel="stylesheet" href="css/plugins.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                crossOrigin="anonymous"
            />
            <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous"></script>
            <ModMenuBar />
            <div className="admod-body">
                <div className="admod-body-header">
                    <h3> Các phim </h3>
                    <img src="images/uploads/cast1.jpg" alt="" />
                    <p> Moderator #1 </p>
                </div>
                <div className="upload-movie">
                    <div className="upload-movie-container">
                        <div className="upload-movie-container-input">
                            <label htmlFor="upload">Click to upload</label>
                            <input type="file" id="upload" hidden />
                        </div>
                        <p> Chọn tệp hoặc thả vào đây </p>
                    </div>
                </div>
                <form className="table-container" action="">
                    <table>
                        <tr>
                            <td>
                                <p> Tên phim </p>
                                <textarea placeholder="Nhập tên phim" name="" id="" ></textarea>
                            </td>
                            <td>
                                <p> Tên phim (tên gốc) </p>
                                <textarea placeholder="Nhập tên phim (tên gốc)" name="" id="" ></textarea>
                            </td>
                            <td style={{ paddingRight: "0px" }}>
                                <table>
                                    <tr>
                                        <td>
                                            <p> Rating IMDb </p>
                                            <input type="number" placeholder="Nhập điểm" name="" id="" ></input>
                                        </td>
                                        <td>
                                            <p> Trạng thái </p>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p> Mô tả </p>
                                <textarea placeholder="Nhập mô tả" name="" id="" style={{ width: "265px", height: "78px" }} ></textarea>
                            </td>
                            <td>
                                <p> Diễn viên </p>
                                <ReactTagInput
                                    tags={actors}
                                    onChange={(newTags) => setActors(newTags)}
                                />
                            </td>
                            <td style={{ paddingRight: "0px" }}>
                                <p> Đạo diễn </p>
                                <ReactTagInput
                                    tags={directors}
                                    onChange={(newTags) => setDirectors(newTags)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p> Ảnh bìa </p>
                                <div className="upload-movie-container">
                                    <div className="upload-movie-container-input">
                                        <label htmlFor="upload">Click to upload</label>
                                        <input type="file" id="upload" hidden />
                                    </div>
                                    <p> Chọn ảnh bìa để upload </p>
                                </div>
                            </td>
                            <td>
                                <p> Thể loại </p>
                                <ReactTagInput
                                    tags={categories}
                                    onChange={(newTags) => setCategories(newTags)}
                                />
                            </td>
                            <td style={{ paddingRight: "0px" }}>
                                <table>
                                    <tr>
                                        <td>
                                            <p> Ngày công chiếu</p>
                                            <input type="date" />
                                        </td>
                                        <td>
                                            <p> Thời lượng (phút) </p>
                                            <input placeholder="Thời lượng" type="number" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p> Số views</p>
                                            <input type="number" />
                                        </td>
                                        <td>
                                            <p> Chất lượng </p>
                                            <textarea name="" id="" ></textarea>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p> Slug </p>
                                <textarea placeholder="Nhập mô tả" name="" id="" ></textarea>
                            </td>
                            <td>
                                <p> Hashtag </p>
                                <ReactTagInput
                                    tags={hashtags}
                                    onChange={(newTags) => setHashtags(newTags)}
                                />
                            </td>
                            <td style={{ paddingRight: "0px" }}>
                                <table>
                                    <tr>
                                        <td>
                                            <p> Số tập </p>
                                            <input placeholder="1" type="number" name="" id="" />
                                        </td>
                                        <td>
                                            <p> Số tập đang phát sóng </p>
                                            <input placeholder="1" type="number" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div className="button-container"><button type="submit"> SAVE </button></div>
                </form>
            </div>
        </div >
    )
}


export default AdminDashboard;