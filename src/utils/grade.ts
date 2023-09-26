const grade = (score:number,max:number)=>{
    let percent;
    let degree_100 ={
        "A":.85,
        "B":.75,
        "C":.65,
        "D":.60,
        "F":.4,
        "FF":.12
    }
    let degree_150 ={
        "A":.8533,
        "B":.7533,
        "C":.6533,
        "D":.60,
        "F":.4,
        "FF":.12
    }
    if(max == 100){
        percent =degree_100;
    }else{
        percent = degree_150;
    }
    
    if(!isNaN(score)){
        if(score <= (max) && score >=(max*percent.A) ){
            return {score,grade:'م'}
        }else if(score <(max*percent.A) && score >=(max*percent.B) ){
            return {score,grade:'جـ جـ'}
        }else if(score <(max*percent.B) && score >=(max*percent.C)){
            return {score,grade:'//جـ'}
        }else if(score <(max*percent.C) && score >=(max*percent.D )){
            return {score,grade:'ل'}
        }else if(score <(max*percent.D) && score >=(max*percent.F )){
            return {score,grade:'ض'}
        }else if(score <(max*percent.F) && score >=(max*percent.FF )){
            return {score,grade:'ض جـ'}
        }else if (score <(max*percent.F)){
            return {score,grade:'رل'}
        }
    }else{
        return {score:0,grade:'غـ'}
    }
}

export default grade;