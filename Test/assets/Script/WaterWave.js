var getWaterWave = function()
{
    var container = new cc.Node();
    container.setAnchorPoint(0, 0);
    container.setPosition(-cc.visibleRect.width / 2, -cc.visibleRect.height / 2);
    var col = Math.ceil(cc.visibleRect.width / 256);
    var row = Math.ceil(cc.visibleRect.height / 256);
    var atlas = cc.loader.getRes("water/water", cc.SpriteAtlas);
    var spriteFrames = atlas.getSpriteFrames();
    for(var i = 0; i < col; ++i)
    {
        for(var j = 0; j < row; ++j)
        {
            var waveNode = new cc.Node();
            // waveNode.setPosition(256 * i - cc.visibleRect.width / 2, 256 * j - cc.visibleRect.height / 2);
            waveNode.setPosition(256 * i, 256 * j);
            waveNode.setAnchorPoint(0, 0);
            waveNode.parent = container;

            var sp = waveNode.addComponent(cc.Sprite);
            sp.spriteFrame = spriteFrames[0];
            var animation = waveNode.addComponent(cc.Animation);

            var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 30);
            clip.name = 'water_wave';
            clip.wrapMode = cc.WrapMode.Loop;
            animation.addClip(clip);
            animation.play(clip.name);
        }
    }
    return container;
}

module.exports = getWaterWave;