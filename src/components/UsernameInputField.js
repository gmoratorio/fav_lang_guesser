import {TextField} from '@mui/material';

import {useLocaleContextActions} from '../context/LocaleContext';

export default function UsernameInputField({
    defaultUsername,
    onChangeCallback
}) {
    const {translate} = useLocaleContextActions();

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
