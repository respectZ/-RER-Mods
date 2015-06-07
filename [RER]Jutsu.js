var tick = 40;
var chakra = 0;
var currentLevel = 1;
var maxChakra = currentLevel*250;
var fireConst = 100;
var firetick = [];
var needToLvlUp = Math.round(currentLevel*3);
var currentUse = 0;
var yaw;
var isPlay = false;

function newLevel () {
       chat("§9Jutsu Mod by RedEagleReborn");
       isPlay=true;
       chakra = maxChakra;
}

function modTick () {
       if(isPlay) {
              tick--;
              if(chakra<maxChakra&&tick<=0) {
                     tick = 40;
                     chakra +=1;
              }
       }
       if(currentUse==needToLvlUp) {
              currentLevel +=1;
              maxChakra = currentLevel*250;
              chakra = maxChakra;
              needToLvlUp = Math.round(currentLevel*3);
              chat("§bLevel Up !");
              chat("§bNow your level is Â§a"+currentLevel);
       }
}

function procCmd(cmd) {
       var c=cmd.split(" ");
       if(c[0]=="chakra") {
              chat("§aYour Current Chakra Â§9"+chakra);
       }
       if(c[0]=="level") {
              chat("§aYour Current Level Â§9"+currentLevel)
       }
       if(c[0]=="fire") {
              if(chakra>=fireConst) {
                     Jutsu("fire",Player.getX(),Player.getY(),Player.getZ());
                     currentUse +=1;
                     chakra -=fireConst;
              chat("§6Fire Jutsu !")
              } else {
                     chat("Â§4You don't have enough chakra")
              }
       }
}

function Jutsu(type,x,y,z) {
       if(type=="fire") {
              clientMessage("JutSuFire")
if(yaw>=45&&yaw<=135) {
       clientMessage("sembur")
                     Level.addParticle(ParticleType.flamme,x-1,y,z,0,0,0,5);
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
                     Level.addParticle(ParticleType.flamme,x,y,z-1,0,0,0,5);
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
                     Level.addParticle(ParticleType.flamme,x+1,y,z,0,0,0,5);
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
                     Level.addParticle(ParticleType.flamme,x,y,z+1,0,0,0,5);
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
}

function leaveGame() {
       isPlay=false;
}

function chat(a) {
       clientMessage("Â§c[RER] "+a);
}
