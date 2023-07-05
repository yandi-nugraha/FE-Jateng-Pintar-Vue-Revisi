<template>
    <div class="container">
        <div class="d-flex flex-row align-items-center mt-5">
            <div class="backBtn d-flex justify-content-center align-items-center">
                <router-link to="/list-sumber-belajar"><i class="bi bi-arrow-left-short"></i></router-link>
            </div>
            <div class="ms-3">
                <ol class="breadcrumb rounded-pill">
                    <li class="breadcrumb-item">
                        <router-link to="/" style="text-decoration: none; color: inherit;">Beranda</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/list-sumber-belajar" style="text-decoration: none; color: inherit;">{{ pageTitle }}</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ contentTitle }}</li>
                </ol>
            </div>
        </div>

        <div class="wrapper">
            <video id="player" playsinline controls data-poster="assets/thumb.jpeg" style="width: 100%; height: 450px;"
                class="object-fit-cover border rounded">
                <source src="../assets/video-demo.mp4" type="video/mp4" />
            </video>

            <!-- Temp -->

            <!-- <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-informasi-tab" data-bs-togle="tab" data-bs-target="#nav-informasi" type="button" role="tab" aria-controls="nav-informasi" aria-selected="true">Informasi</button>
                    <button class="nav-link" id="nav-download-tab" data-bs-togle="tab" data-bs-target="#nav-download" type="button" role="tab" aria-controls="nav-informasi" aria-selected="false">Download</button>
                </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active p-3" id="nav-informasi" role="tabpanel" aria-labelledby="nav-informasi-tab">
                    <h2>Ini halaman Informasi</h2>
                </div>
                <div class="tab-pane fade p-3" id="nav-download" role="tabpanel" aria-labelledby="nav-download-tab">
                    <h2>Ini halaman Download</h2>
                </div>
            </div> -->

            <!-- Temp -->

            <hr>

            <div class="d-flex flex-wrap align-items-center py-2">
                <div class="col-md-2">
                    <img src="../assets/profile.svg"
                        style="padding: 3.5px; background-color: white; box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%;">
                </div>
                <div class="col-md-5 name">
                    <h3 style="margin-bottom: 0px !important">Wisma Nantha</h3>
                    <p class="text-secondary" style="margin-bottom: 0px !important">1 Materi, Dilihat 99.999.999.999 kali, Diupload 17-11-2022 10:33:55</p>
                    <div class="d-flex align-items-center">
                        <h6 class="me-2 my-0">Rating materi :</h6>
                        <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                        <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                        <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                        <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                        <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center me-3 share-button">
                            <h6 class="my-0" style="padding-left: 5px !important; padding-right: 5px !important;">Bagikan dengan yang lain</h6>
                            <div class="hover-effect">
                                <div class="img-share-hover"><router-link to="/detail-sumber-belajar"><img src="../assets/FacebookLogoHover.svg"></router-link></div>
                                <div class="img-share"><router-link to="/detail-sumber-belajar"><img src="../assets/FacebookLogo.svg"></router-link></div>
                            </div>
                            <div class="hover-effect">
                                <div class="img-share-hover"><router-link to="/detail-sumber-belajar"><img src="../assets/InstagramLogoHover.svg"></router-link></div>
                                <div class="img-share"><router-link to="/detail-sumber-belajar"><img src="../assets/InstagramLogo.svg"></router-link></div>
                            </div>
                            <div class="hover-effect">
                                <div class="img-share-hover"><router-link to="/detail-sumber-belajar"><img src="../assets/TwitterLogoHover.svg"></router-link></div>
                                <div class="img-share"><router-link to="/detail-sumber-belajar"><img src="../assets/TwitterLogo.svg"></router-link></div>
                            </div>
                            <div class="hover-effect">
                                <div class="img-share-hover"><router-link to="/detail-sumber-belajar"><img src="../assets/WhatsappLogoHover.svg"></router-link></div>
                                <div class="img-share"><router-link to="/detail-sumber-belajar"><img src="../assets/WhatsappLogo.svg"></router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger" style="background-color: #ED1C24; padding: 5px;"><i class="bi bi-plus-circle me-2"></i>Berlangganan</button>
                </div>
            </div>

            <hr class="mb-4">

            <h4 style="font-weight: 600;">Perkembangan Teknologi Transportasi</h4>

            <div class="table-responsive">
                <table class="table table-borderless w-auto">
                    <tr>
                        <th class="ps-0 pe-2">Kontributor</th>
                        <td class="px-0">: Wisma Nantha</td>
                    </tr>
                    <tr>
                        <th class="ps-0 pe-2">Mapel</th>
                        <td class="px-0">: Bahasa Indonesia</td>
                    </tr>
                    <tr>
                        <th class="ps-0 pe-2">Kelas</th>
                        <td class="px-0">: 3 SD/MI</td>
                    </tr>
                    <tr>
                        <th class="ps-0 pe-2">Tgl Upload</th>
                        <td class="px-0">: 17-11-2022 10:33:55</td>
                    </tr>
                    <tr>
                        <th class="ps-0 pe-2">Tipe File</th>
                        <td class="px-0">: html | HTML5</td>
                    </tr>
                    <tr>
                        <th class="ps-0 pe-2">Penilaian</th>
                        <td class="px-0">: 4,5 / 5 Rating</td>
                    </tr>
                    <tr>
                        <th class="ps-0 pe-2">Penjelasan</th>
                        <!-- <td class="px-0">: Video ini berisikan pengenalan huruf "ba","bi","bu","be" dan "bo". Materi ini disertai juga dengan contoh kata yang diawali dengan suku kata "ba","bi","bu',"be" dan "bo". Video pembelajaran ini dikhususkan untuk anak berkebutuhan khusus ata...</td> -->
                    </tr>
                </table>
            </div>
            <div class="d-flex flex-row flex-wrap mt-3 mb-4 mx-auto">
                <button type="button" class="btn1 btn py-2 me-3" style="background-color: #ED1C24;"><i class="bi bi-download me-2"></i>Download Materi</button>
                <button type="button" class="btn2 btn py-2 me-3"><i class="fa-solid fa-paperclip fa-sm me-2"></i>Naskah</button>
                <button type="button" class="btn2 btn py-2"><i class="bi bi-chat-left me-2"></i>Lapor</button>
            </div>
            <div>
                <form class="d-flex flex-column">
                    <label for="comment" class="comment-label mb-2">Komentar</label>
                    <textarea class="comment" name="comment" id="" cols="30" rows="10"></textarea>
                    <p class="comment-hint">Maksimal 200 karakter</p>
                </form>
            </div>
            <div class="scrollview">
                <div class="d-flex flex-row py-2">
                    <div>
                        <img src="../assets/profile.svg"
                            style="border-radius: 50%;">
                        <img src="../assets/online.svg" class="online-avatar">
                    </div>
                    <div class="name ms-3">
                        <p class="commenter-name mb-2">Olivia Rhye</p>
                        <p class="commenter-job mb-2">Designer AR</p>
                        <p class="commenter-coment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa aut et earum repellendus nihil recusandae mollitia ea porro numquam suscipit dolor quam aliquam ex voluptate tempora, in pariatur deleniti?</p>
                    </div>
                </div>
                <div class="d-flex flex-row py-2">
                    <div>
                        <img src="../assets/profile.svg"
                            style="border-radius: 50%;">
                        <img src="../assets/online.svg" class="online-avatar">
                    </div>
                    <div class="name ms-3">
                        <p class="commenter-name mb-2">Olivia Rhye</p>
                        <p class="commenter-job mb-2">Designer AR</p>
                        <p class="commenter-coment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa aut et earum repellendus nihil recusandae mollitia ea porro numquam suscipit dolor quam aliquam ex voluptate tempora, in pariatur deleniti?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="label-lainnya">
            <h4>{{ pageTitle }} SD/MI/SDLB Lainnya</h4>
        </div>

        <div class="row pb-5 mb-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <div class="card rounded-card shadow border-0">
                    <img src="../assets/Image.svg" alt="" class="img-fluid d-block mb-3 img-top-radius">
                    <div class="card-body">
                        <h5>Mari Belajar Membaca</h5>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tr>
                                    <th class="px-0">Kontributor</th>
                                    <td class="px-0">: Wisma Nantha</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Mapel</th>
                                    <td class="px-0">: Bahasa Inggris</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Kelas</th>
                                    <td class="px-0">: 4 Minggu</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tgl Upload</th>
                                    <td class="px-0">: 17-11-2022 10:33:55</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tipe File</th>
                                    <td class="px-0">: html | HTML5</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Jenis Media</th>
                                    <td class="px-0">: Video Pembelajaran</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tag</th>
                                    <td class="px-0">: -</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Penilaian</th>
                                    <td class="px-0">
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0">: </li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #eaecf0;"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <hr class="solid">
                        <router-link to="/detail-sumber-belajar" class="mr-2 mb-3 btn-edit text-light">
                            <div class="btn-detail">
                                <span class="btn-detail-teks">Lihat Sumber Belajar</span>
                                <img src="../assets/arrow-up-right.svg" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <div class="card rounded-card shadow border-0">
                    <img src="../assets/Image.svg" alt="" class="img-fluid d-block mb-3 img-top-radius">
                    <div class="card-body">
                        <h5>Mari Belajar Membaca</h5>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tr>
                                    <th class="px-0">Kontributor</th>
                                    <td class="px-0">: Wisma Nantha</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Mapel</th>
                                    <td class="px-0">: Bahasa Inggris</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Kelas</th>
                                    <td class="px-0">: 4 Minggu</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tgl Upload</th>
                                    <td class="px-0">: 17-11-2022 10:33:55</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tipe File</th>
                                    <td class="px-0">: html | HTML5</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Jenis Media</th>
                                    <td class="px-0">: Video Pembelajaran</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tag</th>
                                    <td class="px-0">: -</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Penilaian</th>
                                    <td class="px-0">
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0">: </li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #eaecf0;"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <hr class="solid">
                        <router-link to="/detail-sumber-belajar" class="mr-2 mb-3 btn-edit text-light">
                            <div class="btn-detail">
                                <span class="btn-detail-teks">Lihat Sumber Belajar</span>
                                <img src="../assets/arrow-up-right.svg" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <div class="card rounded-card shadow border-0">
                    <img src="../assets/Image.svg" alt="" class="img-fluid d-block mb-3 img-top-radius">
                    <div class="card-body">
                        <h5>Mari Belajar Membaca</h5>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tr>
                                    <th class="px-0">Kontributor</th>
                                    <td class="px-0">: Wisma Nantha</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Mapel</th>
                                    <td class="px-0">: Bahasa Inggris</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Kelas</th>
                                    <td class="px-0">: 4 Minggu</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tgl Upload</th>
                                    <td class="px-0">: 17-11-2022 10:33:55</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tipe File</th>
                                    <td class="px-0">: html | HTML5</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Jenis Media</th>
                                    <td class="px-0">: Video Pembelajaran</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Tag</th>
                                    <td class="px-0">: -</td>
                                </tr>
                                <tr>
                                    <th class="px-0">Penilaian</th>
                                    <td class="px-0">
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0">: </li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star"
                                                    style="color: #eaecf0;"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <hr class="solid">
                        <router-link to="/detail-sumber-belajar" class="mr-2 mb-3 btn-edit text-light">
                            <div class="btn-detail">
                                <span class="btn-detail-teks">Lihat Sumber Belajar</span>
                                <img src="../assets/arrow-up-right.svg" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <nav aria-label="Page navigation" class="mb-5">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1"><img src="../assets/arrow-left.svg"
                            alt=""><span>Sebelumnya</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">8</a></li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
                <li class="page-item">
                    <a class="page-link" href="#"><span>Selanjutnya</span><img src="../assets/arrow-right.svg"
                            alt=""></a>
                </li>
            </ul>
        </nav> -->
    </div>
