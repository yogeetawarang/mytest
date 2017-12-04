'use strict';
module.exports = (title, response, count)  > '<style>
body {
position: relative;
font-family: 'Open Sans', sans-serif;
        }   margin: 0 auto;
h1 {margin-bottom: 20px;
line-height: 1.1;
font-family: 'Open Sans', sans-serif; font-weight: 400;
} color: White;
p { font-weight: 300;
}.navbar {
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0,
0, 0, .12);
} font-family: 'Open Sans', sans-serif;
.navbar-dark .navbar-brand { } color: #fff !important;
#home .view {
} height: 100vh;
.f ull-bg-im g, .view .content, .view .mask {
left: 0; overflow: hidden; height: 100%; width: 100%;
} top: 0;
.flex-center { display: flex;
justify-content: center; align-items: center; height: 100%;
}
.full-bg-img {
} color: #fff;
#home p,
.title {
} font-weight: 100;
.primary-color {
} background-color: #4285F4!important;
.navbar-fixed-top { } top: 0;
.n avbar-fix ed-botto m, .navbar-fixed-top {
position: fixed; right: 0;
left: 0;
} z-index: 1030;
.h eader,
.footer {
} display: none;
.title {
display: block; }
</style>
<!doctype html>
<html class="no-js" lang=""> <head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge"> <title>${title}</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/
css?family=Open+Sans:300,400" rel="stylesheet"> </head>
<body>
   <!--Navbar  >
<nav class="navbar navbar-fixed-top navbar-dark primary-color">
<div class="container" style="text-align:center;padding:20px
0;">
</nav>
<section id="home">
<div class="view primary-color">
<div class="full-bg-img flex-center">
<ul style="list-style: none;-webkit-padding-start:0;
text-align: center;"><li><h1 class="h1-responsive title">${response}</h1> </li>
${(typeof count   = 'undefined') ? '<li><p>DynamoDB
Linux Academy
   <span style="color:White;">${title}</span> </div>
    Request Counter: <span class="">' + count + '</span></p></li>' : ''}
                    </ul>
                </div>
            </div>
</section> </body>
</html>';