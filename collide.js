function Collide (lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
lwallLeftEdge=lwall.x;
if (bulletRightEdge>=lwallLeftEdge){
return true;
}
return false;
}