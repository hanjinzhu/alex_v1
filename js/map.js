
define( function() {
    
    var Map = Class.extend({
        init: function() {
        	this._loadMap();
        },

        isColliding: function(x, y) { 
            return (this.collisionGrid[y][x] === 1);
        },

        isOutOfBounds: function(x, y) {
            return isInt(x) && isInt(y) && (x < 0 || x >= this.width || y < 0 || y >= this.height);
        },

        _loadMap: function() {
        	var self = this,
    	    filepath = "maps/world_client.json";
            var worker = new Worker('js/mapworker.js');
            worker.postMessage(1);
            worker.onmessage = function(event) {
                var map = event.data;
                self._initMap(map);
                self.collisionGrid = map.collisionGrid;
                self.plateauGrid = map.plateauGrid;
                self.mapLoaded = true;
            };
      
        },
        
   

        
    });
    
    return Map;
});