</template>

<script>
export default {
    props: ['pageTitle', 'contentTitle']
}
</script>

<style>
    .backBtn {
        background: linear-gradient(to right, #EE269D, #9743A6);
        width: 55px;
        height: 55px;
        font-size: 34px;
        border-radius: 50%;
        border: 3px solid;
        border-color: #9743A6;
    }

    .bi-arrow-left-short {
        color: white;
    }

    .breadcrumb {
        background-color: white;
        padding: 5px 15px;
        margin: 0px !important;
        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
    }
    
    .breadcrumb-item.active {
        background-image: linear-gradient(to right, #EE269D, #9743A6);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
    }

    .wrapper {
        background: white;
        border-radius: 14px;
        margin-top: 40px;
        padding: 25px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .btn1 {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color: #FFFFFF;
    }

    .btn2 {
        color: #344054;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-color: #D0D5DD;
    }

    .table .px-0 {
        color: #475467;
    }

    .label-lainnya {
        background: #ED1C24;
        border-radius: 14px;
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 20px;
        color: white;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .label-lainnya h4 {
        margin: 0px !important;
    }

    hr {
        border-color: gray;
    }

    .rounded-card {
        border-radius: 20px !important;
    }

    .img-top-radius {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .list-inline-item .list-inline .star-widget input {
        display: none !important;
    }

    .btn-detail-teks {
        color: #ED1C24;
        font-weight: 600;
    }

    .btn-detail {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
    }

    .img-share-hover {
        padding: 5px;
        filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
        position: absolute;
        z-index: -1;
    }

    .hover-effect:hover .img-share-hover {
        z-index: 2;
    }
    
    .img-share {
        padding: 5px;
        filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
    }

    .share-button {
        border: 1px solid #EAECF0 !important;
        border-radius: 8px !important;
    }

    .pagination span {
        border-color: #D0D5DD !important;
        color: #1D2939 !important;
        border-radius: 5px !important;
        margin: 0 2px !important;
        padding: 8px 16px !important;
        transition: background-color .3s !important;
    }

    .pagination a {
        border-color: #D0D5DD !important;
        color: #1D2939 !important;
        border-radius: 5px !important;
        margin: 0 2px !important;
        padding: 8px 16px !important;
        transition: background-color .3s !important;
    }

    .comment-label {
        font-weight: bold;
    }

    .comment {
        border: solid 1px #D0D5DD;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 16px;
        color: #333;
        width: 100%;
        height: 124px;
        overflow: auto;
        transition: border-color 0.3s ease;
    }

    .comment:focus {
        outline: none;
        border-color: #4C466A;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px rgba(92, 157, 255, 0.6);
    }

    .comment-hint {
        font-size: 14px;
        font-weight: 400;
        color: #667085;
    }

    .commenter-name {
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        color: #344054;
    }

    .commenter-job {
        color: #667085;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
    }

    .commenter-coment {
        color: #667085;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
    }

    .online-avatar {
        position: absolute;
        z-index: 2;
        margin-left: -20px;
        margin-top: 60px;
        padding: 3px;
        background-color: white;
        border-radius: 50%;
    }

    .scrollview {
        width: 100%;
        height: 400px;
        overflow: auto;
        position: relative;
    }
</style>