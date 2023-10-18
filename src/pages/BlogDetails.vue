<template>
  <div>
    <Head></Head>
    <div class="background background_style"></div>
    <main class="center blogDetailsMain blogDetailsMain_style">
      <section
        class="blogDetailsMain__mainSection blogDetailsMain__mainSection_style"
      >
        <h1 class="blogDetailsMain__h1 blogDetailsMain__h1_style">
          Let’s Get Solution for Building Construction Work
        </h1>
        <figure
          class="blogDetailsMain__figureFirst blogDetailsMain__figureFirst_style"
        >
          <figcaption
            class="figcapFirst figcapFirst_style blogDetailsMain__figcapFirst blogDetailsMain__figcapFirst_style"
          >
            <p class="figcapFirst__p figcapFirst__p_style">26 December,2022</p>
            <div class="figcapFirst__divP figcapFirst__divP_style">
              <p class="figcapFirst__p figcapFirst__p_style">
                Interior / Home / Decore
              </p>
            </div>
          </figcaption>
        </figure>
        <div class="figcapFirst__divP2 figcapFirst__divP2_style">
          <p class="figcapFirst__p2 figcapFirst__p2_style">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injecthumour, or
            randomised words which don't look even slightly believable.
            <br />
            <br />
            Embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary.
          </p>
        </div>
        <div
          class="blogDetailsMain__quotation blogDetailsMain__quotation_style"
        >
          <div
            class="Quotations Quotations_style blogDetailsMain__thisQuotation blogDetailsMain__thisQuotation_style"
          >
            <div class="div">
              <p class="Quotations__pQuotation Quotations__pQuotation_style">
                “
              </p>
              <div class="Quotations__divText Quotations__divText_style">
                <p class="Quotations__p Quotations__p_style">
                  The details are not the details. They make the design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <KitchenArticle v-if="see==='Kitchen'"></KitchenArticle>
        <div v-if="see==='Bedroom'"
          class="blogDetailsMain__textBlock blogDetailsMain__textBlock_style"
        >
          <h1
            class="blogDetailsMain__textBlockH1 blogDetailsMain__textBlockH1_style"
          >
            Design sprints are great
          </h1>
          <p
            class="blogDetailsMain__textBlockText blogDetailsMain__textBlockText_style"
          >
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
          <div
            class="blogDetailsMain__textBlockTextNum blogDetailsMain__textBlockTextNum_style"
          >
            <sup
              class="blogDetailsMain__textBlockTextNumNum blogDetailsMain__textBlockTextNumNum_style"
              >1</sup
            >
            <p
              class="blogDetailsMain__textBlockText blogDetailsMain__textBlockText_style"
            >
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </div>
          <div
            class="blogDetailsMain__textBlockTextNum blogDetailsMain__textBlockTextNum_style"
          >
            <sup
              class="blogDetailsMain__textBlockTextNumNum blogDetailsMain__textBlockTextNumNum_style"
              >2</sup
            >
            <p
              class="blogDetailsMain__textBlockText blogDetailsMain__textBlockText_style"
            >
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </div>
          <div
            class="blogDetailsMain__textBlockTextNum blogDetailsMain__textBlockTextNum_style"
          >
            <sup
              class="blogDetailsMain__textBlockTextNumNum blogDetailsMain__textBlockTextNumNum_style"
              >3</sup
            >
            <p
              class="blogDetailsMain__textBlockText blogDetailsMain__textBlockText_style"
            >
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </div>
        </div>
        <div
          class="blogDetailsMain__afterSup blogDetailsMain__afterSup_style"
        ></div>
        <p
          class="blogDetailsMain__AfterAfterSup blogDetailsMain__AfterAfterSup_style"
        >
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
      </section>
      <section class="tags tags_style">
        <h1 class="tags__nameTag1 tags__nameTag1_style">Tags</h1>
        <div class="tags__allButton tags__allButton_style">
          <button @click="change(buttons[index].nameButton)"
            class="tags__buttons tags__buttons_style"
            v-for="(button, index) in buttons"
            :key="index.id"
          >
            <span>{{ buttons[index].nameButton }}</span>
          </button>
        </div>
      </section>
    </main>
    <Footer></Footer>

    
  </div>
