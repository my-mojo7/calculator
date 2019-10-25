let a = num1
let b = num2
let result = eval

$("body").on("click", function (calculate) {
            let eval(a + opreator + b);

            function calculate(opreator, res) {

                document.getElementById("num1").value;
                document.getElementById("num2").value;
                eval(a + opreator + b);
                document.getElementById(result).value = result;
                return result;
            }


            <
            input type = "num1"
            typ = "num2"
            value = "numberA" / > < br / >
                <
                input type = "num1"
            typ = "num2"
            value = "numberB" / > < br / >
                <
                input type = "num1"
            typ = "num2"
            value = "Result" / >



                <
                div class = "button" >
                <
                button onclick = "calculate('+',text3)" > + < /button> <
                button onclick = "calculate('-',text3)" > - < /button><br / > < button onclick = "calculate('/',text3)" > /</button >
                <
                button onclick = "calculate('*',text3)" > X < /button> <
                /div>   <
                input type = "reset"
            value = "Reset"
            onclick = "clear()" / >
                <
                /form> 





















            //   function clear() {
            //     document.getElementById("calc").reset();
            //   }




            //     $("#current_time").html(moment().format("hh:mm:ss a"))



            // let containerDiv = $("#dynamic_time_container");

            // $("body").on("click", function (event) {
            //             let realTarget = $(event.target);


            //             if (realTarget.attr("btn_type") === "city_btn") {
            //                 // create the p tag with the time as content
            //                 let newP = $("<p>"); // <p></p>
            //                 containerDiv.append(newP)

            //                 let deltaHrs = parseInt(realTarget.attr("hrs"));

            //                 let currentLocalTime = moment();
            //                 let cityTime = currentLocalTime.add(deltaHrs, 'hours');
            //                 let cityName = realTarget.attr("city_name");
            //                 newP.html(`${cityName} time: <span id="${cityName.toLowerCase()}_time">${cityTime.format("hh:mm:ss a")}</span>`)