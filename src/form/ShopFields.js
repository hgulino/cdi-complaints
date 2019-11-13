import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "inline-block",
    margin: "0px 0px",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderCollapse: "collapse"
  },
  data: {
    marginLeft: 4,
    marginBottom: 6,
    fontSize: 11
  },
  headerContainer: {
    fontFamily: "FreeSerif Bold",
    fontSize: 12,
    margin: "10px 0px",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 12
  },
  title: {
    marginLeft: 4,
    marginBottom: 4,
    fontSize: 8,
    textDecoration: "none",
    fontFamily: "FreeSerif Bold"
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: { flexDirection: "row" },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderTopWidth: 0
  }
});

const ShopFields = props => (
  <View style={{ marginBottom: 10, padding: "0px, 23px" }}>
    <Text style={styles.headerContainer}>
      Auto Body Repair Shop Report Form
    </Text>
    <View style={styles.container}>
      <View
        style={{
          ...styles.table,
          width: "50%"
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>Name of Automobile Body Repair Shop:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.shopName}</Text>
        </View>
      </View>

      <View
        style={{
          ...styles.table,
          width: "50%",
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>Business Phone:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.shopPhone}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "50%"
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>Address:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.shopStreet}</Text>
        </View>
      </View>

      <View
        style={{
          ...styles.table,
          width: "50%",
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>Name of Reporting Person:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.reportingPersonName}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "24%",
          borderBottomWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>City:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.shopCity}</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "12%",
          borderLeftWidth: 0,
          borderBottomWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>State:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.shopState}</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "14%",
          borderLeftWidth: 0,
          borderBottomWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>ZIP:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.shopZip}</Text>
        </View>
      </View>

      <View
        style={{
          ...styles.table,
          width: "50%",
          borderRightWidth: 0.5,
          borderBottomWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>Position:</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.reportingPersonPosition}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default ShopFields;
