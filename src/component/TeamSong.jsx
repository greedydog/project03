import React from "react";

const TeamSong = ({name, gender, favoriteSong}) => {
    
    
    // console.log('props ', props);
    /*
    상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
    함수의 형태이기때문에, 값은 함수의 매개변수를 통해서 받는다
    Case1. (props) =>{ ~ props.name ~ }
    - 객체 안에 속성만 꺼내서, 마치 변수인것처럼 사용
    */
//    let persion = {
//         name : '선영표',
//         gender : "W"
//    }
//    let {name, gender} = {
//         name : '선영표',
//         gender : "W"
//    }
// console.log(name);
    return(
        <div>
            <p>{name}</p>
            <p>{gender}</p>
            <p>{favoriteSong}</p>
               <hr/>
        </div>
    )
}

export default TeamSong