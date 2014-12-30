
(function($, document) {
    var endNum = promptUser(),
        $body = $("body");

    for (var i = 1; i < endNum+1; i++) {

        if (i % 5 == 0 && i % 3 == 0) {
            $body.append("FizzBuzz");
            newLine();
        }
        else if (i % 5 == 0) {
            $body.append("Buzz");
            newLine();
        }
        else if (i % 3 == 0) {
            $body.append("Fizz");
            newLine();
        }
        else {
            $body.append(i);
            newLine();
        }

    }

    function newLine() {
        $body.append("<hr />");
    }

    function promptUser() {
        var res = prompt("Enter a value and see this app count to the desired value while replacing values divisible by 3 with 'Fizz', and 5 with 'Buzz'"),
            resNum = +res;

        if (isNaN(resNum) || resNum > 100) {
            var newNum = prompt("Please enter a number smaller than 100.");
            return +newNum;
        }
        else {
            return resNum;
        }
    }

})(jQuery, document);