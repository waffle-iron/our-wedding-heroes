import React from 'react';
import LocalFlavourStore from '../../stores/LocalFlavourStore';
import LocalFlavourActions from '../../actions/LocalFlavourActions';
import MarkdownEditorPage from '../common/MarkdownEditorPage';
import { LOCAL_FLAVOUR as key } from '../../constants/keys.constants';

function AboutOurDayPage() {
    return (
        <MarkdownEditorPage propKey={key} title="Local Flavour" store={LocalFlavourStore} actions={LocalFlavourActions} />
    );
}

export default AboutOurDayPage;
