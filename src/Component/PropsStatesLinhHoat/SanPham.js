import React, { Component } from 'react';
import DataNangCao from '../../DataNc';
import OutPut from './OutPut';

class SanPham extends Component {  

    constructor(props){       
        super(props)
        this.state = {
        home:<div className='className="product_section layout_padding"'></div>
        }
    }
    render() {
        
        return (         
            <div className="container">
                    {this.state.home}
                    <div>
                        <button onClick={this.Home}>Home</button>
                        <button onClick={this.LUMIA1}>LUMIA1</button>
                        <button onClick={this.LUMIA2}>LUMIA2</button>
                        <button onClick={this.LUMIA3}>LUMIA3</button>
                    </div>
                </div>           
        );
        // function buy(){
        //     alert ("Đặt mua hàng thành công")
        // }

    }
    LUMIA1 = () =>{
        let data= DataNangCao("products");
        data = data.filter((product) => product.IdCategories === 1).map(element =>{
            return <OutPut
                        tenSP = {element.name}
                        anh = {element.img}
                        chitiet = {element.detail}>                   
                    </OutPut>
        })
        this.setState({home:data})
    }

    LUMIA2 = () =>{
        let data= DataNangCao("products");
        data = data.filter((product) => product.IdCategories === 2).map(element =>{
            return <OutPut
                        tenSP = {element.name}
                        anh = {element.img}
                        chitiet = {element.detail}>
                        
                    </OutPut>
        })
        this.setState({home:data})
    }

    LUMIA3 = () =>{
        let data= DataNangCao("products");
        data = data.filter((product) => product.IdCategories === 3).map(element =>{
            return <OutPut 
                        tenSP = {element.name}
                        anh = {element.img}
                        chitiet = {element.detail}>
                        
                    </OutPut>
        })
        this.setState({home:data})
    }

    Home = () =>{
        this.setState({home:<div>Trang chủ</div>
    })
  
    }

 
}

export default SanPham;

