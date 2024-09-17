module.exports = function toReadable(number) {
    let str = number.toString();    
    let a = "one";
    let b = "two";
    let c = "three";
    let d = "four";
    let e = "five";
    let f = "six";
    let g = "seven";
    let h = "eight";
    let j = "nine";
    let k = "ten";
    let l = "eleven";
    let m = "twelve";
    let nn = "thirteen";
    let dt = "fourteen";
    let et = "fifteen";
    let ft = "sixteen";
    let gt = "seventeen";
    let ht = "eighteen";
    let jt = "nineteen";
    let n = "twenty";    
    let p = "thirty";
    let r = "forty";
    let s = "fifty";
    let t = "sixty";
    let u = "seventy";
    let v = "eighty";
    let x = "ninety";
    let y = "hundred";
    let z = "zero";
    let newArr = []; 
    let item = "";     
    let result = "";
    if(number == 0){
        item = z;
        newArr.push(item)
    }
    while(str.length>0){
        if(str.length === 3){
            item = +str[0];
            str = str.slice(-2);
            console.log(str);
        }else if( str.length == 2 & +str > 9 & +str < 20){
            item = +str;
            str = "";
            console.log(item);
        }else if(str.length == 2 & number > 19){
            item = +str[0]*10;
            str = str.slice(-1);
            console.log(item);
         }else if(str.length = 1){
            item = +str[0];
            str = "";
            console.log(item);
         }    
        switch (item) {            
            case 1:
                item = a;
                newArr.push(item);                 
                break;
            case 2:
                item = b;
                newArr.push(item);
                break;
            case 3:
                item = c;
                newArr.push(item);
                break;
            case 4:
                item = d;
                newArr.push(item);
                break;
            case 5:
                item = e;
                newArr.push(item);
                break;
            case 6:
                item = f;
                newArr.push(item);
                console.log(newArr);
                break;
            case 7:
                item = g;
                newArr.push(item);
                break;
            case 8:
                item = h;
                newArr.push(item);
                break;
            case 9:
                item = j;
                newArr.push(item);
                break;  
            case 10:
                item = k;
                newArr.push(item);
                newArr.push("");
                str = "";
                break;
            case 11:
                item = l;
                newArr.push(item);
                newArr.push("");              
                break;
            case 12:
                item = m;
                newArr.push(item); 
                newArr.push("");              
                break;
            case 13:
                item = nn;                
                newArr.push(item); 
                newArr.push("");
                break; 
            case 14:
                    item = dt;                
                    newArr.push(item);
                    newArr.push(""); 
                    break;                  
            case 15:
                    item = et;                
                    newArr.push(item); 
                    newArr.push("");                    
                    break;                  
            case 16:
                    item = ft;                
                    newArr.push(item);
                    newArr.push("");                      
                    break;                  
            case 17:
                    item = gt;                
                    newArr.push(item); 
                    newArr.push("");                  
                    break;                  
            case 18:
                    item = ht;                
                    newArr.push(item); 
                    newArr.push("");                     
                    break;                  
            case 19:
                    item = jt;                
                    newArr.push(item); 
                    newArr.push("");                    
                    break;   
            case 20:
                item = n;
                newArr.push(item);                         
                item = "";                            
                break;
            case 30:
                item = p;
                newArr.push(item); 
                console.log(newArr);                       
                item = "";
                break;
            case 40:
                item = r;
                newArr.push(item);                         
                item = "";
                break;
            case 50:
                item = s;
                newArr.push(item);                        
                item = "";
                break;
            case 60:
                item = t;
                newArr.push(item);                        
                item = "";
                break;
            case 70:
                item = u; 
                newArr.push(item);                        
                item = "";
                break;
            case 80:
                item = v;
                newArr.push(item);                        
                item = "";
                break;
            case 90:
                item = x;
                newArr.push(item);                        
                item = "";
                break;
            case 100:
                item = y;
                newArr.push(item);                        
                item = "";
                break;
            default:
                newArr.push("");
                console.log(newArr);
                }}
            if(newArr.length == 1){
                    result = `${newArr[0]}`;
                    console.log(result);
             }else if(newArr.length == 2){
                    result = `${newArr[0]} ${newArr[1]}`;
                    console.log(result);
            }else if(newArr.length == 3){
                    result = `${newArr[0]} hundred ${newArr[1]} ${newArr[2]}`;
                        console.log(result);

            }
            result = result.split(" ").filter(Boolean);
            console.log(result);            
            result = result.join(" ");          
        return result;}            