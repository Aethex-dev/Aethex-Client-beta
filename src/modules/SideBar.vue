<template>
    <div class="SideBar">
        <div class="header">
            <i class="fal fa-bars"></i>
            <span class="title">{{ title }}</span>
            <text-button @click="backToTop();" class="back-to-top" icon="fal fa-arrow-up"/>
        </div>

        <div class="body links" v-if="mode == 'links-nav'">
            <div class="banner" v-if="banner">
                <img :src="banner" />
            </div>
            <router-link v-for="link in links" class="link" :to="link.href">
                <i v-if="link.icon" :class="link.icon"></i>
                <span>{{ link.title }}</span>
            </router-link>
        </div>

        <div class="body channels" v-if="mode == 'server-nav'">
            channels
        </div>
    </div>
</template>

<script>
    import TextButton from "./TextButton.vue";

    export default {
        props: ["mode", "title", "banner", "links"],
        mounted() {
            $(document).ready(() => {
                $(this.$el).find(".body").on("scroll", function () {
                    $(this).find(".banner img").css("transform", "translate(0px, calc(" + $(this).scrollTop() + "px / 2)");
                    
                    var header = $(this).parent().find(".header");
                    if ($(this).scrollTop() > 120) {
                        $(header).addClass("floating");
                    } else {
                        $(header).removeClass("floating");
                    }
                });
            });
        },
        components: {
            TextButton
        },
        methods: {
            backToTop() {
                $(this.$el).find(".body").scrollTop(0);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../Config";

    .SideBar {
        width: 250px;
        display: flex;
        transition-duration: 200ms;
        background: @level2;
        height: 100vh;
        flex-direction: column;

        .header {
            display: flex;
            align-items: center;
            border-bottom: 1px solid @level0;
            color: @contrast;
            font-family: @mainFont;
            font-size: 15px;
            transition-duration: 200ms;
            i {
                margin-right: 8px;
                padding: 12px 0px 12px 20px;
            }
            .title {
                padding: 12px 20px 12px 0px;
            }
            .back-to-top {
                transition-duration: 200ms;
                pointer-events: none;
                opacity: 0%;
                margin-left: auto;
                margin-right: 10px;
            }
            &.floating {
                border-bottom: 1px solid @level5;
                .back-to-top {
                    opacity: 60%;
                    pointer-events: initial;
                    &:hover {
                        opacity: 100%;
                    }
                }
            }
        }

        .body {
            display: flex;
            overflow: auto;
            flex-direction: column;
            scroll-behavior: smooth;
            .banner {
                width: 250px;
                min-height: 120px;
                max-height: 120px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    min-height: 120px;
                    min-width: 250px;
                }
            }
            .link {
                color: @contrast;
                transition-duration: 200ms;
                text-decoration: none;
                font-size: 14px;
                opacity: 60%;
                width: 250px;
                padding: 12px 20px;
                border-left: 1px solid @level0;
                font-family: @mainFont;

                i {
                    margin-right: 8px;
                }
                
                &:hover {
                    opacity: 100%;
                    background: @level3;
                }
                &.router-link-active {
                    color: @brandColor;
                    border-color: @brandColor;
                    opacity: 100%;
                    background: @level3;
                }
            }
        }
    }
</style>