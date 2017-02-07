 Components defined as classes have some additional features. 
 In classes you can no longer call props object directly you have to refer to it as this.props to access the props object.
 Class components function on their own independently therefore making components reuseable.
 
 ```javascript
 
class Welcome extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="box">
                <div className={classnames('img',this.props.img)} >
                    <div className={classnames('avatar', this.props.avatar)}></div>
                </div>
                <h5>{this.props.name}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mattis nisi. Donec lobortis suscipit venenatis. Sed maximus neque eget finibus.</p>
            </div>
        )
    }
}
 
 ReactDom.render(
  <Welcome name="Mom"/>,
  document.getElementById('root')
  )
  
  ```
  
Using the classnames is npm library that is makes it easier adding multiple classes to an element especially if a class name is stored in the props object.
  
Locale state is added feature gained by using classes over standard components 

 ```javascript
 
class AdvTimer extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        );
    }
}
 
 ReactDom.render(
  <AdvTimer/>,
  document.getElementById('root')
  )
  
  ```

`componentDidMount()` and `componentWillUnmount()` are both lifecycle hooks.

The `componentDidMount()` hook runs after the component output has been rendered to the DOM.
If the component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle hook
