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
        this.init();
    },

    init:function()
    {
        this.canvas = cc.find("Canvas");
        this.fishLayer = cc.find("fishLayer", this.canvas);

        var waterWave = require("WaterWave")();
        this.canvas.addChild(waterWave);

        var Fish = require("Fish");
        var data = {
            swim_file : "fish_01_18_swim",
            id : "01",
            swim_frames : 6,
            swim_fps : 6,
        };
        var fish = new Fish();
        fish.init(data);
        fish.parent = this.fishLayer;
        fish.x = 200;
        fish.y = 200;

        this.testProtoBuf();
    },

    testProtoBuf:function()
    {
        // var pb = require("protobuf"); j
        var Helper = require("protobufHelper");
        var pbHelper = new Helper();
        var strProto = cc.loader.getRes("proto/fish_data", cc.TextAsset);
        pbHelper.init(strProto, "fishdata");
        // var buffer = pbhelper.encodeObject("UserInfo", {id : 1001,name : "ihowe"});
        // console.log("encode",buffer); // 然后Buffer 可以用socket或者http发送给服务器
        // 把buffer还原成js对象
        // var message = pbhelper.decodeBuffer("UserInfo", buffer);
        // console.log("decode",message);
    }


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
