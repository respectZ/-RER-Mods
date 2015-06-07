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
       //chakra = ModPE.readData("chakra");
       chakra = maxChakra;
       currentLevel = ModPE.readData("level")
       fireConst= ModPE.readData("fireconst")
       currentUse = ModPE.readData("use")
       maxChakra = currentLevel*250;
       needToLvlUp = Math.round(currentLevel*3);
}

function modTick () {
       if(isPlay) {
              tick--;
              if(chakra<maxChakra&&tick<=0) {
                     tick = 40;
                     chakra += currentLevel*2;
              }
       }
       if(currentUse==needToLvlUp) {
              currentLevel +=1;
              maxChakra = currentLevel*250;
              chakra = maxChakra;
              needToLvlUp = Math.round(currentLevel*3);
              chat("§bLevel Up ! Increase max chakra and stronger jutsu !");
              chat("§bNow your level is §a"+currentLevel);
		fireConst = Math.round(maxChakra/3);
       }
       yaw = getYaw();
       if(getYaw>360) {
              yaw -=360;
       }
       if(getYaw<0) {
              yaw +=360;
       }
}

function procCmd(cmd) {
       var c=cmd.split(" ");
       if(c[0]=="chakra") {
              chat("§aYour Current Chakra §9"+chakra);
       }
       if(c[0]=="level") {
              chat("§aYour Current Level §9"+currentLevel)
       }
       if(c[0]=="fire") {
              if(chakra>=fireConst) {
                     Jutsu("fire",Player.getX(),Player.getY(),Player.getZ());
                     currentUse +=1;
                     chakra -=fireConst;
              chat("§6Fire Jutsu !")
              } else {
                     chat("§4You don't have enough chakra")
              }
       }
}

function Jutsu(type,x,y,z) {
       if(type=="fire") {
if(yaw>=45&&yaw<=135) {
Level.addParticle(ParticleType.flamme,x-1,y,z,0,0,0,5);
for(var i=1;i<=currentLevel*2+1;i++) {
if(getTile(x-i,y-1,z)==0)
setTile(x-i,y-1,z,51);
}
}
if(yaw>=135&&yaw<=225) {
Level.addParticle(ParticleType.flamme,x,y,z-1,0,0,0,5);
for(var i=1;i<=currentLevel*2+1;i++) {
if(getTile(x,y-1,z-i)==0)
setTile(x,y-1,z-i,51);
}
}
if(yaw>=225&&yaw<=315) {
Level.addParticle(ParticleType.flamme,x+1,y,z,0,0,0,5);
for(var i=1;i<=currentLevel*2+1;i++) {
if(getTile(x+i,y-1,z)==0)
setTile(x+i,y-1,z,51);
}
}
if(yaw>=315||yaw<=45) {
                     Level.addParticle(ParticleType.flamme,x,y,z+1,0,0,0,5);
for(var i=1;i<=currentLevel*2+1;i++) {
if(getTile(x,y-1,z+i)==0)
setTile(x,y-1,z+i,51);
}
}
}
}

function leaveGame() {
       isPlay=false;
}

function chat(a) {
       clientMessage("§c[RER] "+a);
       ModPE.saveData("chakra",chakra);
       ModPE.saveData("level",currentLevel)
       ModPE.saveData("fireconst",fireConst)
       ModPE.saveData("use",currentUse)
}
