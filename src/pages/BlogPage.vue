<template>
  <div>
    <div class="center bandsPosition">
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bands">
        <div>
          <header>
            <Head></Head>
          </header>
          <figure class="pictureWidthOn pictureWidthOn_style">
            <figcaption class="pictureWidthOn__figcaption">
              <h1 class="pictureWidthOn__h1 pictureWidthOn__h1_style">
                Articles & News
              </h1>
              <p class="pictureWidthOn__p pictureWidthOn__p_style">
                Home / Blog
              </p>
            </figcaption>
          </figure>
          <section class="center blockAfterNews">
            <h1 class="blockAfterNews__h1 blockAfterNews__h1_style">
              Latest Post
            </h1>
            <div
              class="blockAfterNews__blockForImageAndText blockAfterNews__blockForImageAndText_style"
            >
              <div
                class="blockAfterNews__blockForImage blockAfterNews__blockForImage_style"
              ></div>
              <div class="blockAfterNews__blockFortext">
                <h3
                  class="blockAfterNews__FortextH3 blockAfterNews__FortextH3_style"
                >
                  Low Cost Latest Invented Interior Designing Ideas
                </h3>
                <p
                  class="blockAfterNews__FortextP blockAfterNews__FortextP_style"
                >
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpis dignissim maximus.posuere in.Contrary to popular
                  belief.
                  <br /><br />
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classica.
                </p>
                <div class="blockAfterNews__ForDate">
                  <p class="blockAfterNews__date">26 December,2022</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="53"
                    viewBox="0 0 52 53"
                    fill="none"
                  >
                    <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                    <path
                      d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
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
          <section class="center blocksPictures">
            <h1 class="blocksPictures__h1 blocksPictures__h1_style">
              Articles & News
            </h1>
            <div class="blocksPictures__thisBlocksPictures">
              <div
                v-for="(blok, index) in bloks"
                :key="index"
                class="blocksPictures__roundedBlock blocksPictures__roundedBlock_style blocksPictures__hov"
              >
                <figure
                  class="blocksPictures__pictureOne"
                  :class="{
                    blocksPictures__pictureOne_style: bloks[index].bl1,
                    blocksPictures__pictureTwo_style: bloks[index].bl2,
                    blocksPictures__pictureThree_style: bloks[index].bl3,
                    blocksPictures__pictureFour_style: bloks[index].bl4,
                    blocksPictures__pictureFive_style: bloks[index].bl5,
                    blocksPictures__pictureSix_style: bloks[index].bl6,
                  }"
                >
                  <figcaption
                    class="blocksPictures__pictureOneFigcap blocksPictures__pictureOneFigcap_style"
                  >
                    {{ bloks[index].figcap }}
                  </figcaption>
                </figure>
                <div class="blocksPictures__words blocksPictures__words_style">
                  <h2 class="blocksPictures__h2 blocksPictures__h2_style">
                    {{ bloks[index].text }}
                  </h2>
                </div>

                <div class="blocksPictures__date blocksPictures__date_style">
                  <p class="blocksPictures__p blocksPictures__p_style">
                    {{ bloks[index].date }}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                  >
                    <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC" />
                    <path
                      d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811"
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
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/footer";
import Head from "../components/head";
export default {
  components: {
    Footer,
    Head,
  },
  name: "VueSiteBlogPage",

  data() {
    return {
      bloks: [
        {
          text: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          figcap: "Kitchan Design",
          bl1: true,
        },
        {
          text: "Low Cost Latest Invented Interior Designing Ideas",
          date: "22 December,2022",
          figcap: "Living Design",
          bl2: true,
        },
        {
          text: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          figcap: "Interior Design",
          bl3: true,
        },
        {
          text: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          figcap: "Kitchan Design",
          bl4: true,
        },
        {
          text: "Low Cost Latest Invented Interior Designing Ideas",
          date: "22 December,2022",
          figcap: "Living Design",
          bl5: true,
        },
        {
          text: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          figcap: "Interior Design",
          bl6: true,
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.pictureWidthOn {
  &_style {
    width: 100%;
    height: 350px;
    background: url(../assets/PhotoBlog.jpg), lightgray 50% / cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  &__figcaption {
    display: flex;
    width: 503px;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
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

.blockAfterNews {
  .blockAfterNews__h1 {
    margin-top: 100px;
    &_style {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
  }
  &__blockForImageAndText {
    display: grid;
    gap: 65px;
    &_style {
      grid-template-columns: 1fr 1fr;
      border-radius: 62px;
      border: 1px solid #e7e7e7;
      box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
      padding: 22px;
      height: 500px;
    }
  }

  &__blockForImage {
    &_style {
      height: 450px;
      background: url(../assets/blockAfterNewsblockForImage.png),
        lightgray 50% / cover no-repeat;
      border-radius: 62px;
    }
  }
  &__blockFortext {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    justify-content: center;
  }
  &__FortextH3 {
    &_style {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
    }
  }

  &__FortextP {
    margin-top: 22px;
    margin-bottom: 41px;
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
  &__ForDate {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
}

.blocksPictures {
  &__h1 {
    margin-top: 150px;
    margin-bottom: 30px;
    &_style {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
  }
  &__thisBlocksPictures {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    // grid-template-rows: repeat(2, 1fr);
  }
  &__roundedBlock {
    display: flex;
    flex-direction: column;
    padding: 21px;
    justify-content: center;
    align-items: flex-start;
    &_style {
      border-radius: 62px;
      border: 1px solid #e7e7e7;
      box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
      height: 480px;
    }
  }

  &__pictureOne {
    &_style {
      width: 310px;
      height: 290px;
      background: url(../assets/PhotoBloks1.png),
        lightgray 50% / cover no-repeat;

      border-top-left-radius: 62px;
      border-top-right-radius: 62px;
    }
  }
  &__pictureOneFigcap {
    display: inline-flex;
    margin-top: 230px;
    margin-left: 20px;

    &_style {
      border-radius: 8px 8px 8px 0px;
      background: #fff;
      padding: 8px 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  &__words {
    padding-top: 10px;
    padding-bottom: 10px;
    &_style {
      height: 94px;
    }
  }

  &__h2 {
    margin-right: 50px;
    &_style {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
    }
  }
  &__date {
    display: flex;
    &_style {
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
  &__p {
    &_style {
      color: #4d5053;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
  &__pictureTwo {
    &_style {
      width: 310px;
      height: 290px;
      background: url(../assets/Photo\(6\).png), lightgray 50% / cover no-repeat;
      border-top-left-radius: 62px;
      border-top-right-radius: 62px;
    }
  }
  &__pictureThree_style {
    width: 310px;
    height: 290px;
    background: url(../assets/Photo\(7\).png), lightgray 50% / cover no-repeat;
    border-top-left-radius: 62px;
    border-top-right-radius: 62px;
  }
  &__pictureFour_style {
    width: 310px;
    height: 290px;
    background: url(../assets/Blok4.png), lightgray 50% / cover no-repeat;
    border-top-left-radius: 62px;
    border-top-right-radius: 62px;
  }
  &__pictureFive_style {
    width: 310px;
    height: 290px;
    background: url(../assets/blok5.png), lightgray 50% / cover no-repeat;
    border-top-left-radius: 62px;
    border-top-right-radius: 62px;
  }
  &__pictureSix_style {
    width: 310px;
    height: 290px;
    background: url(../assets/blok6.png), lightgray 50% / cover no-repeat;
    border-top-left-radius: 62px;
    border-top-right-radius: 62px;
  }

  &__hov:hover{
    background-color: antiquewhite;
  }
}

.bandsPosition {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &__div {
    &_stil {
      min-height: 2800px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
    }
  }
}

.bands {
  position: absolute;
}
</style>
