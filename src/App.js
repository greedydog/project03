import logo from './logo.svg';
import './App.css';
import MenuItem from './component/MenuItem';

/*  
Component(컴포넌트)
 - 반복되는 코드를 하나로 묶어서 컴포넌트를 만든다.
 - 내가 원하는 코드를 묶어서 '테그화' 시킨다.
  ** 반드시 대문자로 시작해야한다.
  - 기존 HTML태그 (DOM)요소와 구분하기 위해서다.
  - 예를 들어 버튼이라는 컴포너트와 버튼이라는 HTML태그를 
  구분하기 위해서 컴포넌트는 Button / 태그는 button으로 
  사용한다.
  ** export - import는 필수
  
*/
let price = 4000
let salePrice = 2000

function App() {
  return (
    <div>
      <MenuItem name = "선영표" menu="아메리카노" price={salePrice}></MenuItem>
      <MenuItem name = "손동연" menu="민트초코" price={salePrice}></MenuItem>
      <MenuItem name = "임승환" menu="레인보우샤베트" price={price}></MenuItem>
      
    </div>
  );
}


//App 화면을 내보내겠습니다
export default App;
