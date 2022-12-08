import {FormControl, RadioGroup, FormControlLabel, Radio} from '@mui/material';

import {availableLanguages} from '../locales';

export default function OptionsHeader({radioValue, onRadioChange}) {
    const renderAvailableLanguageOptions = () => {
        return availableLanguages.map((language) => {
            return (
                <FormControlLabel
                    key={language.name}
                    value={language.name}
                    control={<Radio />}
                    label={language.displayName}
                />
            );
        });
    };

    return (
        <div className="topOptionsContainer">
            <FormControl>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={radioValue}
                    onChange={onRadioChange}
                >
                    {renderAvailableLanguageOptions()}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
