<template>
    <div class="container">
        <div class="d-flex flex-row align-items-center mt-5">
            <div>
                <router-link to="/"><i class="bi bi-arrow-left-short shadow-sm"></i></router-link>
            </div>
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
.bi-arrow-left-short {
            color: white;
            background-color: #CB2333;
            padding: 8px 11px;
            font-size: 34px;
            border-radius: 50%;
        }

        .breadcrumb {
            background-color: white;
            padding: 5px 15px;
            margin: 0px !important;
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
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