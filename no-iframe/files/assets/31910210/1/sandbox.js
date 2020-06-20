var Sandbox = pc.createScript('sandbox');
Sandbox.attributes.add('widthTextEntity', {type: 'entity'});
Sandbox.attributes.add('heightTextEntity', {type: 'entity'});

// initialize code called once per entity
Sandbox.prototype.initialize = function() {
    this.app.once('postrender', function() {
        document.getElementById('application-canvas').style.position = 'fixed';
        document.body.style.minHeight = '-webkit-fill-available';
        document.documentElement.style.height = '-webkit-fill-available';
    });
    
    this.entity.element.on('touchstart', function(e) {
        this.app.graphicsDevice.fullscreen = true;
    }, this);
};

// update code called every frame
Sandbox.prototype.update = function(dt) {
    this.widthTextEntity.element.text = 'w ' + window.innerWidth;
    this.heightTextEntity.element.text = 'h ' + window.innerHeight;
};

// swap method called for script hot-reloading
// inherit your script state here
// Sandbox.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/