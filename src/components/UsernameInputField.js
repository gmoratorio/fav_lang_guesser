import {TextField} from '@mui/material';

import {translate} from '../helpers/localeHelper';
import {DEFAULT_USERNAME} from '../constants';

export default function UsernameInputField({
    defaultUsername,
    onChangeCallback
}) {
    return (
        <div>
            <TextField
                onChange={onChangeCallback}
                variant="outlined"
                defaultValue={defaultUsername}
                helperText={translate('input.label')}
            ></TextField>
        </div>
    );
}
