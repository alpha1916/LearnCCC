cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        player: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        // this.player = this.getComponent("player");
        this.player = this.node.getChildByName("player").getComponent(cc.Label);
        this.player.string = "player1";
        // console.log("this.player:" + this.player.toString());
        // console.log("this.player.string:" + this.player.string);

        this.player2 = cc.find("background/player", this.node).getComponent(cc.Label);
        this.player2.string = "player5";

        // var ws = new WebSocket("ws://echo.websocket.org");
        // ws.onopen = function (event) {
        //     console.log("Send Text WS was opened.");
        // };
        // ws.onmessage = function (event) {
        //     console.log("response text msg: " + event.data);
        // };
        // ws.onerror = function (event) {
        //     console.log("Send Text fired an error");
        // };
        // ws.onclose = function (event) {
        //     console.log("WebSocket instance closed.");
        // };
       
        // setTimeout(function () {
        //     if (ws.readyState === WebSocket.OPEN) {
        //         ws.send("Hello WebSocket, I'm a text message.");
        //     }
        //     else {
        //         console.log("WebSocket instance wasn't ready...");
        //     }
        // }, 3000);
        this.playLoading();
    },

    playLoading:function()
    {
        var animation = this.node.getChildByName("loading").getComponent(cc.Animation);
        cc.loader.loadRes("loading/loading", cc.SpriteAtlas, function(err, atlas) {
            if(err != null)
            {
                console.log(err);
                return;
            }
            var spriteFrames = atlas.getSpriteFrames();
            var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 34);
            clip.name = 'loading';
            // clip.wrapMode = cc.WrapMode.Loop;
    
            animation.addClip(clip);
            var animState = animation.play('loading');
            console.log(" frameRate:" + animState.frameRate);
            // animState.frameRate = 3;
        });
        
        animation.on('stop',function(){
            console.log(Date.now() + " loading play  over!");
        }, this);

        animation.on('lastframe',function(){
            console.log(Date.now() + " loading last frame");
        }, this);
    },

    // called every frame
    update: function (dt) {
        // this.player.string = "player:" + dt;

    },
});
