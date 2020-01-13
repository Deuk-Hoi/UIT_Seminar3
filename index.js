let sex;

let radiobtn = document.getElementsByName('sex');
console.log(radiobtn.length);
for(let i=0; i<radiobtn.length;i++)
{
    radiobtn[i].addEventListener('change', function(){
        sex = this.value;
    })
}

function chk(){
    let count = 0;
    let array = new Array();
    array[0] = document.data.id.value;
    array[1] = document.data.password.value;
    array[2] = document.data.ConfirmPassword.value;
    array[3] = document.data.name.value;
    array[4] = document.data.sex.value;
    array[5] = document.data.email.value;
    array[6] = document.data.address.value;
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
    console.log(array[4]);
    console.log(array[5]);
    console.log(array[6]);
    for(let i = 0; i<array.length;i++)
    {
        count =0;
        if(array[i]==="" || array[i]===null ||array[i]===undefined)
        {
            alert('필수 항목 중 빠진 부분이 있습니다.');
            break;
        }

        if(array[1]!=array[2])
        {
            document.getElementById("confirm").style.color="red";
            alert('비밀번호가 일치하지 않습니다.');
            break;
        }
        if(array[1]===array[2])
        {
            document.getElementById("confirm").style.color="black";
        }
        if(array[array.length-1]==="" || array[array.length-1]===null)
        {
            array[array.length-1] = "주소를 입력하지 않았음!";
            continue;
        }
        if(array.length===i+1)
        {
            count++;
        }
    }
    if(count === 1)
    {
        count = 1;
        let privacy = document.getElementsByName("privacy");

        for(let i=0;i<privacy.length;i++)
        {
            if(!privacy[i].checked)
            {
                alert('모두 체크해 주세요.');
                break;
            }
            if(privacy.length===i+1)
            {
                count++;
            }
        }
    }
    
    if(count === 2)
    {
        alert(`id : ${array[0]}\npw: ${array[1]}\nname: ${array[3]}\nsex: ${array[4]}\nemail: ${array[5]}\naddress: ${array[6]}`);
    }
}   