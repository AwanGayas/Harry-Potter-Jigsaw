var canvas=new fabric.Canvas('myCanvas');
harry_x=10;
harry_y=10;
harry_object="";
blockImageObject="";
function showHarry()
{
    fabric.Image.fromURL("harry potter.png",function (Img){
        harry_object=Img;
        harry_object.scaleToWidth(150);
        harry_object.scaleToHeight(150);
        harry_object.set({
            top:harry_y,
            left:harry_x
        });
        canvas.add(harry_object);
    });
}


function New_Image(get_image)
{
    fabric.Image.fromURL(get_image,function (Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(70);
        blockImageObject.scaleToHeight(70);
        blockImageObject.set({
            top:harry_y,
            left:harry_x
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    if(keypress=='37')
    {
        left();
    }

    if(keypress=='38')
    {
        up();
    }

    if(keypress=='39')
    {
        right();
    }

    if(keypress=='40')
    {
        down();
    }
    if(keypress=='49')
    {
        New_Image('h1.png');
    }

    if(keypress=='50')
    {
        New_Image('h2.png');
    }

    if(keypress=='51')
    {
        New_Image('h3.png');
    }

    if(keypress=='52')
    {
        New_Image('h4.png');
    }

    if(keypress=='53')
    {
        New_Image('h5.png');
    }

    if(keypress=='54')
    {
        New_Image('h6.png');
    }

    if(keypress=='55')
    {
        New_Image('h7.png');
    }

    if(keypress=='56')
    {
        New_Image('h8.png');
    }

    if(keypress=='57')
    {
        New_Image('h9.png');
    }

}

function up()
{
    if(harry_y>=0)
    {
        harry_y=harry_y-10;
        canvas.remove(harry_object);
        showHarry();
    }
}

function down()
{
    if(harry_y<=750)
    {
        harry_y=harry_y+10;
        canvas.remove(harry_object);
        showHarry();
    }
}

function left()
{
    if(harry_x>=0)
    {
        harry_x=harry_x-10;
        canvas.remove(harry_object);
        showHarry();
    }
}

function right()
{
    if(harry_x<=750)
    {
        harry_x=harry_x+10;
        canvas.remove(harry_object);
        showHarry();
    }
}