import React, { useState } from "react";


function App() {
  return (
    <div className="App">
      <Folder name="Desktop"> 
      <Folder name="Music">
        <File name="all_star.mp3"/>
        <File name="hello.mp3"/>
      </Folder>
      <Folder name="Pictures">
        <File name="dogs.jpeg"/>
        <File name="guinea pigs.png"/>
      </Folder>
      </Folder>
      <Folder name="Applications">
        <Folder name="Work Documents">
        <File name="resume.pdf"/>
        <File name="references.pdf"/>
        </Folder>
      </Folder>
     
    </div>
    
  );
}

const Folder = (props) => {
  const [ isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);
  

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      </span>
    {name}
    <div style={{ marginLeft: '17px'}}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3: 'music',
    jpeg: 'file image',
    png: 'file image outline',
    pdf: 'paperclip'
  }

  return <div>
    <i className={`caret ${fileIcons[fileExtension]} icon`}></i>
    {name}
    </div>
}


export default App;
