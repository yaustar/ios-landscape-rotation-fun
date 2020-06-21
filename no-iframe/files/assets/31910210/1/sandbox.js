var Sandbox = pc.createScript('sandbox');
Sandbox.attributes.add('widthTextEntity', {type: 'entity'});
Sandbox.attributes.add('heightTextEntity', {type: 'entity'});
Sandbox.attributes.add('boxEntity', {type: 'entity'});
Sandbox.attributes.add('cameraEntity', {type: 'entity'});


// initialize code called once per entity
Sandbox.prototype.initialize = function() {
    this.entity.element.on('touchstart', function(e) {
        this.app.graphicsDevice.fullscreen = true;
    }, this);
    
    
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, function(e) {
        this.raycast(e.x, e.y);
    }, this);
    
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, function(e) {
            e.event.preventDefault();
            this.raycast(e.touches[0].x , e.touches[0].y);
        }, this);
    }
};


// update code called every frame
Sandbox.prototype.update = function(dt) {
    this.widthTextEntity.element.text = 'w ' + window.innerWidth;
    this.heightTextEntity.element.text = 'h ' + window.innerHeight;
};


Sandbox.prototype.raycast = function (x, y) {
    var camera = this.cameraEntity.camera;
    var pos = new pc.Vec3();
    camera.screenToWorld(x, y, 5, pos);
    this.boxEntity.setPosition(pos);
};

// swap method called for script hot-reloading
// inherit your script state here
// Sandbox.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/