// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai21ListViewPhan1 extends Component {

  constructor(props) {
    super(props);
  
    // Khai báo this.ds - dữ liệu đổ trong ListView
    this.ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!=r2});

  }

  render() {
    return (
      <View style={{paddingTop:50}}>
        <ListView
          
          // Khởi tạo dữ liệu giả của ListView
          dataSource={

            this.ds.cloneWithRows([

                {tenkhoahoc:"Lập Trình Android", giangvien:"Mr.Lam"},
                {tenkhoahoc:"Lập Trình IOS", giangvien:"Mr.Long"},
                {tenkhoahoc:"Lập Trình PHP", giangvien:"Mr.Tien"},
                {tenkhoahoc:"Lập Trình React Native", giangvien:"Mr.Khoa"}
              ])
          }

          // Giao diện 1 dòng của ListView
          renderRow = {(rowData)=>{

            return(
              <View style={{padding:10}}>
                <Text>{rowData.tenkhoahoc}</Text>
                <Text>{rowData.giangvien}</Text>
              </View>
              )
          }}

        />
        
      </View>
    );
  }
}


// Khai báo CSS
var ao = StyleSheet.create({


});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai21ListViewPhan1', () => Bai21ListViewPhan1);
