<html>
  <head>
    <title>Articles</title>
    <link type="text/css" rel="stylesheet" href="/src/styles/materialize.min.css"></link>
    <link type="text/css" rel="stylesheet"  href="/src/styles/articles.css"></link>
    <link rel="icon" type="image/png" href="/src/images/favicon.png"/>
    <meta name='viewport' content='width=device-width' />
  </head>
  <body>
    <div class="parent_container">
      <div class="row">
        <div class="col s12 m12 l12" style="margin-top: -1%;">
          <div id="article_container" class="main_container">
        </div>
      </div>
    </div>
    <script type="text/javascript">
      var DATA = <%-JSON.stringify(news)%>;
      WebFontConfig = {
        google: { families: [ 'Roboto:400,300,500:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    </script>
    <script type="text/javascript" src="/src/public/article.package-v16.js"></script>
  </body>
<html>


  <!--  Scripts-->

   
