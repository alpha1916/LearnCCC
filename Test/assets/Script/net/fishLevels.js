var FishLevels = [];
var FISH_TYPE_PLATE = 1;
var g_fishesCacheCapacity = null;
var initFishLevels = function()
{
    i = 0;
    FishLevels[i++] = {//蝴蝶鱼XY
        zorder : 1,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish01_0",
        swim_frames : 6,
        swim_fps : 6,
        dead_frames : 2,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_01",
        collision_rect : cc.size(60, 16)
    };

    FishLevels[i++] = {//大头鱼LY
        zorder : 2,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish02_0",
        swim_frames : 10,
        swim_fps : 6,
        dead_frames : 3,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_02",
        collision_rect : cc.size(56, 14)
    };

    FishLevels[i++] = {//热带鱼XHY
        zorder : 3,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish03_0",
        swim_frames : 12,
        swim_fps : 6,
        dead_frames : 3,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_03",
        collision_rect : cc.size(70, 30)
    };

    FishLevels[i++] = {//乔治鳗鱼HDY
        zorder : 4,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish04_0",
        swim_frames : 10,
        swim_fps : 6,
        dead_frames : 3,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_04",
        collision_offset : cc.p(7, 0),
        collision_rect : cc.size(60, 25)
    };

    FishLevels[i++] = {//石斑鱼DLY
        zorder : 5,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish05_0",
        swim_frames : 9,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        //dead_effects : ["fish05_dead_00", "fish05_dead_01"],
        scale : 1.0,
        lock_file : "lockedfish_05",
        collision_offset : cc.p(-25, 0),
        collision_rect : cc.size(80, 50)
    };

    FishLevels[i++] = {//大肚鱼BY
        zorder : 6,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish06_0",
        swim_frames : 10,
        swim_fps : 6,
        dead_frames : 3,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_06",
        collision_offset : cc.p(8, 2),
        collision_rect : cc.size(80, 36)
    };

    FishLevels[i++] = {//河豚
        zorder : 7,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish07_0",
        swim_frames : 35,
        swim_fps : 6,
        dead_frames : 3,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_07",
        collision_offset : cc.p(20, 0),
        collision_rect : cc.size(60, 35)
    };

    FishLevels[i++] = {//小丑鱼XCY
        zorder : 8,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish08_0",
        swim_frames : 9,
        swim_fps : 6,
        dead_frames : 3,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_08",
        collision_offset : cc.p(6, 0),
        collision_rect : cc.size(75, 40)
    };

    FishLevels[i++] = {//深海鮟鱇XLY
        zorder : 9,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish09_0",
        swim_frames : 7,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_09",
        collision_offset : cc.p(10, 10),
        collision_rect : cc.size(80, 50),
        dice_popo_scale : 1.2
    };
    
    FishLevels[i++] = {//旗鱼QY
        zorder : 10,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish10_0",
        swim_frames : 9,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        //dead_effects : ["fish10_dead_00", "fish10_dead_01"],
        scale : 1.0,
        lock_file : "lockedfish_10",
        collision_offset : cc.p(10, 0),
        collision_rect : cc.size(150, 55),
        dice_popo_scale : 1.6
    };

    FishLevels[i++] = {//海龟WG
        zorder : 11,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish11_0",
        swim_frames : 6,
        swim_fps : 6,
        dead_frames : 7,
        dead_fps : 6,
        //dead_effects : ["fish11_dead_00", "fish11_dead_01"],
        scale : 1.0,
        lock_file : "lockedfish_11",
        collision_rect : cc.size(128, 60),
        dice_popo_scale : 1.5
    };

    FishLevels[i++] = {//黄金鳗鱼WZ
        zorder : 12,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish12_0",
        swim_frames : 8,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_12",
        collision_rect : cc.size(210, 48),
        dice_popo_scale : 1.5
    };

    FishLevels[i++] = {//乌贼HY
        zorder : 13,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish13_0",
        swim_frames : 12,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_13",
        collision_offset : cc.p(20, 0),
        collision_rect : cc.size(85, 112),
        dice_popo_scale : 1.5
    };
    
    FishLevels[i++] = {//比目鱼BMY
        zorder : 14,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish14_0",
        swim_frames : 9,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        medal_file : "ms_fish_name1",
        lock_file : "lockedfish_14",
        collision_offset : cc.p(32, 5),
        collision_rect : cc.size(80, 50),
        dice_popo_scale : 1.5
    };

    //FishLevels[14] = {//青蛙
    //    zorder : 14,
    //    swim_file : "fish_01_18_swim",
    //    dead_file : "fish_01_20_dead",
    //    image_file : "fish15_0",
    //    swim_frames : 4,
    //    swim_fps : 6,
    //    dead_frames : 2,
    //    dead_fps : 6,
    //    scale : 1.0,
    //    anchor : cc.p(125, 152),
    //    polygon : [cc.p(-52, 174), cc.p(113, 301), cc.p(240, 247), cc.p(238, 13), cc.p(75, 5)]
    //};

    FishLevels[i++] = {//蝙蝠鱼BFY
        zorder : 15,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish16_0",
        swim_frames : 11,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_15",
        medal_file : "ms_fish_name2",
        //dead_effects : ["fish16_dead_00", "fish16_dead_01"],
        collision_offset : cc.p(25, 0),
        collision_rect : cc.size(116, 90),
        dice_popo_scale : 1.5
    };

    FishLevels[i++] = {//金海豚WDJS
        zorder : 22,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish17_0",
        swim_frames : 8,
        swim_fps : 6,
        dead_frames : 2,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_16",
        medal_file : "ms_fish_name9",
        collision_offset : cc.p(60, 0),
        collision_rect : cc.size(380, 105)
    };

    FishLevels[i++] = {//银鲨鱼YS
        zorder : 23,
        swim_file : "fish_01_18_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish18_0",
        swim_frames : 9,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        //dead_effects : ["fish18_dead_00", "fish18_dead_01"],
        scale : 1.0,
        lock_file : "lockedfish_17",
        medal_file : "ms_fish_name11",
        collision_offset : cc.p(54, 0),
        collision_rect : cc.size(188, 64)
    };

    FishLevels[i++] = {//金鲨鱼JS
        zorder : 27,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish19_0",
        swim_frames : 9,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        //dead_effects : ["fish19_dead_00", "fish19_dead_01"],
        scale : 1.0,
        lock_file : "lockedfish_18",
        medal_file : "ms_fish_name10",
        collision_offset : cc.p(54, 0),
        collision_rect : cc.size(188, 64)
    };

    FishLevels[i++] = {//金龙JL
        zorder : 28,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish20_0",
        swim_frames : 7,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        //dead_effects : ["fish20_dead_00", "fish20_dead_01"],
        scale : 1.0,
        lock_file : "lockedfish_19",
        medal_file : "ms_fish_name8",
        collision_offset : cc.p(12, 0),
        collision_rect : cc.size(420, 36)
    };

    FishLevels[i++] = {//超级炸弹
        zorder : 29,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish21_0",
        swim_frames : 5,
        swim_fps : 6,
        dead_effects : ["super_bomb"],
        scale : 1.0,
        lock_file : "lockedfish_20",
        medal_file : "ms_fish_name3",
        collision_circle : 80
    };

    FishLevels[i++] = {//大盘鱼1
        zorder : "platefish1",
        type : 1,
        size : cc.size(250, 250),
        sub_fishes : [4, 7, 6],
        sub_fishes_pos : [cc.p(33, 85), cc.p(80, 55), cc.p(20, 25)],
        sub_fishes_scale : [0.4, 0.4, 0.4],
        scale : 1.0,
        swim_file : "fish_19_22_swim",
        lock_file : "lockedfish_21",
        medal_file : "ms_fish_name4",
        collision_circle : 100
    };

    FishLevels[i++] = {//大盘鱼2
        zorder : 24,
        type : 1,
        size : cc.size(250, 250),
        sub_fishes : [9, 7, 9],
        sub_fishes_pos : [cc.p(30, 85), cc.p(80, 55), cc.p(30, 25)],
        sub_fishes_scale : [0.5, 0.4, 0.5],
        scale : 1.0,
        swim_file : "fish_19_22_swim",
        lock_file : "lockedfish_22",
        medal_file : "ms_fish_name5",
        collision_circle : 100
    };

    FishLevels[i++] = {//大盘鱼3
        zorder : 25,
        type : 1,
        size : cc.size(250, 250),
        sub_fishes : [7, 16, 7],
        sub_fishes_pos : [cc.p(30, 85), cc.p(70, 55), cc.p(30, 25)],
        sub_fishes_scale : [0.4, 0.35, 0.4],
        scale : 1.0,
        swim_file : "fish_19_22_swim",
        lock_file : "lockedfish_23",
        medal_file : "ms_fish_name6",
        collision_circle : 100
    };

    FishLevels[i++] = {//大盘鱼4
        zorder : 26,
        type : 1,
        size : cc.size(250, 250),
        sub_fishes : [4, 17, 4],
        sub_fishes_pos : [cc.p(35, 88), cc.p(70, 55), cc.p(35, 28)],
        sub_fishes_scale : [0.4, 0.35, 0.4],
        scale : 1.0,
        swim_file : "fish_19_22_swim",
        lock_file : "lockedfish_24",
        medal_file : "ms_fish_name7",
        collision_circle : 100
    };

    FishLevels[i++] = {//比目鱼1
        zorder : 16,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish22_0",
        image_dead_file : "fish14_0",
        swim_frames : 14,
        swim_fps : 6,
        dead_frames : 2,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_25",
        medal_file : "ms_fish_name1",
        collision_circle : 50
    };

    FishLevels[i++] = {//蝙蝠鱼1
        zorder : 16,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish22_0",
        image_dead_file : "fish16_0",
        swim_frames : 3,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_25",
        medal_file : "ms_fish_name2",
        collision_circle : 50
    };

    FishLevels[i++] = {
        zorder : 16,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish22_0",
        image_dead_file : "fish17_0",
        swim_frames : 3,
        swim_fps : 6,
        dead_frames : 2,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_25",
        medal_file : "ms_fish_name9",
        collision_circle : 50
    };

    FishLevels[i++] = {
        zorder : 16,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish22_0",
        image_dead_file : "fish18_0",
        swim_frames : 3,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_25",
        medal_file : "ms_fish_name11",
        collision_circle : 50
    };

    FishLevels[i++] = {
        zorder : 16,
        swim_file : "fish_19_22_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish22_0",
        image_dead_file : "fish19_0",
        swim_frames : 3,
        swim_fps : 6,
        dead_frames : 4,
        dead_fps : 6,
        scale : 1.0,
        lock_file : "lockedfish_25",
        medal_file : "ms_fish_name10",
        collision_circle : 50
    };

    //宝箱
    FishLevels[i++] = {
        zorder : 19,
        swim_file : "fish_23_24_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish23_0",
        swim_frames : 3,
        swim_fps : 6,
        scale : 1.0,
        unrotatable : true,
        bomb : true,
        lock_file : "lockedfish_26",
        collision_offset : cc.p(0, -20),
        collision_rect : cc.size(180, 170)
    };

    //小金蟾
    FishLevels[i++] = {
        zorder : 20,
        swim_file : "fish_23_24_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish25_0",
        swim_frames : 24,
        swim_fps : 6,
        scale : 1,
        bomb : true,
        lock_file : "lockedfish_27",
        collision_circle : 70
    };

    //大金蟾
    FishLevels[i++] = {
        zorder : 21,
        swim_file : "fish_23_24_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish24_0",
        swim_frames : 24,
        swim_fps : 6,
        scale : 1.0,
        bomb : true,
        lock_file : "lockedfish_28",
        collision_circle : 130
    };

    //免费炮弹
    FishLevels[i++] = {
        zorder : 17,
        swim_file : "fish_23_24_swim",
        dead_file : "fish_01_20_dead",
        image_file : "fish26_0",
        swim_frames : 10,
        swim_fps : 6,
        scale : 1.0,
        unrotatable : true,
        bomb : true,
        lock_file : "lockedfish_29",
        collision_circle : 90
    };    
    
    FishLevels[i++] = {//冰冻龟
    zorder : 18,
    swim_file : "fish_23_24_swim",
    image_file : "fish27_0",
    swim_frames : 6,
    swim_fps : 6,
    dead_fps : 6,
    scale : 1.0,
    lock_file : "lockedfish_30",
    collision_rect : cc.size(192, 90),
    dice_popo_scale : 1.5
};

    for(var i = 0; i < FishLevels.length; ++i)
    {
        var data = FishLevels[i];
        if (data.sub_fishes_pos != null)
        {
            for(var k = 0; k < data.sub_fishes_pos.length; ++k)
            {
                var pt = data.sub_fishes_pos[k];
                pt.x *= 2.5;
                pt.y *= 2.5;
                data.sub_fishes_scale[k] *= 2.5;
            }
        }
    }
};

initFishLevels();
module.exports = FishLevels;
