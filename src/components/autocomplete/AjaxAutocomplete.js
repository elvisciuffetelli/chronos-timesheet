import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash.deburr';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import CircularProgress from '@material-ui/core/CircularProgress';
import parse from 'autosuggest-highlight/parse';
import API from '../../backendApi/api/Api';
import debounce from '../../utils/debounce';

function renderInputComponent(inputProps) {
  const {
    classes, inputRef = () => {}, ref, ...other
  } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          (part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          ))
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(suggestions = () => new Promise([]), value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  return new Promise(resolve => {
    let count = 0;

    return inputLength === 0
      ? resolve([])
      : suggestions().then(resp =>
        resolve(
          resp.filter(suggestion => {
            const keep = count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

            if (keep) {
              count += 1;
            }

            return keep;
          })
        )
      );
  });
}

const getSuggestionValue = (handleValue = () => {}) => suggestion => {
  handleValue(suggestion);
  return suggestion.label;
};

const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class AjaxAutocomplete extends React.Component {
  state = {
    single: '',
    isLoading: false,
    suggestions: []
  };

  handleSuggestionsFetchRequested = debounce(({ value }) => {
    const { apiService } = this.props;
    this.setState({ suggestions: [], isLoading: true });

    getSuggestions(() => apiService(value), value).then(resp => {
      this.setState({
        suggestions: resp,
        isLoading: false
      });
    });
  }, 1000);

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  render() {
    const { classes, onSelectedValue, placeholder } = this.props;
    const { suggestions, isLoading, single } = this.state;
    const autosuggestProps = {
      renderInputComponent,
      suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: getSuggestionValue(onSelectedValue),
      renderSuggestion
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder,
            value: single,
            onChange: this.handleChange('single')
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {!isLoading ? (
                options.children
              ) : (
                <CircularProgress size={24} className={classes.progress} />
              )}
            </Paper>
          )}
        />
      </div>
    );
  }
}

AjaxAutocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  apiService: PropTypes.func.isRequired,
  onSelectedValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default withStyles(styles)(AjaxAutocomplete);