</template>

<script>
import KitchenArticle from "../components/kitchenArticle";
import Footer from "../components/footer";
import Head from "../components/head";
export default {
  components: {
    KitchenArticle,

    Footer,
    Head,
  },
  name: "VueSiteBlogDetails",

  data() {
    return {
      buttons: [
        {
          nameButton: "Kitchen",
        },
        {
          nameButton: "Bedroom",
        },
        {
          nameButton: "Building",
        },
        {
          nameButton: "Architecture",
        },
        {
          nameButton: "Kitchen Planning",
        },
        {
          nameButton: "Bedroom",
        },
      ],
      see: 'Bedroom',
    };
  },

  mounted() {},

  methods: {
    change(nameButton){
        this.see = nameButton
    }
  },
};
</script>

<style lang="scss" scoped>
.background {
  &_style {
    width: 100%;
    height: 350px;
    background: url(../assets/blogDetailsBackg.jpg);
  }
}

.blogDetailsMain {
  display: flex;
  margin-top: 70px;
  &_style {
    align-items: flex-start;
    gap: 52px;
  }
  &__mainSection {
    display: flex;

    &_style {
      flex-direction: column;
      width: 70%;
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
      letter-spacing: 1px;
    }
  }

  &__figureFirst {
    &_style {
      width: 100%;
      height: 400px;
      background: url(../assets/firstFigur.png), lightgray 50% / cover no-repeat;
      border-radius: 50px;
    }
  }
  .figcapFirst {
    display: flex;
    margin-top: 410px;
    &_style {
      justify-content: space-between;
    }

    &__divP {
      display: flex;
      &_style {
        width: 250px;
        justify-content: start;
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
    &__divP2 {
      display: flex;
      margin-top: 70px;
      margin-bottom: 50px;
      &_style {
        width: 100%;
        justify-content: start;
      }
    }

    &__p2 {
      &_style {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        text-align: justify;
      }
    }
  }
  &__quotation {
    display: flex;
    align-items: center;
    justify-content: center;
    &_style {
      width: 100%;
      height: 300px;
      border-radius: 50px;
      background: #f4f0ec;
    }
  }
  .Quotations {
    display: flex;

    &_style {
      flex-direction: column;
      align-items: center;
    }
    .div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__pQuotation {
      position: absolute;
      &_style {
        color: #cda274;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 200px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%; /* 250px */
        letter-spacing: 4px;
      }
    }
    &__p {
      margin-top: 60px;

      &_style {
        color: #cda274;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
        width: 400px;
      }
    }
  }

  &__textBlock {
    display: flex;
    margin-top: 20px;
    &_style {
      flex-direction: column;
      gap: 24px;
    }
  }
  &__textBlockH1 {
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
  &__textBlockText {
    &_style {
      text-align: justify;
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }
  &__textBlockTextNum {
    display: flex;
    &_style {
      width: 90%;
      gap: 10px;
    }
  }
  &__textBlockTextNumNum {
    &_style {
      color: #cda274;
      font-family: DM Serif Display;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 25px */
      letter-spacing: 0.4px;
    }
  }
  &__afterSup {
    margin-top: 20px;
    margin-bottom: 20px;
    &_style {
      background: url(../assets/afterSup.png), lightgray 50% / cover no-repeat;
      height: 350px;
      width: 100%;
      border-radius: 50px;
    }
  }
  &__AfterAfterSup {
    &_style {
      text-align: justify;
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
.tags {
  position: sticky;
  display: flex;
  &_style {
    top: 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  &__nameTag1 {
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

  &__allButton {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    &_style {
      width: 345px;
    }
  }
  &__buttons {
    display: flex;
    &_style {
      border-radius: 10px;
      background: #f4f0ec;
      padding: 9px 30px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: none;

      span {
        color: #292f36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
      }
    }
  }
  &__buttons:hover {
    background-color: #292f36;
    span {
      color: #ffffff;
    }
  }
}
</style>
