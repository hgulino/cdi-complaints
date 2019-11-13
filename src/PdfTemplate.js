import React from "react";
import { Document, Page, Font, StyleSheet } from "@react-pdf/renderer";

import Header from "./form/Header";
import ShopFields from "./form/ShopFields";
import ComplaintFields from "./form/ComplaintFields";

import OpenSans from "./form/fonts/Open_Sans/OpenSans-Regular.ttf";
import FreeSerif from "./form/fonts/FreeSerif/FreeSerif.ttf";
import FreeSerifBold from "./form/fonts/FreeSerif/FreeSerifBold.ttf";
import FreeSerifItalic from "./form/fonts/FreeSerif/FreeSerifItalic.ttf";

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 16,
    paddingBottom: 30
  }
});

Font.register({
  family: "Open Sans",
  src: OpenSans
});
Font.register({
  family: "FreeSerif",
  src: FreeSerif
});
Font.register({
  family: "FreeSerif Bold",
  src: FreeSerifBold
});
Font.register({
  family: "FreeSerif Italic",
  src: FreeSerifItalic
});

// Create Document Component
const PdfTemplate = props => (
  <Document>
    <Page size="Letter" style={styles.page}>
      <Header />
      <ShopFields {...props} />
      <ComplaintFields {...props} />
    </Page>
  </Document>
);

export default PdfTemplate;
