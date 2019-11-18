import React from 'react';
import { Badge } from 'react-bootstrap';
import * as config from '../../config';

const LanguageBadge = (props) => {
    var labelObj = config.searchOptions.filter(x => x.label.toLowerCase() === props.language.toLowerCase())[0];
    
    if(labelObj){
        return <Badge variant={labelObj.labelColor}>{labelObj.label}</Badge>
    }else{
        return <Badge variant="dark">Desconhecida</Badge>
    }
}

export default LanguageBadge;
