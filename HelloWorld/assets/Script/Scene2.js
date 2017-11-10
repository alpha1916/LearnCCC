cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        // jx.alert("scene2");

        cc.find("button", this.node).on("click", this.onClick, this);
        cc.find("btnScene", this.node).on("click", this.onGotoSenec1, this);
    },

    onClick:function()
    {
        jx.alert("scene2");
    },

    onGotoSenec1:function()
    {
        cc.director.loadScene("helloworld");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
