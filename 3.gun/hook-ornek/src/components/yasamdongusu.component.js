import React from "react";
class YasamDongusu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            sure : 10
        }
    }

    render()
    {
        return(
            <div><h1>Yaşam Döngüsü </h1>
            <h2>{this.state.date.toLocaleString()}</h2>
            <h3>Geri Sayım : {this.state.sure}</h3>
            </div>
        )
    }

    componentDidMount() {
       this.TimerID =  setInterval(
            ()=> this.tick(),1000
        )

    }

    tick() {
        if(this.state.sure ===0) {
            this.componentWillUnmount();
            return;
        }
        this.setState({
            date : new Date(),
            sure : this.state.sure -1
        })
    }

    componentDidUpdate() {
        console.log(this.state.sure + " değişiyor");
    }


    componentWillUnmount(){
        clearInterval(this.TimerID);
    }
}

export default YasamDongusu