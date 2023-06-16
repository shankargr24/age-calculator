const date = new Date();
const currentdate = date.getDate();
const currentmonth = date.getMonth();
const currentyear = date.getFullYear();
var day = document.getElementById('date').value;
var month = document.getElementById('month').value;
var year = document.getElementById('year').value;

function count() {
    
    var day = document.getElementById('date').value;
    
    var month = document.getElementById('month').value;
    month--;
    
    var year = document.getElementById('year').value;
    
    if ((day !== undefined && day !== null && day != '') && (month !== undefined && month !== null && month !== '') && (year !== undefined && year !== null && year !== '')) {
        var inputdate = new Date(year, month, day);
        
        if (currentyear > year) {
            var diff = Math.abs(date.getTime() - inputdate.getTime());
            var yeardiff = (diff / 31536000000).toFixed(0);
            
            document.querySelector('.calyear').innerHTML = yeardiff;
            document.getElementById('erroryear').style.removeProperty("color");
            document.querySelector('.eroryear').innerHTML = "";
            document.getElementById('year').style.removeProperty("border-color");
        }
        else {
            document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";
            document.querySelector('.eroryear').innerHTML = "must be in past";
            document.getElementById('erroryear').style.color = "hsl(0, 100%, 67%)";
        }
        if (month >= 0 && month <= 11) {
            if (currentmonth >= month) {
                var monthAge = currentmonth - month;
                document.querySelector('.calmonth').innerHTML = monthAge -1;
                document.querySelector('.calyear').innerHTML = yeardiff;
            }
            else {
                yeardiff--;
                
                var monthAge = 12 + currentmonth - month;
                document.querySelector('.calmonth').innerHTML = (monthAge -1).toFixed(0);
            }
            document.getElementById('errormonth').style.removeProperty("color");
            document.querySelector('.errormonth').innerHTML = "";
            document.getElementById('month').style.removeProperty("border-color");
        }
        else {
            document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('errormonth').style.color = "hsl(0, 100%, 67%)";
            document.querySelector('.errormonth').innerHTML = "must be a valid month";
        }
        if (((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && day <= 31) || ((month == 3 || month == 5 || month == 8 || month == 10) && day <= 30) ||(month == 1 && day <= 28)) {
            if (currentdate >= day) {
                var dateAge = currentdate - day;
                document.querySelector('.calday').innerHTML = dateAge.toFixed(0);
            }
            else {
                monthAge--
                var dateAge = 31 + currentdate - day;
                document.querySelector('.calday').innerHTML = dateAge.toFixed(0);
            }
            document.getElementById('errorday').style.removeProperty("color");
            document.querySelector('.errordate').innerHTML = "";
            document.getElementById('date').style.removeProperty("border-color");
        }
        else {
            
            document.getElementById('date').style.borderColor = "hsl(0, 100%, 67%)";
            document.querySelector('.errordate').innerHTML = "must be a valid date";
            document.getElementById("errorday").style.color = "red";
        }

    }
    else {
        
        document.getElementById('date').style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById('errorday').style.color = "hsl(0, 100%, 67%)";
        document.getElementById('errormonth').style.color = "hsl(0, 100%, 67%)";
        document.getElementById('erroryear').style.color = "hsl(0, 100%, 67%)";
        document.querySelector('.errordate').innerHTML = "must be a valid date";
        document.querySelector('.errormonth').innerHTML = "must be a valid month";
        document.querySelector('.eroryear').innerHTML = "must be in past";
    }

}