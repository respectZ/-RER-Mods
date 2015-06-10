var record = false;
var allblock = [];
var is = false;
var newx;
var newy;
var newz;

function procCmd(cmd) {
var c=cmd.split(" ");
if(c[0]=="record") {
if(c[1]) {
if(c[1]=="on") {
if(!record) {
record=true;
clientMessage("You now are on recording mode !");
} else {
clientMessage("You are on recording mode");
}
}
if(c[1]=="off") {
if(record) {
clientMessage("Record stopped");
print("File Saved as record1.txt on your sdcard");
clientMessage("Please exit the game now, because this record very experiental");
clientMessage("and send the record1.txt to respectZ !");
clientMessage("after send the file to respectZ, delete the file please !");
save();
is=false;
record=false;
} else {
clientMessage("You are not recording");
}
}
} else {
clientMessage("Usage : on/off");
}
}
}

function useItem(x,y,z,i,b,s) {
var sides=[[x,y-1,z],[x,y+1,z],[x,y,z-1],[x,y,z+1],[x-1,y,z],[x+1,y,z]];
if(i>0&&i<256) {
if(record) {
if(!is) {
is=true;
newx=sides[s][0];
newy=sides[s][1];
newz=sides[s][2];
}
allblock.push([i,Player.getCarriedItemData(),sides[s][0]-newx,sides[s][1]-newy,sides[s][2]-newz]);
}
}
if(!record) {
for(var i=0;i<allblock.length;i++) {
setTile(sides[s][0]+allblock[i][2],sides[s][1]+allblock[i][3],sides[s][2]+allblock[i][4],allblock[i][0],allblock[i][1]);
}
}
}

function destroyBlock(x,y,z) {
if(record) {
if(!is) {
is=true;
newx=x;
newy=y;
newz=z;
}
allblock.push([0,0,x-newx,y-newy,z-newz]);
}
}

function save() {
try{
var sdcard=android.os.Environment.getExternalStorageDirectory().getPath();
var newFile=new java.io.File(sdcard,"record1.txt");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
for(var t=0;t<allblock.length;t++) {
outWrite.append("["+allblock[t][0]+","+allblock[t][1]+","+allblock[t][2]+","+allblock[t][3]+","+allblock[t][4]+"],");
outWrite.append("\n");
}
outWrite.append("Instant structure Mod Code Builder by respectZ");
outWrite.close();
} catch(err) {
print(err);
}
}
