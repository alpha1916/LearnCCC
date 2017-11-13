var ResManager = cc.Class({
    init:function(progressListener, completedListener)
    {
        this.progressListener = progressListener;
        this.completedListener = completedListener;
        cc.loader.loadResArray(resArray, this.onProgress.bind(this), this.onCompleted.bind(this));
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

var altas = [
    "fish/fish_01_18_swim",
    "fish/fish_19_22_swim",
    "fish/fish_23_24_swim",
    "fish/fish_01_20_dead",
    "water/water"
];

var resArray = [];
resArray = prefabs.concat(altas);
