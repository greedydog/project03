import React from "react";
import TeamSong from "./component/TeamSong";
const AppExample = () => {
    /*
    여러분들의 팀원을 소개해주세요!
    이름 : 홍길동
    성별 : 남성
    좋아하는 노래 : 아이브 - I AM

    - 단, component와 props의 개념을 이요할 것
    - components 폴더에 MemberBox라는 컴포넌트의 생성하기
    - 혹시 너무 빨리 끝나버린 친구들은 디자인 하고 있기!
    */

   return (
        <div className="container">
        <TeamSong name="이동헌" gender="남" favoriteSong="빅뱅 - 거짓말"/>
        
        <TeamSong name="정건식" gender="남" favoriteSong="트와이스 TT"/>
        
        <TeamSong name="류하영" gender="여" favoriteSong="손오공"/>
        
        <TeamSong name="민현식" gender="여" favoriteSong="버터"/>
        
        <TeamSong name="정태녕" gender="남" favoriteSong="쿠키"/>
        <TeamSong name="임영찬" gender="남" favoriteSong="테디베어"/>
        </div>
   )
}


export default AppExample