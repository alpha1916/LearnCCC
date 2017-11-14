// // 这个文件是一个Protobuf的管理模块，把具体的encode和decode操作封装了一层，我觉得这样写清晰、容易管理，而且node服务器也可以公用。
// var Protobufjs = require('protobuf');
// // 定义一个proto字符串描述，
// /***通常是一个外部.proto文件或者用命令行工具导出成commonjs/json格式
// 这里为了简单，直接写成一个字符串变量
// ***/
// var protoDefine = `
// package ccc; 
// message UserInfo 
// { 
//    optional int32     id = 1;  
//    optional string    name = 2;  
//    optional int32     age = 3;  
// }
// `;

// // 按照官方的教程一步步做解析操作，
// // 外面很多高手都写了教程，但推荐还是去官网上看
// // https://github.com/dcodeIO/protobuf.js/wiki/Getting-started

// var builder = Protobufjs.loadProto(protoDefine);
// var ccc = builder.build("ccc"); 
// // 以下我定义2个导出方法
// /**
// * 将js对象转成protobuf的二进制数据
// * msgName 对应proto里面的消息名称
// * obj是msgName对应的js对象
// **/
// // module.exports.
// /**
// * 将protobuf的二进制数据 转成js对象
// * msgName 对应proto里面的消息名称
// * buffer
// **/
// // module.exports.

var Protobufjs = require('protobuf');
var ProtoBufHelper = cc.Class({
    init:function(strProto, packageName)
    {
        var builder = Protobufjs.loadProto(strProto);
        this.msgClassMap = builder.build(packageName);
    },

    encodeObject : function (msgName, obj)
    {
        try {
            var MsgClass = this.msgClassMap[msgName];
            var msgObj = new MsgClass(obj);
            var buffer = msgObj.encode().toBuffer();
            return buffer;
        } catch (e) {
            console.log(e);
            return null;
        }
    },

    decodeBuffer : function (msgName, buffer)
    {
        try {
            var MsgClass = this.msgClassMap[msgName];
            var msg = MsgClass.decode(buffer);
            return msg;
        } catch (e) {
            console.log(e);
            return {};
        }
    }
});

module.exports = ProtoBufHelper;