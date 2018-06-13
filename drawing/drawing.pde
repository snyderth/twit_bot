void setup ()
{
  size(500,500); 
  for(int i = 0; i < 500; i++)
  {
     float x = random(width);
     float y = random(height);
     float r = random(0, 255);
     float g = random(0,255);
     float b = random(0,255);
     noStroke();
     fill(r,g,b);
     ellipse(x,y,10,10);
  }
  save(args[0]);
  exit();
}
