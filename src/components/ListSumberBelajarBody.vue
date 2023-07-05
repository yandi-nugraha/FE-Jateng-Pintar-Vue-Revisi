<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg filter mt-5 mb-5">
            <div class="container-fluid mx-2">
                <span class="navbar-brand">Filter</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Terpopuler <img src="../assets/chevron-down.svg" alt="">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Jenis Media <img src="../assets/chevron-down.svg" alt="">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Game Edukasi</a></li>
                                <li><a class="dropdown-item" href="#">Video Pembelajaran</a></li>
                                <li><a class="dropdown-item" href="#">Praktik Baik</a></li>
                                <li><a class="dropdown-item" href="#">Praktik Pembelajaran</a></li>
                                <li><a class="dropdown-item" href="#">Best Practice</a></li>
                                <li><a class="dropdown-item" href="#">Profile Sekolah</a></li>
                                <li><a class="dropdown-item" href="#">P5</a></li>
                                <li><a class="dropdown-item" href="#">Lainnya</a></li>
                                
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mapel <img src="../assets/chevron-down.svg" alt="">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pindah Jenjang <img src="../assets/chevron-down.svg" alt="">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">PAUD</a></li>
                                <li><a class="dropdown-item" href="#">SD/MI/SDLB</a></li>
                                <li><a class="dropdown-item" href="#">SMP/MTs/SMPLB</a></li>
                                <li><a class="dropdown-item" href="#">SMA/MA/SMALB</a></li>
                                <li><a class="dropdown-item" href="#">SMK/MAK</a></li>
                                <li><a class="dropdown-item" href="#">SUMUM</a></li>
                                <li><a class="dropdown-item" href="#">BUDAYA</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Kategori <img src="../assets/chevron-down.svg" alt="">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Dokumen</a></li>
                                <li><a class="dropdown-item" href="#">Video</a></li>
                                <li><a class="dropdown-item" href="#">Multimedia</a></li>
                                <li><a class="dropdown-item" href="#">HTML5</a></li>
                                <li><a class="dropdown-item" href="#">AR/VR</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Kelas <img src="../assets/chevron-down.svg" alt="">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">I Satu</a></li>
                                <li><a class="dropdown-item" href="#">II Dua</a></li>
                                <li><a class="dropdown-item" href="#">III Tiga</a></li>
                                <li><a class="dropdown-item" href="#">IV Empat</a></li>
                                <li><a class="dropdown-item" href="#">V Lima</a></li>
                                <li><a class="dropdown-item" href="#">VI Enam</a></li>
                                <li><a class="dropdown-item" href="#">Semua Kelas</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex align-items-center" role="search">
                        <div class="input-group input-group-lg">
                            <input class="form-control me-2" type="search" placeholder="&#xF002; Pencarian" aria-label="Search" style="font-family:Arial, FontAwesome">
                        </div>
                    </form>
                </div>
            </div>
        </nav>
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
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
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
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
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
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
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
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
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
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
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
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
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
        <nav aria-label="Page navigation" class="mb-5">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1"><img src="../assets/arrow-left.svg" alt=""><span>Sebelumnya</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">8</a></li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
                <li class="page-item">
                    <a class="page-link" href="#"><span>Selanjutnya</span><img src="../assets/arrow-right.svg" alt=""></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
.filter {
    background-color: #FFFFFF;
    border-radius: 16px;
    min-height: 80px;
}

.filter-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 80px;
}

.filter-title {
    font-weight: 600 !important;
    font-size: 24px !important;
    color: #1D2939;
}

.search-form {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dropdown-toggle {
    background: #FFFFFF !important;
    border: 1px solid #D0D5DD !important;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05) !important;
    border-radius: 8px !important;
    align-items: center !important;
    color: #1D2939 !important;
    padding: 6px 15px !important;
    font-weight: 600 !important;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: -webkit-baseline-middle !important;
    content: none !important;
    border-right: 0 !important;
    border-bottom: 0;
    border-left: 0 !important;
    border-top: 0 !important;
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
</style>