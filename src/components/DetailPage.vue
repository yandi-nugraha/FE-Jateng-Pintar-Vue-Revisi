<template>
    <div class="container">
        <div class="d-flex flex-row align-items-center mt-5">
            <router-link to="/list-sumber-belajar">
                <button class="back-btn-new"><i class="bi bi-arrow-left-short text-white" style="font-size: 35px;"></i></button>
            </router-link>

            <!-- <div class="back-btn d-flex justify-content-center">
                <router-link to="/list-sumber-belajar"><i class="bi bi-arrow-left-short"></i></router-link>
            </div> -->
            <div class="ms-3">
                <ol class="breadcrumb rounded-pill">
                    <li class="breadcrumb-item">
                        <router-link to="/" style="text-decoration: none; color: inherit;">Beranda</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/list-sumber-belajar" style="text-decoration: none; color: inherit;">
                            {{ pageTitle }}</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ contentTitle }}</li>
                </ol>
            </div>
        </div>

        <div class="wrapper">
            <video id="player" playsinline controls data-poster="assets/thumb.jpeg" style="width: 100%; height: 500px;"
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

            <!-- <div class="d-flex flex-wrap align-items-center py-2"> -->
            <div class="row align-items-center">
                <div class="col-lg-1 col-md-3 col-sm-12 align-items-center py-2">
                    <div>
                        <img src="../assets/profile.svg"
                            style="padding: 3.5px; background-color: white; box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%;">
                    </div>
                </div>
                <div class="col-lg-auto col-md-auto col-sm-12 align-items-center py-2">
                    <div class="name">
                        <h3 style="margin-bottom: 0px !important">Wisma Nantha</h3>
                        <p class="text-secondary" style="margin-bottom: 0px !important">1 Materi, Dilihat 99.999.999.999
                            kali, Diupload 17-11-2022 10:33:55</p>
                        <div class="d-flex align-items-center">
                            <h6 class="me-2 my-0">Rating materi :</h6>
                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i>
                            </li>
                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i>
                            </li>
                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i>
                            </li>
                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i>
                            </li>
                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i>
                            </li>
                        </div>
                    </div>
                </div>
                <div class="col-lg-auto ms-auto col-md-auto col-sm-12 align-items-center py-2">
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center me-3 share-button">
                            <h6 class="my-0" style="padding-left: 5px !important; padding-right: 5px !important;">
                                Bagikan dengan yang lain</h6>
                            <div class="hover-effect">
                                <div class="img-share-hover">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/FacebookLogoHover.svg">
                                    </router-link>
                                </div>
                                <div class="img-share">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/FacebookLogo.svg">
                                    </router-link>
                                </div>
                            </div>
                            <div class="hover-effect">
                                <div class="img-share-hover">
                                    <router-link to="/detail-sumber-belajar"><img
                                            src="../assets/InstagramLogoHover.svg"></router-link>
                                </div>
                                <div class="img-share">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/InstagramLogo.svg">
                                    </router-link>
                                </div>
                            </div>
                            <div class="hover-effect">
                                <div class="img-share-hover">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/TwitterLogoHover.svg">
                                    </router-link>
                                </div>
                                <div class="img-share">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/TwitterLogo.svg">
                                    </router-link>
                                </div>
                            </div>
                            <div class="hover-effect">
                                <div class="img-share-hover">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/WhatsappLogoHover.svg">
                                    </router-link>
                                </div>
                                <div class="img-share">
                                    <router-link to="/detail-sumber-belajar"><img src="../assets/WhatsappLogo.svg">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-auto col-md-auto col-sm-12 align-items-center py-2">
                    <button class="btn btn-danger"
                        style="border: none; padding: 5px; background-image: linear-gradient(to right, #EE269D, #9743A6); background-clip: padding-box;"><i
                            class="bi bi-plus-circle me-2"></i>Berlangganan</button>
                </div>

            </div>

            <hr class="mb-4">

            <h4 style="font-weight: bold; color: #1D2939;">{{ contentTitle }}</h4>

            <p style="font-weight: bold; margin-bottom: 0; color: #344054;">Penjelasan</p>
            <div v-if="isCollapsed">
                <p class="collapsed-text">
                    {{ shortText }}
                    <button @click="isCollapsed = !isCollapsed"
                        style="border: none; background: none; color: #4A5365; padding: 0px;">...</button>
                </p>
            </div>
            <div v-else>
                <p class="expanded-text">
                    {{ longText }}
                    <button @click="isCollapsed = !isCollapsed"
                        style="border: none; background: none; color: gray; padding: 0px;">Show Less</button>
                </p>
            </div>

            <div>
                <hr class="hr-detail">
                <div class="d-flex flex-wrap">
                    <div class="col-lg-1 col-md-2 col-3" style="font-weight: bold; color: #344054;">Mapel</div>
                    <div class="col-lg-auto col-md-auto col-sm-auto" style="color: #475467;">: Bahasa Inggris</div>
                </div>
                <hr class="hr-detail">
                <div class="d-flex flex-wrap">
                    <div class="col-lg-1 col-md-2 col-3" style="font-weight: bold; color: #344054;">Kelas</div>
                    <div class="col-lg-auto col-md-auto col-sm-auto" style="color: #475467;">: 4 Minggu</div>
                </div>
                <hr class="hr-detail">
                <div class="d-flex flex-wrap">
                    <div class="col-lg-1 col-md-2 col-3" style="font-weight: bold; color: #344054">Tipe File</div>
                    <div class="col-lg-auto col-md-auto col-sm-auto" style="color: #475467;">: html | HTML5</div>
                </div>
            </div>

            <hr style="margin-top: 24px;">

            <div class="d-flex flex-row flex-wrap mt-3 mb-4 mx-auto">
                <!-- <i class="bi bi-download me-2"></i> -->
                <button type="button" class="btn1 btn py-2 me-3" style="font-weight: bold;"><img src="../assets/download-white.svg" class="me-2">Download
                    Materi</button>
                <button type="button" class="btn2 btn py-2 me-3" style="font-weight: bold;"><img src="../assets/paperclip-black.svg" class="me-2">Naskah</button>
                <button type="button" class="btn2 btn py-2" style="font-weight: bold;"><img src="../assets/lapor.svg" class="me-2">Lapor</button>
            </div>
            <div>
                <form class="d-flex flex-column" @submit.prevent="addComment">
                    <label for="comment" class="comment-label mb-2">Komentar</label>
                    <textarea v-model="newComment" @input="limitCharacters" @keydown.enter="addComment" class="comment" name="comment" id="" cols="30" rows="10"></textarea>
                    <p class="comment-hint">Maksimal 200 karakter</p>
                    <!-- temp -->
                    <!-- <button type="submit">Kirim (Sementara)</button> -->
                    <!-- temp -->
                </form>
            </div>
            <div class="scrollview">
                <!-- Komentar Dinamis -->
                <div v-for="comment in comments" :key="comment.id">
                    <div class="d-flex flex-row py-2">
                        <div class="col-auto me-3">
                            <img src="../assets/profile.svg" style="border-radius: 50%; width: 40px;">
                            <img src="../assets/online.svg" class="online-avatar">
                        </div>
                        <div class="col name mt-1">
                            <p class="commenter-name mb-2">{{ comment.name }}</p>
                            <p class="commenter-coment">{{ comment.content }}</p>
                            <button class="balas-btn shadow-sm" @click="replyToComment(comment.id)"><img src="../assets/arrow-down-right.svg" class="me-3" style="height: 16px;">Balas</button>

                            <!-- Menampilkan balasan komentar -->
                            <div v-for="reply in comment.replies" :key="reply.id">
                                <hr>
                                <div class="d-flex flex-row py-2">
                                    <div class="col-auto me-3">
                                        <img src="../assets/profile.svg" style="border-radius: 50%; width: 40px;">
                                        <img src="../assets/online.svg" class="online-avatar">
                                    </div>
                                    <div class="col name mt-1">
                                        <p class="commenter-name mb-2">{{ reply.name }}</p>
                                        <p class="commenter-coment">{{ reply.content }}</p>
                                        
                                        <button class="balas-btn shadow-sm"><img src="../assets/arrow-down-right.svg" class="me-3" style="height: 16px;">Balas</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Form untuk menambah balasan komentar -->
                            <form v-if="comment.replying" @submit.prevent="addReply(comment)" class="mt-2">
                                <hr>
                                <div class="d-flex flex-column">
                                    <label for="comment" class="comment-label mb-2">Komentar</label>
                                    <textarea v-model="comment.replyContent" @input="limitCharacters" class="comment" name="comment" id="" cols="30" rows="10"></textarea>
                                    <p class="comment-hint">Maksimal 200 karakter</p>
                                </div>

                                <button type="submit" class="align-items-center" style="background: #7F56D9; padding: 8px 14px; border: none; color: white; border-radius: 8px;">Kirim <img src="../assets/arrow-right-white.svg" class="ms-2"></button>
                            </form>
                        </div>
                    </div>
                    <hr>
                </div>

                <!-- Komentar statis -->
                <!-- <div class="d-flex flex-row py-2">
                    <div>
                        <img src="../assets/profile.svg" style="border-radius: 50%;">
                        <img src="../assets/online.svg" class="online-avatar">
                    </div>
                    <div class="name ms-3">
                        <p class="commenter-name mb-2">Olivia Rhye</p>
                        <p class="commenter-coment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
                            ipsa aut et earum repellendus nihil recusandae mollitia ea porro numquam suscipit dolor quam
                            aliquam ex voluptate tempora, in pariatur deleniti?</p>
                        <button class="balas-btn shadow-sm" @click="isCommentarOneShow = !isCommentarOneShow"><img src="../assets/arrow-down-right.svg" class="me-3" style="height: 16px;">Balas</button>
                        <div v-if="isCommentarOneShow">
                            <hr>
                            <form>
                                <div class="d-flex flex-column">
                                    <label for="comment" class="comment-label mb-2">Komentar</label>
                                    <textarea v-model="text" @input="limitCharacters" class="comment" name="comment" id="" cols="30" rows="10"></textarea>
                                    <p class="comment-hint">Maksimal 200 karakter</p>
                                </div>

                                <button class="align-items-center" style="background: #7F56D9; padding: 8px 14px; border: none; color: white; border-radius: 8px;">Kirim <img src="../assets/arrow-right-white.svg" class="ms-2"></button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr> -->
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
                                <span class="btn-detail-teks">Lihat {{ pageTitle }}</span>
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

        <!-- Button Carousel -->
        <button class="carousel-btn"><i class="bi bi-arrow-left-short fs-2"></i></button>
        <button class="carousel-btn"><i class="bi bi-arrow-right-short text-white fs-2"></i></button>
        <!-- CSS di bawah -->

    </div>
