$(function () {
    var planeA =$("#planeA");
    TweenMax.to(planeA, 15, {bezier:{type:"cubic", values:[{x:11985, y:3323},  {x:7840, y:2308}, {x:3087, y:4009}, {x:1437, y:6060}], autoRotate:"true"}});
});