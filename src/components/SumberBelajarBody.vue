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
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/PAUD_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/PAUD_Normal.svg"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SD_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SD_Normal.svg"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SMP_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SMP_Normal.svg"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SMA_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SMA_Normal.svg"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/SMK_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/SMK_Normal.svg"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/Umum_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/Umum_Normal.svg"></router-link></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="hover-effect">
                    <div class="img-dark"><router-link to="/list-sumber-belajar"><img src="../assets/Budaya_Dark.svg"></router-link></div>
                    <div class="img"><router-link to="/list-sumber-belajar"><img src="../assets/Budaya_Normal.svg"></router-link></div>
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

        .hover-effect:hover .img-dark {
            z-index: 2;
        }

        .img {
            padding: 20px;
            filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
        }

        .container .d-flex .hover-img {
            position: absolute;
            top: 50px;
            left: 50px;
            z-index: -1;
            opacity: 0;
        }

        .container .d-flex .hover-img:hover {
            opacity: 1;
            z-index: 0;
        }
</style>