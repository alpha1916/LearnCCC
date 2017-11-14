var Fish = cc.Class({
    extends: cc.Node,

    init:function(data)
    {
        this.sprite = this.addComponent(cc.Sprite);
        this.anim = this.addComponent(cc.Animation);

        var atlas = cc.loader.getRes("fish/" + data.swim_file, cc.SpriteAtlas);
        var typeId = data.id;
        var totalFrame = data.swim_frames;
        var spriteFrames = [];
        for(var i = 0; i < totalFrame; ++i)
        {
            var idx = "000".substr(0, 4 - i.toString().length) + i;
            var pattern = `fish${typeId}_0_${idx}`;
            var spriteFrame = atlas.getSpriteFrame(pattern);
            spriteFrames.push(spriteFrame);
        }
        this.sprite.spriteFrame = spriteFrames[0];
        
        var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, data.swim_fps);
        clip.name = 'swim';
        clip.wrapMode = cc.WrapMode.Loop;
        this.anim.addClip(clip);
        this.anim.play(clip.name);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

module.exports = Fish;