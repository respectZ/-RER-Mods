var tick = 40;
var fireTick = 120;
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
        if(cmd == "fire") {
                clientMessage("Fire Jutsu !");
                 Jutsu(getPlayerEnt(),Player.getX(),Player.getY(),Player.getZ());
        } else if(cmd == "wind") {
        clientMessage("Wind Jutsu !");
        windJutsu(getPlayerEnt(),Player.getX(),Player.getY(),Player.getZ());
}
}

 
function Jutsu(e,x,y,z) {
        if(yaw>=45&&yaw<=135) {
                if(getTile(x-1,y-1,z)==0 && fireTick == 120)
                        setTile(x-1,y-1,z,51)
                if(getTile(x-2,y-1,z)==0 && fireTick == 100)
                        setTile(x-2,y-1,z,51)
                if(getTile(x-3,y-1,z)==0 && fireTick == 80)
                setTile(x-3,y-1,z,51)
        if(getTile(x-4,y-1,z)==0 && fireTick == 60)
                setTile(x-4,y-1,z,51)
        if(getTile(x-5,y-1,z)==0 && fireTick == 40)
                setTile(x-5,y-1,z,51)
        if(getTile(x-6,y-1,z)==0 && fireTick == 20)
                setTile(x-6,y-1,z,51)
        if(getTile(x-7,y-1,z)==0 && fireTick == 0)
                setTile(x-7,y-1,z,51)
        fireTick = 120;
        if(getTile(x-1,y-1,z)==51 && fireTick == 120)
                        setTile(x-1,y-1,z,false)
                if(getTile(x-2,y-1,z)==51 && fireTick == 100)
                        setTile(x-2,y-1,z,false)
                if(getTile(x-3,y-1,z)==51 && fireTick == 80)
                setTile(x-3,y-1,z,false)
        if(getTile(x-4,y-1,z)==51 && fireTick == 60)
                setTile(x-4,y-1,z,false)
        if(getTile(x-5,y-1,z)==51 && fireTick == 40)
                setTile(x-5,y-1,z,false)
        if(getTile(x-6,y-1,z)==51 && fireTick == 20)
                setTile(x-6,y-1,z,false)
        if(getTile(x-7,y-1,z)==51 && fireTick == 0)
                setTile(x-7,y-1,z,false)
               
                }       if(yaw>=135&&yaw<=225) {
                if(getTile(x,y-1,z-1)==0 && fireTick == 120)
                        setTile(x,y-1,z-1,51)
                if(getTile(x,y-1,z-2)==0 && fireTick == 100)
                        setTile(x,y-1,z-2,51)
                if(getTile(x,y-1,z-3)==0 && fireTick == 80)
                setTile(x,y-1,z-3,51)
        if(getTile(x,y-1,z-4)==0 && fireTick == 60)
                setTile(x,y-1,z-4,51)
        if(getTile(x,y-1,z-5)==0 && fireTick == 40)
                setTile(x,y-1,z-5,51)
        if(getTile(x,y-1,z-6)==0 && fireTick == 20)
                setTile(x,y-1,z-6,51)
        if(getTile(x,y-1,z-7)==0 && fireTick == 0)
                setTile(x,y-1,z-7,51)
        fireTick = 120;
        if(getTile(x,y-1,z-1)==51 && fireTick == 120)
                        setTile(x,y-1,z-1,false)
                if(getTile(x,y-1,z-2)==51 && fireTick == 100)
                        setTile(x,y-1,z-2,false)
                if(getTile(x,y-1,z-3)==51 && fireTick == 80)
                setTile(x,y-1,z-3,false)
        if(getTile(x,y-1,z-4)==51 && fireTick == 60)
                setTile(x,y-1,z-4,false)
        if(getTile(x,y-1,z-5)==51 && fireTick == 40)
                setTile(x,y-1,z-5,false)
        if(getTile(x,y-1,z-6)==51 && fireTick == 20)
                setTile(x,y-1,z-6,false)
        if(getTile(x,y-1,z-7)==51 && fireTick == 0)
                setTile(x,y-1,z-7,false)
               
                }       if(yaw>=225&&yaw<=315) {
                        if(getTile(x+1,y-1,z)==0 && fireTick == 120)
                        setTile(x+1,y-1,z,51)
                if(getTile(x+2,y-1,z)==0 && fireTick == 100)
                        setTile(x+2,y-1,z,51)
                if(getTile(x+3,y-1,z)==0 && fireTick == 80)
                setTile(x+3,y-1,z,51)
        if(getTile(x+4,y-1,z)==0 && fireTick == 60)
                setTile(x+4,y-1,z,51)
        if(getTile(x+5,y-1,z)==0 && fireTick == 40)
                setTile(x+5,y-1,z,51)
        if(getTile(x+6,y-1,z)==0 && fireTick == 20)
                setTile(x+6,y-1,z,51)
        if(getTile(x+7,y-1,z)==0 && fireTick == 0)
                setTile(x+7,y-1,z,51)
        fireTick = 120;
        if(getTile(x+1,y-1,z)==51 && fireTick == 120)
                        setTile(x+1,y-1,z,false)
                if(getTile(x+2,y-1,z)==51 && fireTick == 100)
                        setTile(x+2,y-1,z,false)
                if(getTile(x+3,y-1,z)==51 && fireTick == 80)
                setTile(x+3,y-1,z,false)
        if(getTile(x+4,y-1,z)==51 && fireTick == 60)
                setTile(x+4,y-1,z,false)
        if(getTile(x+5,y-1,z)==51 && fireTick == 40)
                setTile(x+5,y-1,z,false)
        if(getTile(x+6,y-1,z)==51 && fireTick == 20)
                setTile(x+6,y-1,z,false)
        if(getTile(x+7,y-1,z)==51 && fireTick == 0)
                setTile(x+7,y-1,z,false)
                }       if(yaw>=315||yaw<=45) {
if(getTile(x,y-1,z+1)==0)
                if(getTile(x,y-1,z+1)==0 && fireTick == 120)
                        setTile(x,y-1,z+1,51)
                if(getTile(x,y-1,z+2)==0 && fireTick == 100)
                        setTile(x,y-1,z+2,51)
                if(getTile(x,y-1,z+3)==0 && fireTick == 80)
                setTile(x,y-1,z+3,51)
        if(getTile(x,y-1,z+4)==0 && fireTick == 60)
                setTile(x,y-1,z+4,51)
        if(getTile(x,y-1,z+5)==0 && fireTick == 40)
                setTile(x,y-1,z+5,51)
        if(getTile(x,y-1,z+6)==0 && fireTick == 20)
                setTile(x,y-1,z+6,51)
        if(getTile(x,y-1,z+7)==0 && fireTick == 0)
                setTile(x,y-1,z+7,51)
        fireTick = 120;
        if(getTile(x,y-1,z+1)==51 && fireTick == 120)
                        setTile(x,y-1,z+1,false)
                if(getTile(x,y-1,z+2)==51 && fireTick == 100)
                        setTile(x,y-1,z+2,false)
                if(getTile(x,y-1,z+3)==51 && fireTick == 80)
                setTile(x,y-1,z+3,false)
        if(getTile(x,y-1,z+4)==51 && fireTick == 60)
                setTile(x,y-1,z+4,false)
        if(getTile(x,y-1,z+5)==51 && fireTick == 40)
                setTile(x,y-1,z+5,false)
        if(getTile(x,y-1,z+6)==51 && fireTick == 20)
                setTile(x,y-1,z+6,false)
        if(getTile(x,y-1,z+7)==51 && fireTick == 0)
                setTile(x,y-1,z+7,false)
                }

                    }
