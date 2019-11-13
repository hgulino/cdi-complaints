import React from "react";
import { Text, View, StyleSheet, Canvas } from "@react-pdf/renderer";
import { format } from "date-fns";

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
    marginBottom: 4,
    fontSize: 11
  },
  headerContainer: {
    marginBottom: 12
  },
  title: {
    marginLeft: 4,
    marginBottom: 12,
    fontSize: 10,
    textDecoration: "none",
    fontFamily: "FreeSerif Bold"
  },
  subtitle: {
    marginLeft: 4,
    fontSize: 10,
    textDecoration: "none",
    fontFamily: "FreeSerif Italic"
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
  },
  check: {
    width: 24,
    height: 18
  }
});

const CheckBoxChecked = () => (
  <Canvas
    style={styles.check}
    paint={painter =>
      painter
        .translate(0, -4)
        .path(
          "M17.4,5H6.6C5.7,5,5,5.7,5,6.6v10.9C5,18.3,5.7,19,6.6,19h10.9c0.9,0,1.6-0.7,1.6-1.6V6.6C19,5.7,18.3,5,17.4,5 M17.4,6.6 v10.9H6.6V6.6H17.4 M10.4,15.9l-3.1-3.1l1.1-1.1l2,2l5.1-5.1l1.1,1.1"
        )
        .path(
          "M61.4,5H50.6C49.7,5,49,5.7,49,6.6v10.9c0,0.9,0.7,1.6,1.6,1.6h10.9c0.9,0,1.6-0.7,1.6-1.6V6.6C63,5.7,62.3,5,61.4,5 M61.4,6.6v10.9H50.6V6.6H61.4z"
        )
        .fill("#000")
    }
  />
);

const CheckBox = () => (
  <Canvas
    style={styles.check}
    paint={painter =>
      painter
        .translate(0, -4)
        .path(
          "M17.4,5H6.6C5.7,5,5,5.7,5,6.6v10.9C5,18.3,5.7,19,6.6,19h10.9c0.9,0,1.6-0.7,1.6-1.6V6.6C19,5.7,18.3,5,17.4,5 M17.4,6.6 v10.9H6.6V6.6H17.4z"
        )
        .fill("#000")
    }
  />
);

