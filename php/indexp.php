<!DOCTYPE html>
<html>
  <meta charset="UTF-8">
<head>
    <title>Submit Form Using AJAX PHP and javascript</title>
    <script src="jquery-1.11.3.js"></script>
    

    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            window.setTimeout(1000);
        });
    </script>

    <script type="text/javascript" src="patientInfo.js"></script>


</head>

<body>
    <div id="mainform">
        <div class="formSubmit">
            <h2>Submit Form Using AJAX,PHP and javascript</h2>
            <!-- Required Div Starts Here -->

            <form id="form" name="form">
                <h3>Patient's Demographic, vital and health status</h3>

                <div>
                    <label>age :</label> 
                    <input id="age" type="text"> </br>
                    
					<label>gender :</label>
                    <input id="gender" type="text"></br>
                    
					<label>Race/ethnicity :</label>
                    <input id="white" type="text"></br>
					
                    <label>Geographic region:</label>
                    
					<select id="region">
                        <option value="null">Please Choose One...</option>
                        <option value="East">East</option>
                        <option value="SouthEast">South East</option>
                        <option value="MidWest">Mid West</option>
                        <option value="West">West</option>
					</select></br>
					
					
					
					<input id="comCkd" type="checkbox" name="ckd"> Chronic kidney disease<br>
					<input id="comHtn" type="checkbox" name="htn"> Hypertension<br>
					<input id="comDiabetes" type="checkbox" name="Diabetes"> Diabetes<br>
					
					
                    <input id="submit" onclick="patientInfo()" type="button" value="Submit">
                </div>
            </form>

            
        </div>
       
    </div>



</body>

</html>