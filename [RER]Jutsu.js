var tick=40;
var yaw;
var tkexp = 1000;
var kexp = 0;
var klvl = 1;

function modTick() {
tick--;
yaw = getYaw();
if(yaw>360) {
yaw -=360;
Entity.setRot(getPlayerEnt(),yaw,getPitch());
}
if(yaw<0) {
yaw +=360;
Entity.setRot(getPlayerEnt(),yaw,getPitch());
}
}

function procCmd(cmd) {
var c = cmd.split(" ");
if(c[0]=="fire") {
clientMessage("Fire Jutsu !");
Jutsu("fire",Player.getX(),Player.getY(),Player.getZ());
}
if(c[0]=="wind") {
clientMessage("Wind Jutsu !");
Jutsu("wind",Player.getX(),Player.getY(),Player.getZ());
}
}

function Jutsu(type,x,y,z) {
if(type=="fire") {
if(yaw>=45&&yaw<=135) {
if(getTile(x-1,y-1,z)==0)
setTile(x-1,y-1,z,51);
if(getTile(x-2,y-1,z)==0)
setTile(x-2,y-1,z,51);
if(getTile(x-3,y-1,z)==0)
setTile(x-3,y-1,z,51);
if(getTile(x-4,y-1,z)==0)
setTile(x-4,y-1,z,51);
if(getTile(x-5,y-1,z)==0)
setTile(x-5,y-1,z,51);
if(getTile(x-6,y-1,z)==0)
setTile(x-6,y-1,z,51);
}
if(yaw>=135&&yaw<=225) {
if(getTile(x,y-1,z-1)==0)
setTile(x,y-1,z-1,51);
if(getTile(x,y-1,z-2)==0)
setTile(x,y-1,z-2,51);
if(getTile(x,y-1,z-3)==0)
setTile(x,y-1,z-3,51);
if(getTile(x,y-1,z-4)==0)
setTile(x,y-1,z-4,51);
if(getTile(x,y-1,z-5)==0)
setTile(x,y-1,z-5,51);
if(getTile(x,y-1,z-6)==0)
setTile(x,y-1,z-6,51);
}
if(yaw>=225&&yaw<=315) {
if(getTile(x+1,y-1,z)==0)
setTile(x+1,y-1,z,51);
if(getTile(x+2,y-1,z)==0)
setTile(x+2,y-1,z,51);
if(getTile(x+3,y-1,z)==0)
setTile(x+3,y-1,z,51);
if(getTile(x+4,y-1,z)==0)
setTile(x+4,y-1,z,51);
if(getTile(x+5,y-1,z)==0)
setTile(x+5,y-1,z,51);
if(getTile(x+6,y-1,z)==0)
setTile(x+6,y-1,z,51);
}
if(yaw>=315||yaw<=45) {
if(getTile(x,y-1,z+1)==0)
setTile(x,y-1,z+1,51);
if(getTile(x,y-1,z+2)==0)
setTile(x,y-1,z+2,51);
if(getTile(x,y-1,z+3)==0)
setTile(x,y-1,z+3,51);
if(getTile(x,y-1,z+4)==0)
setTile(x,y-1,z+4,51);
if(getTile(x,y-1,z+5)==0)
setTile(x,y-1,z+5,51);
if(getTile(x,y-1,z+6)==0)
setTile(x,y-1,z+6,51);
}
}
if(type=="wind") {
for(var i in all) {
for(var k=-3;k<3;k++) {
for(var l=-3;k<3;l++) {
for(var j=-3;j<3;j++) {
if(Math.round(Player.getX())+k==Math.round(Entity.getX(all[i]))&&Math.round(Player.getY())+l==
Math.round(Entity.getY(all[i]))&&Math.round(Player.getZ())+j==Math.round(Entity.getZ(all[i]))) {
knock(all[i],yaw);
}
}
}
}
}
}
}

var all = [];
function entityAddedHook(e) {
all.push(e);
}

function knock(e,yaw) {
var velocity = yaw+90;
var velX = Math.cos(yaw*(Math.PI/180));
var velZ = Math.sin(yaw*(Math.PI/180));
setVelX(e, velX*1.5);
setVelY(e, 1);
setVelZ(e, velZ*1.5);
}
