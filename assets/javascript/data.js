var quiz = [
    {
        question: 'What are JavaScript Data Types?',
        answers: [
            ['String', 'Number', 'Boolean', 'Object', 'Array', 'Null', 'Undefined'],
            ['Boolean', 'Object', 'Array', 'Null', 'Undefined'],
            ['String', 'Number', 'Boolean', 'Object', 'Array', 'Undefined'],
            ['String', 'Number', 'Boolean', 'Object', 'Null', 'Undefined']
        ],
        answer: 'answer1'
    },
    {
        question: 'Which company developed JavaScript?',
        answers: [ 
            ['Google'], 
            ['Netscape'], 
            ['Microsoft'], 
            ['Starbucks'] 
        ],
        answer: 'answer2'
    },
    {
        question: 'What is \'this\' keyword in JavaScript?',
        answers: [ 
            ['window'], 
            ['DOM'], 
            ['object name'], 
            ['this keyword is used to point at the current object in the code'] 
        ],
        answer: 'answer4'
    },
    {
        question: 'Inside which HTML element do we put JavaScript code?',
        answers: [ 
            ['<body>'], 
            ['<head>'], 
            ['<script>'], 
            ['<javascript>'] 
        ],
        answer: 'answer3'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of an HTML element with id "myName"?',
        answers: [ 
            ['document.getelementByid("myname").innerHTML'], 
            ['document.getElementById("myName").style.text'],
            ['myName.text'],  
            ['document.getElementById("myName").innerHTML'] 
        ],
        answer: 'answer4'
    },    
    {  
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [ 
            ['<script src=xxx.js'], 
            ['<script href="xxx.js"'], 
            ['<js src="xxx.js"'], 
            ['<script src="xxx.js"'] 
        ],
        answer: 'answer4'
    },          
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answers: [ 
            ['true'], 
            ['false'], 
            [], 
            [] 
        ],
        answer: 'answer2'
    },
    { 
        question: 'How do you write "Hello World" in an alert box?' ,
        answers: [ 
            ['alert("Hello World")'], 
            ['confirm("Hello World")'], 
            ['console.log("Hello World")'], 
            ['document.alert("Hello World")'] 
        ],
        answer: 'answer1'
    },
    { 
        question: 'Which symbol is used for comments in Javascript?' ,
        answers: [ 
            ['<!-- This is a comment -->'], 
            ['`This is a comment`'], 
            ['// This is a comment'], 
            ['(* This is a comment *)'] 
        ],
        answer: 'answer3'
    },
    { 
        question: 'How can the font size of an element with id "myName" be changed using jQuery?' ,
        answers: [ 
            ['$(myName).css(\'font-size\',\'24px\')'], 
            ['$(#myName).css(\'fontsize\',\'24px\')'], 
            ['$(#myName).css(\'font-size\',\'24px\')'], 
            ['$(.myName).css(\'font-size\',\'24px\')'] 
        ],
        answer: 'answer3'
    },
    { 
        question: 'Choose the correct FOR loop structure' ,
        answers: [ 
            ['for i=0; i < 5; i++'], 
            ['FOR (i=0; i<5)'], 
            ['for (i <5; i++)'], 
            ['for (i=0; i<5; i++)'] 
        ],
        answer: 'answer4'
    },
    { 
        question: 'What is the result of 1+1+"1"?' ,
        answers: [
            ['21'],
            ['111'],
            ['3'],
            ['undefined'] 
        ],
        answer: 'answer1'
    },
    { 
        question: 'How to write an IF statement in JavaScript?' ,
        answers: [
            ['if (x === 5)'],
            ['if (x === 5) then'],
            ['if x === 5'],
            ['IF (x = 5) THEN']
        ],
        answer: 'answer1'
    },
    { 
        question: 'JavaScript is the same as Java', 
        answers: [
            ['true'],
            ['false'],
            [],
            []
        ],
        answer: 'answer2'
    },
    { 
        question: 'How do you declare a JavaScript variable?' ,
        answers: [ 
            ['variable myVar;'],
            ['var myVar;'],
            ['v myVar;'],
            ['int myVar;']
        ],
        answer: 'answer2'
    },
    { 
        question: 'How to remove the first element of array nums = [1, 2, 3, 4]',
        answers: [
            ['nums.pop();'],
            ['nums.remove(0);'],
            ['nums.shift();'],
            ['nums[0] = null;'] 
        ],
        answer: 'answer3'
    },
    { 
        question: 'How do you print text to the console?' ,
        answers: [
            ['document.write();'],
            ['console.write();'],
            ['write();'],
            ['console.log();'] 
        ],
        answer: 'answer4'
    },
    { 
        question: 'How do you add the number 4 to number array called "nums"?' ,
        answers: [
            ['nums.add(4);'],
            ['nums.push(4)'],
            ['nums.append(4)'],
            ['nums += 4'] 
        ],
        answer: 'answer2'
    },
    { 
        question: 'Is JavaScript case-sensitive?' ,
        answers: [
            ['Yes'],
            ['No'],
            [],
            [] 
        ],
        answer: 'answer1'
    },
    { 
        question: 'How do you create a function in JavaScript?',
        answers: [
            ['function someFunction()'],
            ['func someFunction()'],
            ['function  = someFunction()'],
            ['int someFunction()']
        ],
        answer: 'answer1'
    },
    { 
        question: 'Which event occurs when the user clicks on an HTML element?' ,
        answers: [
            ['onmouseclick'],
            ['onclick'],
            ['click'],
            ['onchange']
        ],
        answer: 'answer2'
    },
    { 
        question: 'How do you add a reference the css file "style.css" file in your html file?' ,
        answers: [
            ['<css src="style.css"'],
            ['<link src="style.css"'],
            ['<style href="style.css"'],
            ['<link href="style.css"']
        ],
        answer: 'answer4'

    }, 
    { 
        question: 'What are different types of pop up boxes available in JavaScript?' ,
        answers: [
            ['alert'],
            ['confirm'],
            ['prompt'],
            ['all of the above']
        ],
        answer: 'answer4'
    },
    { 
        question: 'What is an object?' ,
        answers: [
            ['A collection of named values'],
            ['A material thing that can be seen and touched'],
            ['Magic'],
            ['undefined']
        ],
        answer: 'answer1'
    },
    { 
        question: 'How do you create an array?' ,            
        answers: [
            ['var arr = new Array(1,2,3);'],
            ['var arr = [1,2,3];'],
            ['var arr = [];'],
            ['all of the above']
        ],
        answer: 'answer4'
    },
    { 
        question: 'A function defined inside another function has access to the outer function\'s variables' ,
        answers: [
            ['true'],
            ['false'],
            [],
            []
        ],
        answer: 'answer1'
    },
    { 
        question: 'What does "isNaN" function do?' ,
        answers: [
            ['Checks if a value is a number'],
            ['Checks if a value is not a number'],
            ['undefined'],
            ['deprecated']
        ],
        answer: 'answer2'
    },
    { 
        question: 'This is the correct way to generate a whole random number between 0 and 99' ,
        answers: [
            ['Math.random(0-99)'], 
            ['Math.random(99)'], 
            ['Math.floor(Math.random() * 100)'],
            ['Math.floor(Math.random() * 99)']
        ],
        answer: 'answer3'
    },
    { 
        question: 'What is the difference between "==" and "==="?',
        answers: [
            ['no difference'],
            ['== will do type conversion, but === will not'],
            ['== is the old way of doing comparisons'],
            ['undefined']
        ],
        answer: 'answer2'
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            ['==='],
            ['='],
            ['+'],
            [':=']
        ],
        answer: 'answer2'
    }
];