</template>

<script>
    export default {
        props: ['pageTitle', 'contentTitle'],
        data() {
            return {
                isCollapsed: true,
                shortText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta molestiae possimus incidunt! Omnis, a! Est eum, eaque, expedita, perferendis veritatis dolor maiores sunt perspiciatis ratione officia consectetur aut?",
                longText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta molestiae possimus incidunt! Omnis, a! Est eum, eaque, expedita, perferendis veritatis dolor maiores sunt perspiciatis ratione officia consectetur aut? Velit, nulla! Modi recusandae odit fugiat accusantium molestiae beatae non voluptate maxime adipisci iusto ad sapiente provident, asperiores rerum quidem obcaecati. Suscipit voluptatum possimus laboriosam, asperiores tenetur sit distinctio. Porro quasi autem temporibus aspernatur non ut excepturi officia, odit pariatur dolorem consequuntur, similique molestias necessitatibus voluptatibus id odio natus. Incidunt nesciunt repellat voluptates ipsum accusamus. Sint molestiae voluptate voluptatum dignissimos odit tempore officia ipsam? Sunt, est similique? Eius eveniet quo voluptatibus.",
                isCommentarOneShow: false,
                isCommentarTwoShow: false,
                text: '',
                maxLength: 200,

                newComment: '',
                comments: [
                    { id: 1, name: 'Olivia Rhyne', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa aut et earum repellendus nihil recusandae mollitia ea porro numquam suscipit dolor quam aliquam ex voluptate tempora, in pariatur deleniti?', replying: false, replyContent: '', replies: [] },
                    { id: 2, name: 'Badrun', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', replying: false, replyContent: '', replies: [] },
                ],
            };
        },
        methods: {
            limitCharacters() {
                if (this.newComment.length > this.maxLength) {
                    this.newComment = this.newComment.substring(0, this.maxLength);
                }
            },

            addComment() {
                if (this.newComment.trim() !== '') {
                    const newComment = {
                        id: Date.now(),
                        name: 'Mila Rich',
                        content: this.newComment,
                        replying: false,
                        replyContent: '',
                        replies: [],
                    };

                    this.comments.push(newComment);
                    this.newComment = '';
                }
            },
            replyToComment(commentId) {
                const comment = this.comments.find(c => c.id === commentId);
                if (comment) {
                    comment.replying = true;
                }
            },
            addReply(comment) {
                const newReply = {
                    id: Date.now(),
                    name: 'Aston Howard',
                    content: comment.replyContent
                };

                comment.replies.push(newReply);
                comment.replying = false;
                comment.replyContent = '';
            }
        }
    }
</script>

<style scoped>
    p {
        color: #475467;
    }

    .back-btn {
        background-image: linear-gradient(to right, #EE269D, #9743A6);
        background-clip: padding-box;
        width: 55px;
        height: 55px;
        font-size: 34px;
        border-radius: 50%;
        border: 2px solid;
        border-color: rgba(278, 38, 157, 0.3);
    }

    .bi-arrow-left-short {
        color: white;
    }

    .breadcrumb {
        background-color: white;
        padding: 8px 16px;
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
        background-image: linear-gradient(to right, #EE269D, #9743A6);
        background-clip: padding-box;
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
        background-image: linear-gradient(to right, #EE269D, #9743A6);
        background-clip: padding-box;
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
        filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2));
        position: absolute;
        z-index: -1;
    }

    .hover-effect:hover .img-share-hover {
        z-index: 2;
    }

    .img-share {
        padding: 5px;
        /* filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2)); */
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
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
        font-size: 16px;
        color: #333;
        width: 100%;
        height: 124px;
        overflow: auto;
        transition: border-color 0.3s ease;
        resize: none;
        padding: 12px;
        margin-bottom: 6px;
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
        width: 14px;
        position: absolute;
        z-index: 2;
        margin-left: -11px;
        margin-top: 28px;
        padding: 1px;
        background-color: white;
        border-radius: 50%;
    }

    .scrollview {
        width: 100%;
        height: 400px;
        overflow: auto;
        position: relative;
    }

    .hr-detail {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .carousel-btn {
        width: 50px;
        height: 50px;
        border-radius: 1000px;
        background: linear-gradient(0deg, rgba(49, 48, 54, 0.5) 0%, rgba(49, 48, 54, 0.5) 100%), linear-gradient(200deg, rgba(121, 117, 131, 0.5) 0%, rgba(54, 53, 103, 0.5) 100%);
        border: 2px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
    }

    .back-btn-new {
        width: 60px;
        height: 60px;
        border-radius: 1000px;
        background: linear-gradient(130deg, rgba(238, 54, 157, 1) 0%, rgba(151, 67, 166, 1) 75%), linear-gradient(135deg, rgba(253, 103, 188, 0.8) 0%, rgba(151, 67, 166, 0.8) 100%);
        border: 2px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
    }

    .balas-btn {
        background: white;
        border: 1.5px solid;
        border-color: #D0D5DD;
        border-radius: 8px;
        padding: 8px 20px;
        font-weight: bold;
        color: #344054;
    }
</style>