import React,{memo, useState} from 'react'
import { Button, Modal, ModalHeader, Form,FormGroup ,Label,Input } from 'reactstrap';

 function Modaljs({modal,toggle,uniquearr,plus,setPlus,setCategoryList,setModal}) {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('');
  
  const submission = (e)=> {
    e.preventDefault();
    const obj = { title: '',url: '', category:''};

    obj.title=title;
    obj.url=url;
    obj.category= category;
    setCategoryList((prev)=>{
        const newdata = [...prev, obj];
        return newdata;
    })

  }
  const changePlus = (e) => {
    
    setPlus(!plus);
    console.log('plus:',plus);
  }

  console.log("modal:",modal)

    
console.log('modal')

  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form</ModalHeader>
        <div style={{marginLeft: '30px',marginTop: '15px'}}>
        <Form >
  <FormGroup>
    <Label for="Title">
      Title
    </Label>
    <Input
      id="title"
      name="title"
      placeholder="Title"
      type="string"
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      //value={}
    />
  </FormGroup>
  <FormGroup>
    <Label for="URL">
      URL
    </Label>
    <Input
      id="URL"
      name="URL"
      placeholder="URL"
      type="string"
      value={url}
      onChange={(e)=> setUrl(e.target.value)}
    />
  </FormGroup>
 {
  plus? ' ' : (
    <FormGroup>
    <Label for="exampleSelect">
      Select Category
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      value={category}
      onChange={(e)=>{setCategory(e.target.value)}}
    >
      {
   uniquearr.map((item)=>{
    return (<option>
      {item}
    </option>)
   })
      }
    </Input>
    </FormGroup>
  )
 }
    <button onMouseDown={()=> {setPlus(!plus); setCategory('')}}>+</button>
    { plus?(
       <FormGroup>
       <Label for="Title">
         Category
       </Label>
       <Input
         id="Category"
         name="Category"
         placeholder="Category"
         type="string"
         value={category}
         onChange={(e)=> setCategory(e.target.value)}
         //value={}
       />
     </FormGroup>): ''
    }
  
  <Button onClick={(e)=>{submission(e); setModal(!Modal)}}>
    Submit
  </Button>
</Form>
</div>
 
      </Modal>
    </div>
  )
}

export default memo(Modaljs);