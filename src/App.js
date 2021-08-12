
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from 'react-bootstrap' ;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Person : [
        {
fullName:'Nibrasse Hmidi',bio:'26 years old Web Developer ' , imgSrc:'https://www.betterteam.com/images/web-developer-job-description-6494x4331-2020128.jpeg?crop=21:16,smart&width=420&dpr=2', profession:'Enginner Informatique'
        }
      ],
      isShow:'false',
      hours:0,
      minutes:0,
      secondes:0,
    }
  }
  showProfil=()=>{
    this.setState({
      isShow:!this.state.isShow,
    })
  }
  componentDidMount(){
    setInterval(() =>{
        this.setState({
          secondes:this.state.secondes+1,
        })
        if(this.state.secondes ===60){
          this.setState({
            minutes:this.state.minutes+1,
            secondes:0,
          })
          if(this.state.minutes ===60){
            this.setState({
              hours:this.state.hours+1,
            minutes:0,
            secondes:0,
            })
          }
        };
      },1000)
  }
  render(){
  return (
    <div  className="App">
    
  <h1 className="title">
  Profile
  </h1>
    {this.state.Person.map((el,index) => <Card className='hard' key={index} style={{ width: '16rem' }}>
  <h1 className="counter" >
    <span>{this.state.hours}</span>:
     <span>{this.state.minutes}</span>:
      <span>{this.state.secondes}</span>

  </h1>
{(this.state.isShow)? <div>   <div className='img'> 
      <Card.Img variant="top" src={el.imgSrc}  style={{width:'200px',height:'200px'}} /> </div> 
 <Card.Body>
    <Card.Title>{el.fullName}</Card.Title>
    <Card.Text>
     {el.bio}
    </Card.Text>
     <Card.Text>
     {el.profession}
    </Card.Text>
   
  </Card.Body>

</div>:<p> Click on show Profile </p>}
  <Button variant={this.state.isShow?"warning" : "info"} onClick={this.showProfil}> {this.state.isShow?'Hide Profil' : 'Show Profil'} </Button>
 
</Card>)}
    </div>
    

  );
  }

}

export default App;
