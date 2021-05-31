<template>
    <div class="module">
        <div class="header">
            <router-link to="/">
                <i class="fab fa-google"></i>
            </router-link>
        </div>

        <div class="body">
            <router-link v-for="button in buttons" :to="button.href">
                <img :src="button.img" />
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["buttons"]
    }
</script>

<style lang="less" scoped>
    @import "../Config";

    .module {
        width: 60px;
        height: 100vh;
        display: flex;
        background: @level3;
        flex-direction: column;
        .header {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid @level6;
            a {
                display: flex;
                width: 45px;
                height: 45px;
                transition-duration: 200ms;
                color: @brandColor;
                text-decoration: none;
                border-radius: 4px;
                background: @level4;
                align-items: center;
                justify-content: center;
                &:hover {
                    background: @level5;
                }
            }
        }

        .body {
            display: flex;
            margin-top: 10px;
            flex-direction: column;
            align-items: center;
            a {
                width: 45px;
                height: 45px;
                display: flex;
                border-radius: 4px;
                background: @level4;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                overflow: hidden;
                img {
                    border-radius: 4px;
                    width: 45px;
                    height: 45px;
                    background: @level4;
                    transition-duration: 200ms;
                }
                &:hover {
                    img {
                        transform: scale(1.1);
                        background: @level5;
                    }
                }
            }
        }
    }
</style>