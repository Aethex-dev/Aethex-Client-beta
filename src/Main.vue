<template>
    <nav-rail :buttons="NavRail.buttons" />

    <side-bar :title="sidebar.title" :banner="sidebar.banner" :mode="sidebar.mode" 
        :links="sidebar.links" 
    />

    <div class="body">
        <router-view />
    </div>
</template>

<script>
    import SideBar from "./modules/SideBar.vue";
    import NavRail from "./modules/NavRail.vue";
    import App from "./app/App.ts";

    export default {
        components: {
            SideBar,
            NavRail
        },
        data: function () {
            return {
                _app: {
                    App: null,
                    _OnLoad: {
                        user: {
                            loggedIn: true,
                            tokenA: null,
                            tokenB: null,
                            keyA: null,
                            keyB: null
                        }
                    }
                },
                NavRail: {
                    buttons: []
                },
                sidebar: {
                    mode: "",
                    title: "",
                    banner: "",
                    links: []
                }
            }
        },
        mounted() {
            var app = this._app.App = new App(this);

            // Show basic navigation if logged out
            if (this._app._OnLoad.user.loggedIn) {
                this.sidebar.title = "Aethex";
                this.sidebar.mode = "links-nav";
                this.sidebar.links = [
                    {
                        title: "Home",
                        href: "/"
                    },
                    {
                        title: "Login",
                        href: "/login"
                    },
                    {
                        title: "Register",
                        href: "/register"
                    }
                ];
            } 
        }
    }
</script>

<style lang="less" scoped>
    @import "./Config";

    .body {
        height: 100vh;
        background: @level1;
        display: flex;
        color: @contrast;
        flex: 1;
        font-size: 13px;
        font-family: @mainFont;
    }
</style>