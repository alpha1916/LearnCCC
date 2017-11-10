var instant = null;
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
    // ctor:function()
    // {
    //     // console.log("this.node:" + this.node);
    //     // this.node.show = this.show.bind(this);
    //     // if(instant != null)
    //     // {
    //     //     throw("singleton");
    //     //     return;
    //     // }
    //     instant = this;
    // },

    // use this for initialization
    onLoad: function () {
        // console.log("this.node:" + this.node);
        this.hide();
    },

    show:function(tips)
    {
        var lbContent = cc.find("lbContent", this.node);
        lbContent.getComponent(cc.Label).string = tips;
        // console.log(this.node.x, this.node.y);
        // this.node.parent = cc.director.getScene();
        // cc.director.getScene().addChild(this.node);
        console.log("ins id:" + this.__instanceId);
        this.node.parent = cc.director.getScene();
    },

    hide:function()
    {
        this.node.parent = null;
        // this.node.removeFromParent();
    },

    onDestroy:function()
    {
        console.log("modal ui destroy");
        instant = null;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

var jx = window.jx = window.jx || {};
jx.alert = function(tips)
{
    if(instant == null)
    {
        var dlg = cc.instantiate(cc.loader.getRes("ModalUI"));
        instant = dlg.getComponent("ModalUI");
        // cc.game.addPersistRootNode(dlg);
        // dlg.active = true;
    }
    instant.show(tips);
}

jx.initAlert = function()
{
    // if(instant == null)
    // {
    //     var dlg = cc.instantiate(cc.loader.getRes("ModalUI"));
    //     instant = dlg.getComponent("ModalUI");
    //     cc.game.addPersistRootNode(dlg);
    //     // dlg.active = true;
    // }
}