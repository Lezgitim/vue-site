<template>
  <div>
    <div class="center bandsPosition">
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bands">
        <div>
          <Head></Head>
          <figure class="projectBack projectBack_style">
            <figcaption class="projectBack__text projectBack__text_style">
              <h1 class="projectBack__h2 projectBack__h2_style">Our Project</h1>
              <p class="projectBack__p projectBack__p_style">Home / Project</p>
            </figcaption>
          </figure>
          <main class="center main main_style">
            <div class="buttonDiv buttonDiv_style">
              <button
                class="buttonDiv__button buttonDiv__button_style"
                @click="komponentСhoice(component)"
                v-for="component in components"
                :key="component.id"
              >
                <span>{{ component }}</span>
              </button>
            </div>

            <section>
              <KomponentBlue v-if="flag === 'Bathroom'"></KomponentBlue>
              <KomponentPink v-if="flag === 'Kitchan'"></KomponentPink>
              <KomponentYellow v-if="flag === 'Living Area'"></KomponentYellow>
            </section>

            <section
              v-if="flag === 'Bed Room'"
              class="commonBlock commonBlock_style"
            >
              <div class="commonBlock__leftDiv commonBlock__leftDiv">
                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image commonBlock__image_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Minimal Bedroom
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image3 commonBlock__image3_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Classic Minimal Bedroom
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image5 commonBlock__image5_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Minimal Bedroom table
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image7 commonBlock__image7_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Modern Medroom
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="commonBlock__rightDiv commonBlock__rightDiv">
                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image2 commonBlock__image2_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Minimal Bedroom
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image4 commonBlock__image4_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Minimal Bedroom
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image6 commonBlock__image6_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        System Table
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="commonBlock__picture commonBlock__picture_style">
                  <div
                    class="commonBlock__image8 commonBlock__image8_style"
                  ></div>
                  <div
                    class="commonBlock__commonText commonBlock__commonText_style"
                  >
                    <div class="commonBlock__text commonBlock__text_style">
                      <h3 class="commonBlock__h3 commonBlock__h3_style">
                        Modern Bedroom
                      </h3>
                      <p class="commonBlock__p commonBlock__p_style">
                        Decor / Artchitecture
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            <div class="pagination pagination_style">
              <div class="around around_style"><span>01</span></div>
              <div class="pagination pagination_style">
                <div class="around around_style"><span>02</span></div>
              </div>

              <div class="pagination pagination_style">
                <div class="around around_style"><span>03</span></div>
              </div>

              <div class="pagination pagination_style">
                <div class="around around_style1"><span>></span></div>
              </div>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KomponentYellow from "../components/komponentYellow";
import KomponentPink from "../components/komponentPink";
import KomponentBlue from "../components/komponentBlue";
import Footer from "../components/footer";
import Head from "../components/head";
export default {
  components: {
    KomponentYellow,
    KomponentPink,
    KomponentBlue,
    Footer,
    Head,
  },
  name: "VueSiteProjectPage",

  data() {
    return {
      components: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
      flag: "Bed Room",
    };
  },

  mounted() {},

  methods: {
    komponentСhoice(nameComponent) {
      this.flag = nameComponent;
    },
  },
};
</script>

<style lang="scss" scoped>
.projectBack {
  display: flex;
  align-items: end;
  justify-content: center;
  &_style {
    background: url(../assets/projectBack.jpg), lightgray 50% / cover no-repeat;
    height: 350px;
  }
  &__text {
    display: flex;
    &_style {
      width: 504px;
      padding: 41px 125px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 37px 37px 0px 0px;
      background: #fff;
    }
  }
  &__h1 {
    &_style {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
    }
  }
  &__p {
    &_style {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }
}

.main {
  display: flex;
  margin-bottom: 200px;
  &_style {
    flex-direction: column;
    align-items: center;
    gap: 61px;
  }
  .buttonDiv {
    margin-top: 200px;
    display: flex;
    &_style {
      width: 100%;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
    &__button {
      display: flex;
      &_style {
        border-radius: 18px;
        padding: 26px 66px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: none;
      }
    }
    &__button:hover {
      background: #cda274;
      span {
        color: #fff;
      }
    }
  }
  .commonBlock {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    &__picture {
      display: flex;
      &_style {
      }
      flex-direction: column;
    }
    &__image {
      &_style {
        background: url(../assets/image1.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 850px;
        flex-shrink: 0;
      }
    }
    &__image2 {
      &_style {
        background: url(../assets/image2.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 450px;
        flex-shrink: 0;
      }
    }

    &__image3 {
      &_style {
        background: url(../assets/image3.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 450px;
        flex-shrink: 0;
      }
    }

    &__image4 {
      &_style {
        background: url(../assets/image4.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 850px;
        flex-shrink: 0;
      }
    }

    &__image5 {
      &_style {
        background: url(../assets/image5.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 850px;
        flex-shrink: 0;
      }
    }
    &__image6 {
      &_style {
        background: url(../assets/image6.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 450px;
        flex-shrink: 0;
      }
    }

    &__image7 {
      &_style {
        background: url(../assets/image7.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 450px;
        flex-shrink: 0;
      }
    }

    &__image8 {
      &_style {
        background: url(../assets/image8.png), lightgray 50% / cover no-repeat;
        width: 500px;
        height: 450px;
        flex-shrink: 0;
      }
    }

    &__commonText {
      display: flex;
      margin-top: 10px;
      margin-bottom: 10px;
      &_style {
        align-items: center;
        justify-content: space-between;
      }
    }
    &__text {
      display: flex;
      &_style {
        flex-direction: column;
        justify-content: center;
      }
    }
    &__h3 {
      &__style {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
      }
    }
    &__p {
      &_style {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
    }
  }
}

.pagination {
  display: flex;
  &_style {
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }
  .around {
    &_style {
      border: 1px solid #cda274;
      border-radius: 50%;
      padding: 17px;
      background-color: #fff;
    }
    &_style1 {
      border: 1px solid #cda274;
      border-radius: 50%;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-right: 17px;
      padding-left: 17px;
      background-color: #fff;
    }
  }
  .around:hover {
    border-color: #f4f0ec;
  }
}
.bandsPosition {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &__div {
    &_stil {
      min-height: 4500px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
    }
  }
}

.bands {
  position: absolute;
}
</style>
