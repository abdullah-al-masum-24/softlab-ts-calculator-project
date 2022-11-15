const age = 23;         // My Age
let calresult : number;
let returnresult : number;
let finalresult : number;

// This function is calling to show calculation result.
resultshow(10, 5, '*' );

// This is a Calculation Result Showing Function
function resultshow( firstinput: number, secondinput: number, operator: string ) {

    returnresult = calculation( firstinput, secondinput, operator);
    finalresult  = returnresult + age;

    console.log( 'Result = '+ finalresult );
}

// This is a Calculation Function
function calculation( firstinput: number, secondinput: number, operator: string  ) {

    // Operator Check for Calculation
    if ( operator === '+' ) {

        calresult = firstinput + secondinput;

    }else if ( operator === '-' ) {

        calresult = firstinput - secondinput;

    }else if ( operator === '*' ) {

        calresult = firstinput * secondinput;

    }else if ( operator === '/' ) {

        calresult = firstinput / secondinput;

    }else {
       console.log('Please input any operator for calculation !!!!')
    }

    return calresult;

}