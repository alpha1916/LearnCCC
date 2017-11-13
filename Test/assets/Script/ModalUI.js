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

    addClickListener:function(componentName, listener, target)
    {
        var cp = cc.find(componentName, this.node);
        // cp.getComponent(cc.Button)
        cp.on("click", listener, target);
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
        this.addClickListener("btnOK", this.hide, this);
    },

    show:function(tips)
    {
        var lbContent = cc.find("lbContent", this.node);
        lbContent.getComponent(cc.Label).string = tips;
        var scene = cc.director.getScene();
        this.node.setPosition(cc.visibleRect.center);
        this.node.parent = scene;
        console.log("ins id:" + this.__instanceId);
    },

    hide:function()
    {
        this.node.parent = null;
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
    }
    instant.show(tips);
}