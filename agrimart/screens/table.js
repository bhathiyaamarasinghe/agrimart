import React, { Component } from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class CreditsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Benchmark', 'Grade', 'Grade Point', 'Description'],
      tableData: [
        ['85 and above', 'A+', '4.2', ''],
        ['75 to 84', 'A', '4.0', 'Excellent'],
        ['70 to 74', 'A-', '3.7', ''],
        ['65 to 69', 'B+', '3.3', ''],
        ['60 to 64', 'B', '3.0', 'Good'],
        ['55 to 59', 'B-', '2.7', ''],
        ['50 to 54', 'C+', '2.3', ''],
        ['45 to 49', 'C', '2.0', 'Pass'],
        ['40 to 44', 'C-', '1.5', 'Week Pass'],
        ['35 to 39', 'D', '1.0', 'Conditional Pass'],
        ['34 and below', 'I', '0.0', 'Incomplete'],
        ['34 and below', 'F', '0.0', 'Fail'],
        ['34 and below', 'N', '--', 'Academic Concession'],

      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <ScrollView>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
