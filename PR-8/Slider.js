const Images = [
    "https://th.bing.com/th/id/R.124a1db7be2c13d936d8a71bd43ffd5f?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
    "https://media.istockphoto.com/id/685220630/photo/mt-fuji-japan.jpg?s=612x612&w=0&k=20&c=FNKQPlrIRsfFoJw7xy1qpptKuSkLaklBi9wyxULlK5A=",
    "https://www.pixelstalk.net/wp-content/uploads/2016/06/Nature-Wallpaper.jpg",
    "https://wallpapercave.com/wp/wp4088642.jpg",
    "https://wallpapercave.com/wp/uUqxVHp.jpg",
    "https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo=",
    "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg"
];



let index = 0;
const sliderImage = document.getElementById("slider-image");

function showImage() {
  sliderImage.src = Images[index];
}

showImage();

setInterval(() => {
  index = (index + 1) % Images.length;
  showImage();
}, 1500);