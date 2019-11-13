import React from "react";

import { Link, Image, Text, View, StyleSheet } from "@react-pdf/renderer";

import californiaSeal from "./images/californiaSeal.jpg";

const styles = StyleSheet.create({
  containerLine: {
    flexDirection: "row",
    borderBottomWidth: 3,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch"
  },
  container: {
    margin: "2px 1px",
    flexDirection: "row",
    alignItems: "stretch"
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  },
  header: {
    marginLeft: 4,
    fontSize: 11,
    textTransform: "uppercase",
    fontFamily: "FreeSerif Bold",
    letterSpacing: 0.25
  },
  link: {
    fontFamily: "FreeSerif",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    marginRight: 14
  },
  addressHeader: {
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: "FreeSerif Bold",
    letterSpacing: 0.25
  },
  address: {
    fontFamily: "FreeSerif",
    fontSize: 9,
    color: "black",
    textDecoration: "none",
    marginRight: 14
  },
  addressLink: {
    fontFamily: "FreeSerif",
    fontSize: 9,
    color: "blue",
    textDecoration: "none",
    marginRight: 14
  },
  addressUpper: {
    fontFamily: "FreeSerif",
    textTransform: "uppercase",
    fontSize: 9,
    color: "black",
    textDecoration: "none",
    marginRight: 14,
    lineHeight: 1.25
  },
  italic: {
    fontFamily: "FreeSerif Italic",
    fontSize: 10,
    color: "black"
  },
  image: {
    width: 76,
    marginRight: 14,
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  }
});

export default () => (
  <View style={{ padding: "0px, 23px", marginBottom: 10 }}>
    <View style={styles.containerLine}>
      <View style={styles.detailColumn}>
        <Text style={styles.header}>State of California</Text>
      </View>
      <View style={styles.linkColumn}>
        <Text style={styles.link}>
          {"Ricardo Lara, "}
          <Text style={styles.italic}>Insurance Commissioner</Text>
        </Text>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.addressHeader}>Department of Insurance</Text>
        <Text style={styles.addressUpper}>
          Consumer Services and Market Conduct Branch
        </Text>
        <Text style={styles.addressUpper}>
          300 South Spring Street, South Tower
        </Text>
        <Text style={styles.addressUpper}>Los Angeles, CA 90013</Text>
        <Link src="https://www.insurance.ca.gov" style={styles.addressLink}>
          www.insurance.ca.gov
        </Link>
        <Text style={styles.address}>CSD-005</Text>
        <Text style={styles.address}>Revised: 03/27/2019</Text>
      </View>
      <View style={styles.linkColumn}>
        <Image style={styles.image} src={californiaSeal} />
      </View>
    </View>
  </View>
);
