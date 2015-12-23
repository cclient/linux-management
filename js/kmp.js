/**
 * Created by cdpmac on 15/9/10.
 */

var mainstr="BCC ABCDAB ABCDABCDABDEABCDABC";
var substr=     "ABCDABD";
function getnextstep(arr){
    var matchmax=0;
    var match=0;
    while(arr.length>1&&matchmax<arr.length/2){
        var ismatch=true;
        for(var i=0;i<=matchmax;i++){
            if(arr[i]!=arr[arr.length-1+i-matchmax]){
                ismatch=false;
                break;
            }
        }
        if(ismatch){
            match=matchmax;
        }
        //试着再多一位去匹配;
        matchmax++;
    }
    //则最大匹配个数+1（因为是从0算起）;
    return match+1;
}
function kmp(){
    for(var i =0;i<mainstr.length;){
        //是否需要匹配子的下一位
        var next=true;
        var subparindex=i;
        var subindex=0;
        var j=0;
        for(;j<substr.length;){
            //匹配下一位。
            if(next){
                //如果匹配的项相同，则子和父都后移一位
                if(mainstr[subparindex]==substr[j]){
                    subparindex++;
                    subindex++;
                    j++;
                }
                //如果匹配的不同，则不用匹配了。
                else{
                    next=false;
                    j=substr.length;
                }
            }
        }
        var match=substr.substring(0,subindex);
        if(!match){
            i++;
        }
        else{
            console.log(match +' 子同项 '+getnextstep(match));
            console.log(' 父移动到 '+(i+subindex-getnextstep(match)));
            j=getnextstep(match);
            i=i+(subindex+1)-getnextstep(match);
        }
        if(next==true){
            console.log('get');
        }
        else{
            console.log('parent go next  '+ i);
        }
    }
}
//kmp();


function bbmatch(parentstring,substring){
    for(var i =0;i<parentstring.length;){
        var k=i;
        console.log(k);
        var ismatch=true;
        for(var j =0;j<substring.length;){
            if(parentstring[k]==substring[j]){
                j++;
                k++;
            }else{
//                getnext(substring,j);
                ismatch=false;
                break;
            }
        }
        i++;
        if(ismatch){
            return i;
        }

    }
}
function kmpmatch(parentstring,substring){

    for(var i =0;i<parentstring.length;){
        console.log(parentstring.substr(i));
        var ismatch=true;
        var next=0;
        for(var j =next;j<substring.length;){
            if(parentstring[i]!=substring[j]){
//            　移动位数 = 已匹配的字符数 - 对应的部分匹配值
                next=j-getnext(substring,j)+1;
                console.log(next);
                ismatch=false;
                break;
            }else{
                i++;
                j++;
            }
        }
        if(ismatch){
            return i;
        }

    }
    return
}

function getnext(substring,endindex){
//          0  [0],[endindex-0];
//          1  [0],[endindex-1];[1],[endindex-0]
//          2  [0],[endindex-2];[1],[endindex-1],[2],[endindex-0]
    //这种算法有BUG
//    如果有
//    ABCABCABD
//    ABCABCABC
//    那会匹配到最后的一个AP上 就该匹配到中间的AB上。
//    改进方法，从左到右来匹配。
    var maxmatch=0;
    var num=0;
        while(num>=0&&num<endindex-1){
            console.log("try "+num);
            var ismatch=true;
            for(var k=num;k>=0;k--){
                console.log((num-k)+" "+(endindex-k));
                console.log(substring[num-k]+" "+substring[endindex-k]);
                if(substring[num-k]!=substring[endindex-k]){
                    ismatch=false;
                    break;
                }
            }
            if(ismatch){
                maxmatch++;
                console.log("success");
            }
            else{
                console.log("fail");
            }
            //尝试匹配更多位
            num++;
        }
        console.log(maxmatch);
        return maxmatch;
}
var ind=kmpmatch(mainstr,substr);
console.log(ind);
console.log(mainstr.substr(ind));
console.log(substr)
//getnext("ABCDABC",5);