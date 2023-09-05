// Receipt.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import logo from "../assets/faaw.png"
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  text3: {
    fontSize: 16,
    marginBottom: 10,
    width: '60%',
  },
  image: {
    width: '10%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    marginBottom: 10, // Optional margin below the image
    paddingLeft:"20px",
  },
  payRe: {
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#F8D41C',
    marginTop:'10%',
    marginBottom:'20%',
  },
  text2: {
    fontSize: 30,
    paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor:"#ffffff",
  },
  dts1: {
    width: "90%",
  },
  dts2: {
    width: "100%",
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  dts3: {
    width: "40%",
    backgroundColor: "#F8D41C",
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 20
  },
  table: {
    display: 'table',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    textAlign:'left',
    marginTop:55,
    borderTop: "1px solid black",
    paddingTop:55,
    borderBottom: "1px solid black",
    paddingBottom:55,
  },
  tableRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    textAlign:'left',
    marginBottom:30,
  },
  tableCell: {
    margin: 5,
    fontSize: 17,
  },
  t1: {
    width:"37.5%",
    fontSize: 15,
  },
  tH: {
    width:"12.5%",
    backgroundColor: '#CBE2F7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  t2: {
    width:"12.5%",
    fontSize: 15,
  },

});

const Receipt = ({date, name, cart, refNum, price}) => {
    return(
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={logo} style={styles.image} />
        <Text style={styles.text}>House of FAAW</Text>
        <View style={styles.payRe}><Text style={styles.text2}>Payment Receipt</Text></View>
        <View style={styles.dts1}>
            <View style={styles.dts2}>
                <Text style={styles.text}>Invoice No:</Text>
                <Text style={styles.text3}>{refNum}</Text>
            </View>
            <View style={styles.dts2}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text3}>{name}</Text>
            </View>
            <View style={styles.dts2}>
                <Text style={styles.text}>Address</Text>
                <Text style={styles.text3}>Akinola House, Ola-Oluwa Estate, Apata, Ibadan</Text>
            </View>
            <View style={styles.dts2}>
                <Text style={styles.text}>Date</Text>
                <Text style={styles.text3}>{date}</Text>
            </View>
            <View style={styles.dts2}>
                <Text style={styles.text}>Payment Method</Text>
                <Text style={styles.text3}>Card</Text>
            </View>

        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.t1}>
              <Text >Product</Text>
            </View>
            <View style={styles.t2}>
              <Text>Size</Text>
            </View>
            <View style={styles.t2}>
              <Text>Colour</Text>
            </View>
            <View style={styles.t2}>
              <Text>Quantity</Text>
            </View>
            <View style={styles.t2}>
              <Text>Unit Price</Text>
            </View>
            <View style={styles.t2}>
              <Text>Amount</Text>
            </View>
          </View>
          {cart?.map((item, index) => (
            <View style={styles.tableRow} key={index}>
                <View style={styles.t1}>
                <Text>{item.name}</Text>
                </View>
                <View style={styles.t2}>
                <Text>{item.size_choice}</Text>
                </View>
                <View style={styles.t2}>
                <Text>{item.color_choice}</Text>
                </View>
                <View style={styles.t2}>
                <Text>{item.quantity_choice}</Text>
                </View>
                <View style={styles.t2}>
                <Text>{item.new_price}</Text>
                </View>
                <View style={styles.t2}>
                <Text>{item.new_price * item.quantity_choice}</Text>
                </View>
            </View>
          ))}

        </View>
        <View style={styles.dts3}>
            <Text>Total</Text>
            <Text>N {price}.00</Text>
        </View>
      </View>
    </Page>
  </Document>
)};

export default Receipt;
