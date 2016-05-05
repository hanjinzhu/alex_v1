define(['map','sprite'],function(Map,Sprite) {
    var Game = Class.extend({
        init: function() {
        	this.spriteNames = ["hand", "sword", "loot", "target", "talk", "sparks", "shadow16", "rat", "skeleton", "skeleton2", "spectre", "boss", "deathknight", 
                                "ogre", "crab", "snake", "eye", "bat", "goblin", "wizard", "guard", "king", "villagegirl", "villager", "coder", "agent", "rick", "scientist", "nyan", "priest", 
                                "sorcerer", "octocat", "beachnpc", "forestnpc", "desertnpc", "lavanpc", "clotharmor", "leatherarmor", "mailarmor", 
                                "platearmor", "redarmor", "goldenarmor", "firefox", "death", "sword1", "axe", "chest",
                                "sword2", "redsword", "bluesword", "goldensword", "item-sword2", "item-axe", "item-redsword", "item-bluesword", "item-goldensword", "item-leatherarmor", "item-mailarmor", 
                                "item-platearmor", "item-redarmor", "item-goldenarmor", "item-flask", "item-cake", "item-burger", "morningstar", "item-morningstar", "item-firepotion"];
        }, 
        loadMap: function() {
            var self = this;
            this.map = new Map();
        },
        run: function() {
            var self = this;
        
            this.loadSprites();
            //this.setUpdater(new Updater(this));
            //this.camera = this.renderer.camera;
        
            //this.setSpriteScale(this.renderer.scale);

        	//阻塞加载函数,确保资源加载完毕
        	var wait = setInterval(function() {
                if(self.map.isLoaded && self.spritesLoaded()) {
                    
                	
                    clearInterval(wait);
                }
        	}, 100);
        },

        loadSprites: function() {
            //log.info("Loading sprites...");
            this.spritesets = [];
            _.map(this.spriteNames, this.loadSprite);
        },
        loadSprite: function(name) {
            this.spritesets[name] = new Sprite(name, 3);
             
        },
    });
    return Game;
});