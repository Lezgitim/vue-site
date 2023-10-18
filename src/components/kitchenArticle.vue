<template>
  <div>
    <div 
      class="blogDetailsMain__textBlock blogDetailsMain__textBlock_style" 
      v-for="article in artikles"
      :key="article.id"
      
    >
      <h1
        class="blogDetailsMain__textBlockH1 blogDetailsMain__textBlockH1_style"
      >
        {{ article.head }}
      </h1>
      <p
        class="blogDetailsMain__textBlockText blogDetailsMain__textBlockText_style"
      >
      {{ article.text }}
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
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
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
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
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
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KitchenArticle",

  data() {
    return {
      artikles: [
        {
          head: "Design sprints КУХНЯ are great КУХНЯ",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many КУХНЯ variations of passages of КУХНЯ Lorem Ipsum available, but the majority have suffered.",
          articled:
            "Contrary КУХНЯ to popular belief.There are many КУХНЯ variations КУХНЯ of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      see: true
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
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
</style>
