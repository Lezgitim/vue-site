<template>
    <div>
        <footer class="center lastBlock">
            <div class="lastBlockFirst">
                <div class="lastBlockFirstChild">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                        <path
                            d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z"
                            fill="#CDA274" />
                    </svg>
                    <h2 class="lastBlockFirstChild__h2  lastBlockFirstChild__h2_stil">Interno</h2>
                </div>
                <div class="lastBlockFirstChild">
                    <p class="lastBlockFirstChild__p lastBlockFirstChild__p_stil">It is a long established fact that
                        a
                        reader will be distracted lookings.</p>
                </div>
                <div class="lastBlockFirstChild lastBlockFirstChildImg">
                    <img src="../assets/twit.png" alt="twitter">
                    <img src="../assets/in.png" alt="in">
                </div>
            </div>

            <div class="lastBlockFirst lastBlockTwo">
                <div class="lastBlock__ForH2Center">
                    <h2 class="lastBlockTwo__h2Pages lastBlockTwo__h2Pages_stil">Pages</h2>
                    <p class="lastBlockTwo__PPages lastBlockTwo__PPages_stil">Home</p>
                    <p class="lastBlockTwo__PPages lastBlockTwo__PPages_stil">Project</p>
                    <p class="lastBlockTwo__PPages lastBlockTwo__PPages_stil">Blog</p>
                </div>
            </div>

            <div class="lastBlockFirst lastBlockTwo">
                <div class="lastBlock__ForH2Center">
                    <h2 class="lastBlockTwo__h2Pages lastBlockTwo__h2Pages_stil">Contact</h2>
                    <p class="lastBlockTwo__PPages lastBlockTwo__PPages_stil">55 East Birchwood Ave. Brooklyn, New
                        York
                        11201</p>
                    <p class="lastBlockTwo__PPages lastBlockTwo__PPages_stil">contact@interno.com</p>
                    <p class="lastBlockTwo__PPages lastBlockTwo__PPages_stil">(123) 456 - 7890</p>
                </div>
            </div>

        </footer>
    </div>
</template>

<script>
export default {
    name: 'VueSiteFooter',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.center {
    padding-left: calc(50% - 540px);
    padding-right: calc(50% - 540px);
}
.lastBlock {
    margin-top: 100px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 27px;
   

    .lastBlockFirst {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    

        .lastBlockFirstChild {
            display: flex;
            gap: 5px;
            align-items: center;

            &__h2 {

                &_stil {
                    color: #292F36;
                    font-family: DM Serif Display;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    /* 50px */
                }
            }

            &__p {

                &_stil {
                    color: #4D5053;
                    font-family: Jost;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    /* 33px */
                    letter-spacing: 0.22px;
                }
            }


        }

        .lastBlockFirstChildImg {
            gap: 50px;
        }
    }


    .lastBlockTwo {
        align-items: center;
        row-gap: 10px;

        &__h2Pages {
            &_stil {
                color: #292F36;
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
            }
        }

        &__PPages {

            &_stil {
                color: #4D5053;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 300%;
                /* 66px */
                letter-spacing: 0.22px;
            }
        }
    }
}
</style>