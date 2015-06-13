function entityAddedHook(e) {
var id = Entity.getEntityTypeId(e);
if(id==80) {
var ax = Entity.getX(e);
var ay = Entity.getY(e);
var az = Entity.getZ(e);
var vx = Entity.getVelX(e);
var vy = Entity.getVelY(e);
var vz = Entity.getVelZ(e);
var arrow = Level.spawnMob(ax+0.2,ay,az,id);
setVelX(arrow,vx);
setVelY(arrow,vy);
setVelZ(arrow,vz);
var arrow1 = Level.spawnMob(ax-0.2,ay,az,id);
setVelX(arrow1,vx);
setVelY(arrow1,vy);
setVelZ(arrow1,vz);
var arrow2 = Level.spawnMob(ax,ay,az+0.2,id);
setVelX(arrow2,vx);
setVelY(arrow2,vy);
setVelZ(arrow2,vz);
var arrow3 = Level.spawnMob(ax,ay,az-0.2,id);
setVelX(arrow3,vx);
setVelY(arrow3,vy);
setVelZ(arrow3,vz);
}
}
