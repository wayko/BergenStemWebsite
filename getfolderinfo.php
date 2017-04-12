<?php
$files = "";
function returnimages($dirname=".") {
$curimage=0;
$location = 'ftp://dreamcpu:B4v0e1jj@www.dreamcpu.com/public_html/images/';

if ($handle = opendir($location)) {
    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
	$ext = substr($entry,strpos($entry, '.'),4);
		if($entry != "." && $entry != ".."){
		$allowed_extenstions= array(".jpg",".jpeg",".png",".gif");
			if(in_array($ext,$allowed_extenstions)){
	
			echo "\n";
		echo 'galleryarray['.$curimage.']="'.$entry.'";';
		$curimage++;
		}
	}
    }
    closedir($handle);
}
}
//this will be written to client side
$location = 'http://www.dreamcpu.com/images';
echo 'var locations ="' .$location. '";';
echo 'var galleryarray=new Array();'; //Define array in JavaScript
returnimages() //Output the array elements containing the image file names

?>