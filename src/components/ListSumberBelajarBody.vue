<template>
    <div class="background-list-sumber-belajar">
    <div class="container">
        <nav class="navbar navbar-expand-lg filter mt-5 mb-5">
            <div class="container-fluid mx-2">
                <span class="navbar-brand">Filter</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown me-3 py-2">
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
                        <li class="nav-item dropdown me-3 py-2">
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
                        <li class="nav-item dropdown me-3 py-2">
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
                        <li class="nav-item dropdown me-3 py-2">
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
                        <li class="nav-item dropdown me-3 py-2">
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
                        <li class="nav-item dropdown me-3 py-2">
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
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <!-- Card-->
                <router-link to="/detail-sumber-belajar" class="card-link">
                    <div class="card rounded-card shadow border-0">
                        <img src="../assets/Image.svg" class="img-fluid d-block mb-3 img-top-radius" alt="...">
                        <div class="card-body">
                            <p class="card-label">Bahasa Inggris</p>
                            <p class="card-desc">Kelas XII MIPA • File: Video (mp4)</p>
                            <h5 class="card-title">Mari Belajar Membaca</h5>
                            <div class="d-flex align-items-center">
                                <p class="card-rating me-1 px-2" style="margin-bottom: 0px !important;">Membaca</p>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #fdb022;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                                <li class="list-inline-item m-0"><i class="fa-solid fa-star" style="color: #eaecf0;"></i></li>
                            </div>
                            <hr class="inner-card-line">
                            <div class="d-flex flex-row align-items-center py-2">
                                <div>
                                    <img src="../assets/profile.svg"
                                        style="box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); border-radius: 50%; max-width: 50px; max-height: 50px;">
                                </div>
                                <div class="name ms-3">
                                    <h3 style="margin-bottom: 0px !important; font-size: 14px; font-weight: 600;">Wisma Nantha</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </router-link>
            </div>
        </div>
        <!-- <nav aria-label="Page navigation" class="pb-5 pt-5">
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
        </nav> -->
    </div>
</div>
</template>

<style scoped>
.filter {
    border-radius: 16px;
    background: linear-gradient(136deg, #EE269D 0%, #9743A6 100%), #FFF;
    box-shadow: 16px 16px 40px 0px rgba(0, 0, 0, 0.16);
    min-height: 80px;
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

.card-label {
    color: var(--primary-700, #6941C6);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
}

.card-desc {
    color: var(--gray-700, #344054);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
}

.card-title {
    color: var(--gray-900, #101828) !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 600 !important;
}

.card-rating {
    border-radius: 16px;
    background: var(--primary-50, #F9F5FF);
    color: var(--primary-700, #6941C6);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
}

.card-link {
    text-decoration: none;
}

.inner-card-line {
    background: var(--gray-200, #EAECF0);
}

.pagination span {
    border-color: #D0D5DD !important;
    color: #1D2939 !important;
    border-radius: 5px !important;
    margin: 0 !important;
    padding: 6px 12px !important;
    transition: background-color .3s !important;
}

.pagination a {
    border-color: #D0D5DD !important;
    color: #1D2939 !important;
    margin: 0 0 !important;
    padding: 6px 12px !important;
    transition: background-color .3s !important;
}
</style>