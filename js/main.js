//Scene：v1.0版本游戏只有一个场景，不涉及场景的转换 
//Layer：游戏分为四个层 DOM层归App模块管理 剩下三个Canvas层:background背景层 entities精灵层 foreground前端层 进行游戏的绘制 由Game模块初始化
define(['app'], function(App) {
    var app, game;
    //app主要负责DOM层的操作 DOM层位于Canvas层的上方
    var initApp = function() {
        app = new App();
        initGame();
        
    }
    var initGame = function() {
        require(['game'], function(Game) {
            var canvas = document.getElementById("entities"),
            background = document.getElementById("background"),
            foreground = document.getElementById("foreground"),
            game = new Game();
            game.loadMap();
            game.run();
            
        });
    };
    initApp();

});
