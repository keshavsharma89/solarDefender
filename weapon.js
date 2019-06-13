function createWeapon() {
//  Our bullet group
//  Creates 30 bullets, using the 'bullet' graphic
weapon = game.add.weapon(40, 'bullet');

//  The 'rgblaser.png' is a Sprite Sheet with 80 frames in it (each 4x4 px in size)
//  The 3rd argument tells the Weapon Plugin to advance to the next frame each time
//  a bullet is fired, when it hits 80 it'll wrap to zero again.
//  You can also set this via this.weapon.bulletFrameCycle = true
weapon.setBulletFrames(0, 80, true);

weapon.bulletAngleOffset = 90;

weapon.bulletAngleVariance = 10;

weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

//  The speed at which the bullet is fired
weapon.bulletSpeed = 400;

//  Speed-up the rate of fire, allowing them to shoot 1 bullet every 50ms
weapon.fireRate = 50;

//  Wrap bullets around the world bounds to the opposite side
// weapon.bulletWorldWrap = true;



//  Tell the Weapon to track the 'player' Sprite
//  With no offsets from the position
//  But the 'true' argument tells the weapon to track sprite rotation
weapon.trackSprite(player, 0, 0, true);

}
