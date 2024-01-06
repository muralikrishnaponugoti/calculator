"use strict";
var Mdisplay=document.getElementsByTagName('h1');
Mdisplay[0].innerText='';
var Sdisplay=document.getElementsByTagName('p');
Sdisplay[0].innerText='';
var symbol=document.getElementsByClassName('symbol');
var button=document.getElementsByTagName('button');
var current='';
var started=0;
var operator='';
var declared=0;
function b_click(){
     current=this.getAttribute('data-value');
    if(current=='AC'){
        Mdisplay[0].innerText='';
        Sdisplay[0].innerText='';
        started=0;
        declared=0;
    }
    else{
        let splitString=Sdisplay[0].innerText.split('');
        switch(current){
            case '+/-':
                if(started==0){
                    Sdisplay[0].innerText='';
                    if(Mdisplay[0].innerText=='')
                      Mdisplay[0].innerText='-';
                    else
                      Mdisplay[0].innerText='';
                }
                else{
                    if(declared==0)
                        Sdisplay[0].innerText +=Mdisplay[0].innerText;
                    Mdisplay[0].innerText='';
                    if(['+','*','/','%',''].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1])){
                        splitString[Sdisplay[0].innerText.length-1]='-'
                        Sdisplay[0].innerText=splitString.join('');
                        operator='-' 
                    }
                    else{
                        if(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]=='-'){
                            splitString[Sdisplay[0].innerText.length-1]='+';
                            Sdisplay[0].innerText=splitString.join('');
                            operator='+';
                        }
                        else{
                            Sdisplay[0].innerText +='-';
                            operator='-';
                        }
                    }
                }
                declared=0;
                break;
            case '%':
                if(declared==0)
                        Sdisplay[0].innerText +=Mdisplay[0].innerText;
                Mdisplay[0].innerText='';
                if(started==0){
                    break;
                }
                else{
                    
                    if(['+','*','/','-',''].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1])){
                        splitString[Sdisplay[0].innerText.length-1]='%';
                        Sdisplay[0].innerText=splitString.join('');
                        operator='%'; 
                    }
                    else{
                        if(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]=='%'){
                            splitString[Sdisplay[0].innerText.length-1]='%';
                            Sdisplay[0].innerText=splitString.join('');
                            operator='%';
                        }
                        else{
                            Sdisplay[0].innerText +='%';
                            operator='%';
                        }
                    }
                }
                declared=0;
                break;
            case '/':
                if(declared==0)
                        Sdisplay[0].innerText +=Mdisplay[0].innerText;
                Mdisplay[0].innerText='';
                if(started==0){
                    break;
                }
                else{
                    if(['+','*','%','-',''].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1])){
                        splitString[Sdisplay[0].innerText.length-1]='/';
                        Sdisplay[0].innerText=splitString.join('');
                        operator='/'; 
                    }
                    else{
                        if(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]=='/'){
                            splitString[Sdisplay[0].innerText.length-1]='/';
                            Sdisplay[0].innerText=splitString.join('');
                            operator='/';
                        }
                        else{
                            Sdisplay[0].innerText +='/';
                            operator='/';
                        }
                    }
                }
                declared=0;
                break;
            case '*':
                if(declared==0)
                        Sdisplay[0].innerText +=Mdisplay[0].innerText;
                Mdisplay[0].innerText='';
                if(started==0){
                    break;
                }
                else{
                    if(['+','%','/','-',''].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1])){
                        splitString[Sdisplay[0].innerText.length-1]='*';
                        Sdisplay[0].innerText=splitString.join('');
                        operator='*'; 
                    }
                    else{
                        if(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]=='*'){
                            splitString[Sdisplay[0].innerText.length-1]='*';
                            Sdisplay[0].innerText=splitString.join('');
                            operator='*';
                        }
                        else{
                            Sdisplay[0].innerText +='*';
                            operator='*';
                        }
                    }
                }
                declared=0;
                break;
            case '-':
                if(declared==0)
                        Sdisplay[0].innerText +=Mdisplay[0].innerText;
                Mdisplay[0].innerText='';
                if(started==0){
                    break;
                }
                else{
                    if(['+','*','/','%'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1])){
                        splitString[Sdisplay[0].innerText.length-1]='-';
                        Sdisplay[0].innerText=splitString.join('');
                        operator='-'; 
                    }
                    else{
                        if(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]=='-'){
                            splitString[Sdisplay[0].innerText.length-1]='-';
                            Sdisplay[0].innerText=splitString.join('');
                            operator='-';
                        }
                        else{
                            Sdisplay[0].innerText +='-';
                            operator='-';
                        }
                    } 
                }
                declared=0;
                break;
            case '+':
                if(declared==0)
                {
                    Sdisplay[0].innerText +=Mdisplay[0].innerText;
                }
                Mdisplay[0].innerText='';
                if(started==0){
                   break;
                }
                else{
                    if(['%','*','/','-',''].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1])){
                        splitString[Sdisplay[0].innerText.length-1]='+';
                        Sdisplay[0].innerText=splitString.join('');
                        operator='+'; 
                    }
                    else{ 
                        if(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]=='+'){
                            splitString[Sdisplay[0].innerText.length-1]='+';
                            Sdisplay[0].innerText=splitString.join('');
                            operator='+';
                        }
                        else{
                            Sdisplay[0].innerText +='+';
                            operator='+';
                        }
                    }
                }
                declared=0;
                break;
            case '=':
                if(started==0){
                    Mdisplay[0].innerText='';
                    Sdisplay[0].innerText='';
                }
                else{
                    if(['%','-','+','/','*'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        if(Mdisplay[0].innerText[Mdisplay[0].innerText.length-1]=='.')
                            Mdisplay[0].innerText +='';
                        var expression=Sdisplay[0].innerText + Mdisplay[0].innerText;
                        Sdisplay[0].innerText += Mdisplay[0].innerText;
                        Mdisplay[0].innerText=parseInt(eval(expression),10);// **here when we trying to calculate 02+02 then in this equalto case lines after this are not executing 
                        declared=1;
                    }
                }
                break;
            case '.':
                if(Mdisplay[0].innerText!='')
                    Mdisplay[0].innerText +='.';
                break;
            case '0':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '1':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '2':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '3':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '4':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '5':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '6':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '7':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '8':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
            case '9':
                if(declared)
                {
                    Mdisplay[0].innerText='enter operator';
                    setTimeout(function(){
                        Mdisplay[0].innerText='';
                    },1000);
                    if(['/','*','%','+','-'].includes(Sdisplay[0].innerText[Sdisplay[0].innerText.length-1]))
                    {
                        Mdisplay[0].innerText+=current;
                    }
                    break;
                }
                else{
                    Mdisplay[0].innerText+=current;
                }
                started=1;
                declared=0;
                break;
                  
        }
    }

}
for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('click',b_click)
}