<html>
<head>
    <meta charset="utf-8">
    <script src="jquery-1.11.3.js"></script>
    <script src="math.js" type="text/javascript"></script>
 <script type="text/javascript" src="d3.js"></script>

       
    <script type="text/javascript">
        jQuery(document).ready(function () {
            window.setTimeout(1000);
        });
    </script>
  
<script src="sortColumn.js"></script>
</head>
 
<body>
    
<div id="toptitle"></div>
  
       
<?php 
$servername = "localhost";
$username = "xyexye08";
$password = "Siyuan05";
$dbname = "web";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}     
$sql = "select * from resistanthtn";
$result = $conn->query($sql); 
$finfo = array();
if ($result->num_rows > 0) {    
while($row = $result->fetch_assoc()) {    
    $finfo[]=$row; }   
} else {
    echo "0 results";
}    
   $conn->close(); 
?>
    
    
<script type="text/javascript">    
    var coef = <?php echo json_encode($finfo, JSON_PRETTY_PRINT) ?>;
    
    var matcoefs = math.matrix();  
    matcoefs.resize([2,coef.length]); 
        
    
    
    for (i=0; i<coef.length; i++){
        
       
        x = coef[i];    
        var counter =0;
        for (var key in coef[i]) {    
            matcoefs = math.subset(matcoefs, math.index(i,counter), parseFloat( x[key]) ) ; 
            counter++;
        }
    }
    
</script>
 
    
    
  

    
    
    
    
<script type="text/javascript">   
    var ht = "<?php echo $_POST["height"]; ?>";
    var wt = "<?php echo $_POST["weight"]; ?>";    
    //if(typeof(ht.length) != 'undefined') {ht=1.75;};
    //if(typeof(wt.length) == 'undefined') {wt=75;};
    
    var bmi = Math.round(wt/ht/ht*100)/100;
    
var ckd = "<?php if(isset($_POST['ckd']) && 
   $_POST['ckd'] == "Yes") {  echo 1; } else { echo 0; } ?>";

var diabetes = "<?php if(isset($_POST['diabetes']) && 
   $_POST['diabetes'] == 'Yes') {  echo 1; } else { echo 0; } ?>";

var hypertension = "<?php if(isset($_POST['hypertension']) && 
   $_POST['hypertension'] == 'Yes') {  echo 1; } else { echo 0; } ?>";
  
var race = "<?php echo $_POST['race']; ?>";      
    
    
    if(race=="White") { 
        var white=1;
        var black=0; 
        var asian=0;
        var other=0;
    } else if(race="Black"){
        var white=0;
        var black=1; 
        var asian=0;
        var other=0;
    } 
    else if(race="Asian"){
        var white=0;
        var black=0; 
        var asian=1;
        var other=0;
    } else if(race="Other"){
        var white=0;
        var black=0; 
        var asian=0;
        var other=1;
    } 
    
    var ethnicity = "<?php if(isset($_POST['Hispanic']) && 
   $_POST['Hispanic'] == 'Yes') {  echo 1; } else { echo 0; } ?>";

    
    var results = [];    
    results.push(bmi);
    results.push(ckd);
    results.push(diabetes);
    results.push(hypertension);
    results.push(white);
    results.push(black);
    results.push(asian);
    results.push(other);
    results.push(ethnicity);    
    
    
    var userinput = math.matrix();      
    userinput.resize([results.length, 1]); 
    
    
  
    for	(ind = 0; ind < results.length; ind++) {        
        userinput = math.subset(userinput, math.index(ind, 0), parseFloat( results[ind]) ) ;
    };

   
    
    var products = math.multiply(matcoefs, userinput);
    //document.write("Probability: <br>" +  math.round(math.multiply(math.exp(products),100),2)  ); 
    
    
    //document.write("<br><br>Final coef: <br>" + math.squeeze(mat00) + "<br>");
    
    
   
    
    </script>   
    
<script>
    probs=[];
    
    for (i=0; i<100;i++){
     var prob = math.round( math.random(0,0.1)*100, 1 ) ;
     probs.push(prob);
    }
    for (i=100; i<200;i++){
     var prob = math.round( math.random(0.1,0.2)*100, 1 ) ;
     probs.push(prob);
    }
    for (i=200; i<300;i++){
     var prob = math.round( math.random(0.1,0.3)*100, 1 ) ;
     probs.push(prob);
    }
    for (i=300; i<393;i++){
     var prob = math.round( math.random(0.2,0.6)*100, 1 ) ;
     probs.push(prob);
    }
    
    
    
    //probs.sort();
 console.log(math.squeeze(probs));

                                         
</script>    


<script type="text/javascript" src = "pathDraw.js" ></script>
       
<script type="text/javascript" src = "pathVis.js" ></script>         

</body>
</html>