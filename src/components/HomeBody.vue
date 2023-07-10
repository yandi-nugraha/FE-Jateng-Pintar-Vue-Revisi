<template>
  <div class="page-content page-home">
    <section class="text-section" style="padding-bottom: 400px">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>Halo sobat, selamat datang di Jateng Pintar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="carousel-article">
      <div class="container">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :fade="true"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div
              class="card swiper-slide"
              style="width: 30rem; border-radius: 24px"
            >
              <img
                class="card-img-top"
                src="../assets/office.png"
                alt="Card image cap"
                style="border-radius: 24px 24px 0px 0px"
              />
              <div class="card-body" style="border-radius: 0px 0px 24px 24px">
                <p class="card-text">Proses Komunikasi Data Dalam Jaringan</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="card swiper-slide"
              style="width: 30rem; border-radius: 24px"
            >
              <img
                class="card-img-top"
                src="../assets/store.png"
                alt="Card image cap"
                style="border-radius: 24px 24px 0px 0px"
              />
              <div class="card-body" style="border-radius: 0px 0px 24px 24px">
                <p class="card-text">Proses Komunikasi Data Dalam Jaringan</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="card swiper-slide"
              style="width: 30rem; border-radius: 24px"
            >
              <img
                class="card-img-top"
                src="../assets/office.png"
                alt="Card image cap"
                style="border-radius: 24px 24px 0px 0px"
              />
              <div class="card-body" style="border-radius: 0px 0px 24px 24px">
                <p class="card-text">Proses Komunikasi Data Dalam Jaringan</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="card swiper-slide"
              style="width: 30rem; border-radius: 24px"
            >
              <img
                class="card-img-top"
                src="../assets/store.png"
                alt="Card image cap"
                style="border-radius: 24px 24px 0px 0px"
              />
              <div class="card-body" style="border-radius: 0px 0px 24px 24px">
                <p class="card-text">Proses Komunikasi Data Dalam Jaringan</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="all-menu">
      <div class="container">
        <div class="card-menu">
          <div class="disable-card justify-content-center align-items-center">
            <h2 class="menu-title">Jelajahi Jateng Pintar</h2>
            <p class="menu-desc">
              Temukan beragam sumber belajar yang bermanfaat untuk meningkatkan
              pemahaman siswa di website kami.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="vertical-line me-2" style="height: 300px"></div>
              <div class="d-flex flex-column">
                <img src="../assets/Sumber-Belajar_Normal.svg" alt="..." />
                <div class="row align-items-center">
                  <div class="col-2">
                    <img src="../assets/Books.svg" alt="..." />
                  </div>
                  <div class="col-10">
                    <h5 class="menu-label my-0 ps-2">Sumber Belajar</h5>
                  </div>
                </div>
                <router-link
                  to="/sumber-belajar"
                  class="btn btn-primary rounded-pill mt-2"
                >
                  Lihat Selengkapnya<i class="bi bi-chevron-right"></i>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="vertical-line me-2" style="height: 300px"></div>
              <div class="d-flex flex-column">
                <img src="../assets/Karya_Siswa_Normal.svg" alt="..." />
                <div class="d-flex align-items-center">
                  <img src="../assets/Books.svg" alt="..." />
                  <h5 class="menu-label my-0 ps-2">Karya Siswa</h5>
                </div>
                <router-link
                  to="/sumber-belajar"
                  class="btn btn-primary rounded-pill mt-2"
                >
                  Lihat Selengkapnya<i class="bi bi-chevron-right"></i>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="vertical-line me-2" style="height: 300px"></div>
              <div class="d-flex flex-column">
                <img src="../assets/Siswa_jateng_Pintar_Normal.svg" alt="..." />
                <div class="d-flex align-items-center">
                  <img src="../assets/Books.svg" alt="..." />
                  <h5 class="menu-label my-0 ps-2">Siswa Jateng Pintar</h5>
                </div>
                <router-link
                  to="/sumber-belajar"
                  class="btn btn-primary rounded-pill mt-2"
                >
                  Lihat Selengkapnya<i class="bi bi-chevron-right"></i>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="vertical-line me-2" style="height: 300px"></div>
              <div class="d-flex flex-column">
                <img src="../assets/Kontributor_Normal.svg" alt="..." />
                <div class="d-flex align-items-center">
                  <img src="../assets/Books.svg" alt="..." />
                  <h5 class="menu-label my-0 ps-2">Kontributor</h5>
                </div>
                <router-link
                  to="/sumber-belajar"
                  class="btn btn-primary rounded-pill mt-2"
                >
                  Lihat Selengkapnya<i class="bi bi-chevron-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Card lama -->

    <section class="button-group">
      <div class="container">
        <div class="headline rounded-pill">
          <p>Jelajahi Website Lainnya</p>
        </div>
        <div class="row">
          <div class="d-flex flex-row flex-wrap justify-content-center mb-4">
            <a
              target="_blank"
              href="#"
              class="btn btn-primary rounded-pill d-flex flex-row justify-content-between align-items-center"
            >
              <img class="img-logo-left" src="../assets/logo-jateng.svg" />
              Website BPTIK
              <img
                class="img-icon-right"
                src="../assets/trailing-icon-white.svg"
              />
            </a>
            <a
              target="_blank"
              href="https://kelas.jatengprov.go.id/login"
              class="btn btn-primary rounded-pill d-flex flex-row justify-content-between align-items-center"
            >
              <img class="img-logo-left" src="../assets/logo-jateng.svg" />
              Kelas Jateng
              <img
                class="img-icon-right"
                src="../assets/trailing-icon-white.svg"
              />
            </a>
            <a
              target="_blank"
              href="https://radio.jateng-pintar.teknoreka.com/"
              class="btn btn-primary rounded-pill d-flex flex-row justify-content-between align-items-center"
            >
              <img
                class="img-logo-left"
                src="../assets/logo-radio-audisi.svg"
              />
              Radio Audisi
              <img
                class="img-icon-right"
                src="../assets/trailing-icon-white.svg"
              />
            </a>
            <a
              target="_blank"
              href="https://simpel.pdkjateng.go.id/"
              class="btn btn-primary rounded-pill d-flex flex-row justify-content-between align-items-center"
            >
              <img class="img-logo-left" src="../assets/logo-jateng.svg" />
              Simpel
              <img
                class="img-icon-right"
                src="../assets/trailing-icon-white.svg"
              />
            </a>
            <a
              target="_blank"
              href="https://wahana.jateng-pintar.teknoreka.com/"
              class="btn btn-primary rounded-pill d-flex flex-row justify-content-between align-items-center"
            >
              <img class="img-logo-left" src="../assets/logo-jateng.svg" />
              Wahana Edukasi
              <img
                class="img-icon-right"
                src="../assets/trailing-icon-white.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.swiper-slide p {
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.carousel-article .card-body {
  background: radial-gradient(#e862b6, #784e96);
}

.text-section {
  color: white;
  margin-top: 102px;
}

.text-section h1 {
  font-size: 40px;
  font-weight: 700;
}

  .text-section p {
    font-size: 16px;
    line-height: 26px;
    margin-top: 24px;
    font-weight: 500;
  }

.all-menu {
  margin-top: 57px;
}

.all-menu h5 {
  font-size: 24px;
  color: #1d2939;
  margin-top: 16px;
  font-weight: 700;
}

.all-menu p {
  font-size: 16px;
  color: #1d2939;
  margin-top: 16px;
  font-weight: 400;
}

.card .btn-primary {
  color: white;
  background-color: #667085 !important;
  border-color: #667085 !important;
}

.card .btn-primary:hover {
  color: white;
  background-color: #a0a5af !important;
  border-color: #a0a5af !important;
}

.all-menu a {
  font-size: 16px;
  font-weight: 500;
}

.card-hover:hover {
  background: linear-gradient(to bottom right, #bb020f, #fd2635);
}

.card .img-white {
  opacity: 0;
  position: absolute;
  z-index: -1;
  top: 24px;
  left: 24px;
}

.card-hover:hover .img-white {
  opacity: 1;
  z-index: 0;
}

.all-menu .card-body {
  padding: 24px;
}

.card-hover:hover h5 {
  color: white;
}

.card-hover:hover p {
  color: white;
}

.card-hover:hover .btn-primary {
  color: #ed1c24;
  background-color: white !important;
  border-color: white !important;
}

.card-hover:hover .btn-primary:hover {
  color: white;
  background-color: #a0a5af !important;
  border-color: #a0a5af !important;
}

.button-group .btn-primary {
  width: 240px;
  margin-top: 48px;
  margin-left: 3.5px;
  margin-right: 3.5px;
  border-radius: 1000px;
  background: linear-gradient(
      0deg,
      rgba(49, 48, 54, 0.5) 0%,
      rgba(49, 48, 54, 0.5) 100%
    ),
    linear-gradient(
      200deg,
      rgba(121, 117, 131, 0.5) 0%,
      rgba(54, 53, 103, 0.5) 100%
    );
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.button-group .btn-primary:visited {
  border-radius: 1000px;
  background: linear-gradient(
      0deg,
      rgba(49, 48, 54, 0.5) 0%,
      rgba(49, 48, 54, 0.5) 100%
    ),
    linear-gradient(
      200deg,
      rgba(121, 117, 131, 0.5) 0%,
      rgba(54, 53, 103, 0.5) 100%
    );
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  width: 240px;
  margin-top: 48px;
  margin-left: 3.5px;
  margin-right: 3.5px;
}

.button-group .btn-primary:hover {
  background-image: linear-gradient(to bottom right, #ee269d, #9743a6);
  border: none !important;
  width: 240px;
  margin-top: 48px;
  margin-left: 3.5px;
  margin-right: 3.5px;
}

.button-group {
  padding-bottom: 142px;
}

.button-group .row {
  margin-top: 70px;
  margin-left: 0px;
  margin-right: 0px;
  border-style: solid;
  border-image: linear-gradient(to bottom right, #ee269d, #9743a6) 1;
  border-radius: 16px;
}

.headline {
  background: linear-gradient(to bottom right, #ee269d, #9743a6);
  color: white;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  z-index: 1;
  width: 209px;
  text-align: center;
  margin-top: -24px;
  margin-left: 24px;
}

.headline p {
  margin: 0px !important;
  padding: 8px;
}

.button-group a {
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
}

.button-group .img-logo-left {
  float: left;
  padding-left: 8px;
}

.button-group .img-icon-right {
  float: right;
}

.card-image {
  position: relative;
  height: 150px;
  width: 150px;
}

.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card-menu {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 24px;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: #fff;
}

  .menu-title {
    color: #A240A5;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .menu-desc {
    color: #2F2E41;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

.menu-label {
  color: #2f2e41 !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 700 !important;
}

  div.vertical-line {
    width: 1.5px;
    background: linear-gradient(136deg, #EE269D 0%, #9743A6 100%);
    height: 100%;
    float: left;
  }

.btn-next {
  color: #2f2e41;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.disable-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  flex: 1 0 0;
}

.enable-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
}

@media (max-width: 992px) {
  .vertical-line {
    display: none;
  }
}
</style>
