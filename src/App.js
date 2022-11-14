import './App.css';
import React, {useState, useEffect} from 'react';
import Modaljs from './Modal';
import View from './view';

function App() {
  const [categoryList, setCategoryList] = useState([{category: 'social media', url : 'https://www.facebook.com/', title: 'facebook'}, 
  {category: 'education', url : 'https://www.w3schools.com', title: 'w3school'},
  ]);
  const [plus, setPlus] = useState(false);
  
console.log('app')

  const temparr = categoryList.map((item)=>{
    return item.category;
  })

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

 
  var uniquearr = temparr.filter(onlyUnique);

  console.log(uniquearr);


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(categoryList));
  }, [categoryList]);
 

  return (
    <div className="App">
      <button> Category </button>
      <button onClick={toggle}> Bookmark</button>
      <Modaljs uniquearr={uniquearr} toggle={toggle} 
      setModal={setModal} modal={modal} plus={plus} 
      setPlus={setPlus} setCategoryList={setCategoryList}/>
      <View categoryList={categoryList} uniquearr={uniquearr}/>
     
      
    </div>
  );
}

export default App;
