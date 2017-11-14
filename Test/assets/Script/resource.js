var ResManager = cc.Class({
    init:function(progressListener, completedListener)
    {
        this.progressListener = progressListener;
        this.completedListener = completedListener;
        // cc.loader.loadResArray(resArray, this.onProgress.bind(this), this.onCompleted.bind(this));
        var loadedCount = 0;
        var totalCount = resArray.length;
        resArray.forEach(function(data){
            var path = data[0];
            var type = data[1];
            cc.loader.loadRes(path, type, function(err, asset){
                if(err != null)
                {
                    console.log("load asset error:" + path);
                }
                ++loadedCount;
                var percent = loadedCount / totalCount;
                this.progressListener(percent);

                if(loadedCount === totalCount)
                {
                    this.completedListener();
                }
            }.bind(this));
        }.bind(this));
    },

    onProgress:function(completedCount, totalCount, item)
    {
        var percent = completedCount / totalCount;
        this.progressListener(percent);
    },

    onCompleted:function(err, assets)
    {
        if(err != null)
        {
            console.log(err);
            return;
        }
        this.completedListener(assets);
    }
});

var resMgr = new ResManager();
module.exports = resMgr;

var imgs = [

];

var prefabs = [
    "ModalUI",
];

var atlas = [
    "fish/fish_01_18_swim",
    "fish/fish_19_22_swim",
    "fish/fish_23_24_swim",
    "fish/fish_01_20_dead",
    "water/water"
];

var protos = [
    "proto/fish_data"
];

var resArray = [];
imgs.forEach(function(path){
    resArray.push([path, cc.SpriteFrame]);
});

prefabs.forEach(function(path){
    resArray.push([path, cc.Prefab]);
});

atlas.forEach(function(path){
    resArray.push([path, cc.SpriteAtlas]);
});

protos.forEach(function(path){
    resArray.push([path, cc.TextAsset]);
});