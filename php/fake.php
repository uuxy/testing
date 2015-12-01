<html>
<head>
    <meta charset="utf-8">
    <script src="jquery-1.11.3.js"></script>
    <script src="math.js" type="text/javascript"></script>
 <script type="text/javascript" src="d3.js"></script>

       
    <script type="text/javascript">
        jQuery(document).ready(function () {
            window.setTimeout(10);
        });
    </script>
  
<script src="sortColumn.js"></script>
</head>
 
<body>
    
<div id="toptitle"></div>

    
    
<script>
    probs=[];
    
    for (i=0; i<100;i++){
     var prob = math.round( math.random(0,10), 1 ) ;
     probs.push(prob);
    }
    for (i=100; i<200;i++){
     var prob = math.round( math.random(10,20), 1 ) ;
     probs.push(prob);
    }
    for (i=200; i<300;i++){
     var prob = math.round( math.random(1,30), 1 ) ;
     probs.push(prob);
    }
    for (i=300; i<393;i++){
     var prob = math.round( math.random(2,60), 1 ) ;
     probs.push(prob);
    }
                                       
</script>    


<script type="text/javascript" src = "pathDraw.js" ></script>
       
<script type="text/javascript" src = "pathVis.js" ></script>         

</body>
</html>