<template>
    <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
        <div class="container">
            <router-link to="/"><img :src="navbarLogo" alt="Logo" /></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto ml-auto mt-2 nav-item-list" id="nav">
                    <li class="nav-item" :class="$route.name == 'home'? 'active':''">
                        <router-link to="/" class="nav-link nav-teks px-4">Beranda</router-link>
                    </li>
                    <li class="nav-item" :class="$route.name == 'acara'? 'active':''">
                        <router-link to="/acara" class="nav-link nav-teks px-4">Acara</router-link>
                    </li>
                    <li class="nav-item" :class="$route.name == 'kontak'? 'active':''">
                        <router-link to="/kontak" class="nav-link nav-teks">Kontak</router-link>
                    </li>
                    <li class="nav-item sign-btn">
                        <a class="nav-link" id="navbarDropdown" role="button">
                            <span class="sign-btn-teks">Login <img :src="signInBtn" alt="Login Icon"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<script>
    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("navbar");

        if (window.pageYOffset > 0) {
            navbar.classList.add("navbar-top-scrolled");
        } else {
            navbar.classList.remove("navbar-top-scrolled");
        }
    });


    import navbarLogo from "./assets/NavbarLogo.svg"
    import signInBtn from "./assets/SignIn.svg"
    export default {
        data: function () {
            return {
                navbarLogo: navbarLogo,
                signInBtn: signInBtn
            }
        }
    }
</script>

<style>
    #app {
        background-image: url("assets/DetailBG.svg");
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Inter', sans-serif;
    }

    .nav-item-list {
        padding: 0px;
        gap: 80px;
    }

    .nav-teks {
        color: #FFFFFF !important;
        font-style: normal;
        font-size: 16px !important;
        border-radius: 1000px;
        background: linear-gradient(0deg, #EE269D 0%, #EE269D 100%), linear-gradient(200deg, rgba(238, 38, 157, 0.8) 0%, rgba(238, 38, 157, 1) 100%);
        border: 2px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
    }

    /* .nav-teks::before {
        border-radius: 1000px;
        content: '';
        background-image: linear-gradient(rgba(121, 117, 131, 1), rgba(54, 53, 103, 1));
        top: -10px;
        left: -10px;
        bottom: -10px;
        right: -10px;
        position: absolute;
        z-index: -1;
    } */

    .nav-link {
        padding: 16px 36px !important;
        text-align: center;
    }

    .navbar-nav .active a {
        border-radius: 1000px;
        background: #FFF;
        color: #EE269D !important;
    }

    .sign-btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: linear-gradient(0deg, #EE269D 0%, #EE269D 100%), linear-gradient(200deg, rgba(238, 38, 157, 0.8) 0%, rgba(238, 38, 157, 1) 100%);
        border: 2px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        border-radius: 1000px;
        font-weight: 700;
    }

    .sign-btn-teks {
        color: #FFFFFF;
    }

    .navbar-top-scrolled {
        background: linear-gradient(135deg, #400085 0%, #35006A 100%);

    }
</style>