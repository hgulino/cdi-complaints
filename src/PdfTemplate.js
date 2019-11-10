import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PdfTemplate = props => (
  <Document>
    <Page size="Letter" style={styles.page}>
      <View style={styles.section}>
        <Text>{props.shopName}</Text>
        <Text>{props.shopPhone}</Text>
        <Text>{props.shopStreet}</Text>
        <Text>{props.shopCity}</Text>
        <Text>{props.shopState}</Text>
        <Text>{props.shopZip}</Text>
        <Text>{props.reportingPersonName}</Text>
        <Text>{props.reportingPersonPosition}</Text>
        <Text>{props.insuranceCompanyName}</Text>
        <Text>{props.claimNumber}</Text>
        <Text>{props.typeOfInsurance}</Text>
        <Text>{props.policyHolderName}</Text>
        <Text>{props.policyHolderStreet}</Text>
        <Text>{props.policyHolderCity}</Text>
        <Text>{props.policyHolderState}</Text>
        <Text>{props.policyHolderZip}</Text>
        <Text>{props.policyHolderNumber}</Text>
        <Text>{props.agencyName}</Text>
        <Text>{props.fileNumber}</Text>
        <Text>{props.cdiFileNumber}</Text>
        <Text>{props.complaintDetails}</Text>
        <Text>{props.drpDenial}</Text>
        <Text>{props.dolDate}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfTemplate;
