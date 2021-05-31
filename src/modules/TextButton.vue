<template>
    <button class="TextButton">
        <i v-if="!text && icon" :class="icon"></i>
        <i v-if="text && icon" :class="icon + 'text-and-icon'"></i>
        <span>{{ text }}</span>
    </button>
</template>

<script>
    export default {
        props: ["icon", "text"]
    }
</script>

<style lang="less" scoped>
    @import "../Config";

    .TextButton {
        border: 1px solid @level0;
        background: @level0;
        transition-duration: 200m;
        padding: 10px;
        color: @contrast;
        opacity: 60%;
        cursor: pointer;
        &:hover {
            opacity: 100%;
        }
    }
</style>