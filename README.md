 components defined as classes have some additional features. 
 
 ```React
 
 class Welcome extends Component{
  constructor(props){
    super(props);
  }
   render(){
    return(
      <h2>Hello {this.props.name}!</h2>
    )
   }
 }
 
 ReactDom.render(
  <Welcome name="Mom"/>,
  document.getElementById('root')
  )
  
  ```
