<template>
    <div class="container">
        <div class="d-flex flex-row align-items-center mt-5">
            <router-link to="/list-sumber-belajar">
                <button class="back-btn"><i class="bi bi-arrow-left-short text-white" style="font-size: 35px;"></i></button>
            </router-link>
            <div class="ms-3">
                <ol class="breadcrumb rounded-pill">
                    <li class="breadcrumb-item"><router-link to="/" style="text-decoration: none; color: inherit;">Beranda</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page" style="color: #CD2534; font-weight: bold;">Sumber Belajar</li>
                </ol>
            </div>
        </div>
        <div class="row align-items-center justify-content-center mt-4">
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/PAUD_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/PAUD_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SD_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SD_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SMP_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SMP_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SMA_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SMA_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SMK_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SMK_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/Umum_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/Umum_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/Budaya_Space_Hover.png" class="img-fluid"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/Budaya_Space_Normal.png" class="img-fluid"></router-link></div>
                </div>
            </div>
        </div>
    </div>  
</template>

<style>
    .back-btn {
        width: 60px;
        height: 60px;
        border-radius: 1000px;
        background: linear-gradient(130deg, rgba(238, 54, 157, 1) 0%, rgba(151, 67, 166, 1) 75%), linear-gradient(135deg, rgba(253, 103, 188, 0.8) 0%, rgba(151, 67, 166, 0.8) 100%);
        border: 2px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
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

    .img-dark {
        padding: 20px;
        filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
        position: absolute;
        z-index: -1;
    }

    .img-content {
        max-width: 380px !important;
        max-height: 238px !important;
    }

    .hover-effect {
        position: relative;
    }

    .hover-effect:hover .img-dark {
        z-index: 2;
    }

    .img {
        padding: 20px;
        filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
    }
</style>