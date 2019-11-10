import React, { useState } from "react";
import useForm from "react-hook-form";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "date-fns";
import PdfTemplate from "./PdfTemplate";
import DateFnsUtils from "@date-io/date-fns";
import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  Divider,
  Typography,
  FormHelperText,
  Grid
} from "@material-ui/core";
import PropTypes from "prop-types";

import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MaskedInput from "react-text-mask";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
// import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  formSubTitle: {
    padding: "20px 0px",
    marginLeft: theme.spacing(1)
  },
  divider: {
    margin: "20px 0px"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

const ExpansionPanel = withStyles({
  root: {
    cursor: "default",
    width: "100%",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    padding: 0,
    cursor: "default",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: 0
  }
}))(MuiExpansionPanelDetails);

export default function Form() {
  const classes = useStyles();
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: {
      shopName: "Roadstarr",
      shopPhone: "7147475484",
      shopStreet: "1",
      shopCity: "1",
      shopZip: "1",
      drpDenial: "no",
      otherReports: "no",
      cdiReports: "no",
      dolDate: null,
      cdiDateSubmitted: null
    }
  });
  const [radioValues, setReactSelectValue] = useState({
    drpDenial: "yes",
    otherReports: "no",
    cdiReports: "no"
  });
  const [selectedDate, setSelectedDate] = useState({
    dolDate: null,
    cdiDateSubmitted: null
  });

  const generatePdfDocument = async data => {
    const blob = await pdf(<PdfTemplate {...data} />).toBlob();
    saveAs(blob, "test");
  };

  const generateJsonDocument = data => {
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    saveAs(blob, "test.json");
  };

  const onSubmit = data => {
    console.log(data);
    generatePdfDocument(data);
    console.log("Finished");
  };

  const onJsonSubmit = data => {
    console.log(data);
    generateJsonDocument(data);
    console.log("Finished");
  };

  const handleChange = e => {
    setValue(e.target.name, e.target.value);
    setReactSelectValue({ ...radioValues, [e.target.name]: e.target.value });
  };
  const handleDateChange = id => date => {
    setValue(id, date);
    setSelectedDate({ ...selectedDate, [id]: date });
  };
  React.useEffect(() => {
    register({ name: "drpDenial" });
    register({ name: "dolDate" });
  }, [register]);

  const drpDenialBoolean = radioValues.drpDenial === "no" ? true : false;
  const otherReportsBoolean = radioValues.otherReports === "no" ? true : false;
  const cdiReportsBoolean = radioValues.cdiReports === "no" ? true : false;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.formSubTitle}>
            Body shop information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Body shop name"
            margin="normal"
            variant="outlined"
            name="shopName"
            inputRef={register({ required: true })}
            error={errors.shopName && true}
            helperText={errors.shopName && "This field is required"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Business phone"
            margin="normal"
            variant="outlined"
            name="shopPhone"
            inputRef={register({ required: true })}
            error={errors.shopPhone && true}
            helperText={errors.shopPhone && "This field is required"}
            InputProps={{
              inputComponent: TextMaskCustom
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street"
            margin="normal"
            variant="outlined"
            name="shopStreet"
            inputRef={register({ required: true })}
            error={errors.shopStreet && true}
            helperText={errors.shopStreet && "This field is required"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            margin="normal"
            variant="outlined"
            name="shopCity"
            inputRef={register({ required: true })}
            error={errors.shopCity && true}
            helperText={errors.shopCity && "This field is required"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="State"
            margin="normal"
            variant="outlined"
            name="shopState"
            defaultValue="CA"
            inputRef={register({ required: true })}
            error={errors.shopState && true}
            helperText={errors.shopState && "This field is required"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Zip"
            margin="normal"
            variant="outlined"
            name="shopZip"
            inputRef={register({ required: true })}
            error={errors.shopZip && true}
            helperText={errors.shopZip && "This field is required"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Reporting person name"
            margin="normal"
            variant="outlined"
            name="reportingPersonName"
            inputRef={register}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Position"
            margin="normal"
            variant="outlined"
            name="reportingPersonPosition"
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" className={classes.divider} />

          <Typography variant="h5" className={classes.formSubTitle}>
            Insurance company information
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Insurance company name"
            margin="normal"
            variant="outlined"
            name="insuranceCompanyName"
            inputRef={register}
            helperText="Please use full company name."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Adjuster/representative name"
            margin="normal"
            variant="outlined"
            name="claimNumber"
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Type of insurance"
            margin="normal"
            variant="outlined"
            name="typeOfInsurance"
            inputRef={register}
            defaultValue="AUTO"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <ExpansionPanel square expanded={drpDenialBoolean}>
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  Are you reporting a denial in an Insurer’s Direct Repair
                  Program?
                </FormLabel>
                <RadioGroup
                  name="drpDenial"
                  aria-label="drpDenial"
                  value={radioValues.drpDenial}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>If Yes, Skip to Question 8.</FormHelperText>
              </FormControl>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Divider variant="middle" className={classes.divider} />
                  <Typography variant="h5" className={classes.formSubTitle}>
                    Claim information
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="Policy holder name"
                    margin="normal"
                    variant="outlined"
                    name="policyHolderName"
                    inputRef={register({ required: drpDenialBoolean })}
                    error={errors.policyHolderName && true}
                    helperText={
                      errors.policyHolderName && "This field is required"
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="Street"
                    margin="normal"
                    variant="outlined"
                    name="policyHolderStreet"
                    inputRef={register({ required: drpDenialBoolean })}
                    error={errors.policyHolderStreet && true}
                    helperText={
                      errors.policyHolderStreet && "This field is required"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="City"
                    margin="normal"
                    variant="outlined"
                    name="policyHolderCity"
                    inputRef={register({ required: drpDenialBoolean })}
                    error={errors.policyHolderCity && true}
                    helperText={
                      errors.policyHolderCity && "This field is required"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="State"
                    margin="normal"
                    variant="outlined"
                    name="policyHolderState"
                    inputRef={register({ required: drpDenialBoolean })}
                    error={errors.policyHolderState && true}
                    helperText={
                      errors.policyHolderState && "This field is required"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="Zip"
                    margin="normal"
                    variant="outlined"
                    name="policyHolderZip"
                    inputRef={register({ required: drpDenialBoolean })}
                    error={errors.policyHolderZip && true}
                    helperText={
                      errors.policyHolderZip && "This field is required"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="Policy identification number"
                    margin="normal"
                    variant="outlined"
                    name="policyHolderNumber"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled={!drpDenialBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="Claim number"
                    margin="normal"
                    variant="outlined"
                    name="claimNumber"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      autoComplete="new-password"
                      disabled={!drpDenialBoolean}
                      fullWidth
                      maxDate={new Date()}
                      maxDateMessage="Date cannot be in the future!"
                      disableToolbar
                      inputVariant="outlined"
                      variant="dialog"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date loss occurred or began"
                      name="dolDate"
                      value={selectedDate.dolDate}
                      onChange={handleDateChange("dolDate")}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" className={classes.divider} />
          <Typography variant="h5" className={classes.formSubTitle}>
            Complaint information
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ExpansionPanel square expanded={!otherReportsBoolean}>
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  Have you reported this to any other governmental agency?
                </FormLabel>
                <RadioGroup
                  name="otherReports"
                  aria-label="otherReports"
                  value={radioValues.otherReports}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>
                  If Yes, please fill in additional fields.
                </FormHelperText>
              </FormControl>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled={otherReportsBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="Agency name"
                    margin="normal"
                    variant="outlined"
                    name="agencyName"
                    inputRef={register({ required: !otherReportsBoolean })}
                    error={errors.agencyName && true}
                    helperText={errors.agencyName && "This field is required"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled={otherReportsBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="File number"
                    margin="normal"
                    variant="outlined"
                    name="fileNumber"
                    inputRef={register}
                    helperText="Enter file number if known."
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" className={classes.divider} />
        </Grid>

        <Grid item xs={12}>
          <ExpansionPanel square expanded={!cdiReportsBoolean}>
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  Have you previously written to the California Department of
                  Insurance about this matter?
                </FormLabel>
                <RadioGroup
                  name="cdiReports"
                  aria-label="cdiReports"
                  value={radioValues.cdiReports}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>
                  If Yes, please fill in additional fields:
                </FormHelperText>
              </FormControl>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled={cdiReportsBoolean}
                    autoComplete="new-password"
                    fullWidth
                    label="File number"
                    margin="normal"
                    variant="outlined"
                    name="cdiFileNumber"
                    inputRef={register}
                    helperText="Enter file number only if known."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      autoComplete="new-password"
                      disabled={cdiReportsBoolean}
                      fullWidth
                      maxDate={new Date()}
                      maxDateMessage="Date cannot be in the future!"
                      disableToolbar
                      inputVariant="outlined"
                      variant="dialog"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date submitted"
                      name="cdiDateSubmitted"
                      value={selectedDate.cdiDateSubmitted}
                      onChange={handleDateChange("cdiDateSubmitted")}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="new-password"
            fullWidth
            label="Briefly, describe the details of the transaction"
            margin="normal"
            variant="outlined"
            name="complaintDetails"
            inputRef={register}
            multiline
            helperText="Make sure to attach any additional information to your mailing."
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" className={classes.divider} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row-reverse"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<PictureAsPdfIcon />}
            >
              Generate Complaint
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={handleSubmit(onJsonSubmit)}
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<SaveIcon />}
            >
              Save as Template
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              endIcon={<CloudUploadIcon />}
            >
              Upload Template
            </Button>
          </Grid>
          {/* <Grid item>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              endIcon={<GitHubIcon />}
              href="https://hgulino.github.io/"
            >
              Support on GitHub
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </form>
  );
}
