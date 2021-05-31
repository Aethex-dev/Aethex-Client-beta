import SaveAPIClasses from "../SaveAPIClasses";

export default class _OnLoad {
    /**
     * App class object
     */
    public saveAPIClasses: SaveAPIClasses;

    /**
     * On page pre load event which will try to log the user in and etc...
     * 
     * @param {App} app App class object
     */
    public constructor(saveAPIClasses: SaveAPIClasses) {
        // Define SaveAPIClasses object
        this.saveAPIClasses = saveAPIClasses;

        // Get startup user info
        var tokenA = saveAPIClasses.app.mainVue._app._OnLoad.user.tokenA;
        var tokenB = saveAPIClasses.app.mainVue._app._OnLoad.user.tokenB;

        var keyA = saveAPIClasses.app.mainVue._app._OnLoad.user.keyA;
        var keyB = saveAPIClasses.app.mainVue._app._OnLoad.user.keyB;

        var loggedIn = saveAPIClasses.app.mainVue._app._OnLoad.user.loggedIn;

        
    }
}