const ShopFields = props => (
  <View style={{ padding: "0px, 23px" }}>
    <View style={styles.container}>
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>1.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "38%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>
            {"Complete name of insurance company involved:"}
          </Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      <View
        style={{
          ...styles.table,
          width: "59%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.insuranceCompanyName}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>2.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "97%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View
          style={{
            ...styles.tableRow,
            borderRightWidth: 0.5
          }}
        >
          <Text style={styles.title}>
            {
              "Are you reporting a denial in an insurer's Direct Repair Program? Yes"
            }
          </Text>
          {props.drpDenial === "yes" ? <CheckBoxChecked /> : <CheckBox />}
          <Text style={styles.title}>No</Text>
          {props.drpDenial === "no" ? <CheckBoxChecked /> : <CheckBox />}
          <Text style={styles.title}>{"   If Yes, Skip to Question 8."}</Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>3.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "37%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>{"Type of Insurance:  AUTO"}</Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      <View
        style={{
          ...styles.table,
          width: "60%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.data}> </Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <Text style={{ ...styles.title, marginBottom: 0 }}>4.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "97%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View
          style={{ ...styles.tableRow, borderRightWidth: 0.5, marginBottom: 0 }}
        >
          <Text style={{ ...styles.title, marginBottom: 2 }}>
            Name and Address of the policyholder/claimant/customer:
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "97%",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow, borderRightWidth: 0.5 }}>
          <Text style={styles.data}>
            {`${props.policyHolderName}; ${props.policyHolderStreet}, ${
              props.policyHolderCity
            }, ${props.policyHolderState} ${props.policyHolderZip}`}
          </Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>5.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "22%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>{"Policy identification number:"}</Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      <View
        style={{
          ...styles.table,
          width: "75%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.policyHolderNumber}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>6.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "13%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>{"Claim number:"}</Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      <View
        style={{
          ...styles.table,
          width: "84%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.claimNumber}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>7.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "24%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>{"Date loss occurred or began:"}</Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      <View
        style={{
          ...styles.table,
          width: "73%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.data}>{format(props.dolDate, "MM/dd/yyyy")}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0
        }}
      >
        <Text style={styles.title}>8.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "47%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.title}>
            {"Name of Adjuster or Insurance Company Representative:"}
          </Text>
        </View>
        <View style={styles.tableRow} />
      </View>

      <View
        style={{
          ...styles.table,
          width: "50%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.data}>{props.insuranceRepName}</Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <Text style={styles.title}>9.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "97%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow, borderRightWidth: 0.5 }}>
          <Text style={{ ...styles.title, marginBottom: 0 }}>
            {"Have you reported this to any other governmental agency? Yes"}
          </Text>
          {props.otherReports === "yes" ? <CheckBoxChecked /> : <CheckBox />}
          <Text style={styles.title}>No</Text>
          {props.otherReports === "no" ? <CheckBoxChecked /> : <CheckBox />}
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "16%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow }}>
          <Text style={{ ...styles.subtitle, marginTop: -12 }}>
            If yes, Please give the
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "16%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.subtitle, marginTop: 0 }}>
          Name of the Agency:
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "20%",
          borderBottomWidth: 0.5,
          borderLeftWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.data, marginTop: 0, marginBottom: 0 }}>
          {props.otherReports === "yes" && props.agencyName}
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "18%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.subtitle, marginTop: 0 }}>
          File number, if known:
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "20%",
          borderBottomWidth: 0.5,
          borderLeftWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.data, marginTop: 0, marginBottom: 0 }}>
          {props.otherReports === "yes" && props.fileNumber}
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "7%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5,
          borderTopWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          height: 10,
          width: "100%",
          borderRightWidth: 0.5,
          borderTopWidth: 0
        }}
      />
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <Text style={{ ...styles.title, marginBottom: 0 }}>10.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "97%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow, borderRightWidth: 0.5 }}>
          <Text style={{ ...styles.title, marginBottom: 0 }}>
            Have you previously written to the California Department of
            Insurance about this matter?
          </Text>
          {props.cdiReports === "yes" ? <CheckBoxChecked /> : <CheckBox />}
          <Text style={{ ...styles.title, marginBottom: 0 }}>No</Text>
          {props.cdiReports === "no" ? <CheckBoxChecked /> : <CheckBox />}
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "16%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow }} />
      </View>
      <View
        style={{
          ...styles.table,
          width: "20%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.subtitle, marginTop: 0 }}>
          File number (if available)
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "20%",
          borderBottomWidth: 0.5,
          borderLeftWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.data, marginTop: 0, marginBottom: 0 }}>
          {props.cdiReports === "yes" && props.cdiFileNumber}
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "14%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.subtitle, marginTop: 0 }}>Date submitted</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "20%",
          borderBottomWidth: 0.5,
          borderLeftWidth: 0,
          borderTopWidth: 0
        }}
      >
        <Text style={{ ...styles.data, marginTop: 0, marginBottom: 0 }}>
          {props.cdiDateSubmitted !== null
            ? format(props.cdiDateSubmitted, "MM/dd/yyyy")
            : ""}
        </Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "7%",
          borderLeftWidth: 0,
          borderRightWidth: 0.5,
          borderTopWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          height: 10,
          width: "100%",
          borderRightWidth: 0.5,
          borderTopWidth: 0
        }}
      />
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <Text style={{ ...styles.title, marginBottom: 0 }}>11.</Text>
      </View>
      <View
        style={{
          ...styles.table,
          width: "97%",
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <View
          style={{ ...styles.tableRow, borderRightWidth: 0.5, marginBottom: 0 }}
        >
          <Text style={{ ...styles.title, marginBottom: 2 }}>
            Briefly, describe the details of the transaction and provide any
            documentation to support your allegations.
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "3%",
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0.5
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "97%",
          paddingBottom: 4,
          minHeight: 104,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0.5,
          borderBottomWidth: 0.5
        }}
      >
        <View style={{ ...styles.tableRow }}>
          <Text style={{ ...styles.data, paddingRight: 8 }}>
            {props.complaintDetails}
          </Text>
        </View>
      </View>
      {/* Repeat this for the remaining rows */}
      <View
        style={{
          ...styles.table,
          width: "100%",
          height: 14,
          borderWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "6%",
          borderWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "40%",
          borderWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow, borderBottomWidth: 0.5 }}>
          <Text style={{ ...styles.data, paddingRight: 8 }}> </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "8%",
          borderWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "40%",
          borderWidth: 0
        }}
      >
        <View style={{ ...styles.tableRow, borderBottomWidth: 0.5 }}>
          <Text style={{ ...styles.data, paddingRight: 8 }}>{format(new Date(), "MM/dd/yyyy")}</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "6%",
          borderWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "6%",
          borderWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "40%",
          borderWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={{ ...styles.title, marginLeft: 0 }}>Signature</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.table,
          width: "8%",
          borderWidth: 0
        }}
      />
      <View
        style={{
          ...styles.table,
          width: "40%",
          borderWidth: 0
        }}
      >
        <View style={styles.tableRow}>
          <Text style={{ ...styles.title, marginLeft: 0 }}>Date</Text>
        </View>
      </View>
    </View>
  </View>
);

export default ShopFields;
