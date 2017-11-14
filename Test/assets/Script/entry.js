import { setTimeout } from "timers";

var resMgr = require("resource");
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
        progressBar: {
            default: null,
            type: cc.ProgressBar
        },

        lbProgress:{
            default: null,
            type : cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        this.init();
        resMgr.init(this.updateProgress.bind(this), this.onCompleted);

        // var p = 0;
        // var lid = setInterval(function(){
        //     p += 0.01;
        //     if(p > 1)
        //     {
        //         p = 1;
        //         clearInterval(lid);
        //     }
        //     this.updateProgress(p);
        // }.bind(this), 100);
    },

    init:function()
    {
        this.imgMoveItem = cc.find("imgMoveItem", this.node);
        var progressNode = this.progressBar.node;
        this.itemDistance = progressNode.width;// - this.imgMoveItem.width;
        this.imgMoveItem.x = this.progressBar.node.x - progressNode.width / 2 - this.imgMoveItem.width / 2;
        this.itemOX = this.imgMoveItem.x;
        // this.progressBar = cc.find("progressBar", this.node);
        // this.progressBar.progress = 0;
        this.updateProgress(0);
    },

    updateProgress:function(percent)
    {
        this.progressBar.progress = percent;

        this.imgMoveItem.x = this.itemOX + this.itemDistance * percent;
        this.lbProgress.string = Math.round(percent * 100) + "%";
    },

    onCompleted:function()
    {
        // cc.director.loadScene("MainScene");

        setTimeout(function(){
            cc.director.loadScene("FishScene");
        }, 300);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
